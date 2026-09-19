#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10,<3.13"
# dependencies = ["ansible-core>=2.17,<2.18"]
# ///
"""Build an AnsiballZ payload for one module. Emits {"template","internal"} JSON.

The `template` is the wrapper script with the params assignment's RHS replaced by
@@PARAMS@@. The controller substitutes a Python string literal of the module args
there at call time. `internal` holds the _ansible_* keys modify_module injected.
"""
import ast
import json
import sys

SENTINEL_KEY = "__ansiballz_params_marker__"
SENTINEL_VAL = "8f1c2e0a-marker"
PLACEHOLDER = "@@PARAMS@@"


def build(fqn: str) -> dict:
    from ansible import context
    from ansible.executor.module_common import modify_module
    from ansible.module_utils.common.collections import ImmutableDict
    from ansible.parsing.dataloader import DataLoader
    from ansible.plugins.loader import init_plugin_loader, module_loader
    from ansible.template import Templar

    context.CLIARGS = ImmutableDict(verbosity=0, check=False, diff=False)
    init_plugin_loader()

    ctx = module_loader.find_plugin_with_context(fqn)
    if not ctx.resolved:
        raise SystemExit(f"module not found: {fqn}")

    data, style, _shebang = modify_module(
        fqn,
        ctx.plugin_resolved_path,
        {SENTINEL_KEY: SENTINEL_VAL},
        Templar(loader=DataLoader()),
        task_vars={"ansible_python_interpreter": "/usr/bin/python3"},
        module_compression="ZIP_DEFLATED",
    )
    if style != "new":
        raise SystemExit(f"{fqn}: module_style={style!r}, only AnsiballZ ('new') handled")

    text = data.decode() if isinstance(data, bytes) else data
    lines = text.split("\n")
    hits = [i for i, l in enumerate(lines) if SENTINEL_VAL in l]
    if len(hits) != 1:
        raise SystemExit(f"expected one params line, found {len(hits)}")
    i = hits[0]
    lhs, sep, rhs = lines[i].partition("=")
    if not sep:
        raise SystemExit(f"unexpected params line: {lines[i][:120]}")

    literal = ast.literal_eval(rhs.strip())
    if isinstance(literal, bytes):
        literal = literal.decode()
    args = json.loads(literal)["ANSIBLE_MODULE_ARGS"]
    args.pop(SENTINEL_KEY)
    internal = {k: v for k, v in args.items() if k.startswith("_ansible_")}

    lines[i] = f"{lhs}= {PLACEHOLDER}"
    return {"template": "\n".join(lines), "internal": internal}


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("usage: build-payload.py <module.fqn>")
    json.dump(build(sys.argv[1]), sys.stdout)
