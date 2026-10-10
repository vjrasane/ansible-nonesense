import socket
import threading
from sensible_server.protocol import send_frame, recv_frame
from sensible_server.rpc import RpcClient


def _responder(sock, replies):
    while True:
        req = recv_frame(sock)
        if req is None:
            return
        reply = replies(req)
        send_frame(sock, {"type": "response", "id": req["id"], **reply})


def test_call_returns_result():
    client_sock, server_sock = socket.socketpair()
    t = threading.Thread(
        target=_responder,
        args=(server_sock, lambda req: {"ok": True, "result": {"echo": req["op"]}}),
        daemon=True,
    )
    t.start()
    client = RpcClient(client_sock)
    assert client.call("ping", {}) == {"echo": "ping"}
    client_sock.close()


def test_call_raises_on_error():
    client_sock, server_sock = socket.socketpair()
    t = threading.Thread(
        target=_responder,
        args=(server_sock, lambda req: {"ok": False, "error": "boom"}),
        daemon=True,
    )
    t.start()
    client = RpcClient(client_sock)
    try:
        client.call("explode", {})
        assert False, "expected RuntimeError"
    except RuntimeError as exc:
        assert "boom" in str(exc)
    client_sock.close()
