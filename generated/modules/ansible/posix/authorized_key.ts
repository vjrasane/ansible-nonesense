import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, ansiblePosix, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.posix.authorized_key
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.posix.authorized_key",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.posix.authorized_key",
  moduleFqn: "ansible_collections.ansible.posix.plugins.modules.authorized_key",
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
    ],
  }, { artifact: ansiblePosix, files: ["plugins/modules/authorized_key.py"] }],
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
export interface AuthorizedKeyArgs {
  /** Change the comment on the public key. */
  comment?: string;
  /** Whether to remove all other non-specified keys from the authorized_keys file. */
  exclusive?: boolean;
  /** Follow path symlink instead of replacing it. */
  follow?: boolean;
  /** The SSH public key(s), as a string or (since Ansible 1.9) url (https://github.com/username.keys). */
  key: string;
  /** A string of ssh key options to be prepended to the key in the authorized_keys file. */
  key_options?: string;
  /** Whether this module should manage the directory of the authorized key file. */
  manage_dir?: boolean;
  /** Alternative path to the authorized_keys file. */
  path?: string;
  /** Whether the given key (with the given key_options) should or should not be in the file. */
  state?: "absent" | "present";
  /** The username on the remote host whose authorized_keys file will be modified. */
  user: string;
  /** This only applies if using a https url as the source of the keys. */
  validate_certs?: boolean;
}

export interface AuthorizedKeyReturn {
  /** If the key has been forced to be exclusive or not. */
  exclusive?: boolean;
  /** The key that the module was running against. */
  key?: string;
  /** Key options related to the key. */
  key_option?: string;
  /** Path for authorized key file. */
  keyfile?: string;
  /** Whether this module managed the directory of the authorized key file. */
  manage_dir?: boolean;
  /** Alternate path to the authorized_keys file */
  path?: string;
  /** Whether the given key (with the given key_options) should or should not be in the file */
  state?: string;
  /** Whether the key is unique */
  unique?: boolean;
  /** The username on the remote host whose authorized_keys file will be modified */
  user?: string;
  /** This only applies if using a https url as the source of the keys. If set to C(false), the SSL certificates will not be validated. */
  validate_certs?: boolean;
}
export const authorized_key = defineRemoteModule<AuthorizedKeyArgs, AuthorizedKeyReturn>(spec, meta);
