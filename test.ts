import path from "node:path";
import { ping, debug } from "./generated/builtin/index.ts";
import { configure, compose } from "./packages/core/src/run.ts";

const inventory = path.join(import.meta.dirname, "inventory.yml");

configure({ inventory, hosts: "all" });

const play = compose(async (msg: string) => {
  await ping({});

  const res = await debug({ msg });
  console.log(JSON.stringify(res, null, 2));
});

const main = async () => {
  await play("Hello play!");
};

main();
