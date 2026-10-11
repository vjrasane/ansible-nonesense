import traceback
from .protocol import read_message, write_message


def serve(in_stream, out_stream, run=None):
    # `run(params) -> result-frame` handles a runAction. Default is the in-process
    # harness (used by unit tests); the real server injects the fork pool's
    # `run_action`, so this module — and thus the parent — never imports ansible.
    if run is None:
        from .harness import run_action as run

    while True:
        msg = read_message(in_stream)
        if msg is None:
            return
        method = msg.get("method")
        if method == "shutdown":
            return
        req_id = msg.get("id")
        if method != "runAction":
            _error(out_stream, req_id, -32601, "method not found: %s" % method)
            continue
        try:
            result = run(msg.get("params") or {})
            write_message(out_stream, {"jsonrpc": "2.0", "id": req_id, "result": result})
        except Exception as exc:  # noqa: BLE001 — harness failure → JSON-RPC error
            _error(out_stream, req_id, -32000, str(exc), traceback.format_exc())


def _error(out_stream, req_id, code, message, data=None):
    err = {"code": code, "message": message}
    if data is not None:
        err["data"] = data
    write_message(out_stream, {"jsonrpc": "2.0", "id": req_id, "error": err})
