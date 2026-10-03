import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, ansiblePosix, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.posix.synchronize
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.posix.synchronize",
  "actionPlugin": true,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.posix.synchronize",
  moduleFqn: "ansible_collections.ansible.posix.plugins.modules.synchronize",
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
  }, { artifact: ansiblePosix, files: ["plugins/modules/synchronize.py"] }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible_collections/__init__.py",
    "ansible_collections/ansible/__init__.py",
    "ansible_collections/ansible/posix/__init__.py",
    "ansible_collections/ansible/posix/plugins/__init__.py",
    "ansible_collections/ansible/posix/plugins/modules/__init__.py",
  ],
} as const;
export interface SynchronizeArgs {
  /** Internal use only, never logged. */
  _local_rsync_password?: string;
  /** Internal use only. */
  _local_rsync_path?: string;
  /** Internal use only. See O(use_ssh_args) for ssh arg settings. */
  _ssh_args?: string;
  /** Internal use only. */
  _substitute_controller?: boolean;
  /** Mirrors the rsync archive flag, enables recursive, links, perms, times, owner, group flags, and C(-D). */
  archive?: boolean;
  /** Skip based on checksum, rather than mod-time & size; Note that that O(archive) option is still enabled by default - the O(checksum) option will not disable it. */
  checksum?: boolean;
  /** Compress file data during the transfer. */
  compress?: boolean;
  /** Copy symlinks as the item that they point to (the referent) is copied, rather than the symlink. */
  copy_links?: boolean;
  /** This option puts the temporary file from each updated file into a holding directory until the end of the transfer, at which time all the files are renamed into place in rapid succession. */
  delay_updates?: boolean;
  /** Delete files in O(dest) that do not exist (after transfer, not before) in the O(src) path. */
  delete?: boolean;
  /** Path on the destination host that will be synchronized from the source. */
  dest: string;
  /** Port number for ssh on the destination host. */
  dest_port?: number;
  /** Transfer directories without recursing. */
  dirs?: boolean;
  /** Skip creating new files on receiver. */
  existing_only?: boolean;
  /** Preserve group. */
  group?: boolean;
  /** Add a destination to hard link against during the rsync. */
  link_dest?: string | string[];
  /** Copy symlinks as symlinks. */
  links?: boolean;
  /** Specify the direction of the synchronization. */
  mode?: "pull" | "push";
  /** Preserve owner (super user only). */
  owner?: boolean;
  /** Tells rsync to keep the partial file which should make a subsequent transfer of the rest of the file much faster. */
  partial?: boolean;
  /** Preserve permissions. */
  perms?: boolean;
  /** Specify the private key to use for SSH-based rsync connections (e.g. C(~/.ssh/id_rsa)). */
  private_key?: string;
  /** Recurse into directories. */
  recursive?: boolean;
  /** Specify additional rsync options by passing in an array. */
  rsync_opts?: string | string[];
  /** Specify the rsync command to run on the remote host. See C(--rsync-path) on the rsync man page. */
  rsync_path?: string;
  /** Specify a C(--timeout) for the rsync command in seconds. */
  rsync_timeout?: number;
  /** Put C(user@) for the remote paths. */
  set_remote_user?: boolean;
  /** Path on the source host that will be synchronized to the destination. */
  src: string;
  /** SSH connection multiplexing for rsync is disabled by default to prevent misconfigured ControlSockets from resulting in failed SSH connections. This is accomplished by setting the SSH C(ControlSocket) to C(none). */
  ssh_connection_multiplexing?: boolean;
  /** Preserve modification times. */
  times?: boolean;
  /** In Ansible 2.10 and lower, it uses the ssh_args specified in C(ansible.cfg). */
  use_ssh_args?: boolean;
  /** Verify destination host key. */
  verify_host?: boolean;
}

export type SynchronizeReturn = Record<string, unknown>;
export const synchronize = defineRemoteModule<SynchronizeArgs, SynchronizeReturn>(spec, meta);
