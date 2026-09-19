import ast, base64, io, zipfile
from pathlib import Path
from ansible.plugins.list import list_plugins 
from ansible.plugins.loader import init_plugin_loader, module_loader, fragment_loader, action_loader
from ansible.utils.plugin_docs import get_docstring
from ansible.executor.module_common import modify_module
from ansible.template import Templar
from ansible.parsing.dataloader import DataLoader
from typing import Any, cast

import keyword
import sys
import json

REPO_ROOT = Path(__file__).parent
GENERATED_DIR = REPO_ROOT / "generated"
SOURCES_DIR = GENERATED_DIR / "sources"
MODULES_DIR = GENERATED_DIR / "modules"

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

ANSIBLE_TO_TS: dict[str, str] = {
    "str": "string",
    "string": "string",
    "bool": "boolean",
    "int": "number",
    "float": "number",
    "path": "string",
    "raw": "unknown",
    "jsonarg": "unknown",
    "json": "unknown",
    "dict": "Record<string, unknown>",
    "list": "unknown[]",
    "bits": "number",
    "bytes": "number",
    "sid": "string",
}

def ts_type(option: dict) -> str:
    choices = option.get("choices")
    if choices and all(isinstance(c, str) for c in choices):
        return " | ".join(f'"{c}"' for c in choices)

    ansible_type = option.get("type", "str")

    if ansible_type == "list":
        elements = option.get("elements", {})
        if isinstance(elements, str):
            inner = ANSIBLE_TO_TS.get(elements, "unknown")
        elif isinstance(elements, dict):
            inner = ANSIBLE_TO_TS.get(elements.get("type", "str"), "unknown")
        else:
            inner = "unknown"
        return f"{inner} | {inner}[]"

    if ansible_type == "dict" and "suboptions" in option:
        return format_suboptions(option["suboptions"])

    return ANSIBLE_TO_TS.get(ansible_type, "unknown")

def format_suboptions(suboptions: dict, indent: int = 2) -> str:
    pad = " " * indent
    lines = ["{"]
    for name, opt in sorted(suboptions.items()):
        required = opt.get("required", False)
        suffix = "" if required else "?"
        t = ts_type(opt)
        lines.append(f"{pad}  {name}{suffix}: {t};")
    lines.append(f"{pad}}}")
    return "\n".join(lines)

def safe_identifier(name: str) -> str:
    if name in JS_RESERVED or keyword.iskeyword(name):
        return f"{name}_"
    return name

def to_pascal(name: str) -> str:
    return "".join(w.capitalize() for w in name.split("_"))

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

def generate_module_source(
    fqcn: str,
    module_fqn: str,
    meta: dict,
    doc: dict,
    returndocs: dict,
    zipdata: bytes,
    deps: list[Path]
) -> str:
    short_name = fqcn.rsplit(".", 1)[-1]
    pascal = to_pascal(short_name)
    fn_name = safe_identifier(short_name)

    options = doc.get("options", {}) or {}
    deps_array = ",\n".join([f'"{d.relative_to(SOURCES_DIR)}"' for d in deps]);

    return f'''// Auto-generated from: {fqcn}
// DO NOT EDIT — regenerate with codegen

import {{ defineModule }} from "@sensible-ts/core";

const fqcn = "{fqcn}";
const moduleFqn = "{module_fqn}";
const meta = {json.dumps(meta)} as const;

const dependencies = [
{deps_array}
];

const zipdata = "{zipdata.decode("utf-8")}";

{generate_interface(f"{pascal}Args", options)}

{generate_interface(f"{pascal}Return", returndocs)}

export const {fn_name} = defineModule<{pascal}Args, {pascal}Return>(fqcn, moduleFqn, meta, zipdata, dependencies);
'''

# must precede lookup
init_plugin_loader()                                    

def generate_module(fqcn: str, collection: str, modules_dir: Path) -> Path | None:
    short_name = fqcn.rsplit(".", 1)[-1]
    print(f"  Generating {fqcn}...", file=sys.stderr)

    ctx = module_loader.find_plugin_with_context(fqcn)
    path = cast(str, ctx.plugin_resolved_path)
    d, _, r, _ = get_docstring(
        path, 
        fragment_loader,
        plugin_type="module",
        collection_name=collection,
    )
    doc = cast(dict, d)
    returndocs = cast(dict, r or {})
    attrs = doc.get("attributes") or {}

    action_plugin = action_loader.find_plugin_with_context(fqcn).resolved
    powershell    = path.endswith(".ps1")
    raw_params    = "free_form" in (doc.get("options") or {})
    check_mode    = (attrs.get("check_mode", {}) or {}).get("support", "none")

    meta = {
        "actionPlugin": action_plugin,
        "powershell": powershell,
        "rawParams": raw_params,
        "checkMode": check_mode,
    }

    templar = Templar(loader=DataLoader())
    data, style, shebang = modify_module(
        fqcn,
        path,
        {},                                                    # sentinel args; closure is import-based, values irrelevant
        templar,
        task_vars={"ansible_python_interpreter": "/usr/bin/python3"},  
    )
    if style != "new":
        print(f"  Skipping {fqcn}: style={style}", file=sys.stderr)
        return None

    src = data.decode("utf-8")
    tree = ast.parse(src)

    zipdata = next(
        (cast(Any, node.value).value
            for node in ast.walk(tree)
            if isinstance(node, ast.Assign)
            for t in node.targets
            if isinstance(t, ast.Name) and t.id == "ZIPDATA"),
        None
    )
    if zipdata is None:
        raise Exception(f"Could not find ZIPDATA in wrapper for {fqcn}")

    if isinstance(zipdata, str):
        zipdata = zipdata.encode("ascii")

    zip_bytes = base64.b64decode(zipdata)
    zf  = zipfile.ZipFile(io.BytesIO(zip_bytes))

    deps: list[Path] = []
    for name in zf.namelist():
        if name.endswith("/") or not name.endswith(".py"):
            continue
        dest = SOURCES_DIR / name
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(zf.read(name))
        deps.append(dest)

    module_fqn = next(
        ( cast(Any, kw.value).value
            for node in ast.walk(tree)
            if isinstance(node, ast.Call)
            and isinstance(node.func, ast.Attribute) and node.func.attr == "run_module"
            for kw in node.keywords
            if kw.arg == "mod_name" ), 
        None
    )
    if module_fqn is None:
        raise Exception(f"Could not find run_module entrypoint in wrapper for {fqcn}")

    source = generate_module_source(fqcn, module_fqn, meta, doc, returndocs, zipdata, deps)

    output_path = Path(modules_dir, f"{short_name}.ts")
    output_path.write_text(source)

    return Path(output_path)


def main():
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} <collection>", file=sys.stderr)
        sys.exit(1)

    collection = sys.argv[1]

    module_names = list_plugins("module", collection).keys()
    if not module_names:
        print(f"No modules found for collection: {collection}", file=sys.stderr)
        sys.exit(1)

    modules_dir = Path(GENERATED_DIR, MODULES_DIR, "-".join(collection.split(".")))
    modules_dir.mkdir(parents=True, exist_ok=True)
            
    module_paths = []
    for fqcn in module_names:
        try:
            output_path = generate_module(fqcn, collection, modules_dir)
            if output_path is not None:
                module_paths.append(output_path)
            print(f"  Generated {fqcn} -> {output_path}", file=sys.stderr)
        except Exception as e:
            print(f"Error generating module {fqcn}: {e}", file=sys.stderr)
            raise

    barrel = "\n".join([
        "// Auto-generated barrel — DO NOT EDIT",
        "",
        *[ f'export * from "./{file_path.name}";' for file_path in module_paths ],
        ""
    ])
    (modules_dir / "index.ts").write_text(barrel)


if __name__ == "__main__":
    main()
