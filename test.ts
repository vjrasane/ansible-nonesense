import path from "node:path";
import { ping, debug } from "./generated/builtin/index.ts";

const inventory = path.join(import.meta.dirname, "inventory.yml");

const main = async () => {
  await ping({});

  const res = await debug({ msg: "Hello!" }, { inventory, hosts: "all" });
  console.log(JSON.stringify(res, null, 2));
};

main();
