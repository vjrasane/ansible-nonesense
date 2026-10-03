import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.homectl
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.homectl",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.homectl",
  moduleFqn: "ansible_collections.community.general.plugins.modules.homectl",
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
    files: ["plugins/module_utils/_crypt.py", "plugins/module_utils/_deps.py", "plugins/modules/homectl.py"],
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
export interface HomectlArgs {
  /** The intended home directory disk space. */
  disksize?: string;
  /** The email address of the user. */
  email?: string;
  /** String separated by comma each containing an environment variable and its value to set for the user's login session, in a format compatible with C(putenv(\)). */
  environment?: string;
  /** Sets the gid of the user. */
  gid?: number;
  /** Path to use as home directory for the user. */
  homedir?: string;
  /** The name of an icon picked by the user, for example for the purpose of an avatar. */
  iconname?: string;
  /** Path to place the user's home directory. */
  imagepath?: string;
  /** The preferred language/locale for the user. */
  language?: string;
  /** A free-form location string describing the location of the user. */
  location?: string;
  /** Whether the user account should be locked or not. */
  locked?: boolean;
  /** String separated by comma each indicating a UNIX group this user shall be a member of. */
  memberof?: string;
  /** String separated by comma each indicating mount options for a users home directory. */
  mountopts?: string;
  /** The user name to create, remove, or update. */
  name: string;
  /** A time since the UNIX epoch after which the record should be considered invalid for the purpose of logging in. */
  notafter?: number;
  /** A time since the UNIX epoch before which the record should be considered invalid for the purpose of logging in. */
  notbefore?: number;
  /** Set the user's password to this. */
  password?: string;
  /** Password hint for the given user. */
  passwordhint?: string;
  /** The 'realm' a user is defined in. */
  realm?: string;
  /** The user's real ('human') name. */
  realname?: string;
  /** When used with O(disksize) this attempts to resize the home directory immediately. */
  resize?: boolean;
  /** Shell binary to use for terminal logins of given user. */
  shell?: string;
  /** The absolute path to the skeleton directory to populate a new home directory from. */
  skeleton?: string;
  /** String separated by comma each listing a SSH public key that is authorized to access the account. */
  sshkeys?: string;
  /** The operation to take on the user. */
  state?: "absent" | "present";
  /** Indicates the storage mechanism for the user's home directory. */
  storage?: "classic" | "luks" | "directory" | "subvolume" | "fscrypt" | "cifs";
  /** Preferred timezone to use for the user. */
  timezone?: string;
  /** Sets the UID of the user. */
  uid?: number;
  /** Sets the umask for the user's login sessions. */
  umask?: number;
}

export interface HomectlReturn {
  /** Dictionary returned from C(homectl inspect -j). */
  data?: Record<string, unknown>;
}
export const homectl = defineRemoteModule<HomectlArgs, HomectlReturn>(spec, meta);
