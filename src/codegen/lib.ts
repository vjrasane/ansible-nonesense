import { Artifact, Cache } from "src/core/cache.ts";
import { execFile, spawn } from "node:child_process";
import { mkdir, mkdtemp, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { promisify } from "node:util";
import { env, toolName } from "src/core/config.ts";
import path from "node:path";
import type { CodegenResult } from "./emit.ts";

const exec = promisify(execFile);

const python = env("PYTHON") ?? "python3";
const processModule = path.join(import.meta.dirname, "process_module.py");

async function getInstalledCoreVersion(): Promise<string> {
  const { stdout } = await exec(python, [
    "-c",
    "import ansible.release; print(ansible.release.__version__)",
  ]);
  return stdout.trim(); // "2.17.4"
}

export async function getCoreArtifact(): Promise<Artifact> {
  const version = await getInstalledCoreVersion();
  const id = "ansible-core@" + version;
  const url = `https://pypi.org/pypi/ansible-core/${version}/json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${id} not found (${res.status}) at ${url}`);
  const j = await res.json();
  const sdist = j.urls.find((u: any) => u.packagetype === "sdist");
  if (!sdist) throw new Error(`${id} no sdist package type found`);
  return {
    id,
    url: sdist.url,
    sha256: sdist.digests.sha256,
    format: "tar.gz",
    root: `${sdist.filename.replace(/\.tar\.gz$/, "")}/lib`, // ansible_core-2.17.14/lib
  };
}

const GALAXY =
  "https://galaxy.ansible.com/api/v3/plugin/ansible/content/published/collections/index";

export async function getLatestVersion(name: string): Promise<string> {
  const [ns, coll] = name.split(".");
  const url = `${GALAXY}/${ns}/${coll}/`;
  const res = await fetch(url);
  if (!res.ok)
    throw new Error(
      `${name} latest version not found (${res.status}) at ${url}`,
    );
  const j = await res.json();
  const version = j.highest_version?.version;
  if (!version) throw new Error(`${name} latest version not in response`);
  return version;
}

export async function getArtifact(
  name: string,
  version: string,
): Promise<Artifact> {
  const id = `${name}@${version}`;
  if (name === "ansible.builtin" || name === "ansible.legacy")
    throw new Error(
      `${name} ships in ansible-core - use ansible-core@<version>`,
    );

  const [ns, coll] = name.split(".");
  const url = `${GALAXY}/${ns}/${coll}/versions/${version}/`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${id} not found (${res.status}) at ${url}`);
  const j = await res.json();
  return {
    id,
    url: j.download_url,
    sha256: j.artifact.sha256,
    format: "tar.gz",
    root: "", // Galaxy tarballs are flat
  };
}

/**
 * ANSIBLE_COLLECTIONS_PATH wants `<root>/ansible_collections/<ns>/<name>`; the
 * cache stores collections flat, so expose an ephemeral symlink view for the
 * run and return its root (also the dir `classify` byte-routes against). The
 * caller removes it once codegen finishes.
 */
export async function buildCollectionsView(
  cache: Cache,
  a: Artifact,
): Promise<string> {
  const flat = await cache.ensureArtifact(a);
  const [ns, coll] = a.id.split("@")[0].split(".");
  const root = await mkdtemp(path.join(tmpdir(), `${toolName}-view-`));
  const link = path.join(root, "ansible_collections", ns, coll);
  await mkdir(path.dirname(link), { recursive: true });
  await symlink(flat, link, "dir");
  return root;
}

export interface Job {
  collection: string;
  artifacts: Artifact[]; // pinned set; also the classification universe
  collectionsPath?: string; // ANSIBLE_COLLECTIONS_PATH root; also the collection source for byte-compare
}

export async function runJob(job: Job): Promise<CodegenResult> {
  const childEnv: NodeJS.ProcessEnv = { ...process.env };
  if (job.collectionsPath)
    childEnv.ANSIBLE_COLLECTIONS_PATH = job.collectionsPath;

  const chunks: Buffer[] = [];
  await new Promise<void>((res, rej) => {
    const child = spawn(python, [processModule, JSON.stringify(job)], {
      stdio: ["ignore", "pipe", "inherit"],
      env: childEnv,
    });

    child.stdout.on("data", (chunk: Buffer) => chunks.push(chunk));
    child.on("error", rej);
    child.on("close", (code) =>
      code === 0
        ? res()
        : rej(
            new Error(`process_module.py exited ${code} for ${job.collection}`),
          ),
    );
  });

  return JSON.parse(Buffer.concat(chunks).toString("utf-8")) as CodegenResult;
}
