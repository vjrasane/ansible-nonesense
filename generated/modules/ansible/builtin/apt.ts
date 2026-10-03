import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.apt
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.apt",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.apt",
  moduleFqn: "ansible.modules.apt",
  sources: [{
    artifact: ansibleCore,
    files: [
      "ansible/module_utils/_internal/__init__.py",
      "ansible/module_utils/_internal/_ansiballz/_loader.py",
      "ansible/module_utils/_internal/_ansiballz/_respawn.py",
      "ansible/module_utils/_internal/_ansiballz/_respawn_wrapper.py",
      "ansible/module_utils/_internal/_dataclass_validation.py",
      "ansible/module_utils/_internal/_datatag/__init__.py",
      "ansible/module_utils/_internal/_datatag/_tags.py",
      "ansible/module_utils/_internal/_debugging.py",
      "ansible/module_utils/_internal/_deprecator.py",
      "ansible/module_utils/_internal/_errors.py",
      "ansible/module_utils/_internal/_event_utils.py",
      "ansible/module_utils/_internal/_json/__init__.py",
      "ansible/module_utils/_internal/_json/_legacy_encoder.py",
      "ansible/module_utils/_internal/_json/_profiles/__init__.py",
      "ansible/module_utils/_internal/_json/_profiles/_module_legacy_c2m.py",
      "ansible/module_utils/_internal/_json/_profiles/_module_legacy_m2c.py",
      "ansible/module_utils/_internal/_json/_profiles/_tagless.py",
      "ansible/module_utils/_internal/_messages.py",
      "ansible/module_utils/_internal/_patches/__init__.py",
      "ansible/module_utils/_internal/_patches/_dataclass_annotation_patch.py",
      "ansible/module_utils/_internal/_patches/_socket_patch.py",
      "ansible/module_utils/_internal/_patches/_sys_intern_patch.py",
      "ansible/module_utils/_internal/_plugin_info.py",
      "ansible/module_utils/_internal/_stack.py",
      "ansible/module_utils/_internal/_text_utils.py",
      "ansible/module_utils/_internal/_traceback.py",
      "ansible/module_utils/_internal/_validation.py",
      "ansible/module_utils/basic.py",
      "ansible/module_utils/common/_utils.py",
      "ansible/module_utils/common/arg_spec.py",
      "ansible/module_utils/common/collections.py",
      "ansible/module_utils/common/file.py",
      "ansible/module_utils/common/json.py",
      "ansible/module_utils/common/locale.py",
      "ansible/module_utils/common/parameters.py",
      "ansible/module_utils/common/process.py",
      "ansible/module_utils/common/respawn.py",
      "ansible/module_utils/common/sys_info.py",
      "ansible/module_utils/common/text/converters.py",
      "ansible/module_utils/common/text/formatters.py",
      "ansible/module_utils/common/validation.py",
      "ansible/module_utils/common/warnings.py",
      "ansible/module_utils/compat/selinux.py",
      "ansible/module_utils/compat/typing.py",
      "ansible/module_utils/datatag.py",
      "ansible/module_utils/distro/__init__.py",
      "ansible/module_utils/distro/_distro.py",
      "ansible/module_utils/errors.py",
      "ansible/module_utils/parsing/convert_bool.py",
      "ansible/module_utils/six/__init__.py",
      "ansible/module_utils/urls.py",
      "ansible/modules/apt.py",
    ],
  }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible/modules/__init__.py",
  ],
} as const;
export interface AptArgs {
  /** Allows changing the version of a package which is on the apt hold list. */
  allow_change_held_packages?: boolean;
  /** Corresponds to the C(--allow-downgrades) option for I(apt). */
  allow_downgrade?: boolean;
  /** Ignore if packages cannot be authenticated. This is useful for bootstrapping environments that manage their own apt-key setup. */
  allow_unauthenticated?: boolean;
  /** Automatically install dependencies required to run this module. */
  auto_install_module_deps?: boolean;
  /** If V(true), cleans the local repository of retrieved package files that can no longer be downloaded. */
  autoclean?: boolean;
  /** If V(true), remove unused dependency packages for all module states except V(build-dep). It can also be used as the only option. */
  autoremove?: boolean;
  /** Update the apt cache if it is older than the O(cache_valid_time). This option is set in seconds. */
  cache_valid_time?: number;
  /** Run the equivalent of C(apt-get clean) to clear out the local repository of retrieved package files. It removes everything but the lock file from C(/var/cache/apt/archives/) and C(/var/cache/apt/archives/partial/). */
  clean?: boolean;
  /** Path to a .deb package on the remote machine. */
  deb?: string;
  /** Corresponds to the C(-t) option for I(apt) and sets pin priorities. */
  default_release?: string;
  /** Add C(dpkg) options to C(apt) command. Defaults to C(-o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold"). */
  dpkg_options?: string;
  /** Corresponds to the C(--no-remove) option for C(apt). */
  fail_on_autoremove?: boolean;
  /** Corresponds to the C(--force-yes) to C(apt-get) and implies O(allow_unauthenticated=yes) and O(allow_downgrade=yes). */
  force?: boolean;
  /** Force usage of apt-get instead of aptitude. */
  force_apt_get?: boolean;
  /** Corresponds to the C(--no-install-recommends) option for C(apt). V(true) installs recommended packages. V(false) does not install recommended packages. By default, Ansible will use the same defaults as the operating system. Suggested packages are never installed. */
  install_recommends?: boolean;
  /** How many seconds will this action wait to acquire a lock on the apt db. */
  lock_timeout?: number;
  /** A list of package names, like V(foo), or package specifier with version, like V(foo=1.0) or V(foo>=1.0). Name wildcards (fnmatch) like V(apt*) and version wildcards like V(foo=1.0*) are also supported. */
  name?: string | string[];
  /** Only upgrade a package if it is already installed. */
  only_upgrade?: boolean;
  /** Force the exit code of C(/usr/sbin/policy-rc.d). */
  policy_rc_d?: number;
  /** Will force purging of configuration files if O(state=absent) or O(autoremove=yes). */
  purge?: boolean;
  /** Indicates the desired package state. V(latest) ensures that the latest version is installed. V(build-dep) ensures the package build dependencies are installed. V(fixed) attempt to correct a system with broken dependencies in place. */
  state?: "absent" | "build-dep" | "latest" | "present" | "fixed";
  /** Run the equivalent of C(apt-get update) before the operation. Can be run as part of the package installation or as a separate step. */
  update_cache?: boolean;
  /** Amount of retries if the cache update fails. Also see O(update_cache_retry_max_delay). */
  update_cache_retries?: number;
  /** Use an exponential backoff delay for each retry (see O(update_cache_retries)) up to this max delay in seconds. */
  update_cache_retry_max_delay?: number;
  /** If yes or safe, performs an aptitude safe-upgrade. */
  upgrade?: "dist" | "full" | "no" | "safe" | "yes";
}

export interface AptReturn {
  /** time of the last cache update (0 if unknown) */
  cache_update_time?: number;
  /** if the cache was updated or not */
  cache_updated?: boolean;
  /** error output from apt */
  stderr?: string;
  /** output from apt */
  stdout?: string;
}
export const apt = defineRemoteModule<AptArgs, AptReturn>(spec, meta);
