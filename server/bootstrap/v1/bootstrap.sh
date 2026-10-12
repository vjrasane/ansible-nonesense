#!/bin/sh
# Provision the ansible-jsonrpc-server runtime: an isolated, version-keyed venv with
# the server (and ansible-core) installed. Idempotent — a second run is a fast no-op.
# Prints the venv's python path on the last stdout line so the caller knows what to
# spawn. POSIX sh; see design §4.8.
#
# Usage: bootstrap.sh [python]   # optional explicit interpreter, else auto-discover
set -eu

VERSION=0.0.1   # server version this bootstrap provisions (= the bootstrap/vN pin)

# Install source. Not on PyPI yet → install the local tree two dirs up (server/).
# Swap for "ansible-jsonrpc-server==$VERSION" once published.
script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
src=$(CDPATH= cd -- "$script_dir/../.." && pwd)

# Installed deps live in the data dir (survive a cache purge, §4.8), keyed by version.
data_home=${XDG_DATA_HOME:-$HOME/.local/share}
root="$data_home/ansible-jsonrpc-server"
venv="$root/venv/$VERSION"

# Python: explicit $1 override, else newest discovered 3.13→3.11; require >= 3.11.
py=${1:-}
if [ -z "$py" ]; then
  for c in python3.13 python3.12 python3.11; do
    if command -v "$c" >/dev/null 2>&1; then py=$c; break; fi
  done
fi
[ -n "$py" ] || { echo "bootstrap: no python3.11+ interpreter found" >&2; exit 1; }
"$py" -c 'import sys; raise SystemExit(0 if sys.version_info[:2] >= (3, 11) else 1)' \
  || { echo "bootstrap: $py is older than python 3.11" >&2; exit 1; }

# Serialize concurrent first-runs; the lock is held until this process exits (fd 9).
mkdir -p "$root"
if command -v flock >/dev/null 2>&1; then
  exec 9>"$root/.bootstrap.lock"
  flock 9
fi

# Idempotent: the console script exists → already provisioned.
if [ -x "$venv/bin/ansible-jsonrpc-server" ]; then
  echo "$venv/bin/python"
  exit 0
fi

# Build fresh in a temp dir, then atomically move into place, so a crashed/interrupted
# install never leaves a half-populated venv that the idempotency check would accept.
tmp="$venv.tmp.$$"
rm -rf "$tmp"
"$py" -m venv "$tmp"
"$tmp/bin/python" -m pip install --quiet --disable-pip-version-check "$src"
rm -rf "$venv"
mv "$tmp" "$venv"

echo "$venv/bin/python"
