import ansible.plugins.loader as loader
from ansible.parsing.dataloader import DataLoader
from ansible.playbook.play import Play
from ansible.playbook.block import Block
from ansible.playbook.task import Task
from ansible.playbook.play_context import PlayContext
from ansible.template import Templar

_FLAG_KEYWORDS = ("check_mode", "diff", "no_log")


def build_execution(host, fqcn, args, task_vars, flags):
    loader.init_plugin_loader()
    dl = DataLoader()

    play = Play.load({}, variable_manager=None, loader=dl)
    block = Block(play=play)
    task_data = {"action": fqcn, "args": args}
    for kw in _FLAG_KEYWORDS:
        if kw in flags:
            task_data[kw] = flags[kw]
    task = Task.load(task_data, block=block)

    play_context = PlayContext()
    templar = Templar(loader=dl, variables=task_vars)

    conn_spec = host.get("connection", {})
    connection = loader.connection_loader.get(conn_spec["type"], play_context, None)
    connection.set_options(var_options=conn_spec.get("vars", {}))

    become_vars = host.get("become", {})
    if become_vars:
        become = loader.become_loader.get(become_vars.get("ansible_become_method", "sudo"))
        become.set_options(var_options=become_vars)
        connection.become = become

    cls = loader.action_loader.get(fqcn, class_only=True) or loader.action_loader.get(
        "ansible.legacy.normal", class_only=True
    )
    plugin = cls(task, connection, play_context, dl, templar, shared_loader_obj=loader)
    return plugin, task_vars
