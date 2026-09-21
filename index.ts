import { host } from "src/host.ts";
import { package_ } from "./generated/modules/ansible/builtin/index.ts";

const rpi = host("rpi5-01", {
  host: "rpi5-01",
});

rpi.run(async () => {
  const res = await package_({
    name: "curl",
    state: "present",
  });
  console.log(res.changed);
});
