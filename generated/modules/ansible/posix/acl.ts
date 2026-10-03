import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, ansiblePosix, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.posix.acl
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.posix.acl",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.posix.acl",
  moduleFqn: "ansible_collections.ansible.posix.plugins.modules.acl",
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
  }, { artifact: ansiblePosix, files: ["plugins/modules/acl.py"] }],
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
export interface AclArgs {
  /** If O(path) is a directory, setting this to V(true) will make it the default ACL for entities created inside the directory. */
  default?: boolean;
  /** The actual user or group that the ACL applies to when matching entity types user or group are selected. */
  entity?: string;
  /** DEPRECATED. */
  entry?: string;
  /** The entity type of the ACL to apply, see C(setfacl) documentation for more info. */
  etype?: "group" | "mask" | "other" | "user";
  /** Whether to follow symlinks on the path if a symlink is encountered. */
  follow?: boolean;
  /** The full path of the file or object. */
  path: string;
  /** The permissions to apply/remove can be any combination of C(r), C(w), C(x) (read, write and execute respectively), and C(X) (execute permission if the file is a directory or already has execute permission for some user) */
  permissions?: string;
  /** Select if and when to recalculate the effective right masks of the files. */
  recalculate_mask?: "default" | "mask" | "no_mask";
  /** Recursively sets the specified ACL. */
  recursive?: boolean;
  /** Define whether the ACL should be present or not. */
  state?: "absent" | "present" | "query";
  /** Use NFSv4 ACLs instead of POSIX ACLs. */
  use_nfsv4_acls?: boolean;
}

export interface AclReturn {
  /** Current ACL on provided path (after changes, if any) */
  acl?: string | string[];
}
export const acl = defineRemoteModule<AclArgs, AclReturn>(spec, meta);
