import os
import sys
from . import lifeline
from .server import serve
from .pool import TaskPool
from .facts import make_handlers


def main() -> None:
    # Protect the protocol stream: keep a private dup of stdout for the seam, then
    # point fd 1 (and sys.stdout) at stderr so a stray print() — in this process OR
    # in a forked worker, which inherits fd 1 — can never corrupt the frames.
    in_fd = os.dup(sys.stdin.fileno())
    out_fd = os.dup(sys.stdout.fileno())
    os.dup2(sys.stderr.fileno(), 1)
    sys.stdout = sys.stderr

    # Orphan-prevention: own process group + SIGTERM/PR_SET_PDEATHSIG, armed while
    # single-threaded and before the pool so the forkserver/workers join the group.
    lifeline.arm()
    pool = TaskPool()
    pool.prime()          # forkserver up while single-threaded (fork-after-threads)
    lifeline.watch_parent()  # getppid fallback — safe to start a thread now
    handlers = make_handlers(pool.run_action)  # runAction (+fact injection) + gatherFacts
    try:
        with os.fdopen(in_fd, "rb", buffering=0) as in_stream, \
                os.fdopen(out_fd, "wb", buffering=0) as out_stream:
            serve(in_stream, out_stream, handlers=handlers)
    finally:
        # Tear down the whole group — graceful exit (EOF/shutdown) still leaves the
        # forkserver + workers alive otherwise. pool.shutdown() can't reap a worker
        # mid-task; killpg does. This SIGKILLs us too, which is the intended exit.
        lifeline.terminate()


if __name__ == "__main__":
    main()
