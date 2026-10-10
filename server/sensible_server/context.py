import ansible.plugins.loader as loader
from ansible.parsing.dataloader import DataLoader
from ansible.playbook.play import Play
from ansible.playbook.block import Block
from ansible.playbook.task import Task
from ansible.playbook.play_context import PlayContext
from ansible.template import Templar


def build_context(plugin_fqcn, args, variables):
    loader.init_plugin_loader()
    dl = DataLoader()
    play = Play.load(
        {"hosts": "all", "gather_facts": False}, variable_manager=None, loader=dl
    )
    block = Block(play=play)
    task = Task.load({"action": plugin_fqcn, "args": args}, block=block)
    play_context = PlayContext()
    templar = Templar(loader=dl, variables=variables)
    return task, play_context, dl, templar
