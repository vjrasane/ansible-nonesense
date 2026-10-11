import traceback
from collections.abc import Callable
from typing import BinaryIO

import msgspec
from .protocol import read_message, write_message

Handlers = dict[str, tuple[type, Callable]]


def serve(in_stream: BinaryIO, out_stream: BinaryIO, handlers: Handlers | None = None) -> None:
    # `handlers` maps method name → (ParamType, (params) -> result). ParamType is the
    # msgspec Struct the raw params are validated into at the seam. Default is the
    # in-process harness (unit tests); the real server injects pool-backed handlers,
    # so this module — and thus the parent — never imports ansible.
    if handlers is None:
        from .harness import run_action
        from .messages import RunParams
        handlers = {"runAction": (RunParams, run_action)}

    while True:
        msg = read_message(in_stream)
        if msg is None:
            return
        method = msg.get("method")
        if method == "shutdown":
            return
        req_id = msg.get("id")
        entry = handlers.get(method)
        if entry is None:
            _error(out_stream, req_id, -32601, "method not found: %s" % method)
            continue
        param_type, handler = entry
        try:
            params = msgspec.convert(msg.get("params") or {}, param_type)
        except msgspec.ValidationError as exc:
            _error(out_stream, req_id, -32602, "invalid params: %s" % exc)
            continue
        try:
            result = handler(params)
            write_message(out_stream, {"jsonrpc": "2.0", "id": req_id, "result": result})
        except Exception as exc:  # noqa: BLE001 — harness failure → JSON-RPC error
            _error(out_stream, req_id, -32000, str(exc), traceback.format_exc())


def _error(out_stream: BinaryIO, req_id, code: int, message: str, data: object = None) -> None:
    err = {"code": code, "message": message}
    if data is not None:
        err["data"] = data
    write_message(out_stream, {"jsonrpc": "2.0", "id": req_id, "error": err})
