import os
import sys
from .server import serve


def main():
    # Protect the protocol stream: keep stdin/stdout on private fds, point
    # sys.stdout at stderr so stray prints can't corrupt frames.
    in_fd = os.dup(sys.stdin.fileno())
    out_fd = os.dup(sys.stdout.fileno())
    sys.stdout = sys.stderr
    with os.fdopen(in_fd, "rb", buffering=0) as in_stream, \
            os.fdopen(out_fd, "wb", buffering=0) as out_stream:
        serve(in_stream, out_stream)


if __name__ == "__main__":
    main()
