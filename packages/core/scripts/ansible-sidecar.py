#!/usr/bin/env python3
"""
Long-lived Ansible sidecar with streamed events.

Protocol: newline-delimited JSON. Requests on stdin, responses on fd 3.

  -> {"id": 2, "op": "run", "hosts": "web", "module": "apt",
                            "args": {"name": "nginx"}, "become": true}
  <- {"id": 2, "event": "task_start",  "task": "sidecar:apt"}
  <- {"id": 2, "event": "host_start",  "host": "web1", "task": "sidecar:apt"}
  <- {"id": 2, "event": "host_result", "host": "web1", "status": "ok", "result": {...}}
  <- {"id": 2, "ok": true, "done": true, "rc": 0, "hosts": {...}}

Pin ansible-core; this uses internal API that shifts between minors.
"""
import json
import os
import shutil
import signal
import sys
import threading
import time

from ansible import constants as C
from ansible import context
from ansible.executor.task_queue_manager import TaskQueueManager
from ansible.inventory.manager import InventoryManager
from ansible.module_utils.common.collections import ImmutableDict
from ansible.parsing.ajson import AnsibleJSONEncoder
from ansible.parsing.dataloader import DataLoader
from ansible.playbook.play import Play
from ansible.plugins.callback import CallbackBase
from ansible.vars.manager import VariableManager


class Streamer(CallbackBase):
    """Replaces the default stdout printer; forwards events as they happen."""

    CALLBACK_VERSION = 2.0
    CALLBACK_TYPE = "stdout"
    CALLBACK_NAME = "sidecar"

    def __init__(self, rid, emit):
        super().__init__()
        self.rid = rid
        self.emit = emit
        self.results = {}

    def _event(self, kind, **fields):
        self.emit({"id": self.rid, "event": kind, **fields})

    # --- lifecycle -------------------------------------------------------
    def v2_playbook_on_task_start(self, task, is_conditional):
        self._event("task_start", task=task.get_name())

    def v2_runner_on_start(self, host, task):
        self._event("host_start", host=host.get_name(), task=task.get_name())

    # --- per-host outcome (also recorded for the final summary) ----------
    def _finish(self, status, result):
        host = result._host.get_name()
        self.results[host] = {"status": status, "result": result._result}
        self._event("host_result", host=host, status=status, result=result._result)

    def v2_runner_on_ok(self, result):
        self._finish("ok", result)

    def v2_runner_on_failed(self, result, ignore_errors=False):
        self._finish("failed", result)

    def v2_runner_on_unreachable(self, result):
        self._finish("unreachable", result)

    def v2_runner_on_skipped(self, result):
        self._finish("skipped", result)

    # --- progress inside a task ------------------------------------------
    def _item(self, status, result):
        self._event("item_result", host=result._host.get_name(), status=status,
                    item=result._result.get("item"), result=result._result)

    def v2_runner_item_on_ok(self, result):
        self._item("ok", result)

    def v2_runner_item_on_failed(self, result):
        self._item("failed", result)

    def v2_runner_item_on_skipped(self, result):
        self._item("skipped", result)

    def v2_runner_retry(self, result):
        self._event("retry", host=result._host.get_name(),
                    attempt=result._result.get("attempts"),
                    retries=result._result.get("retries"))

    def v2_runner_on_async_poll(self, result):
        self._event("async_poll", host=result._host.get_name(),
                    jid=result._result.get("ansible_job_id"))


class Sidecar:
    def __init__(self, inventory_sources, extra_vars=None, forks=10):
        context.CLIARGS = ImmutableDict(
            connection="ssh", forks=forks, become=None, become_method=None,
            become_user=None, check=False, diff=False, verbosity=0,
            module_path=None, syntax=None, start_at_task=None,
        )
        self.loader = DataLoader()
        self.inventory = InventoryManager(loader=self.loader, sources=inventory_sources)
        self.variable_manager = VariableManager(loader=self.loader, inventory=self.inventory)
        if extra_vars:
            self.variable_manager.extra_vars = extra_vars

    def run(self, rid, emit, hosts, module, args, become=False):
        play = Play().load(
            {
                "name": f"sidecar:{module}",
                "hosts": hosts,
                "gather_facts": "no",
                "become": become,
                "tasks": [{"action": {"module": module, "args": args}}],
            },
            variable_manager=self.variable_manager,
            loader=self.loader,
        )
        cb = Streamer(rid, emit)
        tqm = TaskQueueManager(
            inventory=self.inventory,
            variable_manager=self.variable_manager,
            loader=self.loader,
            passwords={},
            stdout_callback=cb,
        )
        try:
            rc = tqm.run(play)
        finally:
            tqm.cleanup()
        return {"rc": rc, "hosts": cb.results}

    def close(self):
        shutil.rmtree(C.DEFAULT_LOCAL_TMP, ignore_errors=True)


def _die(reason):
    """Kill everything in our process group: us plus any TQM worker forks."""
    sys.stderr.write(f"sidecar: {reason}, shutting down\n")
    pgid = os.getpgrp()
    try:
        os.killpg(pgid, signal.SIGTERM)
        time.sleep(1.0)  # give workers a moment to release SSH channels
        os.killpg(pgid, signal.SIGKILL)
    finally:
        os._exit(1)


def start_parent_watchdog(poll_interval=0.5):
    parent = os.getppid()

    # Linux: kernel sends SIGTERM to this process the moment the parent dies.
    # Covers SIGKILL/OOM of the controller with zero latency.
    if sys.platform.startswith("linux"):
        try:
            import ctypes
            PR_SET_PDEATHSIG = 1
            libc = ctypes.CDLL("libc.so.6", use_errno=True)
            libc.prctl(PR_SET_PDEATHSIG, signal.SIGTERM, 0, 0, 0)
        except OSError:
            pass
        # Close the race where the parent died before prctl() ran.
        if os.getppid() != parent:
            _die("parent already gone")

    # Portable fallback (macOS etc.): poll for re-parenting. Runs even while the
    # main thread is blocked inside tqm.run() and not reading stdin.
    def watch():
        while True:
            time.sleep(poll_interval)
            if os.getppid() != parent:
                _die("parent exited")

    threading.Thread(target=watch, name="parent-watchdog", daemon=True).start()

    # SIGTERM from the controller (or from PDEATHSIG) should take the workers too.
    signal.signal(signal.SIGTERM, lambda *_: _die("SIGTERM"))


def main():
    start_parent_watchdog()
    out = os.fdopen(3, "w", buffering=1)
    sidecar = None

    def emit(obj):
        out.write(json.dumps(obj, cls=AnsibleJSONEncoder) + "\n")

    try:
        for line in sys.stdin:
            line = line.strip()
            if not line:
                continue
            req = json.loads(line)
            rid = req.get("id")
            try:
                op = req["op"]
                if op == "init":
                    sidecar = Sidecar(req["inventory"], req.get("extra_vars"), req.get("forks", 10))
                    emit({"id": rid, "ok": True, "done": True})
                elif op == "run":
                    if sidecar is None:
                        raise RuntimeError("call init first")
                    res = sidecar.run(rid, emit, req["hosts"], req["module"],
                                      req.get("args", {}), req.get("become", False))
                    emit({"id": rid, "ok": True, "done": True, **res})
                else:
                    emit({"id": rid, "ok": False, "done": True, "error": f"unknown op {op!r}"})
            except Exception as exc:
                emit({"id": rid, "ok": False, "done": True, "error": repr(exc)})
    finally:
        if sidecar is not None:
            sidecar.close()
        _die("stdin closed")


if __name__ == "__main__":
    main()
