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
