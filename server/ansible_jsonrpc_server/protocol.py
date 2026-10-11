import msgspec

_HEADER_SEP = b"\r\n\r\n"
_encode = msgspec.json.encode
_decode = msgspec.json.decode


def write_message(stream, obj):
    # msgspec.json encodes msgspec Structs transparently, so result frames can be
    # written without first converting them to dicts.
    body = _encode(obj)
    stream.write(b"Content-Length: %d\r\n\r\n" % len(body))
    stream.write(body)
    stream.flush()


def read_message(stream):
    headers = _read_headers(stream)
    if headers is None:
        return None
    length = int(headers["content-length"])
    body = _read_exactly(stream, length)
    if body is None:
        raise ConnectionError("truncated message body")
    return _decode(body)


def _read_headers(stream):
    buf = b""
    while _HEADER_SEP not in buf:
        chunk = stream.read(1)
        if not chunk:
            return None if not buf else _raise("truncated headers")
        buf += chunk
    headers = {}
    for line in buf[: -len(_HEADER_SEP)].split(b"\r\n"):
        if not line:
            continue
        k, _, v = line.partition(b":")
        headers[k.decode().strip().lower()] = v.decode().strip()
    return headers


def _read_exactly(stream, n):
    buf = b""
    while len(buf) < n:
        chunk = stream.read(n - len(buf))
        if not chunk:
            return None
        buf += chunk
    return buf


def _raise(msg):
    raise ConnectionError(msg)
