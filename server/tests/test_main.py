import os
import socket
import subprocess
import sys
import tempfile
from sensible_server.protocol import send_frame, recv_frame

RESP = {
    "ansible.legacy.setup": {"ansible_facts": {"ansible_pkg_mgr": "apt"}},
    "ansible.legacy.apt": {"changed": True},
}


def _run_worker(sock_path, run_actions):
    srv = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    srv.bind(sock_path)
    srv.listen(1)
    srv.settimeout(15)
    proc = subprocess.Popen([sys.executable, "-m", "sensible_server", "--socket", sock_path])
    conn, _ = srv.accept()
    results = []
    for msg in run_actions:
        send_frame(conn, msg)
        # drain request/response until the final result frame
        while True:
            req = recv_frame(conn)
            if req is None:
                break
            if req.get("type") == "result":
                results.append(req)
                break
            if req["op"] == "run_module":
                r = RESP.get(req["params"]["name"], {"changed": False})
            else:
                r = {"rc": 0, "stdout": "", "stderr": ""}
            send_frame(conn, {"type": "response", "id": req["id"], "ok": True, "result": r})
    conn.close()
    proc.wait(timeout=15)
    srv.close()
    return results


def test_two_sequential_run_actions_reuse_worker():
    with tempfile.TemporaryDirectory() as d:
        sock_path = os.path.join(d, "w.sock")
        msgs = [
            {"type": "run_action", "id": 1, "plugin": "ansible.builtin.package",
             "args": {"name": "git", "state": "present"}, "vars": {"ansible_facts": {}}},
            {"type": "run_action", "id": 2, "plugin": "ansible.builtin.package",
             "args": {"name": "curl", "state": "present"}, "vars": {"ansible_facts": {}}},
        ]
        results = _run_worker(sock_path, msgs)
    assert [r["ok"] for r in results] == [True, True]
    assert [r["id"] for r in results] == [1, 2]


def test_run_action_missing_id_survives():
    with tempfile.TemporaryDirectory() as d:
        sock_path = os.path.join(d, "w.sock")
        msgs = [
            {"type": "run_action", "plugin": "ansible.builtin.package",  # no "id"
             "args": {"name": "git", "state": "present"}, "vars": {"ansible_facts": {}}},
            {"type": "run_action", "id": 2, "plugin": "ansible.builtin.package",
             "args": {"name": "curl", "state": "present"}, "vars": {"ansible_facts": {}}},
        ]
        results = _run_worker(sock_path, msgs)
    assert len(results) == 2
    assert results[0]["ok"] is True and results[0].get("id") is None
    assert results[1]["ok"] is True  # worker survived the id-less frame


def test_unknown_plugin_yields_error_result_and_survives():
    with tempfile.TemporaryDirectory() as d:
        sock_path = os.path.join(d, "w.sock")
        msgs = [
            {"type": "run_action", "id": 1, "plugin": "ansible.builtin.nope",
             "args": {}, "vars": {}},
            {"type": "run_action", "id": 2, "plugin": "ansible.builtin.package",
             "args": {"name": "git", "state": "present"}, "vars": {"ansible_facts": {}}},
        ]
        results = _run_worker(sock_path, msgs)
    assert results[0]["ok"] is False and "nope" in results[0]["error"]
    assert results[1]["ok"] is True  # worker stayed alive after the error
