import os
import sys
from .server import serve
from .pool import TaskPool


def main():
    # Protect the protocol stream: keep a private dup of stdout for the seam, then
    # point fd 1 (and sys.stdout) at stderr so a stray print() — in this process OR
    # in a forked worker, which inherits fd 1 — can never corrupt the frames.
    in_fd = os.dup(sys.stdin.fileno())
    out_fd = os.dup(sys.stdout.fileno())
    os.dup2(sys.stderr.fileno(), 1)
    sys.stdout = sys.stderr

    # Pool created before any threads exist (fork-after-threads hazard), and after
    # the fd redirect so its forkserver/workers inherit fd 1 → stderr.
    pool = TaskPool()
    try:
        with os.fdopen(in_fd, "rb", buffering=0) as in_stream, \
                os.fdopen(out_fd, "wb", buffering=0) as out_stream:
            serve(in_stream, out_stream, run=pool.run_action)
    finally:
        pool.shutdown()


if __name__ == "__main__":
    main()
