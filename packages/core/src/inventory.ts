import { execFile, execFileSync } from "node:child_process";
import { promisify } from "node:util";
import { host, type RunnableHost } from "./run.ts";

const exec = promisify(execFile);

export interface InventoryHost extends RunnableHost {
  groups: string[];
}

export interface InventoryData {
  _meta: { hostvars: Record<string, Record<string, unknown>> };
  [group: string]: { hosts?: string[]; children?: string[] } | unknown;
}

export async function getInventory(inventoryPath?: string): Promise<InventoryData> {
  const args = ["--list"];
  if (inventoryPath) args.push("-i", inventoryPath);

  const { stdout } = await exec("ansible-inventory", args, {
    env: { ...process.env, ANSIBLE_DEPRECATION_WARNINGS: "false" },
  });

  return JSON.parse(stdout);
}

export function getInventorySync(inventoryPath?: string): InventoryData {
  const args = ["--list"];
  if (inventoryPath) args.push("-i", inventoryPath);

  const stdout = execFileSync("ansible-inventory", args, {
    env: { ...process.env, ANSIBLE_DEPRECATION_WARNINGS: "false" },
    encoding: "utf-8",
  });

  return JSON.parse(stdout);
}

export function getInventoryHosts(
  inventory: InventoryData,
  ...patterns: string[]
): InventoryHost[] {
  const hostvars = inventory._meta.hostvars;

  const hostGroups = new Map<string, string[]>();
  for (const [group, value] of Object.entries(inventory)) {
    if (group === "_meta") continue;
    const hosts = (value as { hosts?: string[] }).hosts;
    if (!hosts) continue;
    for (const h of hosts) {
      const groups = hostGroups.get(h) ?? [];
      groups.push(group);
      hostGroups.set(h, groups);
    }
  }

  const allHosts: InventoryHost[] = [];
  for (const [name, vars] of Object.entries(hostvars)) {
    const groups = hostGroups.get(name) ?? [];
    allHosts.push({ ...host({ name, vars }), groups });
  }

  if (patterns.length === 0) return allHosts;

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
