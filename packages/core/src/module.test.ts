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
import { configure, host } from "./run.ts";

describe("module", () => {
  let backend: DryRunBackend;
  beforeEach(() => {
    backend = new DryRunBackend();
    configure({ callbacks: [], backend });
  });

  describe("standalone execution", () => {
    it("works without host().run() using global config", async () => {
      const backend = new DryRunBackend([
        { localhost: { changed: true, failed: false, dest: "/tmp/foo" } },
      ]);
      configure({ callbacks: [], backend });

      const result = await copy({ dest: "/tmp/foo", src: "./foo" });
      expect(result.changed).toBe(true);
      expect(result.dest).toBe("/tmp/foo");
      expect(backend.executed[0].module).toBe("ansible.builtin.copy");
      expect(backend.executed[0].inventory).toBe("localhost,");
    });

    it("per-task host override", async () => {
      await debug({ msg: "hello" }, { host: { name: "web01" } });

      expect(backend.executed[0].inventory).toBe("web01,");
    });

    it("per-task options override defaults", async () => {
      await debug({ msg: "hello" }, { become: true });

      expect(backend.executed[0].become).toBe(true);
    });
  });

  describe("host().run() context", () => {
    it("sets shared options for all tasks", async () => {
      const web01 = host({ name: "web01" }, { become: true });

      await web01.run(async () => {
        await debug({ msg: "hello" });
        await copy({ dest: "/tmp/foo" });
      });

      for (const task of backend.executed) {
        expect(task.inventory).toBe("web01,");
        expect(task.become).toBe(true);
      }
    });

    it("per-task options override host context", async () => {
      const web01 = host({ name: "web01" }, { become: false });

      await web01.run(async () => {
        await copy({ dest: "/tmp/foo" }, { become: true });
      });

      expect(backend.executed[0].become).toBe(true);
    });

    it("host with vars generates inventory file", async () => {
      const web01 = host({ name: "web01", vars: { ansible_port: 2222 } });

      await web01.run(async () => {
        await debug({ msg: "hello" });
      });

      const inventory = backend.executed[0].inventory!;
      expect(inventory).not.toBe("web01,");
      expect(inventory).toContain("nonesible-");
    });

    it("fan-out with host().run()", async () => {
      const hosts = [{ name: "web01" }, { name: "web02" }].map((h) => host(h));

      await Promise.all(hosts.map((h) =>
        h.run(async () => {
          await copy({ dest: "/tmp/foo" });
        }),
      ));

      expect(backend.executed).toHaveLength(2);
      expect(backend.executed.map((t) => t.inventory).sort()).toEqual([
        "web01,",
        "web02,",
      ]);
    });

    it("run-level options can be passed to host().run()", async () => {
      const web01 = host({ name: "web01" });

      await web01.run(async () => {
        await debug({ msg: "hello" });
      }, { become: true });

      expect(backend.executed[0].become).toBe(true);
    });
  });

  describe("tagged template naming", () => {
    it("passes task name through tagged template", async () => {
      const cb = { names: [] as (string | undefined)[], onTaskStart(_h: string, _m: string, _a: Record<string, unknown>, name?: string) { this.names.push(name); } };
      configure({ callbacks: [cb], backend });

      await copy`Deploy config`({ dest: "/tmp/foo" });
      await copy({ dest: "/tmp/bar" });

      expect(cb.names).toEqual(["Deploy config", undefined]);
    });

    it("tagged template preserves module behavior", async () => {
      const namedCopy = copy`Install app`;
      await namedCopy({ dest: "/tmp/foo" });

      expect(backend.executed[0].module).toBe("ansible.builtin.copy");
      expect(backend.executed[0].args.dest).toBe("/tmp/foo");
    });

    it("tagged template supports interpolation", async () => {
      const env = "production";
      const cb = { name: undefined as string | undefined, onTaskStart(_h: string, _m: string, _a: Record<string, unknown>, name?: string) { this.name = name; } };
      configure({ callbacks: [cb], backend });

      await copy`Deploy ${env} config`({ dest: "/tmp/foo" });

      expect(cb.name).toBe("Deploy production config");
    });

    it("tagged template merges with per-task options", async () => {
      await copy`Install`({ dest: "/tmp/foo" }, { become: true });

      expect(backend.executed[0].become).toBe(true);
    });
  });

  describe("typescript control flow", () => {
    it("conditional execution based on task result", async () => {
      const backend = new DryRunBackend([
        { localhost: { changed: true, failed: false } },
        { localhost: { changed: false, failed: false } },
      ]);

      await host({ name: "localhost" }).run(async () => {
        const result = await copy({ dest: "/tmp/foo", content: "new" }, { backend });
        if (result.changed) {
          await service({ name: "myapp", state: "restarted" }, { backend });
        }
      });

      expect(backend.executed).toHaveLength(2);
      expect(backend.executed[1].module).toBe("ansible.builtin.service");
    });

    it("skips conditional task when not changed", async () => {
      const backend = new DryRunBackend([
        { localhost: { changed: false, failed: false } },
      ]);

      await host({ name: "localhost" }).run(async () => {
        const result = await copy({ dest: "/tmp/foo", content: "same" }, { backend });
        if (result.changed) {
          await service({ name: "myapp", state: "restarted" }, { backend });
        }
      });

      expect(backend.executed).toHaveLength(1);
    });

    it("loops in pure typescript", async () => {
      const backend = new DryRunBackend();

      await host({ name: "localhost" }).run(async () => {
        for (const pkg of ["nginx", "curl", "git"]) {
          await apt({ name: pkg, state: "present" });
        }
      }, { backend, callbacks: [] });

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

      await host({ name: "localhost" }).run(async () => {
        const check = await stat({ path: "/etc/app.conf" }, { backend });
        if (!check.stat?.exists) {
          await copy({ dest: "/etc/app.conf", content: "defaults" }, { backend });
        }
      });

      expect(backend.executed).toHaveLength(2);
      expect(backend.executed[1].module).toBe("ansible.builtin.copy");
    });

    it("multiple modules in sequence", async () => {
      await host({ name: "web01" }).run(async () => {
        await file({ path: "/opt/app", state: "directory", owner: "deploy" });
        await copy({ dest: "/opt/app/config.yml", content: "port: 8080" });
        await service({ name: "myapp", state: "restarted" });
      }, { become: true });

      expect(backend.executed).toHaveLength(3);
      expect(backend.executed[0].module).toBe("ansible.builtin.file");
      expect(backend.executed[1].module).toBe("ansible.builtin.copy");
      expect(backend.executed[2].module).toBe("ansible.builtin.service");
    });
  });
});
