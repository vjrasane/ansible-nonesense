import sys
from ansible_jsonrpc_server.harness import run_action

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
