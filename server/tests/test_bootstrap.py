import os
import subprocess
import sys

BOOTSTRAP = os.path.join(
    os.path.dirname(os.path.dirname(__file__)), "bootstrap", "v1", "bootstrap.sh"
)


def _run(data_home, *args):
    env = {**os.environ, "XDG_DATA_HOME": str(data_home)}
    proc = subprocess.run(
        ["sh", BOOTSTRAP, *args], capture_output=True, text=True, env=env
    )
    assert proc.returncode == 0, proc.stderr
    return proc.stdout.strip().splitlines()[-1]  # last line = venv python path


def test_bootstrap_provisions_working_venv(tmp_path):
    py = _run(tmp_path, sys.executable)  # pin the interpreter (devenv python)

    venv = tmp_path / "ansible-jsonrpc-server" / "venv" / "0.0.1"
    assert py == str(venv / "bin" / "python")
    assert (venv / "bin" / "ansible-jsonrpc-server").is_file()  # console script
    # The provisioned venv can import the server package (deps installed).
    subprocess.run([py, "-c", "import ansible_jsonrpc_server"], check=True)


def test_bootstrap_is_idempotent(tmp_path):
    py = _run(tmp_path, sys.executable)
    marker = tmp_path / "ansible-jsonrpc-server" / "venv" / "0.0.1" / "MARKER"
    marker.write_text("x")  # a rebuild would wipe this

    again = _run(tmp_path, sys.executable)
    assert again == py
    assert marker.exists(), "second run rebuilt the venv instead of no-op"


def test_bootstrap_rejects_old_python(tmp_path):
    env = {**os.environ, "XDG_DATA_HOME": str(tmp_path)}
    proc = subprocess.run(
        ["sh", BOOTSTRAP, "false"],  # a "python" that always exits non-zero
        capture_output=True, text=True, env=env,
    )
    assert proc.returncode != 0
    assert "3.11" in proc.stderr
