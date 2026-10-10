import io
import sys
from ansible_jsonrpc_server.protocol import read_message, write_message
from ansible_jsonrpc_server.server import serve

LOCAL = {"connection": {"type": "local", "vars": {}}, "become": {}}
VARS = {"ansible_python_interpreter": sys.executable}


def _drive(requests):
    inbuf = io.BytesIO()
    for r in requests:
        write_message(inbuf, r)
    inbuf.seek(0)
    outbuf = io.BytesIO()
    serve(inbuf, outbuf)
    outbuf.seek(0)
    out = []
    while True:
        m = read_message(outbuf)
        if m is None:
            break
        out.append(m)
    return out


def test_run_action_request_gets_result():
    reqs = [
        {"jsonrpc": "2.0", "id": 1, "method": "runAction",
         "params": {"host": LOCAL, "fqcn": "ansible.builtin.ping", "args": {}, "vars": VARS}},
        {"jsonrpc": "2.0", "method": "shutdown"},
    ]
    out = _drive(reqs)
    assert out[0]["id"] == 1
    assert out[0]["result"]["status"] == "ok"
    assert out[0]["result"]["result"]["ping"] == "pong"


def test_unknown_method_is_jsonrpc_error_and_survives():
    reqs = [
        {"jsonrpc": "2.0", "id": 1, "method": "nope", "params": {}},
        {"jsonrpc": "2.0", "id": 2, "method": "runAction",
         "params": {"host": LOCAL, "fqcn": "ansible.builtin.ping", "args": {}, "vars": VARS}},
        {"jsonrpc": "2.0", "method": "shutdown"},
    ]
    out = _drive(reqs)
    assert out[0]["id"] == 1 and "error" in out[0]      # unknown method → error
    assert out[1]["id"] == 2 and out[1]["result"]["status"] == "ok"  # survived
