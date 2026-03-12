import path from "node:path";
import { ping, debug } from "./generated/builtin/index.ts";
import {
  getInventorySync,
  getInventoryHosts,
} from "./packages/core/src/index.ts";

const inventory = getInventorySync(
  path.join(import.meta.dirname, "inventory.yml"),
);
const hosts = getInventoryHosts(inventory);

const play = async (msg: string, hostname: string) => {
  await ping`Ping ${hostname}`({});

  const res = await debug`Send message to ${hostname}`({ msg });
  console.log(JSON.stringify(res, null, 2));
};

const main = async () => {
  await Promise.all(
    hosts.map((h) => h.run(() => play("Hello " + h.name, h.name))),
  );
};

main();
