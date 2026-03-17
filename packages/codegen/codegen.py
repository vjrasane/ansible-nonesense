#!/usr/bin/env python3
"""Generate TypeScript module bindings from ansible-doc JSON output."""

import json
import keyword
import subprocess
import sys
from pathlib import Path
from type_map import ts_type

REPO_ROOT = Path(__file__).parent.parent.parent
GENERATED_DIR = REPO_ROOT / "generated"

JS_RESERVED = {
    "abstract", "arguments", "await", "boolean", "break", "byte", "case", "catch",
    "char", "class", "const", "continue", "debugger", "default", "delete", "do",
    "double", "else", "enum", "eval", "export", "extends", "false", "final",
    "finally", "float", "for", "function", "goto", "if", "implements", "import",
    "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null",
    "package", "private", "protected", "public", "return", "short", "static",
    "super", "switch", "synchronized", "this", "throw", "throws", "transient",
    "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield",
}


def safe_identifier(name: str) -> str:
    if name in JS_RESERVED or keyword.iskeyword(name):
        return f"{name}_"
    return name


def run_ansible_doc(fqcn: str) -> dict:
    result = subprocess.run(
        ["ansible-doc", "-t", "module", fqcn, "--json"],
        capture_output=True,
        text=True,
        check=True,
    )
    return json.loads(result.stdout)


def list_collection_modules(namespace: str) -> list[str]:
    result = subprocess.run(
        ["ansible-doc", "-t", "module", "-l", "--json"],
        capture_output=True,
        text=True,
        check=True,
    )
    all_modules = json.loads(result.stdout)
    return sorted(k for k in all_modules if k.startswith(namespace + "."))


def to_pascal(name: str) -> str:
    return "".join(w.capitalize() for w in name.split("_"))


def namespace_to_dir(namespace: str) -> Path:
    """ansible.builtin -> packages/core/modules, community.* -> packages/community/modules"""
    parts = namespace.split(".")
    if parts[0] == "ansible":
        return REPO_ROOT / "packages" / "core" / "builtins"
    return REPO_ROOT / "packages" / "community" / "modules"


def generate_interface(name: str, options: dict) -> str:
    if not options:
        return f"export type {name} = Record<string, unknown>;"

    lines = [f"export interface {name} {{"]
    for opt_name, opt in sorted(options.items()):
        required = opt.get("required", False)
        suffix = "" if required else "?"
        t = ts_type(opt)
        desc = (opt.get("description") or [""])[0] if isinstance(opt.get("description"), list) else (opt.get("description") or "")
        if desc:
            desc = desc.replace("*/", "* /")
            lines.append(f"  /** {desc} */")
        key = f'"{opt_name}"' if not opt_name.isidentifier() else opt_name
        lines.append(f"  {key}{suffix}: {t};")
    lines.append("}")
    return "\n".join(lines)


def generate_module(fqcn: str, doc_data: dict) -> str:
    doc = doc_data.get(fqcn, doc_data.get(list(doc_data.keys())[0], {}))
    doc_info = doc.get("doc", {})
    return_info = doc.get("return", {}) or {}

    short_name = fqcn.rsplit(".", 1)[-1]
    pascal = to_pascal(short_name)
    fn_name = safe_identifier(short_name)

    options = doc_info.get("options", {}) or {}
    args_interface = generate_interface(f"{pascal}Args", options)
    return_interface = generate_interface(f"{pascal}Return", return_info)

    return f'''// Auto-generated from: {fqcn}
// DO NOT EDIT — regenerate with codegen

import {{ defineModule }} from "@sensible-ts/core";

{args_interface}

{return_interface}

export const {fn_name} = defineModule<{pascal}Args, {pascal}Return>("{fqcn}");
'''


def main():
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} <namespace> [module...]", file=sys.stderr)
        sys.exit(1)

    namespace = sys.argv[1]
    explicit_modules = sys.argv[2:] if len(sys.argv) > 2 else None
    output_dir = namespace_to_dir(namespace)

    output_dir.mkdir(parents=True, exist_ok=True)

    if explicit_modules:
        modules = [f"{namespace}.{m}" if not m.startswith(namespace) else m for m in explicit_modules]
    else:
        modules = list_collection_modules(namespace)

    if not modules:
        print(f"No modules found for namespace: {namespace}", file=sys.stderr)
        sys.exit(1)

    generated = []
    for fqcn in modules:
        short_name = fqcn.rsplit(".", 1)[-1]
        fn_name = safe_identifier(short_name)
        print(f"  Generating {fqcn}...", file=sys.stderr)
        try:
            doc_data = run_ansible_doc(fqcn)
            source = generate_module(fqcn, doc_data)
            out_file = output_dir / f"{short_name}.ts"
            out_file.write_text(source)
            generated.append((short_name, fn_name))
        except (subprocess.CalledProcessError, KeyError, json.JSONDecodeError) as e:
            print(f"  WARNING: skipping {fqcn}: {e}", file=sys.stderr)

    all_modules = sorted(
        (p.stem, safe_identifier(p.stem))
        for p in output_dir.glob("*.ts")
        if p.stem != "index"
    )

    lines = [
        "// Auto-generated barrel — DO NOT EDIT",
        "",
    ]
    for file_name, fn_name in all_modules:
        lines.append(f'export * from "./{file_name}.ts";')
    lines.append("")
    (output_dir / "index.ts").write_text("\n".join(lines))

    print(f"Generated {len(generated)} modules in {output_dir}", file=sys.stderr)


if __name__ == "__main__":
    main()
