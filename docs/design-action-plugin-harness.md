# Design: Ansible Execution Server — a Standalone Binary Seam for Language Bindings

## 1. Summary

The runtime reimplements Ansible in TypeScript — module packaging
(`design-ansible-module-runtime.md`), the connection, dispatch, fact gathering,
and a per-plugin TypeScript port of each action plugin. None of it scales across
languages, and all of it duplicates machinery `ansible-core` already has.

This design inverts the architecture. A **standalone Python server** owns
`ansible-core` and performs *all* execution — connection, module packaging and
transfer (`_execute_module`), action plugins, and facts — by running the real
library. **Language bindings become thin clients:** they spawn the server, hand
it a task plus a connection spec over stdio, and receive a result. Connection
types are **pluggable via ansible's own `connection_loader`** (every builtin,
plus user-supplied plugins), with a **delegate** connection as an escape hatch
for callers who want to implement transport in their own language.

The server is a **long-lived 1:1 server** owned by the client process that
spawned it, communicating over **stdin/stdout** with length-prefixed, id-tagged
JSON frames — the LSP/DAP model. The GPL copyleft stays confined to the server
by the process boundary; clients (any language, any license) talk to it only
through the neutral protocol.

This **retires** the TypeScript module machinery entirely (codegen closures,
payload cache, `remote.ts`, dispatch table, `FACT_PROBE`) and reverses the
TypeScript-only-controller thesis of `design-distribution-and-cache.md`: the
controller now owns an installed `ansible-core` at runtime, inside the server.

## 2. Background

### 2.1 What `_execute_module` actually does

An action plugin's one job on the target flows through
`self._execute_module` (`ansible/plugins/action/__init__.py:1007–1175`). Its
exact sequence:

1. ensure a remote **tmp dir** (`_make_tmp_path` → `mkdir` over the connection)
2. `_update_module_args` — inject the `_ansible_*` control params
3. **`_configure_module`** — resolve via `module_loader` and build the AnsiballZ
   payload (the packager; *local*, no connection, needs the module source)
4. compute the remote `AnsiballZ_<name>` path
5. **transfer** the payload (`_transfer_data` → `put_file`, or pipeline via stdin)
6. build the exec command via the shell plugin (`build_module_command`)
7. **`_fixup_perms2`** — chmod the remote files (over the connection)
8. **`_low_level_execute_command`** — run `<interp> <path>` with become (over the
   connection), capture stdout
9. **`_parse_returned_data`** — parse JSON → result dict
10. cleanup tmp

Every target-facing step (1, 5, 7, 8) goes through `self._connection`; packaging
(3) is local and only needs the module source on disk. **So running a module
natively requires exactly two things: a working connection, and the module
source** — both of which `ansible-core` provides.

### 2.2 The connection seam is already pluggable

`connection_loader.get("ssh" | "local" | "paramiko_ssh" | "docker" | …)` returns
a connection plugin that `ActionBase` drives through `self._connection`. This is
ansible's plugin system; it already covers "pluggable connection, selected by
name, configured by params." Nothing new is required to make the connection
pluggable — and adding a type means *installing the collection that ships it*,
never editing the server.

### 2.3 `_execute_module` never re-enters the action layer

`_configure_module` resolves through `module_loader` only
(`action/__init__.py:299`); `action_loader` is consulted once per task by
`TaskExecutor`. A nested `_execute_module('dnf')` runs the raw `dnf` module, not
`dnf.py`'s action plugin. Execution is flat and non-recursive.

### 2.4 Facts come from the same machinery

`package`/`service`/`dnf` gather `pkg_mgr`/`service_mgr` by running `setup` with
a filter; `reboot`/`community.general.shutdown` read distribution facts the same
way. Running the real plugins means fact gathering and dispatch come for free;
`FACT_PROBE`, `HostFacts`, and the dispatch table are redundant.

## 3. Goals and Non-Goals

**Goals.** Run unmodified builtin and collection content — modules, action
plugins, connection plugins — with no per-item porting in any language. Make the
server a standalone binary that bindings in any language invoke through a
generated, typed protocol. Keep the client thin: submit a task + connection
spec, receive a result. Confine GPL copyleft to the server. Guarantee the server
never outlives its owning client.

**Non-Goals.** Running whole playbooks/roles, Jinja in user arguments, variable
precedence, handlers (the DSL replaces these). Async modules (`async`/`poll`/
`async_wrapper`) — first cut: tasks run synchronously in the pool, bounded by the
task timeout (§4.10); async is an architecture-neutral later addition. A
TypeScript-only controller (the server is Python). Windows *targets*, and — first
cut — Windows *clients* too:
the bootstrap is a POSIX shell script (§4.8), so Windows client support waits for
a PowerShell sibling.

## 4. Design

### 4.1 Components and boundaries

```
   client binding (any language, permissive)        server (Python, GPL-3.0)
 ┌───────────────────────────────┐               ┌──────────────────────────────┐
 │  builds task + connection spec│               │  ansible-core:                │
 │  spawns + owns the server     │── stdin  ────▶│   connection_loader,          │
 │  generated types + bindings   │  (frames)     │   action_loader, module build │
 │  (optional) delegate transport│◀── stdout ────│   (_execute_module), facts    │
 │  NEVER imports ansible        │  (frames)     │  stderr → diagnostics/logs    │
 └───────────────────────────────┘               └──────────────────────────────┘

 dependency arrows:
   client   ─► protocol (neutral schema, generated bindings)
   server   ─► protocol  +  ansible-core (GPL)  +  collections/user plugins
   client and server share only the stdio protocol; neither imports the other
```

### 4.2 The server: a long-lived, 1:1, standalone binary

The client spawns **one** server and owns it for the client's lifetime. There is
no discovery, no shared server, no "is one already running?", no N-process
tracking — ownership is 1:1 by construction. The server is long-lived so the
`ansible-core` import, `ControlPersist` masters, and fact caches are paid once
and reused across the client's tasks.

It is shipped as a standalone binary (Python + `ansible-core` bundled; packaging
mechanism in §8). The client always invokes the server for **every** task; the
server loads the action plugin if one exists, else the generic `normal` path.
The client never decides "does this fqcn have an action plugin?" — that knowledge
stays in ansible.

### 4.3 Execution: native, via a real connection

On a `run_action` frame the server:

1. **builds context** — the object graph `ActionBase` reads its inputs from
   (§4.3.1);
2. **gets a connection** — `connection_loader.get(spec.type)`, configured from
   `spec.params` (mapped onto `PlayContext`/connection vars: host, user, key,
   port, become, …);
3. **loads the plugin** — `action_loader.get(fqcn)`, or `normal`;
4. **runs it** — `plugin.run(task_vars)`. `_execute_module` runs **unmodified**:
   ansible packages the module, transfers and executes it over the connection,
   and parses the result;
5. **returns** `{result}`.

No `_execute_module` override, no `ShimConnection`, no `run_module` callback in
this path. The server inherits ansible's tmp-path handling, AnsiballZ build,
interpreter discovery, become, pipelining, result parsing, and cleanup — the
exact machinery §6 of the old design had us hand-writing.

#### 4.3.1 Building the context

An action plugin is not a function you call with arguments — `ActionBase` is
constructed as `cls(task, connection, play_context, loader, templar,
shared_loader_obj)` and `run()` reads all of its input from those objects. The
minimal construction, verified against `ansible-core` 2.19.13:

```python
play  = Play.load({}, variable_manager=None, loader=dl)   # or bare Play()
block = Block(play=play)
task  = Task.load({"action": fqcn, "args": args}, block=block)
play_context = PlayContext()                              # become / check_mode set here
templar = Templar(loader=dl, variables=vars)
```

Where each input actually lives:

| input | goes into |
|---|---|
| module args | `Task.load({..., "args": args})` |
| become / check_mode / diff | `PlayContext` |
| connection params (host, user, key, port) | the connection plugin config (§4.3 step 2) |
| `_action_groups` / `module_defaults` | **nothing — the empty `Play` + `Block` supply empty defaults** |

The `Play` and `Block` carry **none** of your inputs; they are pure structural
scaffolding. An empty `Play` already yields `_action_groups == {}` and the
`Task` gets `module_defaults == []` — together the entire read surface of
`_get_action_arg_defaults` (`module_common.py:1359`), the one place (reached via
`_execute_module`) that walks `task._parent._play`. `Play.load({})` and bare
`Play()` both work; `.load` is an in-memory constructor (no file I/O) that also
sets ansible's other defaults, so prefer it.

The `Block` is **not optional**: a block-less `Task` has `_parent is None` and
crashes that walk (the exact failure the Plan-1 spike hit). Its only job is to
give the `Task` a non-`None` parent whose `._play._action_groups` resolves.

Scoped honestly: this is the read surface the dispatch family
(`package`/`service`/`dnf`) triggers. A plugin that reads a *different* `Play`
attribute would surface as an `AttributeError` — a new empty-scaffolding field,
found the same way (run it, see what's `None`). The empty `Play` covers
everything observed so far.

#### 4.3.2 Control flags

The task's optional `flags` (§4.5) map to how `_update_module_args`
(`action/__init__.py:944`) sources each control:

- `check_mode`, `diff`, `no_log` → set as **Task keywords** in
  `Task.load({…, check_mode, diff, no_log})`; ansible then injects
  `_ansible_check_mode`/`_ansible_diff`/`_ansible_no_log`.
- `verbosity` → set `display.verbosity` **in the forked child** before `run()`;
  safe because §4.9 gives each task its own process, so mutating the global
  `Display` singleton can't leak across tasks.
- `check_mode` on a plugin lacking support → `AnsibleActionSkip` → `status:
  skipped` (§4.3.3).
- `timeout` → ansible's `task.timeout` keyword (§4.10).
- `no_log` drives result/invocation redaction (§4.4 secrets); arg-level `no_log` (password
  params) is automatic via the module's argspec. The remaining `_ansible_*`
  (`keep_remote_files`, `syslog_facility`, `tmpdir`, `remote_tmp`,
  `shell_executable`, …) come from config/connection defaults — not client-set in
  the first cut.

#### 4.3.3 Result and error semantics

`runAction` returns one status-tagged result frame carrying the full module
result dict. The distinction that matters: a task that **ran and failed** is a
normal outcome, not a protocol error.

```
{ status, changed, result, warnings, deprecations, error? }
```

- **`status`** (lifted for client dispatch) ∈ `ok | failed | unreachable |
  skipped | timed_out | cancelled | error`:
  - `ok`/`failed`/`skipped` — task outcomes (from the result's flags).
  - `unreachable` — connection-level failure (`AnsibleConnectionFailure`),
    categorically distinct from `failed` (retryable).
  - `timed_out`/`cancelled` — server-terminated (§4.10).
  - `error` — **server/harness/protocol failure only** (context build blew up,
    unexpected exception, worker crash); the one case that is *not* a normal
    ansible result. Carries `error:{msg, traceback}`.
- **`changed`** — lifted convenience bool (idempotency is queried constantly).
- **`result`** — the full module dict (`msg`, `rc`, `stdout`, `diff`,
  `exception`, `invocation`, module keys), after `no_log` redaction.
- **`warnings`/`deprecations`** — surfaced structurally (the result's preserved
  keys), so the client displays them even on failure; ansible also emits some via
  `Display` to stderr, but the structured lists are the contract.

Exceptions map to status via ansible's own `result_dict_from_exception`:
`AnsibleConnectionFailure` → `unreachable`; `AnsibleActionFail`/`AnsibleActionSkip`/
module `failed` → `failed`/`skipped`; `TaskTimeoutError` → `timed_out`; unexpected
→ `error`. `no_log` redaction (task- and arg-level) is applied here, before the
frame leaves the server (§4.4).

### 4.4 Connections and credentials

**Native connections are the first-cut mechanism.** The server selects a plugin
from `connection_loader` by `connection.type` — builtins (`ssh`, `local`,
`paramiko_ssh`, …), collection connections (`docker`, `podman`, `kubectl`, …),
and user-supplied Python connection plugins on the plugin path. Adding a type is
an install, not a server change: **zero new server code, zero new server-authored
GPL**.

**Config and credentials go through the plugin option system, not `PlayContext`.**
Modern connection plugins read everything via `get_option` — e.g. ssh:
`self.get_option('password') or self._play_context.password` (`ssh.py:570`,
option first, PlayContext only a fallback) — sourced from ansible **connection
vars** (`ansible_host`, `ansible_user`, `ansible_password`, `ansible_port`,
`ansible_ssh_private_key_file`, …). So the connection spec is a **bag of those
vars, forwarded verbatim**:

```
host.connection = { type, vars: { ansible_host, ansible_user, ansible_password, … } }
host.become     = { ansible_become, ansible_become_method, ansible_become_user, ansible_become_password }
```

The server does `conn = connection_loader.get(type);
conn.set_options(var_options=host.connection.vars)` (become plugin likewise), then
`get_option` inside each plugin reads what it expects — **credentials included**.
Forwarding the bag **without interpreting it** is what keeps the server
connection-agnostic: every plugin defines its own vars, so the server needs no
per-plugin vocabulary. A neutral vocabulary was rejected for exactly this reason
(it would force per-type translation in the server/codegen). Bindings MAY offer a
typed facade over `ssh`/`local` mapping friendly names → `ansible_*` vars; the
wire stays raw vars.

**Secrets.** Credentials ride that var bag (`ansible_password`,
`ansible_become_password`) over the local, same-user stdio pipe. Secure
target-delivery is inherited — become password via the sudo prompt (never argv or
`ps`), ssh via sshpass. The server **never logs** secret-bearing vars (it has
ansible's `no_log`/secret metadata) and **never persists** them (the fact cache
keys on the opaque `host.id`, not params). Result/invocation redaction uses
ansible's `no_log` sentinel (`VALUE_SPECIFIED_IN_NO_LOG_PARAMETER`) at
result-shaping (§4.3.3). **Vault is out of scope** — the DSL owns secrets and
passes plain values.

**Delegate connection — deferred, kept architecture-compatible.** A built-in
plugin that routes `exec`/`put`/`fetch` back to the client as server→client calls
(for callers who want transport in their own language) is **not in the first
cut** — native covers the foreseeable need. Deferring it means the first-cut
server has **no server→client callbacks at all**, so every pool child is a
self-contained native job (§4.9). The architecture stays ready for it: the
JSON-RPC transport is already bidirectional, so adding delegate later is a new
connection plugin + `exec`/`put`/`fetch` methods + a child→parent pipe — **no
protocol or transport redesign**. It also remains the privacy-max path
(connection secrets never reach the server).

### 4.5 The seam: JSON-RPC 2.0 over stdin/stdout

The wire protocol is **JSON-RPC 2.0 with `Content-Length` framing — the LSP base
protocol** — over the client's stdin/stdout. Not a bespoke format: the server is
concurrent (§4.9), so the transport needs concurrent bidirectional dispatch
(many pending requests correlated by `id`, interleaved responses and
notifications, cancellation), which JSON-RPC libraries already solve. stdio is
the carrier, chosen deliberately:

- the **lifeline is free**: when the client dies (any way), the server's stdin
  hits EOF → the server exits (§4.6);
- no socket-file lifecycle (path, perms, stale cleanup);
- trivially portable across client languages and platforms;
- it enforces the 1:1 parent-child ownership rather than merely allowing it.

**Clients use an off-the-shelf JSON-RPC transport** (TS `vscode-jsonrpc`, Go
`sourcegraph/jsonrpc2`, …) — zero transport code per binding, which is what keeps
bindings thin. **The server** owns a light Content-Length + JSON-RPC dispatch
layer (hand-rolled ~100 lines, or a generic lib; not `pygls`, which drags LSP
coupling).

Methods (`params` → `result` shapes are the typed messages):

| method | direction | params | result |
|---|---|---|---|
| `runAction` | client→server | `host:{id, connection:{type,vars}, become:{…ansible_become* vars}, gather_subset?}, fqcn, args, vars, artifact?:{collection,version,hash,url}, flags?:{check_mode,diff,no_log,verbosity,timeout}` | the `result` of §4.3.3: `status, changed, result, warnings, deprecations` |
| `gatherFacts` | client→server | `host:{id, connection, gather_subset?}` | `ansible_facts` (backs `host.facts`, §4.7) |
| `shutdown` | client→server (notification) | — | — |
| `exec`/`put`/`fetch` *(deferred — delegate only, §4.4)* | server→client | op params | transport result |

Correlation, interleaving, and cancellation are JSON-RPC's (`id`, `$/cancelRequest`
convention — reused for gap G). `runAction` separates a **host spec** (stable per
host, re-sent every call; `host.id` is the client-guaranteed opaque identity,
§4.7) from the **task** (`fqcn`/`args`/`vars`/`artifact`). The first cut is
**client→server only** (`runAction`/`gatherFacts`/`shutdown`); the server→client
`exec`/`put`/`fetch` methods exist in the protocol for the deferred delegate
connection (§4.4) but are unused — so the first-cut server makes no callbacks.

The server **redirects its own `sys.stdout` to stderr at startup** and writes the
protocol on a private fd, so a stray `print()` in a third-party plugin cannot
corrupt the stream. `stderr` carries diagnostics.

The message **`params`/`result` types are defined once as a neutral schema** and
generated per language (JSON Schema / TypeSpec → `datamodel-code-generator`
`msgspec.Struct` for Python, `json-schema-to-typescript` for TS, …). JSON-RPC
standardizes only the envelope; these typed shapes are ours (schema tool choice
is the remaining §8 item). `vscode-jsonrpc`/most libs also support a socket
carrier, so stdio→socket is a later swap, not a protocol change.

### 4.6 Lifecycle and orphan-prevention

The server must never outlive its owner. No single mechanism is absolute; the
stack is defense-in-depth, and the backbone covers `SIGKILL`/crash (where no
client cleanup runs):

1. **Lifeline = stdin EOF.** A dedicated watcher thread blocks reading stdin;
   on EOF it hard-exits (`os._exit`) even mid-task. The kernel closes the pipe
   whenever the client dies, for any reason — this is the backbone.
2. **Own process group / Job Object.** The server runs in its own group (Unix)
   or a Job Object with `KILL_ON_JOB_CLOSE` (Windows), so its *children*
   (`ssh` `ControlMaster`, module processes) die with it.
3. **`prctl(PR_SET_PDEATHSIG, SIGKILL)`** on Linux (ctypes) for instant kill if
   the pipe ever lingers; re-check `getppid()` after setting (startup race).
4. **Graceful path:** client sends `shutdown` and/or `SIGTERM` from its own
   exit handler; server's `SIGTERM` handler tears down (closes `ControlMaster`
   sockets) and exits.
5. **`getppid()` poll** as a cheap last-resort fallback (Unix: reparent to 1).

(1)+(2) are the practical guarantee; (3)–(5) reinforce. Set a short
`ControlPersist` so a crash cannot leave ssh masters idling to a long timeout.

### 4.7 Facts — subsumed, and server-owned

**Dispatch is free.** Running the real plugins makes `FACT_PROBE`, `HostFacts`,
and the `DISPATCHERS` table redundant (§2.4): `package`/`service`/`dnf` gather
`pkg_mgr`/`service_mgr` themselves via a filtered `setup` inside
`_execute_module`, and `reboot`/`shutdown` read distribution facts the same way.

**The fact store is the server's job, not each client's.** A plugin's internal
gather is *not* cacheable — `package` reads `pkg_mgr` locally and discards it
(its result carries no `ansible_facts`; `package.py` even flags the gather as
"very expensive"). Ansible persists facts a different way: the controller merges
any task **result's** `ansible_facts` into the host's facts
(`strategy/__init__.py:700-717`, `set_host_facts`/`set_nonpersistent_facts`), and
the full set comes from an explicit `setup`/`gather_facts` task. Putting that
controller role in the server — rather than reimplementing it in every binding —
keeps clients thin.

So the server owns a **per-host fact cache** (scoped state — facts only, not play
orchestration):

- **Key:** `(host.id, normalize(gather_subset))` where `normalize` is
  `tuple(sorted(subset))`. `host.id` is the client-guaranteed opaque identity;
  the subset sub-partitions it. Keying on the subset (not just `host.id`) is
  deliberate — the server cannot assume a client keeps the subset stable per
  host, so it must not serve `min` facts to a task that asked for `all`. This
  **partitions, never merges**: distinct subsets are independent entries, each
  gathered once; no union/delta logic.
- **Single-flight:** `host.id`+subset → `Future[facts]`. The first task for a key
  creates the Future and runs `setup` (via the normal build-context → connection
  → run path — gathering is just an internal task); every concurrent or later
  task for that key `await`s the same Future. This is what makes concurrent
  same-host tasks share one gather — required regardless of server topology,
  since concurrency is per task on a host. On failure, evict the entry so it
  isn't a poisoned cache.
- **Which facts:** ansible's predefined subset system. `gather_subset` is a
  **host property** (in the host spec, §4.5), optional, **defaulting to
  `["min"]`** — the always-gathered minimal tier (`distribution`, `os_family`,
  `system`, `platform`, `env`, `user`, `pkg_mgr`, `service_mgr`, …) that covers
  dispatch and common conditionals, and is fast. Clients opt into `["all"]`
  (adds hardware/network/virtual — slow) or named subsets. This diverges from
  ansible's `all` default, deliberately, for speed. `facter`/`ohai` stay opt-in.
- **Injection:** before running a task, the server sets `task_vars["ansible_facts"]`
  to the cached facts for the host, so a plugin's hostvars check hits and it skips
  its own gather — mirroring the controller merge.
- **Invalidation:** facts live for the server's lifetime (the play). After a
  `reboot`, the plugin result or an explicit client `invalidate(host.id)` drops
  the host's entries so the next task re-gathers.

`ControlPersist` keys the ssh master by `host:port:user`, independent of subset,
so two entries for one host (`min` and `all`) share one ssh session and cost only
the two gathers. If a client wants two logical references to share facts, it
gives them the same `host.id`; different ids are honored as distinct.

### 4.8 Provisioning and bootstrap

The server runs from a **managed venv** (not a bundled binary). Provisioning is a
single **POSIX shell script hosted at a versioned, stable URL** — written once,
shared by every binding, so no language reimplements it. A binding runs it either
from an install hook (e.g. npm `postinstall`) or, preferably, as an **idempotent
preflight** on first server spawn (preflight generalizes across languages and
survives `--ignore-scripts`). Windows clients are a non-goal until a PowerShell
sibling exists (§3).

The script (`bootstrap/vN/bootstrap.sh`):

1. **Check Python** — use the client-supplied interpreter path if given,
   otherwise auto-discover (`python3.13` → … → `python3.11` → `python3`), require
   **≥ 3.11** (ansible-core 2.19's floor), and error actionably if none qualifies
   (e.g. "needs python3.11+; found 3.9").
2. **Create venv** — if the per-user venv is missing, `python3 -m venv
   --without-pip $VENV` (skips the unbundled `ensurepip`; if the `venv` module
   itself is missing, error "install python3-venv").
3. **Bootstrap pip** — if `$VENV` has no pip, run a pinned `get-pip.py` (from its
   own versioned stable URL) with the venv python.
4. **Install the server** — if `ansible-jsonrpc-server` is absent, `$VENV/bin/pip
   install ansible-jsonrpc-server==$VERSION`, which pulls `ansible-core` and its
   controller deps. `$VERSION` is fixed by **which script the client ran**
   (`bootstrap/vN/…`, matched to a server version) or passed as `--version`.
5. Done — the client spawns `$VENV/bin/python -m ansible_jsonrpc_server`.

Non-negotiables around the script:

- **Pin + verify, not just "stable".** URLs are versioned
  (`bootstrap/vN/…`, `get-pip/<pinned>/…`); the binding bakes only a **URL +
  checksum** (tiny) and verifies the fetched script against it. Never
  `curl | sh` an unverified mutable URL.
- **Version coordination.** The server version (hence protocol version) is pinned
  by the bootstrap itself: the client runs the matching `bootstrap/vN/…` script or
  passes `--version`, and step 4 installs exactly that. Pinning the script version
  pins the server — no "latest," no separate handshake required (a cheap
  connect-time version echo is an optional guard, not core).
- **venv location, versioned.** The venv is **installed runtime, not throwaway
  cache** — a cache reaper wiping it breaks the next spawn until a full
  re-bootstrap (network fetch of ansible-core + pip install) — so it lives under
  `XDG_DATA_HOME` (**not** `XDG_CACHE_HOME`), path keyed by server version, so an
  upgrade builds a fresh venv rather than mutating a live one. See the layout below.
- **Concurrency.** The venv is per-user and shared across client processes (each
  owns its *server*, not the *venv*); hold a lock (`flock` on the venv dir) so
  concurrent first-runs serialize. Steps 2–4 are idempotent under it.

**On-disk layout.** Two trees, split by lifecycle: the venv is re-creatable but
expensive and **version-keyed**; collections are cheap, re-fetchable, and
**content-addressed**, so they are shared across server versions and safe to purge.
Nesting the venv under `~/.cache` (one base dir) is rejected for exactly this
mismatch — a cache cleaner may delete `XDG_CACHE_HOME` contents at any time without
data loss, which is true for collections and false for the venv.

```
~/.local/share/ansible-jsonrpc-server/     # XDG_DATA_HOME — installed, survives cache purge
└── venv/<server-version>/                 # one venv per pinned version (coexist)
    ├── bin/python, pip, ansible-core + deps
    └── .lock                              # flock: first-run bootstrap guard

~/.cache/ansible-jsonrpc-server/           # XDG_CACHE_HOME — re-fetchable, safe to purge
└── collections/<collection>/<version>-<hash>/   # content-addressed; shared across venv versions

~/.local/state/ansible-jsonrpc-server/     # XDG_STATE_HOME — logs/locks, if any
```

- **Isolate ansible's own dirs.** The server points `ANSIBLE_HOME`, the collections
  path, and local/remote tmp at its own tree, so it never pollutes or collides with
  a real `~/.ansible` the user may already have — it stays self-contained.
- **One explicit override.** Honor the `XDG_*` vars; also accept
  `ANSIBLE_JSONRPC_SERVER_HOME` to relocate the whole tree at once (CI, sandboxes,
  read-only homes).

`ansible-core` is **fetched, never shipped** by the client (step 4 from PyPI) —
the licensing firewall (§9) holds.

#### 4.8.1 Collections — artifact-pinned at codegen, cached server-side

After bootstrap the server owns collection acquisition (replacing the TS cache),
but the **version + hash are pinned at codegen, not resolved at runtime** —
preserving today's reproducibility.

When the client's codegen generates a module binding, it embeds the **artifact
that module depends on**: `{collection, version, hash, url}` (exactly the pin the
current TS codegen already emits per module). `ansible.builtin.*` modules depend
on `ansible-core` (installed in bootstrap step 4) and carry no artifact. On
`run_action`, the client passes the module's artifact inline (a task-scoped
field, §4.5); the server then:

- **Checks the collections path** for `(collection, version)`; if present, skip.
- **Fetches by hash** otherwise — downloads the pinned tarball from `url`, verifies
  `hash`, extracts to the collections path. No runtime Galaxy resolution; the pin
  is authoritative (the same content-addressed fetch the TS cache does today,
  moved into the server).
- **Single-flight** per `(collection, version, hash)` — concurrent tasks naming
  the same missing collection share one fetch (the `Future`-per-key pattern,
  §4.7); evict on failure.

Transitive collection dependencies are resolved **at codegen** (the artifact set
a module needs is its closure), so the server never does dependency resolution —
it only fetches exactly the pinned artifacts it is handed. Collections live on a
**content-addressed collections path under `XDG_CACHE_HOME`** (the layout in §4.8),
never in `site-packages`. Keyed by `(collection, version, hash)` rather than server
version, one extracted copy is **shared across server/venv versions** and is safe
for a cache reaper to purge — re-fetched by hash on next use.

### 4.9 Concurrency: a process-per-task pool

The server is concurrent — one per client process, running multiple in-flight
tasks (across hosts, and on one host where the client issues them). It must **not**
thread the task path: ansible's controller state is process-global (`CLIARGS`, the
plugin loaders and their caches, the collection-finder config, the config cache —
§7), built for process isolation, not thread isolation. So the server uses
ansible's own model — a **bounded pool of worker processes, one task per process**:

- stdlib `concurrent.futures.ProcessPoolExecutor(max_workers=forks,
  mp_context=get_context("forkserver"), max_tasks_per_child=1)`. No external dep.
- A **forkserver**, started **before** the stdin-watcher thread (dodging the
  fork-after-threads hazard), **preloads ansible and runs `init_plugin_loader()`**
  at import time, so every worker forks from a warm, configured ansible via COW —
  **no per-task import** (the import lives in the persistent forkserver, not the
  workers; recycling re-forks from it).
- `max_tasks_per_child=1` recycles each worker after one task, so no ansible
  global state (loader caches, `CLIARGS`, `chdir`/env) leaks between tasks. Fork
  from the forkserver is cheap, so recycling costs ≈ a `fork()`, not an import.
  (`spawn` would re-import per task — rejected for that reason.)
- `max_workers` = the `forks` limit — concurrency cap and backpressure.

The **parent** (long-lived) owns the stdio seam, the fact/collection caches, and
single-flight. Per `run_action` it provisions facts (§4.7) and the module's
collection artifact (§4.8.1) **parent-side** (so the caches live in one place),
then submits a self-contained `(task + injected facts)` job to the pool. In the
first cut every child is a **native-connection** job — it does its own SSH
(sharing the `ControlMaster` socket via the filesystem) and returns a result, a
pure pool job with no callbacks. (The deferred delegate connection, §4.4, would
add a child→parent control pipe for `exec`/`put`/`fetch`; not needed now.)

### 4.10 Timeouts and cancellation

Both reduce to "kill the task's worker" — cheap because §4.9 isolates each task in
its own process.

- **Timeout.** A per-task `timeout` (`flags`, §4.5) is forwarded as ansible's
  **`task.timeout`** keyword — the worker self-aborts via SIGALRM
  (`TaskTimeoutError`, `task_executor.py:621`) and returns a failed result
  (`status: timed_out`, §4.3.3). The **parent also enforces a wall-clock deadline**
  on the worker's result future (slightly longer) and **kills the worker's
  process-group** on overrun — the authoritative backstop for hangs SIGALRM can't
  interrupt. The connect phase is separately bounded by the connection `timeout`
  var (§4.4). No implicit task timeout unless the client sets one.
- **Cancellation.** The client sends JSON-RPC **`$/cancelRequest(id)`**; the parent
  maps `id` → worker and **terminates its process-group** (SIGTERM→SIGKILL, so the
  ssh `ControlMaster` and children die too), returning `status: cancelled`.
  Ansible execution is blocking, so killing the isolated worker is the only
  reliable abort; already-applied remote side effects are not rolled back (as in
  ansible).

## 5. Options Considered

**Who runs the module (A/B/C).** (A) override `_execute_module` and route it back
to the client — keeps the client's pre-built closures but makes every language
reimplement the AnsiballZ/tmp/parse dance. (B, chosen) let ansible run
`_execute_module` over a real connection in the server — the client reimplements
nothing. (C) native execution but over a delegate connection — the client
implements only raw transport. B is the default; C survives as the *delegate*
connection tier (§4.4) for callers who want in-language transport. A is rejected:
it doesn't generalize across languages, and its sole rationale ("avoid the full
ansible runtime for modules") is hollow — the server imports `ansible-core` for
`ActionBase` regardless.

**Server lifetime.** Ephemeral-per-task was considered (simplest lifecycle, free
isolation) but pays the `ansible-core` import on every task and loses
`ControlPersist`/fact-cache reuse. Rejected for a **long-lived 1:1** server; the
lifecycle cost is contained by the §4.6 teardown, and 1:1 ownership removes the
multi-process tracking that makes long-lived servers hard.

**Seam: stdio vs unix socket.** stdio chosen — free lifeline, no socket-file
lifecycle, portable, enforces 1:1 ownership, and matches the proven LSP/DAP
shape. The JSON-RPC carrier supports a socket backend too, so stdio→socket is a
later swap, not a redesign.

**Wire: JSON-RPC 2.0 vs bespoke.** JSON-RPC 2.0 + Content-Length framing (LSP
base) chosen over a hand-rolled frame protocol. Hand-rolling was fine while
single-in-flight, but the concurrent server (§4.9) needs concurrent bidirectional
dispatch — correlation, interleaving, cancellation — which off-the-shelf JSON-RPC
libraries solve in every target language, keeping bindings thin. We own only the
typed `params`/`result` schema, not the transport engine.

**In-process vs separate process.** Embedding Python in the client (pythonia/
N-API) is rejected: it welds lifecycles and places GPL `ansible-core` in the
client's address space, collapsing the licensing firewall (§9). A spawned
separate process behind stdio is the boundary.

**Distribution thesis.** This reverses `design-distribution-and-cache.md`'s
TypeScript-only controller. Accepted: hosting real ansible content is impossible
without `ansible-core` at runtime, and the win is deleting every TypeScript
reimplementation of ansible.

**Concurrency (resolved).** The server is concurrent, one per client process —
not one per host (which wouldn't help: concurrency is per task on a host, so
same-host tasks overlap regardless). Because ansible's controller state is
process-global (not thread-safe), the task path runs in a **process-per-task
pool** (`ProcessPoolExecutor` over a `forkserver` context with ansible preloaded,
`max_tasks_per_child=1`, `max_workers=forks`), detailed in §4.9. Shared-host facts
and collections are handled by the parent-side single-flight caches (§4.7, §4.8.1),
not by the topology.

## 6. What This Retires, What Survives

**Retired** (the server + ansible now own execution): the TypeScript module
builder and codegen closures, the payload/artifact cache, `remote.ts` and its
AnsiballZ loader, the `dispatchImpl`/`DISPATCHERS` table, and `FACT_PROBE` /
`HostFacts`.

**Survives from Plan 1** (`server/`): the frame codec (`protocol.py` — retarget
socket→stdio, add id tagging); the context builder (`context.py` — extended to
configure the connection + become from the spec); the harness shape
(`harness.py` — drop the `_execute_module` override, add connection setup); the
blocking request/response (`rpc.py` — repurposed for *delegate*-mode callbacks
only); `ShimConnection` (`connection.py` — repurposed as the registered
**delegate** connection plugin). `__main__.py` is rewritten for stdio + the
long-lived loop + the lifeline watcher. Tests are largely rewritten around
native execution (real/mock connection) with a separate delegate-callback suite.

## 7. Limitations and Risks

**Full ansible runtime in the server.** The server runs all of `ansible-core` —
larger runtime footprint and the internal-API coupling (`ActionBase`,
`action_loader`, `connection_loader`, `_configure_module`, `_execute_module`,
`PlayContext`/`Task` construction) is now load-bearing at runtime, re-verified
each `ansible-core` bump. Same version-sensitivity class as the old build-time
`modify_module` use, moved to runtime.

**Context-object fidelity.** Plugins read many `Task`/`PlayContext` attributes;
an incomplete synthesis surfaces as `AttributeError` mid-run. The builder must
track what real plugins touch.

**Connection configuration surface.** Mapping a neutral connection spec onto
each ansible connection plugin's options (ssh args, become, interpreter
discovery) is broad; get ssh + local right first, widen per plugin.

**Orphan edge cases.** The §4.6 stack is strong but not provably total (e.g., a
frozen server that stops reading stdin); the watcher thread + `PR_SET_PDEATHSIG`
+ process-group kill mitigate, and a client-side kill-on-exit is the first line.

**Firewall discipline.** The licensing boundary (§9) holds only while enforced:
no ansible in the client, no ansible types on the wire, server spawned not
embedded. Enforce in CI.

**Performance.** Long-lived amortizes import; per-task cost is ansible's own.
stdio frames are local and cheap next to SSH.

## 8. Open Questions

- **Protocol schema source:** JSON Schema vs TypeSpec; `msgspec` vs TypedDict on
  the server. (Wire format is settled — JSON-RPC 2.0; this is only the
  param/result type-gen tool.)
- **`Task`/`PlayContext` attribute fidelity:** the full set plugins read beyond
  the dispatch family — a discovery-time concern (run plugins, fix `None`s).

## 9. Licensing (GPL)

`ansible-core` is GPL-3.0 (strong copyleft, no linking exception). This is not
legal advice; the analysis follows the FSF's combination-vs-aggregation
interpretation, which is not settled law. Counsel if the boundary is
commercially material.

- **`ansible-core` is fetched, not shipped** by the client — mere aggregation on
  the user's disk (GPLv3 §5).
- **The server is GPL-3.0.** It imports and runs `ansible-core` in-process. This
  model is *cleaner* than Plan 1: the client no longer builds or handles ansible
  artifacts at all — it submits a task and reads a result.
- **The client is not forced to GPL.** It is a separate process that speaks only
  the neutral stdio protocol — arm's-length aggregation. Spawning the server is
  use, not derivation (GPLv3 §2). The copyleft attaches to the server and does
  not cross the pipe.
- **The protocol is neutral** — JSON frames of command strings, arg/result
  dicts, base64 bytes; no `ansible-core` objects on the wire. In **delegate**
  mode the client moves opaque AnsiballZ *bytes* it did not build — a dumb pipe,
  not a derivative.
- **User connection plugins** loaded into the server that subclass ansible's
  `ConnectionBase` are themselves derivative works of GPL `ansible-core`; that is
  the plugin author's licensing concern, contained to the server process.
- **Separation:** the server is its own GPL-licensed artifact; the client bundles
  no GPL and imports neither `ansible-core` nor the server source. Enforce with a
  CI guard. A separate repo is not required; a separate work and artifact are
  (monorepo subdir with its own LICENSE is sufficient).
- **This is why the process/stdio boundary is load-bearing, not incidental.**
  In-process embedding would place GPL in the client's address space and make the
  whole binding a combined work.

### 9.1 Protecting the library's users

Copyleft triggers on distribution, not use (GPLv3 §2). A user who runs a
binding — even inside a proprietary product — triggers nothing; their code is a
separate process across the pipe from the server. Shipping a proprietary product
on top of a binding leaves that product closed; only redistributing the GPL
server/ansible carries GPL *compliance* obligations (notices, source) for those
components, minimized by fetch-not-ship. The protection holds only while the
boundary holds at their deployment: embedding the server in-process forfeits it,
which is why spawned-separate-process is the only supported shape.

## 10. Decision

Adopt the standalone Ansible execution server. A long-lived, 1:1, GPL-3.0 Python
binary owns `ansible-core` and runs all execution natively — connection
(`connection_loader`, native + user plugins + a delegate escape hatch), module
build and transfer (`_execute_module`), action plugins, and facts. Language
bindings are thin clients that spawn and own the server, submit a task + a
connection spec over stdin/stdout (length-prefixed, id-tagged JSON; LSP/DAP
shape; transport-agnostic framing), and read a result. The server's lifetime is
tied to its owner by a stdin-EOF lifeline plus OS-level reinforcement. The
TypeScript module machinery — codegen closures, cache, `remote.ts`, dispatch,
`FACT_PROBE` — is retired. GPL copyleft is confined to the server by the process
boundary, protecting both the bindings and the library's users. Accept the
reversal of the TypeScript-only-controller thesis as the price of never
reimplementing ansible in any language again.
