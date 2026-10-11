import multiprocessing
from concurrent.futures import ProcessPoolExecutor

_PRELOAD = "ansible_jsonrpc_server._preload"


def _execute(params):
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

    def __init__(self, forks=5):
        ctx = multiprocessing.get_context("forkserver")
        ctx.set_forkserver_preload([_PRELOAD])
        self._executor = ProcessPoolExecutor(
            max_workers=forks,
            mp_context=ctx,
            max_tasks_per_child=1,
        )

    def submit(self, fn, *args):
        return self._executor.submit(fn, *args)

    def run_action(self, params):
        return self._executor.submit(_execute, params).result()

    def shutdown(self):
        self._executor.shutdown(wait=False, cancel_futures=True)
