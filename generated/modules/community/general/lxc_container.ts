import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.lxc_container
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.lxc_container",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.lxc_container",
  moduleFqn: "ansible_collections.community.general.plugins.modules.lxc_container",
  sources: [{
    artifact: ansibleCore,
    files: [
      "ansible/module_utils/_internal/__init__.py",
      "ansible/module_utils/_internal/_ansiballz/_loader.py",
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
    ],
  }, {
    artifact: communityGeneral,
    files: [
      "plugins/module_utils/_cmd_runner.py",
      "plugins/module_utils/_cmd_runner_fmt.py",
      "plugins/module_utils/_lvm.py",
      "plugins/module_utils/_lxc.py",
      "plugins/modules/lxc_container.py",
    ],
  }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible_collections/__init__.py",
    "ansible_collections/community/__init__.py",
    "ansible_collections/community/general/__init__.py",
    "ansible_collections/community/general/plugins/__init__.py",
    "ansible_collections/community/general/plugins/module_utils/__init__.py",
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface LxcContainerArgs {
  /** When set to V(true) the system attempts to create a compressed tarball of the running container. The O(archive) option supports LVM backed containers and creates a snapshot of the running container when creating the archive. */
  archive?: boolean;
  /** Type of compression to use when creating an archive of a running container. */
  archive_compression?: "gzip" | "bzip2" | "none";
  /** Path the save the archived container. */
  archive_path?: string;
  /** Backend storage type for the container. */
  backing_store?: "dir" | "lvm" | "loop" | "btrfs" | "overlayfs" | "zfs";
  /** Name of the new cloned server. */
  clone_name?: string;
  /** Create a snapshot a container when cloning. */
  clone_snapshot?: boolean;
  /** Path to the LXC configuration file. */
  config?: string;
  /** Run a command within a container. */
  container_command?: string;
  /** A list of C(key=value) options to use when configuring a container. */
  container_config?: string | string[];
  /** Enable a container log for host actions to the container. */
  container_log?: boolean;
  /** Set the log level for a container where O(container_log) was set. */
  container_log_level?: "Info" | "info" | "INFO" | "Error" | "error" | "ERROR" | "Debug" | "debug" | "DEBUG";
  /** Place rootfs directory under DIR. */
  directory?: string;
  /** File system Size. */
  fs_size?: string;
  /** Create fstype TYPE. */
  fs_type?: string;
  /** Name of the logical volume, defaults to the container name. */
  lv_name?: string;
  /** Place container under E(PATH). */
  lxc_path?: string;
  /** Name of a container. */
  name: string;
  /** Define the state of a container. */
  state?: "started" | "stopped" | "restarted" | "absent" | "frozen" | "clone";
  /** Name of the template to use within an LXC create. */
  template?: string;
  /** Template options when building the container. */
  template_options?: string;
  /** Use LVM thin pool called TP. */
  thinpool?: string;
  /** If backend store is lvm, specify the name of the volume group. */
  vg_name?: string;
  /** Create zfs under given zfsroot. */
  zfs_root?: string;
}

export interface LxcContainerReturn {
  /** Container information. */
  lxc_container?: unknown;
}
export const lxc_container = defineRemoteModule<LxcContainerArgs, LxcContainerReturn>(spec, meta);
