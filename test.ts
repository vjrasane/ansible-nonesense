import path from "node:path";
import { ping, debug } from "./generated/builtin/index.ts";
import {
  getInventorySync,
  getInventoryHosts,
  define,
} from "./packages/core/src/index.ts";
import { context } from "./packages/core/src/run.ts";

const inventory = getInventorySync(
  path.join(import.meta.dirname, "inventory.yml"),
);
const hosts = getInventoryHosts(inventory);

const play = define`Play`(async (msg: string) => {
  await ping`Ping ${context.host.name}`({});

  const res = await debug`Send message to ${context.host.name}`({ msg });
  return res.msg;
});

const main = async () => {
  await Promise.all(
    hosts.map((h) =>
      h.run(
        define`Running on ${h.name}`(async () => {
          const msg = await play("Hello " + h.name);
          context.log(`Got message: ${msg}`);
          await debug`Send message`({ msg: "Hello again!" });
          context.log(`Finished running on ${h.name}`);
        }),
      ),
    ),
  );
};

main();
