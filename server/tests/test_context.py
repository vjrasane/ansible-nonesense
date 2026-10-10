from sensible_server.context import build_context


def test_context_builds_full_parent_chain():
    task, play_context, dl, templar = build_context(
        "ansible.builtin.package", {"name": "git", "state": "present"}, {}
    )
    # the gap the spike exposed: plugins read task._parent._play._action_groups
    assert task._parent._play._action_groups == {}
    assert task.args == {"name": "git", "state": "present"}
    assert hasattr(play_context, "become")
    assert hasattr(templar, "template")
