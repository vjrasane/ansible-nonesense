import json
import struct

_HEADER = struct.Struct(">I")


def send_frame(sock, obj):
    body = json.dumps(obj).encode("utf-8")
    sock.sendall(_HEADER.pack(len(body)) + body)


def recv_frame(sock):
    header = _recv_exactly(sock, _HEADER.size)
    if header is None:
        return None
    (length,) = _HEADER.unpack(header)
    body = _recv_exactly(sock, length)
    if body is None:
        raise ConnectionError("truncated frame body")
    return json.loads(body.decode("utf-8"))


def _recv_exactly(sock, n):
    buf = b""
    while len(buf) < n:
        chunk = sock.recv(n - len(buf))
        if not chunk:
            if not buf:
                return None
            raise ConnectionError("truncated frame")
        buf += chunk
    return buf
