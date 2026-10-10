import base64
import socket
import threading
import ansible.plugins.loader as loader
from ansible.playbook.play_context import PlayContext
from sensible_server.protocol import send_frame, recv_frame
from sensible_server.rpc import RpcClient
from sensible_server.connection import ShimConnection


def _serve_once(sock, reply):
    req = recv_frame(sock)
    send_frame(sock, {"type": "response", "id": req["id"], "ok": True, "result": reply})
    return req


def test_exec_command_roundtrips_binary():
    loader.init_plugin_loader()
    client_sock, server_sock = socket.socketpair()
    raw = bytes([0, 1, 2, 255, 254])  # non-utf-8
    captured = {}

    def server():
        captured["req"] = _serve_once(
            server_sock,
            {"rc": 0, "stdout": base64.b64encode(raw).decode(), "stderr": base64.b64encode(b"").decode()},
        )

    threading.Thread(target=server, daemon=True).start()
    conn = ShimConnection(PlayContext(), RpcClient(client_sock))
    rc, out, err = conn.exec_command("echo hi", in_data=raw, sudoable=True)
    client_sock.close()

    assert (rc, out, err) == (0, raw, b"")
    assert captured["req"]["op"] == "exec_command"
    assert base64.b64decode(captured["req"]["params"]["in_data"]) == raw
    assert conn._shell is not None
