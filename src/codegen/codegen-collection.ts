import path from "node:path";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { Cache } from "src/cache.ts";
import { env } from "src/config.ts";
import { emitCollection } from "./emit.ts";
import {
  buildCollectionsView,
  getArtifact,
  getCoreArtifact,
  getLatestVersion,
  runJob,
} from "./lib.ts";

const GENERATED = path.join(process.cwd(), "generated", "modules");
const outDir = (collection: string) =>
  path.join(GENERATED, ...collection.split("."));

const collection = process.argv[2] ?? "community.general";

async function main() {
  // Installed core is the shared pin; the collection is downloaded and exposed
  // through an ephemeral view so the python loader can discover it.
  const core = await getCoreArtifact();
  const version = env("COLLECTION_VERSION") ?? (await getLatestVersion(collection));
  const artifact = await getArtifact(collection, version);

  const cache = new Cache();
  const view = await buildCollectionsView(cache, artifact);
  try {
    const result = await runJob({
      collection,
      artifacts: [core, artifact],
      collectionsPath: view,
    });

    const dir = outDir(collection);
    await mkdir(dir, { recursive: true });
    const files = emitCollection(result);
    await Promise.all(
      [...files].map(([name, src]) => writeFile(path.join(dir, name), src)),
    );
  } finally {
    await rm(view, { recursive: true, force: true });
  }
}

main();
