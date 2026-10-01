import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
import { emitCollection } from "./emit.ts";
import { getCoreArtifact, runJob } from "./lib.ts";

const GENERATED = path.join(process.cwd(), "generated", "modules");
const outDir = (collection: string) =>
  path.join(GENERATED, ...collection.split("."));

async function main() {
  // Installed core is the pin and the introspection basis; ansible.builtin
  // closures are core-only, so no collection download or view is needed.
  const core = await getCoreArtifact();
  const result = await runJob({
    collection: "ansible.builtin",
    artifacts: [core],
  });

  const dir = outDir("ansible.builtin");
  await mkdir(dir, { recursive: true });
  const files = emitCollection(result);
  await Promise.all(
    [...files].map(([name, src]) => writeFile(path.join(dir, name), src)),
  );
}

main();
