import { Host } from "src/host.ts";
import { ping } from "./generated/modules/ansible-builtin/index.ts";
import { SSHConnection } from "src/connection.ts";

const host = new Host(
  "rpi5-01",
  new SSHConnection({
    host: "rpi5-01",
  }),
);

host.run(async () => {
  const res = await ping();
  console.log(res.ping);
});
