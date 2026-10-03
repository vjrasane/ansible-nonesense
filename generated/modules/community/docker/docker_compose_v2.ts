import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityDocker, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.docker.docker_compose_v2
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.docker.docker_compose_v2",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.docker.docker_compose_v2",
  moduleFqn: "ansible_collections.community.docker.plugins.modules.docker_compose_v2",
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
      "ansible/module_utils/compat/version.py",
      "ansible/module_utils/datatag.py",
      "ansible/module_utils/distro/__init__.py",
      "ansible/module_utils/distro/_distro.py",
      "ansible/module_utils/errors.py",
      "ansible/module_utils/parsing/convert_bool.py",
      "ansible/module_utils/six/__init__.py",
    ],
  }, {
    artifact: communityDocker,
    files: [
      "plugins/module_utils/_api/_import_helper.py",
      "plugins/module_utils/_api/api/client.py",
      "plugins/module_utils/_api/auth.py",
      "plugins/module_utils/_api/constants.py",
      "plugins/module_utils/_api/credentials/constants.py",
      "plugins/module_utils/_api/credentials/errors.py",
      "plugins/module_utils/_api/credentials/store.py",
      "plugins/module_utils/_api/credentials/utils.py",
      "plugins/module_utils/_api/errors.py",
      "plugins/module_utils/_api/tls.py",
      "plugins/module_utils/_api/transport/basehttpadapter.py",
      "plugins/module_utils/_api/transport/npipeconn.py",
      "plugins/module_utils/_api/transport/npipesocket.py",
      "plugins/module_utils/_api/transport/sshconn.py",
      "plugins/module_utils/_api/transport/ssladapter.py",
      "plugins/module_utils/_api/transport/unixconn.py",
      "plugins/module_utils/_api/utils/config.py",
      "plugins/module_utils/_api/utils/decorators.py",
      "plugins/module_utils/_api/utils/json_stream.py",
      "plugins/module_utils/_api/utils/proxy.py",
      "plugins/module_utils/_api/utils/socket.py",
      "plugins/module_utils/_api/utils/utils.py",
      "plugins/module_utils/_common.py",
      "plugins/module_utils/_common_api.py",
      "plugins/module_utils/_common_cli.py",
      "plugins/module_utils/_compose_v2.py",
      "plugins/module_utils/_logfmt.py",
      "plugins/module_utils/_socket_helper.py",
      "plugins/module_utils/_util.py",
      "plugins/module_utils/_version.py",
      "plugins/modules/docker_compose_v2.py",
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
    "ansible_collections/community/docker/__init__.py",
    "ansible_collections/community/docker/plugins/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/_api/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/_api/api/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/_api/credentials/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/_api/transport/__init__.py",
    "ansible_collections/community/docker/plugins/module_utils/_api/utils/__init__.py",
    "ansible_collections/community/docker/plugins/modules/__init__.py",
  ],
} as const;
export interface DockerComposeV2Args {
  /** The version of the Docker API running on the Docker Host. */
  api_version?: string;
  /** When O(assume_yes=true), pass C(-y)/C(--yes) to assume "yes" as answer to all prompts and run non-interactively. */
  assume_yes?: boolean;
  /** Whether to build images before starting containers. This is used when C(docker compose up) is run. */
  build?: "always" | "never" | "policy";
  /** Use a CA certificate when performing server verification by providing the path to a CA certificate file. */
  ca_path?: string;
  /** If set to V(false), the module will not check whether one of the files C(compose.yaml), C(compose.yml), C(docker-compose.yaml), or C(docker-compose.yml) exists in O(project_src) if O(files) is not provided. */
  check_files_existing?: boolean;
  /** The Docker CLI context to use. */
  cli_context?: string;
  /** Path to the client's TLS certificate file. */
  client_cert?: string;
  /** Path to the client's TLS key file. */
  client_key?: string;
  /** Compose file describing one or more services, networks and volumes. */
  definition?: Record<string, unknown>;
  /** When O(state) is V(present) or V(restarted), specify whether or not to include linked services. */
  dependencies?: boolean;
  /** Path to the Docker CLI. If not provided, will search for Docker CLI on the E(PATH). */
  docker_cli?: string;
  /** The URL or Unix socket path used to connect to the Docker API. To connect to a remote host, provide the TCP connection string. For example, V(tcp://192.0.2.23:2376). If TLS is used to encrypt the connection, the module will automatically replace C(tcp) in the connection URL with C(https). */
  docker_host?: string;
  /** By default environment files are loaded from a C(.env) file located directly under the O(project_src) directory. */
  env_files?: string | string[];
  /** List of Compose file names relative to O(project_src) to be used instead of the main Compose file (C(compose.yml), C(compose.yaml), C(docker-compose.yml), or C(docker-compose.yaml)). */
  files?: string | string[];
  /** Ignores image building events for change detection. */
  ignore_build_events?: boolean;
  /** List of profiles to enable when starting services. */
  profiles?: string | string[];
  /** Provide a project name. If not provided, the project name is taken from the basename of O(project_src). */
  project_name?: string;
  /** Path to a directory containing a Compose file (C(compose.yml), C(compose.yaml), C(docker-compose.yml), or C(docker-compose.yaml)). */
  project_src?: string;
  /** Whether to pull images before running. This is used when C(docker compose up) is run. */
  pull?: "always" | "missing" | "never" | "policy";
  /** By default containers will be recreated when their configuration differs from the service definition. */
  recreate?: "always" | "never" | "auto";
  /** Use with O(state=absent) to remove all images or only local images. */
  remove_images?: "all" | "local";
  /** Remove containers for services not defined in the Compose file. */
  remove_orphans?: boolean;
  /** Use with O(state=absent) to remove data volumes. */
  remove_volumes?: boolean;
  /** Whether to recreate instead of reuse anonymous volumes from previous containers. */
  renew_anon_volumes?: boolean;
  /** Define how to scale services when running C(docker compose up). */
  scale?: Record<string, unknown>;
  /** Specifies a subset of services to be targeted. */
  services?: string | string[];
  /** Desired state of the project. */
  state?: "absent" | "stopped" | "restarted" | "present";
  /** Timeout in seconds for container shutdown when attached or when containers are already running. */
  timeout?: number;
  /** Secure the connection to the API by using TLS without verifying the authenticity of the Docker host server. Note that if O(validate_certs) is set to V(true) as well, it will take precedence. */
  tls?: boolean;
  /** When verifying the authenticity of the Docker Host server, provide the expected name of the server. */
  tls_hostname?: string;
  /** Secure the connection to the API by using TLS and verifying the authenticity of the Docker host server. */
  validate_certs?: boolean;
  /** When running C(docker compose up), pass C(--wait) to wait for services to be running/healthy. */
  wait?: boolean;
  /** When O(wait=true), wait at most this amount of seconds. */
  wait_timeout?: number;
}

export interface DockerComposeV2Return {
  /** A list of actions that have been applied. */
  actions?: Record<string, unknown> | Record<string, unknown>[];
  /** A list of containers associated to the service. */
  containers?: Record<string, unknown> | Record<string, unknown>[];
  /** A list of images associated to the service. */
  images?: Record<string, unknown> | Record<string, unknown>[];
}
export const docker_compose_v2 = defineRemoteModule<DockerComposeV2Args, DockerComposeV2Return>(spec, meta);
