import { afterEach, describe, expect, test } from "vitest";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { access } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { unzipSync } from "fflate";
import { Cache, type Artifact, type PayloadSpec } from "./cache.ts";

const core: Artifact = {
  id: "ansible-core@2.17.14",
  kind: "ansible-core",
  url: "https://example/ansible_core-2.17.14.tar.gz",
  sha256: "abcdef0123456789" + "0".repeat(48),
  format: "tar.gz",
  root: "ansible_core-2.17.14/lib",
};

const collection: Artifact = {
  id: "community.general@9.4.0",
  kind: "collection",
  url: "https://galaxy/community-general-9.4.0.tar.gz",
  sha256: "503f6e25c9ab" + "0".repeat(52),
  format: "tar.gz",
  root: "",
};

describe("Cache.artifactDir", () => {
  const cache = new Cache("/cache");

  test("is content-addressed by name, version, and sha256 prefix", () => {
    expect(cache.artifactDir(core)).toBe(
      path.join("/cache", "artifacts", "ansible-core", "2.17.14-abcdef012345"),
    );
  });

  test("keys a collection by its dotted name, not the kind", () => {
    expect(cache.artifactDir(collection)).toBe(
      path.join("/cache", "artifacts", "community.general", "9.4.0-503f6e25c9ab"),
    );
  });
});

describe("Cache.buildPayload", () => {
  let root: string;

  afterEach(async () => {
    if (root) await rm(root, { recursive: true, force: true });
  });

  // Pre-populate the extracted cache so the build needs no network.
  async function seed(): Promise<Cache> {
    root = await mkdtemp(path.join(tmpdir(), "sensible-"));
    const cache = new Cache(root);
    const coreDir = cache.artifactDir(core);
    await mkdir(path.join(coreDir, "ansible", "module_utils"), { recursive: true });
    await writeFile(path.join(coreDir, "ansible", "module_utils", "basic.py"), "core");
    const cgDir = cache.artifactDir(collection);
    await mkdir(path.join(cgDir, "plugins", "modules"), { recursive: true });
    await mkdir(path.join(cgDir, "plugins", "module_utils"), { recursive: true });
    await writeFile(path.join(cgDir, "plugins", "modules", "apk.py"), "mod");
    await writeFile(path.join(cgDir, "plugins", "module_utils", "version.py"), "util");
    return cache;
  }

  const spec: PayloadSpec = {
    fqcn: "community.general.apk",
    moduleName: "ansible_collections.community.general.plugins.modules.apk",
    artifacts: [core, collection],
    files: [
      { artifact: core.id, path: "ansible/module_utils/basic.py" },
      { artifact: collection.id, path: "plugins/module_utils/version.py" },
      { artifact: collection.id, path: "plugins/modules/apk.py" },
    ],
  };

  test("zips closure files at their canonical FQN paths", async () => {
    const cache = await seed();
    const entries = unzipSync(await cache.buildPayload(spec));
    expect(Object.keys(entries).sort()).toEqual([
      "ansible/module_utils/basic.py",
      "ansible_collections/community/general/plugins/module_utils/version.py",
      "ansible_collections/community/general/plugins/modules/apk.py",
    ]);
    expect(Buffer.from(entries["ansible/module_utils/basic.py"]).toString()).toBe("core");
  });

  test("writes a disk-cached zip and reuses it", async () => {
    const cache = await seed();
    await cache.buildPayload(spec);
    // the second build reads from payloads/ — verify the file is there
    const dirs = await import("node:fs/promises").then((fs) =>
      fs.readdir(cache.payloadsDir()),
    );
    expect(dirs).toHaveLength(1);
    await access(path.join(cache.payloadsDir(), dirs[0], "community.general.apk.zip"));
  });
});
