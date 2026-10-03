import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.unarchive
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.unarchive",
  "actionPlugin": true,
  "powershell": false,
  "rawParams": false,
  "checkMode": "partial",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.unarchive",
  moduleFqn: "ansible.modules.unarchive",
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
      "ansible/module_utils/urls.py",
      "ansible/modules/unarchive.py",
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
export interface UnarchiveArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** If true, the file is copied from local controller to the managed (remote) node, otherwise, the plugin will look for src archive on the managed machine. */
  copy?: boolean;
  /** If the specified absolute path (file or directory) already exists, this step will B(not) be run. */
  creates?: string;
  /** This option controls the auto-decryption of source files using vault. */
  decrypt?: boolean;
  /** Remote absolute path where the archive should be unpacked. */
  dest: string;
  /** List the directory and file entries that you would like to exclude from the unarchive action. */
  exclude?: string | string[];
  /** Specify additional options by passing in an array. */
  extra_opts?: string | string[];
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** List of directory and file entries that you would like to extract from the archive. If O(include) is not empty, only files listed here will be extracted. */
  include?: string | string[];
  /** Size of the volatile memory buffer that is used for extracting files from the archive in bytes. */
  io_buffer_size?: number;
  /** Do not replace existing files that are newer than files from the archive. */
  keep_newer?: boolean;
  /** If set to True, return the list of files that are contained in the tarball. */
  list_files?: boolean;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** Set to V(true) to indicate the archived file is already on the remote system and not local to the Ansible controller. */
  remote_src?: boolean;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** If O(remote_src=no) (default), local path to archive file to copy to the target server; can be absolute or relative. If O(remote_src=yes), path on the target server to existing archive file to unpack. */
  src: string;
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
  /** This only applies if using a https URL as the source of the file. */
  validate_certs?: boolean;
}

export interface UnarchiveReturn {
  /** Path to the destination directory. */
  dest?: string;
  /** List of all the files in the archive. */
  files?: string | string[];
  /** Numerical ID of the group that owns the destination directory. */
  gid?: number;
  /** Name of the group that owns the destination directory. */
  group?: string;
  /** Archive software handler used to extract and decompress the archive. */
  handler?: string;
  /** String that represents the octal permissions of the destination directory. */
  mode?: string;
  /** Name of the user that owns the destination directory. */
  owner?: string;
  /** The size of destination directory in bytes. Does not include the size of files or subdirectories contained within. */
  size?: number;
  /** The source archive's path. */
  src?: string;
  /** State of the destination. Effectively always "directory". */
  state?: string;
  /** Numerical ID of the user that owns the destination directory. */
  uid?: number;
}
export const unarchive = defineRemoteModule<UnarchiveArgs, UnarchiveReturn>(spec, meta);
