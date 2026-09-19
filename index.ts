import { ping } from "./generated/modules/ansible-builtin/index.ts";

const main = async () => {
  const res = await ping();
  console.log(res.ping);
};

main();
