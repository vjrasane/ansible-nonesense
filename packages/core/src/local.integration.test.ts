import { describe, it, expect } from "vitest";
import { LocalBackend } from "./backends/local.ts";
import { debug, copy, stat } from "../../../generated/builtin/index.ts";

describe("LocalBackend integration", { timeout: 30_000 }, () => {
  const backend = new LocalBackend();
  const opts = { backend, hosts: "localhost", inventory: "localhost," };

  it("runs debug module", async () => {
    const result = await debug({ msg: "hello from nonesible" }, opts);
    expect(result.localhost.failed).toBe(false);
    expect(result.localhost.msg).toBe("hello from nonesible");
  });

  it("copies content to a file", async () => {
    const dest = `/tmp/nonesible-test-${Date.now()}`;
    const result = await copy({ dest, content: "test content" }, opts);
    expect(result.localhost.changed).toBe(true);
    expect(result.localhost.dest).toBe(dest);
  });

  it("stat checks a file", async () => {
    const result = await stat({ path: "/tmp" }, opts);
    expect(result.localhost.failed).toBe(false);
    expect(result.localhost.stat).toBeDefined();
    expect(result.localhost.stat?.exists).toBe(true);
  });

  it("conditional write based on stat", async () => {
    const dest = `/tmp/nonesible-conditional-${Date.now()}`;

    const check = await stat({ path: dest }, opts);
    expect(check.localhost.stat?.exists).toBe(false);

    const write = await copy({ dest, content: "created" }, opts);
    expect(write.localhost.changed).toBe(true);

    const recheck = await stat({ path: dest }, opts);
    expect(recheck.localhost.stat?.exists).toBe(true);
  });
});
