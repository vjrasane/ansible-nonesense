import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.btrfs_subvolume
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.btrfs_subvolume",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "partial",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.btrfs_subvolume",
  moduleFqn: "ansible_collections.community.general.plugins.modules.btrfs_subvolume",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_btrfs.py", "plugins/modules/btrfs_subvolume.py"] }],
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
export interface BtrfsSubvolumeArgs {
  /** Allow the module to temporarily mount the targeted btrfs filesystem in order to validate the current state and make any required changes. */
  automount?: boolean;
  /** Make the subvolume specified by O(name) the filesystem's default subvolume. */
  default?: boolean;
  /** A block device contained within the btrfs filesystem to be targeted. */
  filesystem_device?: string;
  /** A descriptive label assigned to the btrfs filesystem to be targeted. */
  filesystem_label?: string;
  /** A unique identifier assigned to the btrfs filesystem to be targeted. */
  filesystem_uuid?: string;
  /** Name of the subvolume/snapshot to be targeted. */
  name: string;
  /** When true, indicates that parent/child subvolumes should be created/removedas necessary to complete the operation (for O(state=present) and O(state=absent) respectively). */
  recursive?: boolean;
  /** Policy defining behavior when a subvolume already exists at the path of the requested snapshot. */
  snapshot_conflict?: "skip" | "clobber" | "error";
  /** Identifies the source subvolume for the created snapshot. */
  snapshot_source?: string;
  /** Indicates the current state of the targeted subvolume. */
  state?: "absent" | "present";
}

export interface BtrfsSubvolumeReturn {
  /** A summary of the final state of the targeted btrfs filesystem. */
  filesystem?: Record<string, unknown>;
  /** A list where each element describes a change made to the target btrfs filesystem. */
  modifications?: string | string[];
  /** The ID of the subvolume specified with the O(name) parameter, either pre-existing or created as part of module execution. */
  target_subvolume_id?: number;
}
export const btrfs_subvolume = defineRemoteModule<BtrfsSubvolumeArgs, BtrfsSubvolumeReturn>(spec, meta);
