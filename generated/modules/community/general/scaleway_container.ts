import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.scaleway_container
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.scaleway_container",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.scaleway_container",
  moduleFqn: "ansible_collections.community.general.plugins.modules.scaleway_container",
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
  }, {
    artifact: communityGeneral,
    files: [
      "plugins/module_utils/_datetime.py",
      "plugins/module_utils/_scaleway.py",
      "plugins/modules/scaleway_container.py",
    ],
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
export interface ScalewayContainerArgs {
  /** HTTP timeout to Scaleway API in seconds. */
  api_timeout?: number;
  /** Scaleway OAuth token. */
  api_token?: string;
  /** Scaleway API URL. */
  api_url?: string;
  /** The length of time your handler can spend processing a request before being stopped. */
  container_timeout?: string;
  /** Resources define performance characteristics of your container. */
  cpu_limit?: number;
  /** Description of the container namespace. */
  description?: string;
  /** Environment variables of the container namespace. */
  environment_variables?: Record<string, unknown>;
  /** Maximum number of connections per container. */
  max_concurrency?: number;
  /** Maximum number of replicas for the container. */
  max_scale?: number;
  /** Resources define performance characteristics of your container. */
  memory_limit?: number;
  /** Minimum number of replicas for the container. */
  min_scale?: number;
  /** Name of the container namespace. */
  name: string;
  /** Container namespace identifier. */
  namespace_id: string;
  /** Listen port used to expose the container. */
  port?: number;
  /** Privacy policies define whether a container can be executed anonymously. */
  privacy?: "public" | "private";
  /** The config profile in config file to load the Scaleway OAuth token from, use instead of O(api_token). */
  profile?: string;
  /** Communication protocol of the container. */
  protocol?: "http1" | "h2c";
  /** List of parameters passed to the query string. */
  query_parameters?: Record<string, unknown>;
  /** Redeploy the container if update is required. */
  redeploy?: boolean;
  /** Scaleway region to use (for example V(fr-par)). */
  region: "fr-par" | "nl-ams" | "pl-waw";
  /** The name of image used for the container. */
  registry_image: string;
  /** Secret environment variables of the container namespace. */
  secret_environment_variables?: Record<string, unknown>;
  /** Indicate desired state of the container. */
  state?: "present" | "absent";
  /** Validate SSL certs of the Scaleway API. */
  validate_certs?: boolean;
  /** Wait for the resource to reach its desired state before returning. */
  wait?: boolean;
  /** Time to wait before every attempt to check the state of the resource. */
  wait_sleep_time?: number;
  /** Time to wait for the resource to reach the expected state. */
  wait_timeout?: number;
}

export interface ScalewayContainerReturn {
  /** The container information. */
  container?: Record<string, unknown>;
}
export const scaleway_container = defineRemoteModule<ScalewayContainerArgs, ScalewayContainerReturn>(spec, meta);
