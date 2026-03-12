import { describe, expect, it, beforeEach } from "vitest";
import {
  apt,
  copy,
  debug,
  file,
  service,
  stat,
} from "../../../generated/builtin/index.ts";
import { DryRunBackend } from "./backends/dryrun.ts";
import { run, configure, compose } from "./run.ts";

describe("module", () => {
  let backend: DryRunBackend;
  beforeEach(() => {
    backend = new DryRunBackend();
    configure({ callbacks: [], backend });
  });

  describe("standalone execution", () => {
    it("works without run() using global config", async () => {
      const backend = new DryRunBackend([
        { localhost: { changed: true, failed: false, dest: "/tmp/foo" } },
      ]);
      configure({ callbacks: [], backend });

      const result = await copy({ dest: "/tmp/foo", src: "./foo" });
      expect(result.localhost.changed).toBe(true);
      expect(result.localhost.dest).toBe("/tmp/foo");
      expect(backend.executed[0].module).toBe("ansible.builtin.copy");
      expect(backend.executed[0].hosts).toBe("localhost");
    });

    it("per-task options override non-host defaults", async () => {
      await debug({ msg: "hello" }, { become: true });

      expect(backend.executed[0].become).toBe(true);
    });
  });

  describe("run() context", () => {
    it("sets shared options for all tasks", async () => {
      await run(
        { hosts: "webservers", inventory: "hosts.yml", become: true },
        async () => {
          await debug({ msg: "hello" });
          await copy({ dest: "/tmp/foo" });
        },
      );

      for (const task of backend.executed) {
        expect(task.hosts).toBe("webservers");
        expect(task.inventory).toBe("hosts.yml");
        expect(task.become).toBe(true);
      }
    });

    it("per-task options override run() context", async () => {
      await run(
        { hosts: "webservers", inventory: "hosts.yml", become: false },
        async () => {
          await copy({ dest: "/tmp/foo" }, { become: true });
        },
      );

      expect(backend.executed[0].become).toBe(true);
    });

    it("nested run() overrides parent hosts", async () => {
      await run({ hosts: "webservers", inventory: "hosts.yml" }, async () => {
        await run({ hosts: "dbservers" }, async () => {
          await copy({ dest: "/tmp/foo" });
        });
      });

      expect(backend.executed[0].hosts).toBe("dbservers");
    });

    it("returns host map in result", async () => {
      const backend = new DryRunBackend([
        {
          web01: { changed: false, failed: true },
          web02: { changed: false, failed: false },
        },
      ]);

      const { hosts } = await run(
        {
          hosts: [{ name: "web01" }, { name: "web02" }],
          backend,
          callbacks: [],
        },
        async (ctx) => {
          ctx.excludeFailed(await copy({ dest: "/tmp/foo" }, { continueOnError: true }));
        },
      );

      expect(hosts.web01.failed).toBe(true);
      expect(hosts.web02.failed).toBe(false);
    });
  });

  describe("excludeFaileding", () => {
    it("excludeFaileded hosts are excluded from subsequent tasks", async () => {
      const backend = new DryRunBackend([
        {
          web01: { changed: false, failed: true },
          web02: { changed: false, failed: false },
        },
        {
          web02: { changed: true, failed: false },
        },
      ]);

      await run(
        {
          hosts: [{ name: "web01" }, { name: "web02" }],
          backend,
          callbacks: [],
        },
        async (ctx) => {
          ctx.excludeFailed(
            await copy({ dest: "/tmp/foo" }, { continueOnError: true }),
          );
          await copy({ dest: "/tmp/bar" });
        },
      );

      expect(backend.executed).toHaveLength(2);
      expect(backend.executed[1].inventory).toBe("web02,");
    });

    it("excludeFailed is inherited by nested run()", async () => {
      const backend = new DryRunBackend([
        {
          web01: { changed: false, failed: true },
          web02: { changed: false, failed: false },
        },
        {
          web02: { changed: false, failed: false },
        },
      ]);

      await run(
        {
          hosts: [{ name: "web01" }, { name: "web02" }],
          backend,
          callbacks: [],
        },
        async (ctx) => {
          ctx.excludeFailed(
            await copy({ dest: "/tmp/foo" }, { continueOnError: true }),
          );
          await run({}, async () => {
            await debug({ msg: "only web02" });
          });
        },
      );

      expect(backend.executed).toHaveLength(2);
      expect(backend.executed[1].inventory).toBe("web02,");
    });

    it("returns empty result when all hosts are excludeFaileded", async () => {
      const backend = new DryRunBackend([
        {
          web01: { changed: false, failed: true },
        },
      ]);

      await run(
        {
          hosts: [{ name: "web01" }],
          backend,
          callbacks: [],
        },
        async (ctx) => {
          ctx.excludeFailed(
            await copy({ dest: "/tmp/foo" }, { continueOnError: true }),
          );
          const second = await copy({ dest: "/tmp/bar" });
          expect(second).toEqual({});
        },
      );

      expect(backend.executed).toHaveLength(1);
    });

    it("composed function propagates excludeFaileds via run result", async () => {
      const backend = new DryRunBackend([
        {
          web01: { changed: false, failed: true },
          web02: { changed: false, failed: false },
        },
        {
          web02: { changed: true, failed: false },
        },
      ]);

      const installNginx = compose(async (ctx) => {
        ctx.excludeFailed(await copy({ dest: "/tmp/foo" }, { continueOnError: true }));
      });

      await run(
        {
          hosts: [{ name: "web01" }, { name: "web02" }],
          backend,
          callbacks: [],
        },
        async (ctx) => {
          ctx.excludeFailed((await installNginx()).hosts);
          await copy({ dest: "/tmp/bar" });
        },
      );

      expect(backend.executed).toHaveLength(2);
      expect(backend.executed[1].inventory).toBe("web02,");
    });
  });

  describe("typescript control flow", () => {
    it("conditional execution based on task result", async () => {
      const backend = new DryRunBackend([
        { localhost: { changed: true, failed: false } },
        { localhost: { changed: false, failed: false } },
      ]);

      await run(
        { hosts: "all", inventory: "hosts.yml", backend },
        async () => {
          const result = await copy({ dest: "/tmp/foo", content: "new" });
          if (result.localhost.changed) {
            await service({ name: "myapp", state: "restarted" });
          }
        },
      );

      expect(backend.executed).toHaveLength(2);
      expect(backend.executed[1].module).toBe("ansible.builtin.service");
    });

    it("skips conditional task when not changed", async () => {
      const backend = new DryRunBackend([
        { localhost: { changed: false, failed: false } },
      ]);

      await run(
        { hosts: "all", inventory: "hosts.yml", backend },
        async () => {
          const result = await copy({ dest: "/tmp/foo", content: "same" });
          if (result.localhost.changed) {
            await service({ name: "myapp", state: "restarted" });
          }
        },
      );

      expect(backend.executed).toHaveLength(1);
    });

    it("loops in pure typescript", async () => {
      const backend = new DryRunBackend();

      await run(
        { hosts: "all", inventory: "hosts.yml", backend, callbacks: [] },
        async () => {
          for (const pkg of ["nginx", "curl", "git"]) {
            await apt({ name: pkg, state: "present" });
          }
        },
      );

      expect(backend.executed).toHaveLength(3);
      expect(backend.executed.map((t) => t.args.name)).toEqual([
        "nginx",
        "curl",
        "git",
      ]);
    });

    it("stat check before conditional write", async () => {
      const backend = new DryRunBackend([
        {
          localhost: { changed: false, failed: false, stat: { exists: false } },
        },
        { localhost: { changed: true, failed: false } },
      ]);

      await run(
        { hosts: "all", inventory: "hosts.yml", backend },
        async () => {
          const check = await stat({ path: "/etc/app.conf" });
          if (!check.localhost.stat?.exists) {
            await copy({ dest: "/etc/app.conf", content: "defaults" });
          }
        },
      );

      expect(backend.executed).toHaveLength(2);
      expect(backend.executed[1].module).toBe("ansible.builtin.copy");
    });

    it("multiple modules in sequence", async () => {
      await run(
        { hosts: "webservers", inventory: "hosts.yml", become: true },
        async () => {
          await file({ path: "/opt/app", state: "directory", owner: "deploy" });
          await copy({ dest: "/opt/app/config.yml", content: "port: 8080" });
          await service({ name: "myapp", state: "restarted" });
        },
      );

      expect(backend.executed).toHaveLength(3);
      expect(backend.executed[0].module).toBe("ansible.builtin.file");
      expect(backend.executed[1].module).toBe("ansible.builtin.copy");
      expect(backend.executed[2].module).toBe("ansible.builtin.service");
    });

    it("multi-host results are keyed by hostname", async () => {
      const backend = new DryRunBackend([
        {
          web01: { changed: true, failed: false, dest: "/tmp/foo" },
          web02: { changed: false, failed: false, dest: "/tmp/foo" },
        },
      ]);
      configure({ callbacks: [], backend });

      const result = await copy({ dest: "/tmp/foo" });
      expect(result.web01.changed).toBe(true);
      expect(result.web02.changed).toBe(false);
      expect(Object.keys(result)).toEqual(["web01", "web02"]);
    });
  });
});
