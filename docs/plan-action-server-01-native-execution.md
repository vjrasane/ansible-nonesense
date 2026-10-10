# Plan 1 — Native Execution over JSON-RPC stdio

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Version control:** This repo uses `jj`, not `git`. Commit steps use `jj commit`. Never run `git`.

**Goal:** Make the `server/` package speak JSON-RPC 2.0 over stdin/stdout and execute one builtin module on a `local` connection *natively* (real `_execute_module`, no override), returning a status-tagged result frame.

**Architecture:** Reworks the committed Plan-1 `server/` code from the old model (length-prefix socket + `_execute_module` override + `ShimConnection`) to the new Path B: a JSON-RPC/Content-Length stdio server whose `runAction` handler builds ansible context, configures a real `connection_loader` connection via `set_options`, runs the real action plugin (or `ansible.legacy.normal` for plain modules), and shapes the result. Synchronous and single-task — the fork pool (Plan 2) wraps this same handler later, so the handler is written to be pool-ready (a pure `params → result` function).

**Tech Stack:** Python ≥3.11, `ansible-core` 2.19.13, `pytest`, JSON-RPC 2.0 + `Content-Length` framing over stdio.

**Spec:** `docs/design-action-plugin-harness.md` (§4.3 execution, §4.3.1 context, §4.3.2 flags, §4.3.3 result, §4.4 connections, §4.5 seam).

## Global Constraints

- Python floor `>=3.11`; `ansible-core==2.19.13`; package `sensible_server` under `server/` (already renamed).
- Wire = **JSON-RPC 2.0 + `Content-Length` framing** over stdio. The server **redirects its own `sys.stdout` to stderr at startup** and writes the protocol on a saved fd, so stray `print()` can't corrupt frames.
- `init_plugin_loader()` must run **before** any loader use.
- Connection config + credentials go through `connection.set_options(var_options=<ansible var bag>)`, **not** `PlayContext`. The server forwards the var bag **without interpreting it** (connection-agnostic).
- Result `status` ∈ `ok | failed | unreachable | skipped` (this plan; `timed_out`/`cancelled` arrive in Plan 5). A **harness/protocol failure** (couldn't produce a result) is returned as a **JSON-RPC `error` object**, which is the spec's `status: error`.
- `no_log` redaction uses ansible's own sentinel `VALUE_SPECIFIED_IN_NO_LOG_PARAMETER`.
- Deferred this plan (leave `server/sensible_server/connection.py` and `rpc.py` in place, unused): delegate connection, server→client callbacks, fork pool, facts, collections, lifecycle, bootstrap.

## Review Focus

- **A plain module (no action plugin)** — must resolve to `ansible.legacy.normal` and still run (`ping`). Pinned in Task 4.
- **A module that fails** (`command` with `rc!=0` / bad args) — must become `status: failed` with the module's `msg`, not a JSON-RPC error. Pinned in Task 4.
- **`no_log` task flag** — result/invocation must be redacted before it leaves the server. Pinned in Task 4.
- **A malformed/unknown method or bad params** — must become a JSON-RPC `error` and leave the server alive for the next request. Pinned in Task 5.
- **Stray `print()` during execution** — must not corrupt the framed stream (stdout redirected). Pinned in Task 6.

---

### Task 1: JSON-RPC + Content-Length codec

**Files:**
- Rewrite: `server/sensible_server/protocol.py`
- Rewrite test: `server/tests/test_protocol.py`

**Interfaces:**
- Produces: `read_message(stream) -> dict | None` (reads one `Content-Length`-framed JSON object; `None` on clean EOF), `write_message(stream, obj: dict) -> None`. `stream` is a binary buffered IO (`BufferedReader`/`BufferedWriter`).

- [ ] **Step 1: Write the failing test**

`server/tests/test_protocol.py` (replace the whole file):
```python
import io
from sensible_server.protocol import read_message, write_message


def _pipe(obj):
    buf = io.BytesIO()
    write_message(buf, obj)
    buf.seek(0)
    return buf


def test_roundtrip_content_length_framed():
    msg = {"jsonrpc": "2.0", "id": 1, "method": "runAction", "params": {"x": "héllo"}}
    assert read_message(_pipe(msg)) == msg


def test_frame_has_content_length_header():
    buf = io.BytesIO()
    write_message(buf, {"jsonrpc": "2.0", "id": 1, "result": {}})
    raw = buf.getvalue()
    assert raw.startswith(b"Content-Length: ")
    assert b"\r\n\r\n" in raw


def test_clean_eof_returns_none():
    assert read_message(io.BytesIO(b"")) is None
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd server && python -m pytest tests/test_protocol.py -v`
Expected: FAIL — `ImportError: cannot import name 'read_message'`

- [ ] **Step 3: Implement the codec**

`server/sensible_server/protocol.py` (replace the whole file):
```python
import json

_HEADER_SEP = b"\r\n\r\n"


def write_message(stream, obj):
    body = json.dumps(obj).encode("utf-8")
    stream.write(b"Content-Length: %d\r\n\r\n" % len(body))
    stream.write(body)
    stream.flush()


def read_message(stream):
    headers = _read_headers(stream)
    if headers is None:
        return None
    length = int(headers["content-length"])
    body = _read_exactly(stream, length)
    if body is None:
        raise ConnectionError("truncated message body")
    return json.loads(body.decode("utf-8"))


def _read_headers(stream):
    buf = b""
    while _HEADER_SEP not in buf:
        chunk = stream.read(1)
        if not chunk:
            return None if not buf else _raise("truncated headers")
        buf += chunk
    headers = {}
    for line in buf[: -len(_HEADER_SEP)].split(b"\r\n"):
        if not line:
            continue
        k, _, v = line.partition(b":")
        headers[k.decode().strip().lower()] = v.decode().strip()
    return headers


def _read_exactly(stream, n):
    buf = b""
    while len(buf) < n:
        chunk = stream.read(n - len(buf))
        if not chunk:
            return None
        buf += chunk
    return buf


def _raise(msg):
    raise ConnectionError(msg)
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd server && python -m pytest tests/test_protocol.py -v`
Expected: PASS (3 passed)

- [ ] **Step 5: Commit**

```bash
jj commit server/ -m "refactor(server): JSON-RPC Content-Length codec (replaces length-prefix framing)"
```

---

### Task 2: Context builder with flags + real connection

**Files:**
- Rewrite: `server/sensible_server/context.py`
- Rewrite test: `server/tests/test_context.py`

**Interfaces:**
- Consumes: nothing from earlier tasks.
- Produces: `build_execution(host, fqcn, args, task_vars, flags) -> (plugin, task_vars)` where `host` is `{"connection": {"type": str, "vars": dict}, "become": dict}`, `flags` is `{"check_mode"?, "diff"?, "no_log"?, "verbosity"?}` (all optional). Returns the instantiated action plugin (real connection already attached + configured via `set_options`) and the effective `task_vars`. Internally builds `Play()`/`Block`/`Task.load` (with flag keywords), `PlayContext`, `Templar`, resolves the plugin via `action_loader.get(fqcn)` falling back to `ansible.legacy.normal`.

- [ ] **Step 1: Write the failing test**

`server/tests/test_context.py` (replace the whole file):
```python
import sys
from sensible_server.context import build_execution

HOST = {"connection": {"type": "local", "vars": {}}, "become": {}}


def test_builds_plugin_with_configured_local_connection():
    plugin, task_vars = build_execution(
        HOST, "ansible.builtin.ping", {}, {"ansible_python_interpreter": sys.executable}, {}
    )
    assert plugin._connection is not None
    assert plugin._connection._shell is not None          # connection configured
    assert task_vars["ansible_python_interpreter"] == sys.executable


def test_flags_land_on_task():
    plugin, _ = build_execution(
        HOST, "ansible.builtin.command", {"_raw_params": "echo x"},
        {}, {"check_mode": True, "diff": True, "no_log": True},
    )
    assert plugin._task.check_mode is True
    assert plugin._task.diff is True
    assert plugin._task.no_log is True
    # parent-play scaffolding the module path reads (spike finding)
    assert plugin._task._parent._play._action_groups == {}


def test_plain_module_falls_back_to_normal_action():
    # ping has no action plugin → the generic 'normal' action
    plugin, _ = build_execution(HOST, "ansible.builtin.ping", {}, {}, {})
    assert type(plugin).__module__.endswith("action.normal")
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd server && python -m pytest tests/test_context.py -v`
Expected: FAIL — `ImportError: cannot import name 'build_execution'`

- [ ] **Step 3: Implement the builder**

`server/sensible_server/context.py` (replace the whole file):
```python
import ansible.plugins.loader as loader
from ansible.parsing.dataloader import DataLoader
from ansible.playbook.play import Play
from ansible.playbook.block import Block
from ansible.playbook.task import Task
from ansible.playbook.play_context import PlayContext
from ansible.template import Templar

_FLAG_KEYWORDS = ("check_mode", "diff", "no_log")


def build_execution(host, fqcn, args, task_vars, flags):
    loader.init_plugin_loader()
    dl = DataLoader()

    play = Play.load({}, variable_manager=None, loader=dl)
    block = Block(play=play)
    task_data = {"action": fqcn, "args": args}
    for kw in _FLAG_KEYWORDS:
        if kw in flags:
            task_data[kw] = flags[kw]
    task = Task.load(task_data, block=block)

    play_context = PlayContext()
    templar = Templar(loader=dl, variables=task_vars)

    conn_spec = host.get("connection", {})
    connection = loader.connection_loader.get(conn_spec["type"], play_context, None)
    connection.set_options(var_options=conn_spec.get("vars", {}))

    become_vars = host.get("become", {})
    if become_vars:
        become = loader.become_loader.get(become_vars.get("ansible_become_method", "sudo"))
        become.set_options(var_options=become_vars)
        connection.become = become

    cls = loader.action_loader.get(fqcn, class_only=True) or loader.action_loader.get(
        "ansible.legacy.normal", class_only=True
    )
    plugin = cls(task, connection, play_context, dl, templar, shared_loader_obj=loader)
    return plugin, task_vars
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd server && python -m pytest tests/test_context.py -v`
Expected: PASS (3 passed)

- [ ] **Step 5: Commit**

```bash
jj commit server/ -m "feat(server): context builder with flags + real connection via set_options"
```

---

### Task 3: Result shaping

**Files:**
- Create: `server/sensible_server/result.py`
- Test: `server/tests/test_result.py`

**Interfaces:**
- Produces: `shape_result(raw: dict, no_log: bool) -> dict` returning `{"status", "changed", "result", "warnings", "deprecations"}`; `status_from_exception(exc) -> (status: str, raw: dict)` mapping ansible exceptions to `(status, result_dict)` via `result_dict_from_exception`.

- [ ] **Step 1: Write the failing test**

`server/tests/test_result.py`:
```python
from sensible_server.result import shape_result, status_from_exception
from ansible.errors import AnsibleConnectionFailure, AnsibleActionFail


def test_ok_and_changed_lifted():
    out = shape_result({"changed": True, "cmd": "echo", "stdout": "hi"}, no_log=False)
    assert out["status"] == "ok"
    assert out["changed"] is True
    assert out["result"]["stdout"] == "hi"


def test_failed_status():
    out = shape_result({"failed": True, "msg": "boom"}, no_log=False)
    assert out["status"] == "failed"
    assert out["result"]["msg"] == "boom"


def test_unreachable_status():
    out = shape_result({"unreachable": True, "msg": "no route"}, no_log=False)
    assert out["status"] == "unreachable"


def test_warnings_surfaced():
    out = shape_result({"changed": False, "warnings": ["w1"], "deprecations": ["d1"]}, no_log=False)
    assert out["warnings"] == ["w1"]
    assert out["deprecations"] == ["d1"]


def test_no_log_redacts_result_values():
    out = shape_result({"changed": True, "secret": "hunter2", "msg": "done"}, no_log=True)
    assert "hunter2" not in str(out["result"])
    assert out["changed"] is True            # preserved flags survive redaction


def test_exception_mapping():
    status, raw = status_from_exception(AnsibleConnectionFailure("down"))
    assert status == "unreachable"
    status, raw = status_from_exception(AnsibleActionFail("nope"))
    assert status == "failed"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd server && python -m pytest tests/test_result.py -v`
Expected: FAIL — `ModuleNotFoundError: No module named 'sensible_server.result'`

- [ ] **Step 3: Implement result shaping**

`server/sensible_server/result.py`:
```python
from ansible.errors import AnsibleConnectionFailure, AnsibleActionSkip, AnsibleActionFail
from ansible._internal._errors import _error_utils

_REDACTED = "VALUE_SPECIFIED_IN_NO_LOG_PARAMETER"
_PRESERVE = {"changed", "failed", "unreachable", "skipped", "warnings",
             "deprecations", "msg", "exception", "attempts", "retries"}


def shape_result(raw, no_log):
    raw = dict(raw or {})
    if raw.get("unreachable"):
        status = "unreachable"
    elif raw.get("failed"):
        status = "failed"
    elif raw.get("skipped"):
        status = "skipped"
    else:
        status = "ok"
    changed = bool(raw.get("changed", False))
    warnings = list(raw.get("warnings") or [])
    deprecations = list(raw.get("deprecations") or [])
    result = _redact(raw) if no_log else raw
    return {"status": status, "changed": changed, "result": result,
            "warnings": warnings, "deprecations": deprecations}


def _redact(raw):
    return {k: (v if k in _PRESERVE else _REDACTED) for k, v in raw.items()}


def status_from_exception(exc):
    raw = _error_utils.result_dict_from_exception(exc)
    if isinstance(exc, AnsibleConnectionFailure):
        return "unreachable", raw
    if isinstance(exc, AnsibleActionSkip):
        return "skipped", raw
    if isinstance(exc, AnsibleActionFail):
        return "failed", raw
    raw.setdefault("failed", True)
    return "failed", raw
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd server && python -m pytest tests/test_result.py -v`
Expected: PASS (6 passed). If `result_dict_from_exception`'s import path differs in 2.19.13, resolve it with `python -c "from ansible._internal._errors import _error_utils; print(_error_utils.result_dict_from_exception)"` and fix the import — do not stub it.

- [ ] **Step 5: Commit**

```bash
jj commit server/ -m "feat(server): result shaping (status/changed/warnings, no_log redaction, exception mapping)"
```

---

### Task 4: Native runAction handler

**Files:**
- Rewrite: `server/sensible_server/harness.py`
- Rewrite test: `server/tests/test_harness.py`

**Interfaces:**
- Consumes: `build_execution` (Task 2), `shape_result`/`status_from_exception` (Task 3).
- Produces: `run_action(params: dict) -> dict` — a pure `params → result-frame` function (pool-ready). `params` = `{host, fqcn, args, vars, flags?}`. Runs the plugin natively (`plugin.run`), returns the shaped result frame. Ansible exceptions are mapped to a `failed`/`unreachable`/`skipped` result; it does **not** raise for task failures (only truly unexpected errors propagate, to become a JSON-RPC error in Task 5).

- [ ] **Step 1: Write the failing test**

`server/tests/test_harness.py` (replace the whole file):
```python
import sys
from sensible_server.harness import run_action

LOCAL = {"connection": {"type": "local", "vars": {}}, "become": {}}
VARS = {"ansible_python_interpreter": sys.executable}


def _params(fqcn, args, flags=None):
    return {"host": LOCAL, "fqcn": fqcn, "args": args, "vars": VARS, "flags": flags or {}}


def test_ping_ok():
    out = run_action(_params("ansible.builtin.ping", {}))
    assert out["status"] == "ok"
    assert out["result"]["ping"] == "pong"


def test_command_changed_and_stdout():
    out = run_action(_params("ansible.builtin.command", {"_raw_params": "echo hi"}))
    assert out["status"] == "ok" and out["changed"] is True
    assert out["result"]["stdout"] == "hi"


def test_failing_command_is_failed_not_exception():
    out = run_action(_params("ansible.builtin.command", {"_raw_params": "false"}))
    assert out["status"] == "failed"
    assert out["result"].get("rc") == 1


def test_no_log_redacts():
    out = run_action(_params("ansible.builtin.command",
                             {"_raw_params": "echo secret"}, flags={"no_log": True}))
    assert "secret" not in str(out["result"])
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd server && python -m pytest tests/test_harness.py -v`
Expected: FAIL — `run_action` signature/behavior differs (old `run_action(sock, msg)` with the `_execute_module` override).

- [ ] **Step 3: Implement the handler**

`server/sensible_server/harness.py` (replace the whole file):
```python
from ansible.errors import AnsibleError
from .context import build_execution
from .result import shape_result, status_from_exception


def run_action(params):
    flags = params.get("flags") or {}
    no_log = bool(flags.get("no_log", False))
    plugin, task_vars = build_execution(
        params["host"], params["fqcn"], params.get("args") or {},
        params.get("vars") or {}, flags,
    )
    try:
        raw = plugin.run(task_vars=task_vars)
    except AnsibleError as exc:               # task-level failures: map, don't raise
        status, raw = status_from_exception(exc)
        shaped = shape_result(raw, no_log)
        shaped["status"] = status
        return shaped
    return shape_result(raw, no_log)
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd server && python -m pytest tests/test_harness.py -v`
Expected: PASS (4 passed) — real `ansible.builtin.ping`/`command` run on `local`, no override.

- [ ] **Step 5: Commit**

```bash
jj commit server/ -m "feat(server): native runAction handler (real _execute_module, no override)"
```

---

### Task 5: JSON-RPC stdio server loop

**Files:**
- Rewrite: `server/sensible_server/__main__.py`
- Create: `server/sensible_server/server.py`
- Test: `server/tests/test_server.py`

**Interfaces:**
- Consumes: `read_message`/`write_message` (Task 1), `run_action` (Task 4).
- Produces: `serve(in_stream, out_stream) -> None` — reads JSON-RPC requests, dispatches `runAction` → `run_action`, replies `{"jsonrpc":"2.0","id":id,"result":<frame>}`; unexpected handler exceptions and unknown methods/bad params → `{"jsonrpc":"2.0","id":id,"error":{"code","message","data"}}`; `shutdown` notification ends the loop; EOF ends the loop. `__main__` redirects `sys.stdout`→stderr, then `serve(saved_stdin, saved_stdout)`.

- [ ] **Step 1: Write the failing test**

`server/tests/test_server.py`:
```python
import io
import sys
from sensible_server.protocol import read_message, write_message
from sensible_server.server import serve

LOCAL = {"connection": {"type": "local", "vars": {}}, "become": {}}
VARS = {"ansible_python_interpreter": sys.executable}


def _drive(requests):
    inbuf = io.BytesIO()
    for r in requests:
        write_message(inbuf, r)
    inbuf.seek(0)
    outbuf = io.BytesIO()
    serve(inbuf, outbuf)
    outbuf.seek(0)
    out = []
    while True:
        m = read_message(outbuf)
        if m is None:
            break
        out.append(m)
    return out


def test_run_action_request_gets_result():
    reqs = [
        {"jsonrpc": "2.0", "id": 1, "method": "runAction",
         "params": {"host": LOCAL, "fqcn": "ansible.builtin.ping", "args": {}, "vars": VARS}},
        {"jsonrpc": "2.0", "method": "shutdown"},
    ]
    out = _drive(reqs)
    assert out[0]["id"] == 1
    assert out[0]["result"]["status"] == "ok"
    assert out[0]["result"]["result"]["ping"] == "pong"


def test_unknown_method_is_jsonrpc_error_and_survives():
    reqs = [
        {"jsonrpc": "2.0", "id": 1, "method": "nope", "params": {}},
        {"jsonrpc": "2.0", "id": 2, "method": "runAction",
         "params": {"host": LOCAL, "fqcn": "ansible.builtin.ping", "args": {}, "vars": VARS}},
        {"jsonrpc": "2.0", "method": "shutdown"},
    ]
    out = _drive(reqs)
    assert out[0]["id"] == 1 and "error" in out[0]      # unknown method → error
    assert out[1]["id"] == 2 and out[1]["result"]["status"] == "ok"  # survived
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd server && python -m pytest tests/test_server.py -v`
Expected: FAIL — `ModuleNotFoundError: No module named 'sensible_server.server'`

- [ ] **Step 3: Implement the server loop**

`server/sensible_server/server.py`:
```python
import traceback
from .protocol import read_message, write_message
from .harness import run_action

_METHODS = {"runAction": run_action}


def serve(in_stream, out_stream):
    while True:
        msg = read_message(in_stream)
        if msg is None:
            return
        method = msg.get("method")
        if method == "shutdown":
            return
        req_id = msg.get("id")
        handler = _METHODS.get(method)
        if handler is None:
            _error(out_stream, req_id, -32601, "method not found: %s" % method)
            continue
        try:
            result = handler(msg.get("params") or {})
            write_message(out_stream, {"jsonrpc": "2.0", "id": req_id, "result": result})
        except Exception as exc:  # noqa: BLE001 — harness failure → JSON-RPC error
            _error(out_stream, req_id, -32000, str(exc), traceback.format_exc())


def _error(out_stream, req_id, code, message, data=None):
    err = {"code": code, "message": message}
    if data is not None:
        err["data"] = data
    write_message(out_stream, {"jsonrpc": "2.0", "id": req_id, "error": err})
```

`server/sensible_server/__main__.py` (replace the whole file):
```python
import os
import sys
from .server import serve


def main():
    # Protect the protocol stream: keep stdin/stdout on private fds, point
    # sys.stdout at stderr so stray prints can't corrupt frames.
    in_fd = os.dup(sys.stdin.fileno())
    out_fd = os.dup(sys.stdout.fileno())
    sys.stdout = sys.stderr
    with os.fdopen(in_fd, "rb", buffering=0) as in_stream, \
            os.fdopen(out_fd, "wb", buffering=0) as out_stream:
        serve(in_stream, out_stream)


if __name__ == "__main__":
    main()
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd server && python -m pytest tests/test_server.py -v`
Expected: PASS (2 passed)

- [ ] **Step 5: Commit**

```bash
jj commit server/ -m "feat(server): JSON-RPC stdio serve loop + stdout-protected entry point"
```

---

### Task 6: End-to-end over a real process

**Files:**
- Create: `server/tests/test_e2e.py`
- Modify: `server/sensible_server/connection.py:1` and `server/sensible_server/rpc.py:1` (prepend a deferred-note comment; they are unused this plan)

**Interfaces:**
- Consumes: the running `python -m sensible_server` process; `read_message`/`write_message`.

- [ ] **Step 1: Write the failing test**

`server/tests/test_e2e.py`:
```python
import subprocess
import sys
from sensible_server.protocol import read_message, write_message

LOCAL = {"connection": {"type": "local", "vars": {}}, "become": {}}
VARS = {"ansible_python_interpreter": sys.executable}


def test_spawned_server_runs_ping_and_stray_print_does_not_corrupt():
    proc = subprocess.Popen(
        [sys.executable, "-m", "sensible_server"],
        stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
    )
    try:
        write_message(proc.stdin, {
            "jsonrpc": "2.0", "id": 1, "method": "runAction",
            "params": {"host": LOCAL, "fqcn": "ansible.builtin.command",
                       "args": {"_raw_params": "echo hi"}, "vars": VARS},
        })
        reply = read_message(proc.stdout)
        write_message(proc.stdin, {"jsonrpc": "2.0", "method": "shutdown"})
        proc.wait(timeout=30)
    finally:
        if proc.poll() is None:
            proc.kill()
    assert reply["id"] == 1
    assert reply["result"]["status"] == "ok"
    assert reply["result"]["result"]["stdout"] == "hi"   # frame uncorrupted
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd server && timeout 60 python -m pytest tests/test_e2e.py -v`
Expected: FAIL — collection error until the file exists; then it drives the real process.

- [ ] **Step 3: Add the deferred notes (no logic change)**

Prepend to `server/sensible_server/connection.py`:
```python
# DEFERRED (Plan: delegate connection). Unused in native execution; retained for
# the future delegate transport (server→client exec/put/fetch). See
# docs/design-action-plugin-harness.md §4.4.
```
Prepend the same style note to `server/sensible_server/rpc.py` (delegate callbacks only).

- [ ] **Step 4: Run test + full suite to verify pass**

Run: `cd server && timeout 90 python -m pytest -v`
Expected: PASS (all tasks' tests green; the e2e drives a spawned `python -m sensible_server`).

- [ ] **Step 5: Commit**

```bash
jj commit server/ -m "test(server): end-to-end JSON-RPC runAction over a spawned process"
```
