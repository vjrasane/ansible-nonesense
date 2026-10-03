import envPaths from "env-paths";
import pkg from "../../package.json" with { type: "json" };

export const packageName = pkg.name;

export const toolName = "sensible";

export const env = (suffix: string) =>
  process.env[`${toolName.toUpperCase()}_${suffix}`];

export const systemPaths = envPaths(toolName, { suffix: "" });

export const cacheDir = env("CACHE_DIR") ?? systemPaths.cache;
