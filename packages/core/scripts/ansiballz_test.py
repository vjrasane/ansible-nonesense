#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10,<3.13"
# dependencies = ["ansible-core>=2.17,<2.18"]
# ///
"""
Proof of concept: use ansible-core only as a packager.

  1. build   : modify_module() -> AnsiballZ wrapper, params line blanked   (needs ansible-core)
  2. render  : splice call-time args into the cached wrapper               (pure string ops)
  3. execute : pipe the script into `python3 -` on the target              (plain ssh, no ansible)
  4. parse   : the module prints one JSON document on stdout

Examples
  # local sanity check, no SSH involved
  ./ansiballz_test.py --local

  # remote, default module (setup) with minimal facts
  ./ansiballz_test.py --host user@web1

  # something with real args, run 5x to see the warm cost
  ./ansiballz_test.py --host web1 --module ansible.builtin.stat --args '{"path": "/etc/hostname"}' --repeat 5

  # privileged
  ./ansiballz_test.py --host web1 --module ansible.builtin.apt --args '{"name": "curl", "state": "present"}' --become

Requires ansible-core on the controller for --build only. `--cache-dir` payloads
can be reused by a controller written in any language.
"""
import argparse
import ast
import json
import os
import subprocess
import sys
import time
from pathlib import Path

SENTINEL_KEY = "__ansiballz_params_marker__"
SENTINEL_VAL = "8f1c2e0a-marker"
PARAMS_PLACEHOLDER = "@@PARAMS@@"


# --------------------------------------------------------------------------- build
def build_payload(fqn: str) -> tuple[str, dict]:
    """
    Returns (wrapper_template, internal_params).

    wrapper_template: the AnsiballZ script with the params assignment replaced by
                      PARAMS_PLACEHOLDER (the whole RHS of that one line).
    internal_params:  the `_ansible_*` keys modify_module put in ANSIBLE_MODULE_ARGS,
                      i.e. what the runtime must supply alongside user args.
    """
    from ansible import context
    from ansible.executor.module_common import modify_module
    from ansible.module_utils.common.collections import ImmutableDict
    from ansible.parsing.dataloader import DataLoader
    from ansible.plugins.loader import init_plugin_loader, module_loader
    from ansible.template import Templar

    # Some code paths peek at CLI args; give them something harmless.
    context.CLIARGS = ImmutableDict(verbosity=0, check=False, diff=False)
    # Sets up the collection finder; without it FQCN lookups (even
    # ansible.builtin.*) come back unresolved. The CLI does this at startup.
    init_plugin_loader()

    ctx = module_loader.find_plugin_with_context(fqn)
    if not ctx.resolved:
        raise SystemExit(f"module not found: {fqn}")

    templar = Templar(loader=DataLoader())
    data, style, _shebang = modify_module(
        fqn,
        ctx.plugin_resolved_path,
        {SENTINEL_KEY: SENTINEL_VAL},   # so we can find the params line afterwards
        templar,
        # Any value works: it only feeds the shebang we discard. Without it,
        # modify_module raises InterpreterDiscoveryRequiredError, which the
        # action plugin would normally catch to probe the host for a Python.
        task_vars={"ansible_python_interpreter": "/usr/bin/python3"},
        module_compression="ZIP_DEFLATED",
    )
    if style != "new":
        raise SystemExit(f"{fqn} is module_style={style!r}; only AnsiballZ ('new') is handled here")

    text = data.decode() if isinstance(data, bytes) else data
    lines = text.split("\n")

    hits = [i for i, l in enumerate(lines) if SENTINEL_VAL in l]
    if len(hits) != 1:
        raise SystemExit(f"expected exactly one params line, found {len(hits)} - inspect the wrapper")
    i = hits[0]
    lhs, sep, rhs = lines[i].partition("=")
    if not sep:
        raise SystemExit(f"unexpected params line shape: {lines[i][:120]}")

    # RHS is a Python string literal (str or bytes) holding JSON.
    literal = ast.literal_eval(rhs.strip())
    if isinstance(literal, bytes):
        literal = literal.decode()
    params = json.loads(literal)
    args = params["ANSIBLE_MODULE_ARGS"]
    args.pop(SENTINEL_KEY)
    internal = {k: v for k, v in args.items() if k.startswith("_ansible_")}

    lines[i] = f"{lhs}= {PARAMS_PLACEHOLDER}"
    return "\n".join(lines), internal


def cache_paths(cache_dir: Path, fqn: str) -> tuple[Path, Path]:
    return cache_dir / f"{fqn}.py.tmpl", cache_dir / f"{fqn}.internal.json"


def get_payload(cache_dir: Path, fqn: str, rebuild: bool) -> tuple[str, dict]:
    tmpl_path, meta_path = cache_paths(cache_dir, fqn)
    if not rebuild and tmpl_path.exists() and meta_path.exists():
        return tmpl_path.read_text(), json.loads(meta_path.read_text())
    t0 = time.perf_counter()
    tmpl, internal = build_payload(fqn)
    cache_dir.mkdir(parents=True, exist_ok=True)
    tmpl_path.write_text(tmpl)
    meta_path.write_text(json.dumps(internal, indent=2, sort_keys=True))
    print(f"[build] {fqn}: {len(tmpl)//1024} KiB in {time.perf_counter()-t0:.2f}s -> {tmpl_path}",
          file=sys.stderr)
    return tmpl, internal


# --------------------------------------------------------------------------- render
def render(tmpl: str, internal: dict, fqn: str, user_args: dict, check_mode: bool = False) -> bytes:
    """
    Pure string work - this is the part a TS/Go controller does at call time.
    """
    args = dict(internal)
    args.update(user_args)
    args["_ansible_module_name"] = fqn
    args["_ansible_check_mode"] = check_mode
    payload = json.dumps({"ANSIBLE_MODULE_ARGS": args})
    return tmpl.replace(PARAMS_PLACEHOLDER, repr(payload), 1).encode()


# --------------------------------------------------------------------------- execute
def run_local(script: bytes, python: str) -> subprocess.CompletedProcess:
    return subprocess.run([python, "-"], input=script, capture_output=True)


def run_ssh(script: bytes, host: str, python: str, become: bool,
            ssh_opts: list[str]) -> subprocess.CompletedProcess:
    remote_cmd = f"{python} -"
    if become:
        remote_cmd = f"sudo -n -H {remote_cmd}"
    cmd = ["ssh", *ssh_opts, host, remote_cmd]
    return subprocess.run(cmd, input=script, capture_output=True)


def parse_result(proc: subprocess.CompletedProcess) -> dict:
    out = proc.stdout.decode(errors="replace")
    # AnsibleModule emits exactly one JSON document; tolerate stray lines around it.
    for line in reversed(out.strip().splitlines()):
        line = line.strip()
        if line.startswith("{"):
            try:
                return json.loads(line)
            except json.JSONDecodeError:
                pass
    raise RuntimeError(
        f"no JSON on stdout (rc={proc.returncode})\n--- stdout ---\n{out}\n--- stderr ---\n"
        f"{proc.stderr.decode(errors='replace')}"
    )


# --------------------------------------------------------------------------- main
def main() -> int:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--module", default="ansible.builtin.setup")
    p.add_argument("--args", default=None, help="JSON object of module args")
    p.add_argument("--host", help="ssh destination, e.g. user@web1")
    p.add_argument("--local", action="store_true", help="execute with local python instead of ssh")
    p.add_argument("--python", default=None,
                   help="interpreter on the target (default: this interpreter for --local, python3 over ssh)")
    p.add_argument("--become", action="store_true", help="prefix with sudo -n")
    p.add_argument("--check", action="store_true", help="set _ansible_check_mode")
    p.add_argument("--repeat", type=int, default=1)
    p.add_argument("--cache-dir", type=Path, default=Path(".ansiballz-cache"))
    p.add_argument("--rebuild", action="store_true")
    p.add_argument("--ssh-opt", action="append", default=[], help="extra ssh option, repeatable")
    a = p.parse_args()

    if not a.local and not a.host:
        p.error("need --host or --local")
    if a.python is None:
        a.python = sys.executable if a.local else "python3"

    user_args = json.loads(a.args) if a.args else {}
    if a.module == "ansible.builtin.setup" and not user_args:
        user_args = {"gather_subset": ["min"]}   # keep the demo output small

    tmpl, internal = get_payload(a.cache_dir, a.module, a.rebuild)
    print(f"[info] internal params from modify_module: {sorted(internal)}", file=sys.stderr)

    ssh_opts = [
        "-o", "BatchMode=yes",
        "-o", "ControlMaster=auto",
        "-o", "ControlPersist=10m",
        "-o", "ControlPath=~/.ssh/cm-%r@%h:%p",
        *a.ssh_opt,
    ]

    for n in range(a.repeat):
        script = render(tmpl, internal, a.module, user_args, a.check)
        t0 = time.perf_counter()
        proc = run_local(script, a.python) if a.local else run_ssh(script, a.host, a.python, a.become, ssh_opts)
        dt = time.perf_counter() - t0
        try:
            result = parse_result(proc)
        except RuntimeError as e:
            print(e, file=sys.stderr)
            return 1

        status = "failed" if result.get("failed") else ("changed" if result.get("changed") else "ok")
        print(f"[run {n+1}/{a.repeat}] {status} in {dt*1000:.0f} ms", file=sys.stderr)
        if result.get("warnings"):
            print(f"[warn] {result['warnings']}", file=sys.stderr)

    # Print the last result; trim facts so it's readable.
    facts = result.get("ansible_facts")
    if isinstance(facts, dict) and len(facts) > 10:
        result = {**result, "ansible_facts": {k: facts[k] for k in sorted(facts)[:10]} | {"...": f"{len(facts)} keys"}}
    json.dump(result, sys.stdout, indent=2, sort_keys=True, default=str)
    print()
    return 1 if result.get("failed") else 0


if __name__ == "__main__":
    sys.exit(main())
