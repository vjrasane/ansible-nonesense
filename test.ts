import path from "node:path";
import { ping, debug } from "./generated/builtin/index.ts";
import {
  getInventorySync,
  getInventoryHosts,
  define,
  context,
} from "./packages/core/src/index.ts";
import { run } from "./packages/core/src/run.ts";

const inventory = getInventorySync(
  path.join(import.meta.dirname, "inventory.yml"),
);
const hosts = getInventoryHosts(inventory);

const play = define`Play`(async (msg: string) => {
  await ping`Ping ${context.host.name}`({});

  const res = await debug`Send message to ${context.host.name}`({ msg });
  return res.msg;
});

const procedure = async () => {
  const msg = await run`Subcontext`(async () => {
    const msg = await play("Hello " + context.host.name);
    return msg;
  });
  context.log(`Got message: ${msg}`);
  await debug`Send message`({ msg: "Hello again!" });
  context.log(`Finished running on ${context.host.name}`);
};

const main = () =>
  hosts.map((h) => h.run(define`Running on ${h.name}`(procedure)));

main();
