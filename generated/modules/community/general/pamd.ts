import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.pamd
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.pamd",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.pamd",
  moduleFqn: "ansible_collections.community.general.plugins.modules.pamd",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/pamd.py"] }],
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
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface PamdArgs {
  /** Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. */
  backup?: boolean;
  /** The control of the PAM rule being modified. */
  control: string;
  /** When O(state=updated), the O(module_arguments) replace existing module_arguments. */
  module_arguments?: string | string[];
  /** The module path of the PAM rule being modified. */
  module_path: string;
  /** The name generally refers to the PAM service file to change, for example system-auth. */
  name: string;
  /** The new control to assign to the new rule. */
  new_control?: string;
  /** The new module path to be assigned to the new rule. */
  new_module_path?: string;
  /** The new type to assign to the new rule. */
  new_type?: "account" | "-account" | "auth" | "-auth" | "password" | "-password" | "session" | "-session";
  /** This is the path to the PAM service files. */
  path?: string;
  /** The default of V(updated) modifies an existing rule if type, control and module_path all match an existing rule. */
  state?: "absent" | "before" | "after" | "args_absent" | "args_present" | "updated";
  /** The type of the PAM rule being modified. */
  type: "account" | "-account" | "auth" | "-auth" | "password" | "-password" | "session" | "-session";
}

export interface PamdReturn {
  /** The file name of the backup file, if created. */
  backupdest?: string;
  /** How many rules were changed. */
  change_count?: number;
}
export const pamd = defineRemoteModule<PamdArgs, PamdReturn>(spec, meta);
