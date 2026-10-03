import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.user
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.user",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.user",
  moduleFqn: "ansible.modules.user",
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
      "ansible/modules/user.py",
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
export interface UserArgs {
  /** If V(true), add the user to the groups specified in O(groups). */
  append?: boolean;
  /** Sets the authorization of the user. */
  authorization?: string;
  /** Optionally sets the description (aka I(GECOS)) of user account. */
  comment?: string;
  /** Unless set to V(false), a home directory will be made for the user when the account is created or if the home directory does not exist. */
  create_home?: boolean;
  /** An expiry time for the user in epoch, it will be ignored on platforms that do not support this. */
  expires?: number;
  /** This only affects O(state=absent), it forces removal of the user and associated directories on supported platforms. */
  force?: boolean;
  /** Whether to generate a SSH key for the user in question. */
  generate_ssh_key?: boolean;
  /** Optionally sets the user's primary group (takes a group name). */
  group?: string;
  /** A list of supplementary groups which the user is also a member of. */
  groups?: string | string[];
  /** macOS only, optionally hide the user from the login window and system preferences. */
  hidden?: boolean;
  /** Optionally set the user's home directory. */
  home?: string;
  /** Forces the use of "local" command alternatives on platforms that implement it. */
  local?: boolean;
  /** Optionally sets the user's login class, a feature of most BSD OSs. */
  login_class?: string;
  /** If set to V(true) when used with O(home), attempt to move the user's old home directory to the specified directory if it isn't there already and the old home exists. */
  move_home?: boolean;
  /** Name of the user to create, remove or modify. */
  name: string;
  /** Optionally when used with the C(-u) option, this option allows to change the user ID to a non-unique value. */
  non_unique?: boolean;
  /** If provided, set the user's password to the provided encrypted hash (Linux) or plain text password (macOS). */
  password?: string;
  /** Number of days after a password expires until the account is disabled. */
  password_expire_account_disable?: number;
  /** Maximum number of days between password change. */
  password_expire_max?: number;
  /** Minimum number of days between password change. */
  password_expire_min?: number;
  /** Number of days of warning before password expires. */
  password_expire_warn?: number;
  /** Lock the password (C(usermod -L), C(usermod -U), C(pw lock)). */
  password_lock?: boolean;
  /** Sets the profile of the user. */
  profile?: string;
  /** This only affects O(state=absent), it attempts to remove directories associated with the user. */
  remove?: boolean;
  /** Sets the role of the user. */
  role?: string;
  /** Optionally sets the C(seuser) type C(user_u) on SELinux enabled systems. */
  seuser?: string;
  /** Optionally set the user's shell. */
  shell?: string;
  /** Optionally set a home skeleton directory. */
  skeleton?: string;
  /** Optionally specify number of bits in SSH key to create. */
  ssh_key_bits?: number;
  /** Optionally define the comment for the SSH key. */
  ssh_key_comment?: string;
  /** Optionally specify the SSH key filename. */
  ssh_key_file?: string;
  /** Set a passphrase for the SSH key. */
  ssh_key_passphrase?: string;
  /** Optionally specify the type of SSH key to generate. */
  ssh_key_type?: string;
  /** Whether the account should exist or not, taking action if the state is different from what is stated. */
  state?: "absent" | "present";
  /** When creating an account O(state=present), setting this to V(true) makes the user a system account. */
  system?: boolean;
  /** Optionally sets the I(UID) of the user. */
  uid?: number;
  /** Sets the UID_MAX value for user creation. */
  uid_max?: number;
  /** Sets the UID_MIN value for user creation. */
  uid_min?: number;
  /** Sets the umask of the user. */
  umask?: string;
  /** V(always) will update passwords if they differ. */
  update_password?: "always" | "on_create";
}

export interface UserReturn {
  /** Whether or not to append the user to groups. */
  append?: boolean;
  /** Comment section from passwd file, usually the user name. */
  comment?: string;
  /** Whether or not to create the home directory. */
  create_home?: boolean;
  /** Whether or not a user account was forcibly deleted. */
  force?: boolean;
  /** Primary user group ID */
  group?: number;
  /** List of groups of which the user is a member. */
  groups?: string;
  /** Path to user's home directory. */
  home?: string;
  /** Whether or not to move an existing home directory. */
  move_home?: boolean;
  /** User account name. */
  name?: string;
  /** Masked value of the password. */
  password?: string;
  /** Whether or not to remove the user account. */
  remove?: boolean;
  /** User login shell. */
  shell?: string;
  /** Fingerprint of generated SSH key. */
  ssh_fingerprint?: string;
  /** Path to generated SSH private key file. */
  ssh_key_file?: string;
  /** Generated SSH public key file. */
  ssh_public_key?: string;
  /** Standard error from running commands. */
  stderr?: string;
  /** Standard output from running commands. */
  stdout?: string;
  /** Whether or not the account is a system account. */
  system?: boolean;
  /** User ID of the user account. */
  uid?: number;
}
export const user = defineRemoteModule<UserArgs, UserReturn>(spec, meta);
