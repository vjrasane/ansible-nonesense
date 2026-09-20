#!/bin/sh
for entry in \
  /usr/bin/rpm-ostree:atomic_container \
  /usr/bin/dnf5:dnf5 \
  /usr/bin/dnf:dnf \
  /usr/bin/yum:dnf \
  /usr/bin/apt-get:apt \
  /usr/bin/zypper:zypper \
  /usr/bin/pacman:pacman \
  /sbin/apk:apk; do
  bin=${entry%%:*}
  name=${entry##*:}
  if [ -x "$bin" ]; then
    echo "pkg_mgr=$name"
    break
  fi
done

if [ -d /run/systemd/system ]; then
  echo service_mgr=systemd
elif command -v initctl >/dev/null 2>&1 && [ -d /etc/init ]; then
  echo service_mgr=upstart
elif [ -x /sbin/openrc ]; then
  echo service_mgr=openrc
else
  echo "service_mgr=$(cat /proc/1/comm 2>/dev/null || echo sysvinit)"
fi

echo "system=$(uname -s)"
