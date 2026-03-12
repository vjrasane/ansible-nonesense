import path from "node:path";
import { ping, debug } from "./generated/builtin/index.ts";
import { configure } from "./packages/core/src/run.ts";

const inventory = path.join(import.meta.dirname, "inventory.yml");

configure({ inventory, hosts: "all" });

const main = async () => {
  await ping({});

  const res = await debug({ msg: "Hello!" });
  console.log(JSON.stringify(res, null, 2));
};

main();
