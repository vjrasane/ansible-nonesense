#!/usr/bin/env node
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execFile);
const MIN_VERSION = [2, 17];

try {
  const { stdout } = await exec("ansible", ["--version"]);
  const match = stdout.match(/ansible \[core (\d+)\.(\d+)/);
  if (!match) {
    console.warn(`⚠ @nonesible/core: could not determine ansible version`);
    process.exit(0);
  }

  const major = parseInt(match[1]);
  const minor = parseInt(match[2]);
  if (major < MIN_VERSION[0] || (major === MIN_VERSION[0] && minor < MIN_VERSION[1])) {
    console.warn(
      `⚠ @nonesible/core: ansible-core ${major}.${minor} found, but >= ${MIN_VERSION.join(".")} is required`,
    );
    process.exit(0);
  }
} catch {
  console.warn(
    "⚠ @nonesible/core: ansible not found in PATH. Install ansible-core >= " +
    MIN_VERSION.join(".") + ":\n" +
    "    pip install ansible-core",
  );
  process.exit(0);
}
