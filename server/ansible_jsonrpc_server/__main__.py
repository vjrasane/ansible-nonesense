import os
import sys
from . import lifeline
from .server import serve
from .pool import TaskPool
from .facts import make_handlers


def _collections_path() -> str:
    # Honor an explicit ANSIBLE_COLLECTIONS_PATH (CI/sandboxes/tests); else derive one
    # under the server's own tree so we never touch a user's ~/.ansible (§4.8).
    override = os.environ.get("ANSIBLE_COLLECTIONS_PATH")
    if override:
        return override.split(os.pathsep)[0]
    home = os.environ.get("ANSIBLE_JSONRPC_SERVER_HOME") or os.path.join(
        os.environ.get("XDG_CACHE_HOME", os.path.expanduser("~/.cache")),
        "ansible-jsonrpc-server",
    )
    return os.path.join(home, "collections")


def main() -> None:
    # Protect the protocol stream: keep a private dup of stdout for the seam, then
    # point fd 1 (and sys.stdout) at stderr so a stray print() — in this process OR
    # in a forked worker, which inherits fd 1 — can never corrupt the frames.
    in_fd = os.dup(sys.stdin.fileno())
    out_fd = os.dup(sys.stdout.fileno())
    os.dup2(sys.stderr.fileno(), 1)
    sys.stdout = sys.stderr

    # Collections path + isolated ANSIBLE_HOME, set BEFORE the forkserver's
    # init_plugin_loader so workers resolve collection modules + action plugins there.
    collections_path = _collections_path()
    os.makedirs(collections_path, exist_ok=True)
    os.environ["ANSIBLE_COLLECTIONS_PATH"] = collections_path
    os.environ.setdefault("ANSIBLE_HOME", os.path.join(collections_path, os.pardir, "home"))

    # Orphan-prevention: own process group + SIGTERM/PR_SET_PDEATHSIG, armed while
    # single-threaded and before the pool so the forkserver/workers join the group.
    lifeline.arm()
    pool = TaskPool()
    pool.prime()          # forkserver up while single-threaded (fork-after-threads)
    lifeline.watch_parent()  # getppid fallback — safe to start a thread now
    handlers = make_handlers(pool.run_action, collections_path)  # install + facts + run
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
