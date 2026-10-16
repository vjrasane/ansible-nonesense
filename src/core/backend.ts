import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { BecomeOpts } from "src/core/connection.ts";
import { LocalConnection } from "src/core/connection.ts";
import type { Host } from "src/core/host.ts";
import { bootstrap, ServerClient, type HostSpec } from "src/core/server.ts";

// The server-execution backend (design §4): all module runs go through one long-lived
// ansible-jsonrpc-server, replacing the in-TS AnsiballZ path. Lazily bootstrapped and
// shared process-wide. Only local connections are wired so far (ssh/collections next).

function bootstrapScript(): string {
  // Resolve server/bootstrap/v1/bootstrap.sh by walking up — works both from the
  // bundled dist/ and from tsx-run src/ (different depths under the repo root).
  let dir = dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 10; i++) {
    const p = join(dir, "server", "bootstrap", "v1", "bootstrap.sh");
    if (existsSync(p)) return p;
    const up = dirname(dir);
    if (up === dir) break;
    dir = up;
  }
  throw new Error("backend: bootstrap.sh not found above " + fileURLToPath(import.meta.url));
}

// The bootstrap promise is anchored on globalThis (like the ALS store in context.ts)
// so a duplicate core instance — tsx can resolve a dynamically-imported chunk's
// `@sensible-ts/core` to a different module URL than the static graph — shares the one
// server rather than spawning a second.
const SERVER_KEY = Symbol.for("@sensible-ts/core#serverClient");
const g = globalThis as unknown as Record<symbol, Promise<ServerClient> | undefined>;

export function getServer(): Promise<ServerClient> {
  let p = g[SERVER_KEY];
  if (p == null) {
    p = (async () => {
      const py = await bootstrap(bootstrapScript());
      const client = new ServerClient(py);
      process.once("exit", () => void client.close());  // lifeline also covers EOF
      return client;
    })();
    p.catch(() => {});  // mark handled: awaiters still see the rejection, but an eager
    g[SERVER_KEY] = p;  // start with no awaiter yet must not crash as unhandledRejection
  }
  return p;
}

// Warm the server eagerly on import so the venv bootstrap + spawn overlap with the
// caller's own setup (reading secrets, etc.); the first module exec awaits this promise.
getServer();

export function hostSpecFor(host: Host, become?: boolean | BecomeOpts): HostSpec {
  if (!(host.connection instanceof LocalConnection))
    throw new Error(
      `server backend: only local connections are wired so far (host "${host.name}")`,
    );
  return { connection: { type: "local" }, become: becomeVars(become) };
}

function becomeVars(become?: boolean | BecomeOpts): Record<string, unknown> {
  if (!become) return {};
  const o = typeof become === "object" ? become : {};
  const vars: Record<string, unknown> = { ansible_become: true };
  if ("mode" in o && o.mode === "su") vars.ansible_become_method = "su";
  if (o.user) vars.ansible_become_user = o.user;
  if ("password" in o && o.password) vars.ansible_become_password = o.password;
  return vars;
}
