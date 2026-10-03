import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.deploy_helper
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.deploy_helper",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.deploy_helper",
  moduleFqn: "ansible_collections.community.general.plugins.modules.deploy_helper",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/deploy_helper.py"] }],
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
export interface DeployHelperArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** Whether to run the clean procedure in case of O(state=finalize). */
  clean?: boolean;
  /** The name of the symlink that is created when the deploy is finalized. Used in O(state=finalize) and O(state=clean). Returned in the C(deploy_helper.current_path) fact. */
  current_path?: string;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** The number of old releases to keep when cleaning. Used in O(state=finalize) and O(state=clean). Any unfinished builds are deleted first, so only correct releases count. The current version does not count. */
  keep_releases?: number;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** The root path of the project. Returned in the C(deploy_helper.project_path) fact. */
  path: string;
  /** The release version that is being deployed. Defaults to a timestamp format C(%Y%m%d%H%M%S) (for example V(20141119223359)). This parameter is optional during O(state=present), but needs to be set explicitly for O(state=finalize). You can use the generated fact C(release={{ deploy_helper.new_release }}). */
  release?: string;
  /** The name of the folder that holds the releases. This can be relative to O(path) or absolute. Returned in the C(deploy_helper.releases_path) fact. */
  releases_path?: string;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** The name of the folder that holds the shared resources. This can be relative to O(path) or absolute. If this is set to an empty string, no shared folder is created. Returned in the C(deploy_helper.shared_path) fact. */
  shared_path?: string;
  /** The state of the project. */
  state?: "present" | "finalize" | "absent" | "clean" | "query";
  /** The name of the file that indicates a deploy has not finished. All folders in the O(releases_path) that contain this file are deleted on O(state=finalize) with O(clean=true), or O(state=clean). This file is automatically deleted from the C(new_release_path) during O(state=finalize). */
  unfinished_filename?: string;
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
}

export type DeployHelperReturn = Record<string, unknown>;
export const deploy_helper = defineRemoteModule<DeployHelperArgs, DeployHelperReturn>(spec, meta);
