import {
  type AnsibleModuleMeta,
  copyAction,
  defineActionModule,
  defineRemoteModule,
  type RemoteModuleSpec,
} from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.copy
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.copy",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
export interface CopyArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. */
  backup?: boolean;
  /** SHA1 checksum of the file being transferred. */
  checksum?: string;
  /** When used instead of O(src), sets the contents of a file directly to the specified value. */
  content?: string;
  /** This option controls the auto-decryption of source files using vault. */
  decrypt?: boolean;
  /** Remote absolute path where the file should be copied to. */
  dest: string;
  /** Set the access permissions of newly created directories to the given mode. Permissions on existing directories do not change. */
  directory_mode?: unknown;
  /** This flag indicates that filesystem links in the destination, if they exist, should be followed. */
  follow?: boolean;
  /** Influence whether the remote file must always be replaced. */
  force?: boolean;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** This flag indicates that filesystem links in the source tree, if they exist, should be followed. */
  local_follow?: boolean;
  /** The permissions of the destination file or directory. */
  mode?: unknown;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** Influence whether O(src) needs to be transferred or already is present remotely. */
  remote_src?: boolean;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** Local path to a file to copy to the remote server. */
  src?: string;
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
  /** The validation command to run before copying the updated file into the final destination. */
  validate?: string;
}

export interface CopyReturn {
  /** Name of backup file created. */
  backup_file?: string;
  /** SHA1 checksum of the file after running copy. */
  checksum?: string;
  /** Destination file/path. */
  dest?: string;
  /** Group id of the file, after execution. */
  gid?: number;
  /** Group of the file, after execution. */
  group?: string;
  /** MD5 checksum of the file after running copy. */
  md5sum?: string;
  /** Permissions of the target, after execution. */
  mode?: string;
  /** Owner of the file, after execution. */
  owner?: string;
  /** Size of the target, after execution. */
  size?: number;
  /** Source file used for the copy on the target machine. */
  src?: string;
  /** State of the target, after execution. */
  state?: string;
  /** Owner id of the file, after execution. */
  uid?: number;
}

const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.copy",
  moduleFqn: "ansible.modules.copy",
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
      "ansible/modules/copy.py",
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
const mod = defineRemoteModule<CopyArgs, CopyReturn>(spec, meta);
export const copy = defineActionModule(copyAction, mod, meta);
