import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { BecomeOpts } from "src/core/connection.ts";
import { LocalConnection, SSHConnection } from "src/core/connection.ts";
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
  throw new Error(
    "backend: bootstrap.sh not found above " + fileURLToPath(import.meta.url),
  );
}

// The bootstrap promise is anchored on globalThis (like the ALS store in context.ts)
// so a duplicate core instance — tsx can resolve a dynamically-imported chunk's
// `@sensible-ts/core` to a different module URL than the static graph — shares the one
// server rather than spawning a second.
const SERVER_KEY = Symbol.for("@sensible-ts/core#serverClient");
const g = globalThis as unknown as Record<
  symbol,
  Promise<ServerClient> | undefined
>;

async function initServerClient(): Promise<ServerClient> {
  const py = await bootstrap(bootstrapScript());
  const client = new ServerClient(py);
  process.once("exit", () => void client.close()); // lifeline also covers EOF
  return client;
}

export function getServer(): Promise<ServerClient> {
  let p = g[SERVER_KEY];
  if (p == null) {
    p = initServerClient();
    p.catch(() => {}); // mark handled: awaiters still see the rejection, but an eager
    g[SERVER_KEY] = p; // start with no awaiter yet must not crash as unhandledRejection
  }
  return p;
}

// Warm the server eagerly on import so the venv bootstrap + spawn overlap with the
// caller's own setup (reading secrets, etc.); the first module exec awaits this promise.
getServer();

// Fetch host facts from the server, which gathers via ansible's setup module and keeps
// an in-memory per-host cache. gatherAll=false → the minimal subset; true → everything.
export async function gatherFacts(
  host: Host,
  gatherAll = false,
): Promise<Record<string, unknown>> {
  const server = await getServer();
  const spec = hostSpecFor(host);
  spec.gather_subset = [gatherAll ? "all" : "min"];
  return server.gatherFacts({ host: spec, vars: {} });
}

export function hostSpecFor(
  host: Host,
  become?: boolean | BecomeOpts,
): HostSpec {
  const become_vars = becomeVars(become);
  const conn = host.connection;
  if (conn instanceof LocalConnection)
    return { id: host.name, connection: { type: "local" }, become: become_vars };
  if (conn instanceof SSHConnection) {
    const cfg = conn.config;  // host already defaulted to the name by host()
    const vars: Record<string, unknown> = { ansible_host: cfg.host };
    if (cfg.user != null) vars.ansible_user = cfg.user;
    if (cfg.port != null) vars.ansible_port = cfg.port;
    if (cfg.identityFile != null) vars.ansible_ssh_private_key_file = cfg.identityFile;
    return { id: host.name, connection: { type: "ssh", vars }, become: become_vars };
  }
  throw new Error(
    `server backend: unsupported connection for host "${host.name}"`,
  );
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
