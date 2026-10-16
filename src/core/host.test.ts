import { describe, expect, test } from "vitest";
import { AsyncLocalStorage } from "node:async_hooks";
import { Host, execPythonOnHost } from "./host.ts";
import { becomeArgv, becomeStdin } from "./connection.ts";
import type { Connection, ExecOpts, ExecResult } from "./connection.ts";

const INTERP = "command -v python3 || command -v python";

const fakeConn = (stdout: string): Connection => ({
  exec: async (): Promise<ExecResult> => ({
    stdout: Buffer.from(stdout),
    stderr: Buffer.from(""),
    rc: 0,
  }),
  putFile: async () => {},
  getFile: async () => {},
  removeFile: async () => {},
  makeTmpDir: async () => "/tmp/x",
  close: async () => {},
});

describe("currentHost()", () => {
  // A duplicate core instance (dynamically-imported chunk resolved to a separate
  // module URL) re-runs the same `Symbol.for` anchor and must see run()'s store,
  // or currentContext() falls back to localhost and modules run on the wrong host.
  test("run() store is visible through the globally-anchored storage", async () => {
    const h = new Host("h", fakeConn(""));
    const seen = await h.run(async () => {
      const dup = (globalThis as any)[
        Symbol.for("@sensible-ts/core#execStorage")
      ] as AsyncLocalStorage<{ host: { name: string } }>;
      return dup.getStore()?.host.name;
    });
    expect(seen).toBe("h");
  });
});

describe("become escalation", () => {
  test("become: true → passwordless sudo (root by default)", () => {
    expect(becomeArgv(["py"], { become: true })).toEqual([
      "sudo",
      "-H",
      "-n",
      "py",
    ]);
  });

  test("passthrough without become", () => {
    expect(becomeArgv(["py"], {})).toEqual(["py"]);
    expect(becomeStdin({ stdin: Buffer.from("x") })?.toString()).toBe("x");
  });

  test("sudo to a specific user", () => {
    expect(becomeArgv(["py"], { become: { user: "deploy" } })).toEqual([
      "sudo",
      "-H",
      "-n",
      "-u",
      "deploy",
      "py",
    ]);
  });

  test("sudo with password uses -S and prepends it to stdin", () => {
    const opts: ExecOpts = {
      become: { password: "pw" },
      stdin: Buffer.from("payload"),
    };
    expect(becomeArgv(["py"], opts)).toEqual([
      "sudo",
      "-H",
      "-S",
      "-k",
      "-p",
      "",
      "py",
    ]);
    expect(becomeStdin(opts)?.toString()).toBe("pw\npayload");
  });

  test("su mode wraps in su -c for the user", () => {
    const argv = becomeArgv(["py", "-c", "print(1)"], {
      become: { mode: "su", user: "deploy" },
    });
    expect(argv.slice(0, 3)).toEqual(["su", "deploy", "-c"]);
    expect(argv[3]).toContain("print(1)");
  });

  test("execPythonOnHost forwards become to connection.exec", async () => {
    let seen: ExecOpts | undefined;
    const conn: Connection = {
      exec: async (argv, opts): Promise<ExecResult> => {
        if (argv.includes(INTERP))
          return {
            stdout: Buffer.from("/usr/bin/python3"),
            stderr: Buffer.from(""),
            rc: 0,
          };
        seen = opts;
        return { stdout: Buffer.from("{}"), stderr: Buffer.from(""), rc: 0 };
      },
      putFile: async () => {},
      getFile: async () => {},
      removeFile: async () => {},
      makeTmpDir: async () => "/tmp/x",
      close: async () => {},
    };
    await execPythonOnHost(new Host("h", conn), "print(1)", { become: true });
    expect(seen?.become).toBe(true);
  });
});
