import ansible.plugins.loader as loader
from ansible.parsing.dataloader import DataLoader
from ansible.playbook.play import Play
from ansible.playbook.block import Block
from ansible.playbook.task import Task
from ansible.playbook.play_context import PlayContext
from ansible.template import Templar
from ansible.plugins.action import ActionBase

from .messages import Flags, HostSpec


def build_execution(
    host: HostSpec, fqcn: str, args: dict, task_vars: dict, flags: Flags,
) -> tuple[ActionBase, dict]:
    loader.init_plugin_loader()
    dl = DataLoader()

    play = Play.load({}, variable_manager=None, loader=dl)
    block = Block(play=play)
    task = Task.load(
        {"action": fqcn, "args": args, "check_mode": flags.check_mode,
         "diff": flags.diff, "no_log": flags.no_log},
        block=block,
    )

    play_context = PlayContext()
    templar = Templar(loader=dl, variables=task_vars)

    conn_spec = host.connection
    connection = loader.connection_loader.get(conn_spec.type, play_context, None)
    connection.set_options(var_options=conn_spec.vars)

    become_vars = host.become
    if become_vars:
        become = loader.become_loader.get(become_vars.get("ansible_become_method", "sudo"))
        become.set_options(var_options=become_vars)
        connection.become = become

    cls = loader.action_loader.get(fqcn, class_only=True) or loader.action_loader.get(
        "ansible.legacy.normal", class_only=True
    )
    plugin = cls(task, connection, play_context, dl, templar, shared_loader_obj=loader)
    return plugin, task_vars
