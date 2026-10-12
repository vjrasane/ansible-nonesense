import multiprocessing
import os
from collections.abc import Callable
from concurrent.futures import Future

from pebble import ProcessPool

from .messages import ResultFrame, RunParams

_PRELOAD = "ansible_jsonrpc_server._preload"


def _execute(params: RunParams) -> ResultFrame:
    # Lazy import so the PARENT never imports ansible — only the forkserver (via the
    # preload) and its forked workers do. Warm in the worker, so this is a no-op cost.
    from .harness import run_action

    return run_action(params)


class TaskPool:
    """A process-per-task pool over `pebble.ProcessPool`. Ansible controller state is
    process-global and not thread-safe, so each task runs in its own worker, recycled
    after one task (`max_tasks=1`) → no loader-cache/CLIARGS/config leakage between
    tasks. Workers fork from a `forkserver` preloaded with ansible, so recycling costs a
    fork, not an import. pebble (unlike `ProcessPoolExecutor`) can cancel a *running*
    task and time it out, recovering the pool — see submit()/schedule()."""

    def __init__(self, forks: int = 5):
        ctx = multiprocessing.get_context("forkserver")
        ctx.set_forkserver_preload([_PRELOAD])
        self._pool = ProcessPool(max_workers=forks, max_tasks=1, context=ctx)

    def submit(self, fn: Callable, *args) -> Future:
        return self._pool.schedule(fn, args=args)

    def run_action(self, params: RunParams) -> ResultFrame:
        return self._pool.schedule(_execute, args=(params,)).result()

    def prime(self) -> None:
        # Force the forkserver (and one worker) to start now, while the process is
        # still single-threaded — the forkserver is forked from here, and forking a
        # multithreaded process is the fork-after-threads hazard. Must run before the
        # lifeline watch thread starts.
        self._pool.schedule(os.getpid).result()

    def shutdown(self) -> None:
        self._pool.stop()
        self._pool.join()
