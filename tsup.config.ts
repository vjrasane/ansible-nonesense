import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "builtin/index": "generated/modules/ansible/builtin/index.ts",
    "posix/index": "generated/modules/ansible/posix/index.ts",
    "community-general/index": "generated/modules/community/general/index.ts",
    "community-docker/index": "generated/modules/community/docker/index.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  outDir: "dist",
  external: ["@sensible-ts/core"],
});
