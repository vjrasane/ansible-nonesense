import { describe, it, expect } from "vitest";
import { play } from "./run.ts";
import { DryRunBackend } from "./backends/dryrun.ts";
import { copy, service, file, stat, debug, apt } from "../../../generated/builtin/index.ts";

describe("standalone execution", () => {
  it("works without play() using per-task options", async () => {
    const backend = new DryRunBackend([
      { localhost: { changed: true, failed: false, dest: "/tmp/foo" } },
    ]);

    const result = await copy({ dest: "/tmp/foo", src: "./foo" }, { backend });
    expect(result.localhost.changed).toBe(true);
    expect(result.localhost.dest).toBe("/tmp/foo");
    expect(backend.executed[0].module).toBe("ansible.builtin.copy");
    expect(backend.executed[0].hosts).toBe("localhost");
    expect(backend.executed[0].inventory).toBe("/etc/ansible/hosts");
  });

  it("per-task options override defaults", async () => {
    const backend = new DryRunBackend();

    await debug({ msg: "hello" }, {
      backend,
      hosts: "webservers",
      inventory: "prod.yml",
      become: true,
    });

    expect(backend.executed[0].hosts).toBe("webservers");
    expect(backend.executed[0].inventory).toBe("prod.yml");
    expect(backend.executed[0].become).toBe(true);
  });
});

describe("play() context", () => {
  it("sets shared options for all tasks", async () => {
    const backend = new DryRunBackend();

    await play({ hosts: "webservers", inventory: "hosts.yml", become: true, backend }, async () => {
      await debug({ msg: "hello" });
      await copy({ dest: "/tmp/foo" });
    });

    for (const task of backend.executed) {
      expect(task.hosts).toBe("webservers");
      expect(task.inventory).toBe("hosts.yml");
      expect(task.become).toBe(true);
    }
  });

  it("per-task options override play() context", async () => {
    const backend = new DryRunBackend();

    await play({ hosts: "webservers", inventory: "hosts.yml", become: false, backend }, async () => {
      await copy({ dest: "/tmp/foo" }, { become: true });
    });

    expect(backend.executed[0].become).toBe(true);
  });

  it("per-task hosts override play() hosts", async () => {
    const backend = new DryRunBackend();

    await play({ hosts: "webservers", inventory: "hosts.yml", backend }, async () => {
      await copy({ dest: "/tmp/foo" }, { hosts: "dbservers" });
    });

    expect(backend.executed[0].hosts).toBe("dbservers");
  });
});

describe("typescript control flow", () => {
  it("conditional execution based on task result", async () => {
    const backend = new DryRunBackend([
      { localhost: { changed: true, failed: false } },
      { localhost: { changed: false, failed: false } },
    ]);

    await play({ hosts: "all", inventory: "hosts.yml", backend }, async () => {
      const result = await copy({ dest: "/tmp/foo", content: "new" });
      if (result.localhost.changed) {
        await service({ name: "myapp", state: "restarted" });
      }
    });

    expect(backend.executed).toHaveLength(2);
    expect(backend.executed[1].module).toBe("ansible.builtin.service");
  });

  it("skips conditional task when not changed", async () => {
    const backend = new DryRunBackend([
      { localhost: { changed: false, failed: false } },
    ]);

    await play({ hosts: "all", inventory: "hosts.yml", backend }, async () => {
      const result = await copy({ dest: "/tmp/foo", content: "same" });
      if (result.localhost.changed) {
        await service({ name: "myapp", state: "restarted" });
      }
    });

    expect(backend.executed).toHaveLength(1);
  });

  it("loops in pure typescript", async () => {
    const backend = new DryRunBackend();

    await play({ hosts: "all", inventory: "hosts.yml", backend }, async () => {
      for (const pkg of ["nginx", "curl", "git"]) {
        await apt({ name: pkg, state: "present" });
      }
    });

    expect(backend.executed).toHaveLength(3);
    expect(backend.executed.map((t) => t.args.name)).toEqual(["nginx", "curl", "git"]);
  });

  it("stat check before conditional write", async () => {
    const backend = new DryRunBackend([
      { localhost: { changed: false, failed: false, stat: { exists: false } } },
      { localhost: { changed: true, failed: false } },
    ]);

    await play({ hosts: "all", inventory: "hosts.yml", backend }, async () => {
      const check = await stat({ path: "/etc/app.conf" });
      if (!check.localhost.stat?.exists) {
        await copy({ dest: "/etc/app.conf", content: "defaults" });
      }
    });

    expect(backend.executed).toHaveLength(2);
    expect(backend.executed[1].module).toBe("ansible.builtin.copy");
  });

  it("multiple modules in sequence", async () => {
    const backend = new DryRunBackend();

    await play({ hosts: "webservers", inventory: "hosts.yml", become: true, backend }, async () => {
      await file({ path: "/opt/app", state: "directory", owner: "deploy" });
      await copy({ dest: "/opt/app/config.yml", content: "port: 8080" });
      await service({ name: "myapp", state: "restarted" });
    });

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

    const result = await copy({ dest: "/tmp/foo" }, { backend });
    expect(result.web01.changed).toBe(true);
    expect(result.web02.changed).toBe(false);
    expect(Object.keys(result)).toEqual(["web01", "web02"]);
  });
});
