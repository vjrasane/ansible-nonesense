import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.parted
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.parted",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.parted",
  moduleFqn: "ansible_collections.community.general.plugins.modules.parted",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/parted.py"] }],
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
export interface PartedArgs {
  /** Set alignment for newly created partitions. Use V(undefined) for parted default alignment. */
  align?: "cylinder" | "minimal" | "none" | "optimal" | "undefined";
  /** The block device (disk) where to operate. */
  device: string;
  /** A list of the flags that has to be set on the partition. */
  flags?: string | string[];
  /** If specified and the partition does not exist, sets filesystem type to given partition. */
  fs_type?: string;
  /** Disk label type or partition table to use. */
  label?: "aix" | "amiga" | "bsd" | "dvh" | "gpt" | "loop" | "mac" | "msdos" | "pc98" | "sun";
  /** Sets the name for the partition number (GPT, Mac, MIPS and PC98 only). */
  name?: string;
  /** The partition number being affected. */
  number?: number;
  /** Where the partition ends as offset from the beginning of the disk, that is, the "distance" from the start of the disk. Negative numbers specify distance from the end of the disk. */
  part_end?: string;
  /** Where the partition starts as offset from the beginning of the disk, that is, the "distance" from the start of the disk. Negative numbers specify distance from the end of the disk. */
  part_start?: string;
  /** May be specified only with O(label=msdos) or O(label=dvh). */
  part_type?: "extended" | "logical" | "primary";
  /** Call C(resizepart) on existing partitions to match the size specified by O(part_end). */
  resize?: boolean;
  /** Whether to create or delete a partition. */
  state?: "absent" | "present" | "info";
  /** Selects the current default unit that Parted uses to display locations and capacities on the disk and to interpret those given by the user if they are not suffixed by an unit. */
  unit?: "s" | "B" | "KB" | "KiB" | "MB" | "MiB" | "GB" | "GiB" | "TB" | "TiB" | "%" | "cyl" | "chs" | "compact";
  /** Controls the case of the V(unit) field in the module output (RV(ignore:partition_info.disk.unit), RV(ignore:partition_info.partitions[].unit)). */
  unit_preserve_case?: boolean;
}

export interface PartedReturn {
  /** Generic device information. */
  disk?: Record<string, unknown>;
  /** List of device partitions. */
  partitions?: Record<string, unknown> | Record<string, unknown>[];
  /** Parted script executed by module. */
  script?: string;
}
export const parted = defineRemoteModule<PartedArgs, PartedReturn>(spec, meta);
