import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.ss_3par_cpg
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.ss_3par_cpg",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.ss_3par_cpg",
  moduleFqn: "ansible_collections.community.general.plugins.modules.ss_3par_cpg",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_hpe3par.py", "plugins/modules/ss_3par_cpg.py"] }],
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
export interface Ss3parCpgArgs {
  /** Name of the CPG. */
  cpg_name: string;
  /** Specifies that physical disks must have the specified device type. */
  disk_type?: "FC" | "NL" | "SSD";
  /** Specifies the name of the domain in which the object resides. */
  domain?: string;
  /** Specifies the growth increment(in MiB, GiB or TiB) the amount of logical disk storage created on each auto-grow operation. */
  growth_increment?: string;
  /** Specifies that the autogrow operation is limited to the specified storage amount that sets the growth limit (in MiB, GiB or TiB). */
  growth_limit?: string;
  /** Specifies that the threshold (in MiB, GiB or TiB) of used logical disk space when exceeded results in a warning alert. */
  growth_warning?: string;
  /** Specifies that the layout must support the failure of one port pair, one cage, or one magazine. */
  high_availability?: "PORT" | "CAGE" | "MAG";
  /** Specifies the RAID type for the logical disk. */
  raid_type?: "R0" | "R1" | "R5" | "R6";
  /** Specifies whether the certificate needs to be validated while communicating. */
  secure?: boolean;
  /** Specifies the set size in the number of chunklets. */
  set_size?: number;
  /** Whether the specified CPG should exist or not. */
  state: "present" | "absent";
  /** The storage system IP address. */
  storage_system_ip: string;
  /** The storage system password. */
  storage_system_password: string;
  /** The storage system user name. */
  storage_system_username: string;
}

export type Ss3parCpgReturn = Record<string, unknown>;
export const ss_3par_cpg = defineRemoteModule<Ss3parCpgArgs, Ss3parCpgReturn>(spec, meta);
