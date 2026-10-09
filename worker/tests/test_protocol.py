import socket
from sensible_worker.protocol import send_frame, recv_frame


def test_roundtrip_frame():
    a, b = socket.socketpair()
    send_frame(a, {"type": "ping", "id": 1, "payload": "héllo"})
    assert recv_frame(b) == {"type": "ping", "id": 1, "payload": "héllo"}


def test_clean_eof_returns_none():
    a, b = socket.socketpair()
    a.close()
    assert recv_frame(b) is None
