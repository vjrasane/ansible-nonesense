# Design: Running Ansible Modules from a TypeScript Runtime Without Ansible

**Status:** Draft, based on a working proof of concept
**Scope:** `packages/core` execution layer

## 1. Summary

We want to use Ansible's module library (`apt`, `file`, `user`, `systemd`, the collections) from a TypeScript program that owns orchestration, inventory, and control flow. Today we do that by spawning an `ansible` process per task, which costs seconds per call and forces Ansible's execution model on us.

The plan is to stop treating Ansible as an executor and use it only as a **module packager**. At build time, a pinned `ansible-core` produces a self-contained Python payload for each module we care about. At runtime, our TypeScript controller ships those payloads over its own persistent SSH connections, runs them with the target's `python3`, and reads JSON back. `ansible-core` is not installed or invoked on the controller at runtime.

The proof of concept shows a steady-state cost of roughly 340 ms per module call over SSH to a small ARM host, and 217 ms locally, including real work by the `setup` module. The price is that Ansible's controller-side behaviour, roughly thirty **action plugins**, has to be reimplemented by us. Most of it is small; a handful of pieces need care.

## 2. Background

### 2.1 How Ansible actually executes a module

Ansible modules do not run on the controller. For a task like `apt: name=nginx`, the controller:

1. Reads `apt.py` and walks its `from ansible.module_utils... import` statements recursively (AST-based).
2. Zips the module plus that dependency closure, base64-encodes it, and embeds it in a small Python bootstrap script together with the task arguments as JSON. This artifact is called **AnsiballZ**.
3. Creates a temp directory on the target, copies the script there (or, with pipelining, pipes it into `python3 -`), executes it, and parses the single JSON document the module prints.

Steps 1 and 2 are repeated on every controller process start. Within one `ansible-playbook` run the zip is cached under `~/.ansible/tmp/ansible-local-<pid>/ansiballz_cache/`, but that directory is deleted at exit. With our current one-process-per-task approach we rebuild every payload from scratch on every call.

### 2.2 The current approach and its cost

Each task spawns `ansible` (or `ansible-playbook`), which pays for: Python interpreter startup, discovery and loading of every plugin type, config and inventory parsing, the AnsiballZ build, remote temp-dir creation and cleanup, and stdout parsing on our side. SSH connections are already reused via OpenSSH `ControlPersist`, so the handshake is *not* the dominant cost; the controller-side work is. Typical cost is one to several seconds per task, and it does not amortise.

Beyond speed, the CLI boundary shapes the design badly: inventory must exist in a form Ansible accepts, per-host independent control flow (`host.run(...)`) maps poorly onto Ansible's play/task model, and structured results have to be recovered from text output.

## 3. Goals and Non-Goals

**Goals**

- Sub-second, ideally low-hundreds-of-milliseconds, per-module call cost, amortised across a session.
- Inventory, variables, and control flow defined in TypeScript. No inventory files, no Jinja2, no play semantics.
- Per-host independent execution: hosts progress through their own procedures concurrently without waiting on each other.
- Access to the full Ansible module library, including collections, without porting module code.
- Structured, typed results and a stream of progress events.
- No `ansible-core` runtime dependency on the controller.

**Non-Goals**

- Playbook or YAML compatibility.
- Windows / PowerShell targets (separate bootstrap; out of scope for now).
- Network-device connection types (`network_cli`, `httpapi`).
- Reproducing Ansible's variable-precedence, handler, block, or strategy machinery.

## 4. Options Considered

### 4.1 Keep shelling out, tune configuration

Longer `ControlPersist`, `pipelining = True`, `gather_facts` off. Removes the temp-dir round trips but none of the per-process startup. Insufficient on its own; the settings are still worth applying to whatever transport we use.

### 4.2 Persistent Python sidecar using Ansible's internal API

Spawn one long-lived Python process that imports `ansible`, builds `Play`/`TaskQueueManager` objects on demand, and talks JSON over a pipe. This amortises interpreter start and plugin loading, and a callback plugin gives an event stream. We prototyped this (`ansible_sidecar.py`). Drawbacks: the internal API is unstable across minor releases; execution is serial per sidecar, so matching our per-host concurrency model requires forking per host inside the sidecar; and we inherit Ansible's execution model (its inventory, its templating, its tmp-dir handling) when we mainly want the modules. It remains a reasonable fallback if the chosen design hits a wall.

### 4.3 Mitogen

A third-party strategy plugin that keeps a Python interpreter alive on each target and streams modules into it. Fast, but it lags `ansible-core` releases, sometimes by months, and it still requires driving Ansible's CLI or API. Its remote-interpreter idea is worth borrowing later (see õ9).

### 4.4 Reimplement modules natively (pyinfra-style, possibly LLM-assisted)

Translate module code to TypeScript or Go. Rejected as the primary strategy:

- Modules run *on the target*. A native port either has to run there too, which means shipping a JS/Go runtime to every host instead of relying on the `python3` every distro already has, or has to be rewritten as controller-driven shell commands, which is a different program, not a translation.
- Everything depends on `module_utils/basic.py` (~2,000 lines: argspec validation, `run_command`, `atomic_move`, symbolic mode parsing, check/diff plumbing). It would need a faithful port first.
- Several core modules bind to native libraries (`apt` uses `python-apt`, `dnf` uses the dnf API, `user` uses `pwd`/`grp`/`spwd`); these need redesign, not translation.
- Behavioural fidelity is the value: a decade of accumulated edge-case fixes with no portable test suite. LLM translation makes typing cheap and verification no cheaper, and forks us from upstream fixes permanently.
- pyinfra is the honest reference for this path: a well-run project that, after years, has on the order of a hundred operations against Ansible's thousands.

### 4.5 Use `ansible-core` as a build-time packager (chosen)

Call `ansible.executor.module_common.modify_module()` as a library in a build step, cache the resulting payload per module, and have the TypeScript runtime ship it over its own SSH connection. Detailed below.

## 5. Design

### 5.1 Build time: payload generation

A Python build script (pinned via PEP 723 inline metadata to a specific `ansible-core` release, run with `uv`) generates one payload per module:

1. `init_plugin_loader()` so FQCN lookups (`ansible.builtin.setup`, `community.general.*`) resolve.
2. `module_loader.find_plugin_with_context(fqn)` to locate the module source.
3. `modify_module(fqn, path, sentinel_args, templar, task_vars={"ansible_python_interpreter": "/usr/bin/python3"}, module_compression="ZIP_DEFLATED")`. The interpreter value only feeds a shebang we discard; without it `modify_module` raises `InterpreterDiscoveryRequiredError`.
4. Locate the single line of the bootstrap that contains the sentinel; that is the params assignment. Replace its right-hand side with a placeholder.
5. Write `<fqn>.py.tmpl` to the payload cache, alongside the already-generated TypeScript argspec wrappers.

Payloads depend only on the module source and the `ansible-core`/collection versions, so the cache is keyed by version and rebuilt when the pin changes. The build script is the only place Python runs on the controller side, and it does not run at deploy time.

The build step also classifies each module: if a file with the same name exists under `plugins/action/` in `ansible-core` or the owning collection, the module has controller-side behaviour and is flagged (see õ6). Everything else is a plain module that goes through the generic path.

### 5.2 Runtime: controller components (TypeScript)

- **Transport.** One persistent SSH connection per host, held for the session, multiplexing exec channels. Initially this can be OpenSSH with `ControlMaster`; the intended end state is an in-process SSH library so the connection is owned by the runtime and not by a socket file.
- **Interpreter discovery.** Per-host configured `python` path, else a one-time `command -v python3` probe on first connect, cached for the session. This replaces Ansible's `interpreter_discovery.py`.
- **Payload rendering.** Load the template for the module, merge user args with the `_ansible_*` control keys (õ5.4), `JSON.stringify`, Python-string-quote, substitute into the placeholder. Pure string work.
- **Execution.** `python3 -` on the target with the rendered script on stdin; `sudo -n -H python3 -` (or another `become` prefix) for privilege escalation. Parse the last JSON document on stdout. Non-zero exit or no JSON becomes a structured error carrying stdout/stderr.
- **Facts store.** `setup` is an ordinary module returning `ansible_facts`; the runtime keeps them per host in whatever shape suits the DSL.
- **Action layer.** Implementations of the controller-side behaviours enumerated in õ6, written against the transport and the generic module executor.
- **Session lifecycle.** Connections and any remote temp state are tied to the host session object (`host.run(...)` boundaries), not to a global process.

### 5.3 Execution flow for one task

```
DSL call            ping`Ping ${context.host.name}`({})
    resolve        module fqn, action-plugin flag, host session
    if flagged     run action implementation (may call generic path 0..n times)
    generic path   render(template, args, control keys)
                    exec `python3 -` via host's SSH connection, stdin = script
                    parse JSON, map to typed result
    events         host_start / host_result emitted around the exec
```

### 5.4 Control keys

Ansible passes task-level settings to `AnsibleModule` as `_ansible_*` keys inside `ANSIBLE_MODULE_ARGS`. The proof of concept established that in 2.17 these are injected by the *action plugin*, not by `modify_module`, and that all of them are optional: modules run correctly with none present. The runtime supplies only what it needs:

| Key | Purpose | Default we use |
|---|---|---|
| `_ansible_check_mode` | dry run; unsupported modules exit `skipped` | from DSL |
| `_ansible_diff` | include `diff` in results where supported | true |
| `_ansible_no_log` | suppress arg logging (syslog, `invocation`) | true when args contain secrets |
| `_ansible_module_name` | log/error labelling | fqcn |
| `_ansible_version` | version-gated behaviour, deprecation text | pinned ansible-core version |
| `_ansible_remote_tmp` | base for module temp files | unset (`~/.ansible/tmp`) unless host overrides |
| `_ansible_tmpdir` | explicit staging dir; must share a filesystem with destinations for atomic renames | unset (module manages) |

Others (`_ansible_string_conversion_action`, `_ansible_shell_executable`, `_ansible_selinux_special_fs`, `_ansible_keep_remote_files`, `_ansible_syslog_facility`, `_ansible_verbosity`, `_ansible_debug`, `_ansible_socket`, `_ansible_ignore_unknown_opts`) stay at their in-module defaults until a concrete need appears.

## 6. What We Reimplement: Action Plugins

Ansible's per-task path is uniform except for one branch: if `plugins/action/<name>.py` exists, that code runs on the controller and decides what happens on the target; otherwise the generic `normal` action ships the module. The generic path is what õ5.2 implements once. The exceptions, about thirty files in `ansible-core` plus whatever collections add, fall into four patterns:

**No remote execution.** `debug`, `assert`, `fail`, `set_fact`, `set_stats`, `add_host`, `group_by`, `include_vars`, `pause`, `validate_argument_spec`, `meta`, `include_*`. These are not ports; they are native constructs of the DSL (`context.log`, `throw`, variables, control flow) that happen to share names with Ansible tasks. Nothing to ship.

**Transfer a local file, then run a module.** `copy`, `template`, `unarchive`, `script`, `assemble`, `patch`; `fetch` in reverse. The controller reads (and for `template`, renders) a local file, uploads it to a remote staging path over SFTP, then invokes the corresponding remote module (`copy.py`, `unarchive.py`) with `src` pointing at the staged file; the remote module handles mode, owner, backup, checksum, and the atomic move. One "upload then run module" helper covers the group. Template rendering uses our own templating, not Jinja2; `copy`'s recursive-directory mode and `template`'s trailing-newline and validation options are the fiddly parts.

**Choose which module to run.** `package`  `apt`/`dnf`/`yum` by facts; `service`  `systemd`/`sysvinit`/etc.; `dnf`/`yum`  `dnf`/`dnf5` by remote interpreter; `gather_facts` fans out to multiple fact modules. A lookup table in front of the generic path.

**Multi-step controller logic.** `reboot` (issue reboot, poll reconnect until uptime changes), `wait_for_connection`, `async_status` polling; `command`/`shell` normalise free-form arguments; `uri` uploads a local body file. Small, but each has timing and reconnect semantics to get right.

Also ours to provide, not tied to a specific plugin:

- **`become`.** Command-prefix construction (`sudo -n -H -S ...`, `su`, `doas`) and optional password over stdin. Ansible's become plugins are short command builders.
- **Remote temp directories** for the file-transfer group, including cleanup on failure and correct permissions when `become_user` differs from the login user.
- **Interpreter discovery** (õ5.2).
- **Async tasks**, if we want them: `async_wrapper.py` is itself a module that daemonises another module; supportable later.

## 7. Limitations and Risks

**We own the action layer, and it will lag Ansible.** Every behaviour in õ6 is hand-written, tested by us, and maintained by us. Upstream fixes to `copy.py`'s action plugin, for example, do not reach us. This is the central trade-off: we keep the module library for free and pay for the thin controller layer ourselves. Modules in collections that ship their own action plugins are unsupported until we implement or special-case them; the build step flags these so the gap is visible rather than silent.

**Targets still need Python.** The same requirement Ansible has, but worth stating: this design does not make targets agentless in any new sense. Module code from a given `ansible-core` release supports a defined range of target Python versions; very old or very new target interpreters can fail in ways Ansible would also fail.

**Native bindings on the target.** `apt` needs `python3-apt`, `dnf` needs the dnf Python API, SELinux modules need `libselinux` bindings. Same as Ansible; the failure mode is an import error in the module result.

**Internal API at build time.** `modify_module`, `init_plugin_loader`, and the bootstrap's layout are not public API. The 2.19 release rewrote the bootstrap and changed `modify_module`'s become-related parameters. The sentinel-based splitting is deliberately agnostic to variable names, but each version bump needs the build step re-verified. Because this runs at build time only, breakage is caught in CI, not on a host.

**Loss of Ansible semantics that some users may expect.** No Jinja2 in arguments, no `when`/`loop`/`register` idioms, no handlers, no variable precedence. These are intentional (the DSL replaces them) but rule out drop-in reuse of existing roles.

**Payload size and secrets.** Each call streams the full payload (275 KiB for `setup`, less for most modules) over SSH; fine on a LAN, noticeable over high-latency links (see õ9 for mitigation). Arguments are embedded in the script and therefore appear in the module's syslog line unless `_ansible_no_log` is set, and would appear in `ps` output if we ever switched from stdin to a temp file. Keep stdin delivery and set `no_log` for secret-bearing args.

**Concurrency and connection limits.** Per-host parallelism is bounded by SSH channel limits (`MaxSessions`, default 10) if many tasks are in flight to one host. Our per-host sequential model rarely hits this, but fan-out designs should respect it.

**Windows.** Out of scope; would require the PowerShell bootstrap and a different transport.

## 8. Validation So Far

Proof-of-concept script `ansiballz_test.py`, `ansible-core` 2.17.14:

| Measurement | Result |
|---|---|
| Build `ansible.builtin.setup` payload | 275 KiB, 0.40 s |
| Local execution, `setup` with `gather_subset=min` | 217 ms |
| SSH to aarch64 Debian 12 host, 5 runs, warm connection | 380, 341, 341, 339, 339 ms |
| Params splice via sentinel | works; params line is a Python string literal of JSON |
| `_ansible_*` keys | none injected by `modify_module`; module runs with none present |

Findings that changed the design: `init_plugin_loader()` is required for FQCN resolution; `ansible_python_interpreter` must be supplied to `modify_module`; control keys are optional and action-plugin-injected.

Still to verify before integration: `_ansible_check_mode` honoured by a mutating module (`file` with `state=directory`), idempotency on repeat, `--become` with `apt` (expect `python3-apt` dependency), and a collection module.

## 9. Future Work

- **Remote extraction cache.** Modify the bootstrap template (which we now own) so the target caches the unzipped module tree keyed by payload hash, skipping decode and unzip on repeat calls.
- **Persistent remote interpreter.** Keep one Python process alive per host over the SSH channel and stream module payloads into it, Mitogen-style. Removes interpreter startup and `module_utils` re-import; expected to move the per-call floor from hundreds to tens of milliseconds. Also enables live streaming of long-running command output, which the one-shot model cannot provide.
- **In-process SSH.** Replace OpenSSH `ControlMaster` with an SSH library so connection lifetime, retries, and multiplexing are controlled by the runtime.
- **Native fast paths.** If a handful of hot modules (`file`, `stat`, `command`) dominate wall time, hand-written native equivalents using the Python versions as specification, kept small and optional.
- **Async modules** via `async_wrapper`.

## 10. Decision

Proceed with õ4.5. Build the payload generator into the existing wrapper-generation pipeline, implement the generic executor and transport in `packages/core`, then the action layer in the order: file-transfer group, `become`, dispatch table, `reboot`/`wait_for_connection`. Keep the sidecar prototype (õ4.2) as a documented fallback but do not develop it further.
