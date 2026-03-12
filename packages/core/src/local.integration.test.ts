import { describe, it, expect } from "vitest";
import { LocalBackend } from "./backends/local.ts";
import { debug, copy, stat } from "../../../generated/builtin/index.ts";
import { run } from "./run.ts";

describe("LocalBackend integration", { timeout: 30_000 }, () => {
  const backend = new LocalBackend();

  const withBackend = <T>(fn: () => Promise<T>) =>
    backend.execute(() => run({ callbacks: [] }, fn));

  it("runs debug module", async () => {
    await withBackend(async () => {
      const result = await debug({ msg: "hello from nonesible" });
      expect(result.failed).toBe(false);
      expect(result.msg).toBe("hello from nonesible");
    });
  });

  it("copies content to a file", async () => {
    await withBackend(async () => {
      const dest = `/tmp/nonesible-test-${Date.now()}`;
      const result = await copy({ dest, content: "test content" });
      expect(result.changed).toBe(true);
      expect(result.dest).toBe(dest);
    });
  });

  it("stat checks a file", async () => {
    await withBackend(async () => {
      const result = await stat({ path: "/tmp" });
      expect(result.failed).toBe(false);
      expect(result.stat).toBeDefined();
      expect(result.stat?.exists).toBe(true);
    });
  });

  it("conditional write based on stat", async () => {
    await withBackend(async () => {
      const dest = `/tmp/nonesible-conditional-${Date.now()}`;

      const check = await stat({ path: dest });
      expect(check.stat?.exists).toBe(false);

      const write = await copy({ dest, content: "created" });
      expect(write.changed).toBe(true);

      const recheck = await stat({ path: dest });
      expect(recheck.stat?.exists).toBe(true);
    });
  });
});
