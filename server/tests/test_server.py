import io
import sys
import time

from ansible_jsonrpc_server.messages import ResultFrame, RunParams
from ansible_jsonrpc_server.protocol import read_message, write_message
from ansible_jsonrpc_server.server import serve

LOCAL = {"connection": {"type": "local", "vars": {}}, "become": {}}
VARS = {"ansible_python_interpreter": sys.executable}


def _drive(requests, handlers=None):
    inbuf = io.BytesIO()
    for r in requests:
        write_message(inbuf, r)
    inbuf.seek(0)
    outbuf = io.BytesIO()
    serve(inbuf, outbuf, handlers=handlers)
    outbuf.seek(0)
    out = {}
    while True:
        m = read_message(outbuf)
        if m is None:
            break
        out[m.get("id")] = m          # responses are unordered now; key by id
    return out


def test_run_action_request_gets_result():
    out = _drive([
        {"jsonrpc": "2.0", "id": 1, "method": "runAction",
         "params": {"host": LOCAL, "fqcn": "ansible.builtin.ping", "args": {}, "vars": VARS}},
        {"jsonrpc": "2.0", "method": "shutdown"},
    ])
    assert out[1]["result"]["status"] == "ok"
    assert out[1]["result"]["result"]["ping"] == "pong"


def test_unknown_method_is_jsonrpc_error_and_survives():
    out = _drive([
        {"jsonrpc": "2.0", "id": 1, "method": "nope", "params": {}},
        {"jsonrpc": "2.0", "id": 2, "method": "runAction",
         "params": {"host": LOCAL, "fqcn": "ansible.builtin.ping", "args": {}, "vars": VARS}},
        {"jsonrpc": "2.0", "method": "shutdown"},
    ])
    assert out[1]["error"]["code"] == -32601        # unknown method → error
    assert out[2]["result"]["status"] == "ok"       # survived


def test_invalid_params_is_32602_and_survives():
    out = _drive([
        {"jsonrpc": "2.0", "id": 1, "method": "runAction", "params": {"host": LOCAL}},  # no fqcn
        {"jsonrpc": "2.0", "id": 2, "method": "runAction",
         "params": {"host": LOCAL, "fqcn": "ansible.builtin.ping", "args": {}, "vars": VARS}},
        {"jsonrpc": "2.0", "method": "shutdown"},
    ])
    assert out[1]["error"]["code"] == -32602        # validation at the seam
    assert out[2]["result"]["status"] == "ok"       # survived


def test_notification_without_id_gets_no_response():
    out = _drive([
        {"jsonrpc": "2.0", "method": "nope"},        # no id → a notification, never answered
        {"jsonrpc": "2.0", "id": 7, "method": "runAction",
         "params": {"host": LOCAL, "fqcn": "ansible.builtin.ping", "args": {}, "vars": VARS}},
        {"jsonrpc": "2.0", "method": "shutdown"},
    ])
    assert set(out) == {7}                           # only the request got a reply


def test_requests_are_dispatched_concurrently():
    # The reader must not block on execution: two slow handlers should overlap, so total
    # wall time is ~one handler, not two. Uses a fake slow handler (no ansible).
    def slow(_params):
        time.sleep(0.5)
        return ResultFrame(status="ok", changed=False, result={})

    handlers = {"slow": (RunParams, slow)}
    reqs = [
        {"jsonrpc": "2.0", "id": 1, "method": "slow",
         "params": {"host": LOCAL, "fqcn": "x"}},
        {"jsonrpc": "2.0", "id": 2, "method": "slow",
         "params": {"host": LOCAL, "fqcn": "x"}},
        {"jsonrpc": "2.0", "method": "shutdown"},
    ]
    start = time.monotonic()
    out = _drive(reqs, handlers=handlers)
    elapsed = time.monotonic() - start
    assert set(out) == {1, 2}
    assert elapsed < 0.9, "handlers ran serially (%.2fs), not concurrently" % elapsed
