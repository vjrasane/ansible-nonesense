// THROWAWAY PoC demo (design.md §5): the AnsiballzBackend wired into the DSL.
// Run: bun scripts/poc-run.ts
//
// Hosts are plain TS values — no inventory. The generic path (ping) works
// end-to-end; `copy` and the action layer hook into the backend next.

import { host, context } from "../src/index.js";
import { AnsiballzBackend, type SshHost } from "../src/backends/ansiballz.js";
import { ping } from "../../../generated/builtin/ping.ts";

const rpiHost: SshHost = {
  name: "rpi5-01",
  ssh: { host: "rpi5-01", user: "vjrasane" },
};
const rpi = host(rpiHost);

const backend = new AnsiballzBackend();

await backend.execute(() =>
  rpi.run(async () => {
    const res = await ping`Ping ${context.host.name}`({ data: "pong-dsl" });
    context.log(`ping -> ${JSON.stringify(res)}`);
  }),
);
