import threading
import traceback
from collections.abc import Callable
from concurrent.futures import ThreadPoolExecutor
from typing import BinaryIO

import msgspec
from .protocol import read_message, write_message

Handlers = dict[str, tuple[type, Callable]]


def serve(in_stream: BinaryIO, out_stream: BinaryIO, handlers: Handlers | None = None,
          max_inflight: int = 64) -> None:
    # Concurrent dispatch: the reader thread (here) only reads frames and hands each
    # request to a thread pool, so it never blocks on execution and stays responsive to
    # control notifications (shutdown now, $/cancelRequest next). Handler threads do I/O
    # and wait on the process pool — they never touch ansible, so threads are safe. All
    # outbound frames go through one lock (responses now, notifications later), since
    # many handlers complete concurrently. Default handler is the in-process harness
    # (unit tests); the real server injects pool-backed handlers → parent stays ansible-free.
    if handlers is None:
        from .harness import run_action
        from .messages import RunParams
        handlers = {"runAction": (RunParams, run_action)}

    write_lock = threading.Lock()

    def write(obj: dict) -> None:
        with write_lock:
            write_message(out_stream, obj)

    dispatch = ThreadPoolExecutor(max_workers=max_inflight)
    try:
        while True:
            msg = read_message(in_stream)
            if msg is None:
                return
            method = msg.get("method")
            if method == "shutdown":
                return
            if "id" not in msg:
                continue  # a notification we don't handle — never answer it
            dispatch.submit(_handle, write, handlers, msg)
    finally:
        dispatch.shutdown(wait=True)  # flush in-flight responses before returning


def _handle(write: Callable, handlers: Handlers, msg: dict) -> None:
    req_id = msg.get("id")
    entry = handlers.get(msg.get("method"))
    if entry is None:
        write(_error(req_id, -32601, "method not found: %s" % msg.get("method")))
        return
    param_type, handler = entry
    try:
        params = msgspec.convert(msg.get("params") or {}, param_type)
    except msgspec.ValidationError as exc:
        write(_error(req_id, -32602, "invalid params: %s" % exc))
        return
    try:
        result = handler(params)
        write({"jsonrpc": "2.0", "id": req_id, "result": result})
    except Exception as exc:  # noqa: BLE001 — harness failure → JSON-RPC error
        write(_error(req_id, -32000, str(exc), traceback.format_exc()))


def _error(req_id, code: int, message: str, data: object = None) -> dict:
    err = {"code": code, "message": message}
    if data is not None:
        err["data"] = data
    return {"jsonrpc": "2.0", "id": req_id, "error": err}
