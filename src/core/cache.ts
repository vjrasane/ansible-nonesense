import { createHash, randomBytes } from "node:crypto";
import { createWriteStream, existsSync } from "node:fs";
import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { zipSync } from "fflate";
import * as tar from "tar";
import { cacheDir, toolName } from "src/core/config.ts";
import { FatalError } from "src/core/errors.ts";
import {
  toSpanError,
  type SpanEvent,
  type SpanKind,
  defaultEventHandler,
} from "src/core/events.ts";
import { withRetry } from "src/utils.ts";

export interface Artifact {
  id: string; // "ansible-core@2.17.14" | "community.general@9.4.0"
  url: string;
  sha256: string;
  format: "tar.gz" | "zip";
  root: string; // path prefix inside the archive to strip; "" for flat tarballs
}

/** ansible-core is the sole non-collection artifact; everything else is a Galaxy collection. */
const isCore = (a: Artifact) => splitId(a.id)[0] === "ansible-core";

export interface ArtifactFiles {
  artifact: Artifact;
  files: string[]; // closure paths relative to the artifact's root
}

export interface ScaffoldFile {
  path: string; // canonical zip path
  content: string; // AnsiBallZ-rewritten package-root stub
}

export interface PayloadSpec {
  fqcn: string;
  moduleFqn: string; // dotted runpy target, e.g. "ansible_collections.community.general.plugins.modules.apk"
  sources: ArtifactFiles[]; // GPL closure fetched from the cache; the module file is among these
  scaffold: ScaffoldFile[]; // AnsiBallZ-rewritten stubs, written verbatim
  markers: string[]; // empty __init__.py package markers
}

export class ArtifactError extends FatalError {}

interface CacheOpts {
  mirror?: string;
  offline?: boolean;
}

export class Cache {
  private readonly artifacts: Map<string, Promise<string>> = new Map();

  constructor(
    private readonly root = cacheDir,
    private readonly opts: CacheOpts = {},
    private _handler?: (event: SpanEvent) => void,
  ) {}

  private get handler(): (event: SpanEvent) => void {
    return this._handler ?? defaultEventHandler;
  }

  /** Bracket a cache operation with session-level start/end spans (no host, no parent). */
  private async span<T>(
    kind: SpanKind,
    name: string,
    fn: () => Promise<readonly [T, { bytes?: number }]>,
  ): Promise<T> {
    const start = Date.now();
    this.handler({ kind, name, host: "", phase: "start", at: start });
    try {
      const [value, extra] = await fn();
      this.handler({
        kind,
        name,
        host: "",
        phase: "end",
        at: Date.now(),
        status: "ok",
        ms: Date.now() - start,
        ...extra,
      });
      return value;
    } catch (e) {
      this.handler({
        kind,
        name,
        host: "",
        phase: "end",
        at: Date.now(),
        status: "failed",
        ms: Date.now() - start,
        error: toSpanError(e),
      });
      throw e;
    }
  }

  get payloadsDir(): string {
    return path.join(this.root, "payloads");
  }

  private get downloadsDir(): string {
    return path.join(this.root, "downloads");
  }

  get artifactsDir(): string {
    return path.join(this.root, "artifacts");
  }

  private getPayloadZipfilePath(spec: PayloadSpec): string {
    return path.join(
      this.payloadsDir,
      artifactSetHash(spec.sources.map((s) => s.artifact)),
      `${spec.fqcn}.zip`,
    );
  }

  /** `<root>/artifacts/<name>/<version>-<sha256[:12]>` — keyed by name, not kind. */
  getArtifactDir(a: Artifact): string {
    const [name, version] = splitId(a.id);
    return path.join(
      this.artifactsDir,
      name,
      `${version}-${a.sha256.slice(0, 12)}`,
    );
  }

  async ensureArtifact(a: Artifact): Promise<string> {
    let artifact = this.artifacts.get(a.id);
    if (artifact) return artifact;
    artifact = this.fetchArtifact(a);
    this.artifacts.set(a.id, artifact);
    return artifact;
  }

  private async fetchArtifact(a: Artifact): Promise<string> {
    const dir = this.getArtifactDir(a);
    if (existsSync(dir)) return dir;
    if (this.opts.offline)
      throw new ArtifactError(
        `offline: ${a.id} not in cache. Populate it with \`${toolName} prefetch\`.`,
      );
    await this.fetch(a, dir);
    return dir;
  }

  async readFile(a: Artifact, relPath: string): Promise<Buffer> {
    const dir = await this.ensureArtifact(a);
    return readFile(path.join(dir, relPath));
  }

  /** The payload zip, base64-encoded for the bootstrap. Cached (and stored) already-encoded. */
  async buildPayload(spec: PayloadSpec): Promise<string> {
    const dest = this.getPayloadZipfilePath(spec);
    if (existsSync(dest)) return readFile(dest, "utf8");

    return this.span("payload", spec.fqcn, async () => {
      await Promise.all(
        spec.sources.map((s) => this.ensureArtifact(s.artifact)),
      );

      const entries: Record<string, Uint8Array> = {};
      for (const { artifact, files } of spec.sources)
        for (const file of files)
          entries[canonicalName(artifact, file)] = new Uint8Array(
            await this.readFile(artifact, file),
          );
      for (const { path: p, content } of spec.scaffold)
        entries[p] = utf8(content);
      const empty = new Uint8Array();
      for (const p of spec.markers) entries[p] = empty;
      const zip = zipSync(entries, { level: 6 });
      const b64 = Buffer.from(zip).toString("base64");

      await mkdir(path.dirname(dest), { recursive: true });
      const tmp = `${dest}.tmp.${randomBytes(6).toString("hex")}`;
      await writeFile(tmp, b64);
      await rename(tmp, dest);
      return [b64, { bytes: zip.length }] as const;
    });
  }

  private async fetch(a: Artifact, finalDir: string): Promise<void> {
    await this.span("fetch", a.id, async () => {
      await mkdir(this.downloadsDir, { recursive: true });
      const part = path.join(
        this.downloadsDir,
        `${sanitize(a.id)}.${randomBytes(6).toString("hex")}.part`,
      );

      const url = this.resolveUrl(a);

      let dl: { sha256: string; bytes: number };
      try {
        dl = await withRetry(() => download(url, part), { attempts: 3 });
      } catch (e) {
        await rm(part, { recursive: true, force: true });
        throw new ArtifactError(
          `download from ${url} failed for ${a.id}: ${String(e)}`,
        );
      }

      if (dl.sha256 !== a.sha256) {
        await rm(part, { force: true });
        throw new ArtifactError(
          `sha256 mismatch for ${a.id}\n  expected ${a.sha256}\n  actual   ${dl.sha256}\n  url      ${url}`,
        );
      }

      const tmp = `${finalDir}.tmp.${randomBytes(6).toString("hex")}`;
      await mkdir(tmp, { recursive: true });
      try {
        await extract(part, tmp, a);
        await mkdir(path.dirname(finalDir), { recursive: true });
        await rename(tmp, finalDir);
      } catch (e) {
        await rm(tmp, { recursive: true, force: true });
        if (!existsSync(finalDir)) throw e; // real failure, not a lost race
      } finally {
        await rm(part, { force: true });
      }
      return [undefined, { bytes: dl.bytes }] as const;
    });
  }

  private resolveUrl(a: Artifact): string {
    const { mirror } = this.opts;
    if (!mirror) return a.url;
    const base = mirror.endsWith("/") ? mirror : `${mirror}/`;
    return new URL(new URL(a.url).pathname.replace(/^\//, ""), base).toString();
  }
}

async function download(
  url: string,
  dest: string,
): Promise<{ sha256: string; bytes: number }> {
  const res = await fetch(url);
  if (!res.ok || !res.body)
    throw new ArtifactError(`download failed (${res.status}) for ${url}`);
  const hash = createHash("sha256");
  let bytes = 0;
  await pipeline(
    Readable.fromWeb(res.body as any),
    async function* (source) {
      for await (const chunk of source) {
        hash.update(chunk);
        bytes += chunk.length;
        yield chunk;
      }
    },
    createWriteStream(dest),
  );
  return { sha256: hash.digest("hex"), bytes };
}

async function extract(file: string, cwd: string, a: Artifact): Promise<void> {
  if (a.format !== "tar.gz")
    throw new ArtifactError(`unsupported format "${a.format}" for ${a.id}`);
  const root = a.root.replace(/\/+$/, "");
  await tar.x({
    file,
    cwd,
    strip: root ? root.split("/").length : 0,
    filter: (p, entry) => {
      const type = "type" in entry ? entry.type : undefined;
      if (type === "SymbolicLink" || type === "Link") return false;
      if (!root) return true;
      return p === root || p.startsWith(`${root}/`);
    },
  });
}

const utf8 = (s: string) => new Uint8Array(Buffer.from(s, "utf-8"));

/** Cache path → canonical zip path. Collections gain their `ansible_collections` prefix. */
function canonicalName(a: Artifact, relPath: string): string {
  if (isCore(a)) return relPath; // ansible-core paths are already canonical
  const [ns, name] = splitId(a.id)[0].split(".");
  return `ansible_collections/${ns}/${name}/${relPath}`;
}

function artifactSetHash(artifacts: Artifact[]): string {
  const ids = artifacts.map((a) => a.id).sort();
  return createHash("sha256").update(ids.join("\n")).digest("hex").slice(0, 16);
}

export function splitId(id: string): [name: string, version: string] {
  const at = id.lastIndexOf("@");
  if (at <= 0) throw new ArtifactError(`malformed artifact id: ${id}`);
  return [id.slice(0, at), id.slice(at + 1)];
}

const sanitize = (id: string) => id.replace(/[^a-zA-Z0-9._-]/g, "_");

export let CACHE = new Cache();
export function setCache(cache: Cache) {
  CACHE = cache;
}
