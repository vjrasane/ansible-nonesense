import multiprocessing
import os
from collections.abc import Callable
from concurrent.futures import Future, ProcessPoolExecutor

from .messages import ResultFrame, RunParams

_PRELOAD = "ansible_jsonrpc_server._preload"


def _execute(params: RunParams) -> ResultFrame:
    # Lazy import so the PARENT never imports ansible — only the forkserver (via the
    # preload) and its forked workers do. Warm in the worker, so this is a no-op cost.
    from .harness import run_action

    return run_action(params)


class TaskPool:
    """A process-per-task pool. Ansible controller state is process-global and not
    thread-safe, so each task runs in its own worker, recycled after one task
    (`max_tasks_per_child=1`) → no loader-cache/CLIARGS/config leakage between tasks.
    Workers fork from a `forkserver` preloaded with ansible, so recycling costs a
    fork, not an import."""

    def __init__(self, forks: int = 5):
        ctx = multiprocessing.get_context("forkserver")
        ctx.set_forkserver_preload([_PRELOAD])
        self._executor = ProcessPoolExecutor(
            max_workers=forks,
            mp_context=ctx,
            max_tasks_per_child=1,
        )

    def submit(self, fn: Callable, *args) -> Future:
        return self._executor.submit(fn, *args)

    def run_action(self, params: RunParams) -> ResultFrame:
        return self._executor.submit(_execute, params).result()

    def prime(self) -> None:
        # Force the forkserver (and one worker) to start now, while the process is
        # still single-threaded — the forkserver is forked from here, and forking a
        # multithreaded process is the fork-after-threads hazard. Must run before the
        # lifeline watch thread starts.
        self._executor.submit(os.getpid).result()

    def shutdown(self) -> None:
        self._executor.shutdown(wait=False, cancel_futures=True)
