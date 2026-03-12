import { execFile, execFileSync } from "node:child_process";
import { promisify } from "node:util";
import { host, type RunnableHost } from "./run.ts";

const exec = promisify(execFile);

export interface InventoryHost extends RunnableHost {
  groups: string[];
}

interface InventoryJson {
  _meta: { hostvars: Record<string, Record<string, unknown>> };
  [group: string]: { hosts?: string[]; children?: string[] } | unknown;
}

export async function getInventoryHosts(
  pattern?: string,
  inventoryPath?: string,
): Promise<InventoryHost[]> {
  const args = ["--list"];
  if (inventoryPath) args.push("-i", inventoryPath);

  const { stdout } = await exec("ansible-inventory", args, {
    env: { ...process.env, ANSIBLE_DEPRECATION_WARNINGS: "false" },
  });

  return parseInventory(stdout, pattern);
}

export function getInventoryHostsSync(
  pattern?: string,
  inventoryPath?: string,
): InventoryHost[] {
  const args = ["--list"];
  if (inventoryPath) args.push("-i", inventoryPath);

  const stdout = execFileSync("ansible-inventory", args, {
    env: { ...process.env, ANSIBLE_DEPRECATION_WARNINGS: "false" },
    encoding: "utf-8",
  });

  return parseInventory(stdout, pattern);
}

function parseInventory(stdout: string, pattern?: string): InventoryHost[] {
  const data: InventoryJson = JSON.parse(stdout);
  const hostvars = data._meta.hostvars;

  const hostGroups = new Map<string, string[]>();
  for (const [group, value] of Object.entries(data)) {
    if (group === "_meta") continue;
    const hosts = (value as { hosts?: string[] }).hosts;
    if (!hosts) continue;
    for (const host of hosts) {
      const groups = hostGroups.get(host) ?? [];
      groups.push(group);
      hostGroups.set(host, groups);
    }
  }

  const allHosts: InventoryHost[] = [];
  for (const [name, vars] of Object.entries(hostvars)) {
    const groups = hostGroups.get(name) ?? [];
    allHosts.push({ ...host({ name, vars }), groups });
  }

  if (!pattern) return allHosts;

  const patterns = pattern.split(",").map((p) => p.trim());
  return allHosts.filter((h) =>
    patterns.some(
      (p) =>
        p === "all" ||
        h.name === p ||
        h.groups.includes(p) ||
        globMatch(h.name, p),
    ),
  );
}

function globMatch(str: string, pattern: string): boolean {
  const regex = new RegExp(
    "^" +
      pattern
        .replace(/[.+^${}()|[\]\\]/g, "\\$&")
        .replace(/\*/g, ".*")
        .replace(/\?/g, ".") +
      "$",
  );
  return regex.test(str);
}
