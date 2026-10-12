import threading
from collections.abc import Callable
from concurrent.futures import Future

import msgspec

from .collections import CollectionCache
from .events import emit
from .messages import GatherFactsParams, HostSpec, ResultFrame, RunParams

RunAction = Callable[[RunParams], ResultFrame]

# Fact gathering + caching, server-owned (design §4.7). Lives in the ansible-free
# parent: it imports no ansible, it just orchestrates `setup` runs through whatever
# `run_action` it is given (the fork pool) and caches the result.


def _normalize(subset: list[str]) -> tuple[str, ...]:
    return tuple(sorted(subset))


class FactCache:
    """Per-host fact cache, keyed by (host.id, normalized gather_subset). Single-flight:
    concurrent callers for the same key share one gather (Future-per-key); a failed
    gather is evicted so the next call retries rather than caching the error."""

    def __init__(self, run_action: RunAction):
        self._run = run_action
        self._futures: dict[tuple[str | None, tuple[str, ...]], Future] = {}
        self._lock = threading.Lock()

    def ensure(self, host: HostSpec, task_vars: dict) -> dict:
        subset = _normalize(host.gather_subset or ["min"])
        key = (host.id, subset)
        with self._lock:
            fut = self._futures.get(key)
            owner = fut is None
            if owner:
                fut = Future()
                self._futures[key] = fut
        if owner:
            try:
                fut.set_result(self._gather(host, task_vars, subset))
            except BaseException as exc:  # noqa: BLE001 — propagate after eviction
                with self._lock:
                    if self._futures.get(key) is fut:
                        del self._futures[key]
                fut.set_exception(exc)
        return fut.result()

    def invalidate(self, host_id: str | None) -> None:
        with self._lock:
            for key in [k for k in self._futures if k[0] == host_id]:
                del self._futures[key]

    def _gather(self, host: HostSpec, task_vars: dict, subset: tuple[str, ...]) -> dict:
        token = "facts:%s:%s" % (host.id, ",".join(subset))
        emit("progress", {"token": token, "phase": "begin", "kind": "facts",
                          "host": host.id, "subset": list(subset)})
        try:
            frame = self._run(RunParams(
                host=HostSpec(connection=host.connection, become=host.become),
                fqcn="ansible.builtin.setup",
                args={"gather_subset": list(subset)},
                vars=task_vars,
            ))
        except BaseException:
            emit("progress", {"token": token, "phase": "end", "kind": "facts", "ok": False})
            raise
        if frame.status != "ok":
            emit("progress", {"token": token, "phase": "end", "kind": "facts", "ok": False})
            raise RuntimeError("fact gather failed: %r" % (frame.result,))
        emit("progress", {"token": token, "phase": "end", "kind": "facts", "ok": True})
        return frame.result["ansible_facts"]


def make_handlers(run_action: RunAction, collections_path: str) -> dict[str, tuple[type, Callable]]:
    """Build the JSON-RPC method handlers that wrap execution with collection + fact
    provisioning. `run_action(params: RunParams) -> ResultFrame` is the pool's executor."""
    facts = FactCache(run_action)
    collections = CollectionCache(collections_path)

    def run(params: RunParams) -> ResultFrame:
        if params.collection is not None:
            collections.ensure(params.collection)   # install before the worker runs
        host = params.host
        if host.gather_subset is not None:
            gathered = facts.ensure(host, params.vars)
            # ansible exposes facts both namespaced and flattened as top-level vars
            merged = {**params.vars, "ansible_facts": gathered, **gathered}
            params = msgspec.structs.replace(params, vars=merged)
        return run_action(params)

    def gather(params: GatherFactsParams) -> dict:
        return facts.ensure(params.host, params.vars)

    return {"runAction": (RunParams, run), "gatherFacts": (GatherFactsParams, gather)}
