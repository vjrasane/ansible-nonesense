import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityDocker, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.docker.docker_swarm_service
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.docker.docker_swarm_service",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.docker.docker_swarm_service",
  moduleFqn: "ansible_collections.community.docker.plugins.modules.docker_swarm_service",
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
      "plugins/module_utils/_socket_helper.py",
      "plugins/module_utils/_util.py",
      "plugins/module_utils/_version.py",
      "plugins/modules/docker_swarm_service.py",
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
export interface DockerSwarmServiceArgs {
  /** The version of the Docker API running on the Docker Host. */
  api_version?: string;
  /** List arguments to be passed to the container. */
  args?: string | string[];
  /** Use a CA certificate when performing server verification by providing the path to a CA certificate file. */
  ca_path?: string;
  /** List of capabilities to add to the container. */
  cap_add?: string | string[];
  /** List of capabilities to drop from the container. */
  cap_drop?: string | string[];
  /** Path to the client's TLS certificate file. */
  client_cert?: string;
  /** Path to the client's TLS key file. */
  client_key?: string;
  /** Command to execute when the container starts. */
  command?: unknown;
  /** Controls how O(command) and O(args) are mapped to the service C(ContainerSpec). */
  command_as_args?: boolean;
  /** List of dictionaries describing the service configs. */
  configs?: Record<string, unknown> | Record<string, unknown>[];
  /** Dictionary of key value pairs. */
  container_labels?: Record<string, unknown>;
  /** Debug mode. */
  debug?: boolean;
  /** List of custom DNS servers. */
  dns?: string | string[];
  /** List of custom DNS options. */
  dns_options?: string | string[];
  /** List of custom DNS search domains. */
  dns_search?: string | string[];
  /** The URL or Unix socket path used to connect to the Docker API. To connect to a remote host, provide the TCP connection string. For example, V(tcp://192.0.2.23:2376). If TLS is used to encrypt the connection, the module will automatically replace C(tcp) in the connection URL with C(https). */
  docker_host?: string;
  /** Service endpoint mode. */
  endpoint_mode?: "vip" | "dnsrr";
  /** List or dictionary of the service environment variables. */
  env?: unknown;
  /** List of paths to files, present on the target, containing environment variables C(FOO=BAR). */
  env_files?: string | string[];
  /** Force update even if no changes require it. */
  force_update?: boolean;
  /** List of additional group names and/or IDs that the container process will run as. */
  groups?: string | string[];
  /** Configure a check that is run to determine whether or not containers for this service are "healthy". See the docs for the L(HEALTHCHECK Dockerfile instruction,https://docs.docker.com/engine/reference/builder/#healthcheck) for details on how healthchecks work. */
  healthcheck?: { interval?: string; retries?: number; start_period?: string; test?: unknown; timeout?: string };
  /** Container hostname. */
  hostname?: string;
  /** Dict of host-to-IP mappings, where each host name is a key in the dictionary. Each host name will be added to the container's /etc/hosts file. */
  hosts?: Record<string, unknown>;
  /** Service image path and tag. */
  image?: string;
  /** Use an init inside each service container to forward signals and reap processes. */
  init?: boolean;
  /** Dictionary of key value pairs. */
  labels?: Record<string, unknown>;
  /** Configures service resource limits. */
  limits?: { cpus?: number; memory?: string };
  /** Logging configuration for the service. */
  logging?: { driver?: string; options?: Record<string, unknown> };
  /** Service replication mode. */
  mode?: "replicated" | "global" | "replicated-job";
  /** List of dictionaries describing the service mounts. */
  mounts?: Record<string, unknown> | Record<string, unknown>[];
  /** Service name. */
  name: string;
  /** List of the service networks names or dictionaries. */
  networks?: unknown | unknown[];
  /** Configures service placement preferences and constraints. */
  placement?: {
    constraints?: string | string[];
    preferences?: Record<string, unknown> | Record<string, unknown>[];
    replicas_max_per_node?: number;
  };
  /** List of dictionaries describing the service published ports. */
  publish?: Record<string, unknown> | Record<string, unknown>[];
  /** Mount the containers root filesystem as read only. */
  read_only?: boolean;
  /** Number of containers instantiated in the service. Valid only if O(mode=replicated) or O(mode=replicated-job). */
  replicas?: number;
  /** Configures service resource reservations. */
  reservations?: { cpus?: number; memory?: string };
  /** If the current image digest should be resolved from registry and updated if changed. */
  resolve_image?: boolean;
  /** Configures if and how to restart containers when they exit. */
  restart_config?: {
    condition?: "none" | "on-failure" | "any";
    delay?: string;
    max_attempts?: number;
    window?: string;
  };
  /** Configures how the service should be rolled back in case of a failing update. */
  rollback_config?: {
    delay?: string;
    failure_action?: "continue" | "pause";
    max_failure_ratio?: number;
    monitor?: string;
    order?: string;
    parallelism?: number;
  };
  /** List of dictionaries describing the service secrets. */
  secrets?: Record<string, unknown> | Record<string, unknown>[];
  /** V(absent) - A service matching the specified name will be removed and have its tasks stopped. */
  state?: "present" | "absent";
  /** Time to wait before force killing a container. */
  stop_grace_period?: string;
  /** Override default signal used to stop the container. */
  stop_signal?: string;
  /** Dictionary of key, value pairs. */
  sysctls?: Record<string, unknown>;
  /** The maximum amount of time in seconds to wait on a response from the API. */
  timeout?: number;
  /** Secure the connection to the API by using TLS without verifying the authenticity of the Docker host server. Note that if O(validate_certs) is set to V(true) as well, it will take precedence. */
  tls?: boolean;
  /** When verifying the authenticity of the Docker Host server, provide the expected name of the server. */
  tls_hostname?: string;
  /** Allocate a pseudo-TTY. */
  tty?: boolean;
  /** Configures how the service should be updated. Useful for configuring rolling updates. */
  update_config?: {
    delay?: string;
    failure_action?: "continue" | "pause" | "rollback";
    max_failure_ratio?: number;
    monitor?: string;
    order?: string;
    parallelism?: number;
  };
  /** For SSH transports, use the C(ssh) CLI tool instead of paramiko. */
  use_ssh_client?: boolean;
  /** Sets the username or UID used for the specified command. */
  user?: string;
  /** Secure the connection to the API by using TLS and verifying the authenticity of the Docker host server. */
  validate_certs?: boolean;
  /** Path to the working directory. */
  working_dir?: string;
}

export interface DockerSwarmServiceReturn {
  /** List of changed service attributes if a service has been altered, [] otherwise. */
  changes?: string | string[];
  /** True if the service has been recreated (removed and created). */
  rebuilt?: boolean;
  /** Dictionary of variables representing the current state of the service. Matches the module parameters format. */
  swarm_service?: Record<string, unknown>;
}
export const docker_swarm_service = defineRemoteModule<DockerSwarmServiceArgs, DockerSwarmServiceReturn>(spec, meta);
