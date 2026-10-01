import ast
import base64
import io
import json
import sys
import zipfile
from pathlib import Path
from typing import cast

from ansible.executor.module_common import modify_module
from ansible.parsing.dataloader import DataLoader
from ansible.plugins.list import list_plugins
from ansible.plugins.loader import (
    action_loader,
    fragment_loader,
    init_plugin_loader,
    module_loader,
)
from ansible.template import Templar
from ansible.utils.plugin_docs import get_docstring

init_plugin_loader()

Artifact = dict[str, str]  # {id, url, sha256, format, root}

# The two package-root __init__.py AnsiBallZ rewrites (non-empty); everything
# else synthesized by it is an empty namespace marker.
CORE_STUBS = ("ansible/__init__.py", "ansible/module_utils/__init__.py")


def log(msg: str) -> None:
    print(msg, file=sys.stderr)


def artifact_name(artifact_id: str) -> str:
    return artifact_id.rsplit("@", 1)[0]


def classify(name: str, content: bytes, core_id: str | None, artifacts: list[Artifact]):
    """Route one AnsiBallZ zip entry to ('ref', artifact_id, rel) | ('marker',) |
    ('stub',) | None. No source comparison: empties are markers, the two named
    files are stubs, everything else is verbatim source routed by path prefix."""
    if not content:
        return ("marker",)
    if name in CORE_STUBS:
        return ("stub",)
    if name.startswith("ansible/"):
        if core_id is None:
            raise Exception(f"{name} needs ansible-core, not in job artifacts")
        return ("ref", core_id, name)
    if name.startswith("ansible_collections/"):
        parts = name.split("/")
        if len(parts) < 4:  # ansible_collections/<ns>/<coll>/… — shorter is a marker
            return ("marker",)
        coll = f"{parts[1]}.{parts[2]}"
        artifact = next(
            (a for a in artifacts if artifact_name(a["id"]) == coll), None
        )
        if artifact is None:
            raise Exception(f"{name} needs collection {coll}, not in job artifacts")
        return ("ref", artifact["id"], "/".join(parts[3:]))
    return None


def extract_closure(data: bytes, core_id: str | None, artifacts: list[Artifact]):
    """Returns (module_fqn, {artifact_id: [paths]}, [marker_paths], {stub_path: content})."""
    tree = ast.parse(data.decode("utf-8"))
    call = next(
        (
            n
            for n in ast.walk(tree)
            if isinstance(n, ast.Call)
            and isinstance(n.func, ast.Name)
            and n.func.id == "_ansiballz_main"
        ),
        None,
    )
    if call is None:
        raise Exception("no _ansiballz_main entrypoint in wrapper")
    kwargs = {kw.arg: kw.value for kw in call.keywords}

    zip_node = kwargs.get("zip_data")
    if not isinstance(zip_node, ast.Constant):
        raise Exception("no zip_data in wrapper")
    zf = zipfile.ZipFile(io.BytesIO(base64.b64decode(cast(str, zip_node.value))))

    groups: dict[str, list[str]] = {}
    markers: list[str] = []
    stubs: dict[str, str] = {}
    for entry in zf.namelist():
        if entry.endswith("/") or not entry.endswith(".py"):
            continue
        content = zf.read(entry)
        kind = classify(entry, content, core_id, artifacts)
        if kind is None:
            continue
        if kind[0] == "ref":
            groups.setdefault(kind[1], []).append(kind[2])
        elif kind[0] == "marker":
            markers.append(entry)
        elif kind[0] == "stub":
            stubs[entry] = content.decode("utf-8")

    fqn_node = kwargs.get("module_fqn")
    if not isinstance(fqn_node, ast.Constant):
        raise Exception("no module_fqn in wrapper")
    return cast(str, fqn_node.value), groups, markers, stubs


def process_module(
    fqcn: str, collection: str, core_id: str | None, artifacts: list[Artifact]
) -> tuple[dict, dict[str, str]]:
    log(f"  introspecting {fqcn}")
    ctx = module_loader.find_plugin_with_context(fqcn)
    path = cast(str, ctx.plugin_resolved_path)

    d, _, r, _ = get_docstring(
        path, fragment_loader, plugin_type="module", collection_name=collection
    )
    doc = cast(dict, d) or {}
    returndocs = cast(dict, r) or {}
    attrs = doc.get("attributes") or {}

    actx = action_loader.find_plugin_with_context(fqcn)
    apath = cast(str, actx.plugin_resolved_path) if actx.resolved else None
    action_plugin = apath is not None and Path(apath).stem != "normal"
    powershell = path.endswith(".ps1")
    raw_params = "free_form" in (doc.get("options") or {})
    check_mode = (attrs.get("check_mode", {}) or {}).get("support", "none")

    meta = {
        "fqcn": fqcn,
        "actionPlugin": action_plugin,
        "powershell": powershell,
        "rawParams": raw_params,
        "checkMode": check_mode,
    }

    built = modify_module(
        module_name=fqcn,
        module_path=path,
        module_args={},  # sentinel; closure is import-based, values irrelevant
        templar=Templar(loader=DataLoader()),
        task_vars={"ansible_python_interpreter": "/usr/bin/python3"},
    )
    style = "new" if built.module_style == "new" else "old"

    module_fqn = ""
    groups: dict[str, list[str]] = {}
    markers: list[str] = []
    stubs: dict[str, str] = {}
    if style == "new":
        module_fqn, groups, markers, stubs = extract_closure(
            built.b_module_data, core_id, artifacts
        )

    rec = {
        "fqcn": fqcn,
        "moduleFqn": module_fqn,
        "style": style,
        "meta": meta,
        "options": doc.get("options") or {},
        "returndocs": returndocs,
        "sources": [
            {"artifact": a, "files": sorted(groups[a["id"]])}
            for a in artifacts
            if a["id"] in groups
        ],
        "markers": sorted(markers),
    }
    return rec, stubs


def main() -> None:
    job = json.loads(sys.argv[1])
    collection: str = job["collection"]
    artifacts: list[Artifact] = job["artifacts"]  # [{id, url, sha256, format, root}]

    core_id = next(
        (a["id"] for a in artifacts if artifact_name(a["id"]) == "ansible-core"), None
    )

    names = list(list_plugins("module", [collection]).keys())
    if not names:
        log(f"no modules for {collection}")
        sys.exit(1)

    scaffold: dict[str, str] = {}  # the 2 core stubs; identical across modules
    modules = []
    for fqcn in names:
        try:
            rec, stubs = process_module(fqcn, collection, core_id, artifacts)
        except Exception as e:
            log(f"error on {fqcn}: {e}")
            raise
        scaffold.update(stubs)
        modules.append(rec)

    out = {
        "scaffold": [{"path": p, "content": c} for p, c in sorted(scaffold.items())],
        "modules": modules,
    }
    json.dump(out, sys.stdout, default=str)


if __name__ == "__main__":
    main()
