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
