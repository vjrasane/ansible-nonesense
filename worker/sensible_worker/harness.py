import types
import ansible.plugins.loader as loader
from .context import build_context
from .connection import ShimConnection
from .rpc import RpcClient


def run_action(sock, msg):
    rpc = RpcClient(sock)

    def _execute_module(self, module_name=None, module_args=None, task_vars=None, **kwargs):
        return rpc.call("run_module", {"name": module_name, "args": module_args or {}})

    task, play_context, dl, templar = build_context(msg["plugin"], msg["args"], msg["vars"])
    cls = loader.action_loader.get(msg["plugin"], class_only=True)
    if cls is None:
        raise RuntimeError("no action plugin for %s" % msg["plugin"])
    plugin = cls(
        task, ShimConnection(play_context, rpc), play_context, dl, templar,
        shared_loader_obj=loader,
    )
    plugin._execute_module = types.MethodType(_execute_module, plugin)
    return plugin.run(task_vars=msg["vars"])
