import argparse
import socket
import traceback
from .protocol import send_frame, recv_frame
from .harness import run_action


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--socket", required=True)
    opts = parser.parse_args()

    sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    sock.connect(opts.socket)
    try:
        while True:
            msg = recv_frame(sock)
            if msg is None:
                break
            if msg.get("type") != "run_action":
                continue
            try:
                result = run_action(sock, msg)
                send_frame(sock, {"type": "result", "id": msg["id"], "ok": True, "result": result})
            except Exception as exc:  # noqa: BLE001 — surface any plugin failure as a frame
                send_frame(sock, {
                    "type": "result", "id": msg["id"], "ok": False,
                    "error": str(exc), "traceback": traceback.format_exc(),
                })
    finally:
        sock.close()


if __name__ == "__main__":
    main()
