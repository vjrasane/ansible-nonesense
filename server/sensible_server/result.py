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
