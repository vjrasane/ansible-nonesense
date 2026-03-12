import { execFile, execFileSync } from "node:child_process";
import { promisify } from "node:util";
import { resolveOptions } from "./run.ts";
import type { Host } from "./types.ts";

const exec = promisify(execFile);

export interface InventoryHost extends Host {
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
  const effectivePath = inventoryPath ?? resolveOptions().inventory;
  const args = ["--list"];
  if (effectivePath) args.push("-i", effectivePath);

  const { stdout } = await exec("ansible-inventory", args, {
    env: { ...process.env, ANSIBLE_DEPRECATION_WARNINGS: "false" },
  });

  return parseInventory(stdout, pattern);
}

export function getInventoryHostsSync(
  pattern?: string,
  inventoryPath?: string,
): InventoryHost[] {
  const effectivePath = inventoryPath ?? resolveOptions().inventory;
  const args = ["--list"];
  if (effectivePath) args.push("-i", effectivePath);

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
    allHosts.push({ name, vars, groups: hostGroups.get(name) ?? [] });
  }

  if (!pattern) return allHosts;

  const patterns = pattern.split(",").map((p) => p.trim());
  return allHosts.filter((host) =>
    patterns.some(
      (p) =>
        p === "all" ||
        host.name === p ||
        host.groups.includes(p) ||
        globMatch(host.name, p),
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
