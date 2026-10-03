import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.jenkins_node
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.jenkins_node",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "partial",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.jenkins_node",
  moduleFqn: "ansible_collections.community.general.plugins.modules.jenkins_node",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_deps.py", "plugins/modules/jenkins_node.py"] }],
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
export interface JenkinsNodeArgs {
  /** When specified, sets the Jenkins node labels. */
  labels?: string | string[];
  /** Name of the Jenkins node to manage. */
  name: string;
  /** When specified, sets the Jenkins node executor count. */
  num_executors?: number;
  /** Specifies the offline reason message to be set when configuring the Jenkins node state. */
  offline_message?: string;
  /** Specifies whether the Jenkins node should be V(present) (created), V(absent) (deleted), V(enabled) (online) or V(disabled) (offline). */
  state?: "enabled" | "disabled" | "present" | "absent";
  /** API token to authenticate with the Jenkins server. */
  token?: string;
  /** URL of the Jenkins server. */
  url?: string;
  /** User to authenticate with the Jenkins server. */
  user?: string;
}

export interface JenkinsNodeReturn {
  /** Whether or not the Jenkins node was configured by the task. */
  configured?: boolean;
  /** Whether or not the Jenkins node was created by the task. */
  created?: boolean;
  /** Whether or not the Jenkins node was deleted by the task. */
  deleted?: boolean;
  /** Whether or not the Jenkins node was disabled by the task. */
  disabled?: boolean;
  /** Whether or not the Jenkins node was enabled by the task. */
  enabled?: boolean;
  /** Name of the Jenkins node. */
  name?: string;
  /** State of the Jenkins node. */
  state?: string;
  /** URL used to connect to the Jenkins server. */
  url?: string;
  /** User used for authentication. */
  user?: string;
}
export const jenkins_node = defineRemoteModule<JenkinsNodeArgs, JenkinsNodeReturn>(spec, meta);
