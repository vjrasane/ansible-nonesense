import traceback
from .protocol import read_message, write_message
from .harness import run_action

_METHODS = {"runAction": run_action}


def serve(in_stream, out_stream):
    while True:
        msg = read_message(in_stream)
        if msg is None:
            return
        method = msg.get("method")
        if method == "shutdown":
            return
        req_id = msg.get("id")
        handler = _METHODS.get(method)
        if handler is None:
            _error(out_stream, req_id, -32601, "method not found: %s" % method)
            continue
        try:
            result = handler(msg.get("params") or {})
            write_message(out_stream, {"jsonrpc": "2.0", "id": req_id, "result": result})
        except Exception as exc:  # noqa: BLE001 — harness failure → JSON-RPC error
            _error(out_stream, req_id, -32000, str(exc), traceback.format_exc())


def _error(out_stream, req_id, code, message, data=None):
    err = {"code": code, "message": message}
    if data is not None:
        err["data"] = data
    write_message(out_stream, {"jsonrpc": "2.0", "id": req_id, "error": err})
