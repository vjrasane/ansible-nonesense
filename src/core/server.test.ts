import { afterAll, beforeAll, expect, test } from "vitest";
import path from "node:path";
import { ServerClient } from "./server.ts";

// Integration test: drives the real GPL server in the devenv venv.
const python = path.resolve(process.cwd(), ".devenv/state/venv/bin/python");
// Until the package is pip-installed into the venv (Plan 6), it resolves only via
// cwd on sys.path — so run the child from server/.
const serverDir = path.resolve(process.cwd(), "server");

let client: ServerClient;

beforeAll(() => {
  client = new ServerClient(python, { cwd: serverDir });
});

afterAll(async () => {
  await client.close();
});

test(
  "runAction ansible.builtin.ping on local → pong",
  async () => {
    const res = await client.runAction({
      host: { connection: { type: "local", vars: {} }, become: {} },
      fqcn: "ansible.builtin.ping",
      args: {},
      vars: { ansible_python_interpreter: python },
    });
    expect(res.status).toBe("ok");
    expect(res.result.ping).toBe("pong");
  },
  30_000,
);

test(
  "runAction command echo → changed + stdout",
  async () => {
    const res = await client.runAction({
      host: { connection: { type: "local", vars: {} }, become: {} },
      fqcn: "ansible.builtin.command",
      args: { _raw_params: "echo hi" },
      vars: { ansible_python_interpreter: python },
    });
    expect(res.status).toBe("ok");
    expect(res.changed).toBe(true);
    expect(res.result.stdout).toBe("hi");
  },
  30_000,
);
