import socket
import threading
from sensible_worker.protocol import send_frame, recv_frame
from sensible_worker.harness import run_action

RESPONSES = {
    "ansible.legacy.setup": {"ansible_facts": {"ansible_pkg_mgr": "apt"}},
    "ansible.legacy.apt": {"changed": True},
}


def _fake_server(sock, seen):
    while True:
        req = recv_frame(sock)
        if req is None:
            return
        if req["op"] == "run_module":
            name = req["params"]["name"]
            seen.append(name)
            result = RESPONSES.get(name, {"changed": False})
        else:
            result = {"rc": 0, "stdout": "", "stderr": ""}
        send_frame(sock, {"type": "response", "id": req["id"], "ok": True, "result": result})


def test_package_drives_setup_then_apt():
    worker_sock, server_sock = socket.socketpair()
    seen = []
    threading.Thread(target=_fake_server, args=(server_sock, seen), daemon=True).start()
    msg = {
        "plugin": "ansible.builtin.package",
        "args": {"name": "git", "state": "present"},
        "vars": {"ansible_facts": {}},
    }
    result = run_action(worker_sock, msg)
    worker_sock.close()
    assert result.get("changed") is True
    # Review Focus: ansible.legacy.* names forwarded verbatim, in order.
    assert seen == ["ansible.legacy.setup", "ansible.legacy.apt"]
