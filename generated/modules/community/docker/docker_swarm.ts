import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityDocker, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.docker.docker_swarm
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.docker.docker_swarm",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.docker.docker_swarm",
  moduleFqn: "ansible_collections.community.docker.plugins.modules.docker_swarm",
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
      "plugins/module_utils/_swarm.py",
      "plugins/module_utils/_util.py",
      "plugins/module_utils/_version.py",
      "plugins/modules/docker_swarm.py",
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
export interface DockerSwarmArgs {
  /** Externally reachable address advertised to other nodes. */
  advertise_addr?: string;
  /** The version of the Docker API running on the Docker Host. */
  api_version?: string;
  /** If set, generate a key and use it to lock data stored on the managers. */
  autolock_managers?: boolean;
  /** An integer whose purpose is to force swarm to generate a new signing CA certificate and key, if none have been specified. */
  ca_force_rotate?: number;
  /** Use a CA certificate when performing server verification by providing the path to a CA certificate file. */
  ca_path?: string;
  /** Path to the client's TLS certificate file. */
  client_cert?: string;
  /** Path to the client's TLS key file. */
  client_key?: string;
  /** Address or interface to use for data path traffic. */
  data_path_addr?: string;
  /** Port to use for data path traffic. */
  data_path_port?: number;
  /** Debug mode. */
  debug?: boolean;
  /** Default address pool in CIDR format. */
  default_addr_pool?: string | string[];
  /** The delay (in nanoseconds) for an agent to send a heartbeat to the dispatcher. */
  dispatcher_heartbeat_period?: number;
  /** The URL or Unix socket path used to connect to the Docker API. To connect to a remote host, provide the TCP connection string. For example, V(tcp://192.0.2.23:2376). If TLS is used to encrypt the connection, the module will automatically replace C(tcp) in the connection URL with C(https). */
  docker_host?: string;
  /** Amount of ticks (in seconds) needed without a leader to trigger a new election. */
  election_tick?: number;
  /** Use with state V(present) to force creating a new Swarm, even if already part of one. */
  force?: boolean;
  /** Amount of ticks (in seconds) between each heartbeat. */
  heartbeat_tick?: number;
  /** Swarm token used to join a swarm cluster. */
  join_token?: string;
  /** Number of snapshots to keep beyond the current snapshot. */
  keep_old_snapshots?: number;
  /** User-defined key/value metadata. */
  labels?: Record<string, unknown>;
  /** Listen address used for inter-manager communication. */
  listen_addr?: string;
  /** Number of log entries to keep around to sync up slow followers after a snapshot is created. */
  log_entries_for_slow_followers?: number;
  /** The name of the swarm. */
  name?: string;
  /** Automatic expiry for nodes certificates, given in nanoseconds. */
  node_cert_expiry?: number;
  /** Swarm id of the node to remove. */
  node_id?: string;
  /** Remote address of one or more manager nodes of an existing Swarm to connect to. */
  remote_addrs?: string | string[];
  /** Rotate the manager join token. */
  rotate_manager_token?: boolean;
  /** Rotate the worker join token. */
  rotate_worker_token?: boolean;
  /** The desired signing CA certificate for all swarm node TLS leaf certificates, in PEM format. */
  signing_ca_cert?: string;
  /** The desired signing CA key for all swarm node TLS leaf certificates, in PEM format. */
  signing_ca_key?: string;
  /** Number of logs entries between snapshot. */
  snapshot_interval?: number;
  /** Set to V(present), to create/update a new cluster. */
  state?: "present" | "join" | "absent" | "remove";
  /** Default address pool subnet mask length. */
  subnet_size?: number;
  /** Maximum number of tasks history stored. */
  task_history_retention_limit?: number;
  /** The maximum amount of time in seconds to wait on a response from the API. */
  timeout?: number;
  /** Secure the connection to the API by using TLS without verifying the authenticity of the Docker host server. Note that if O(validate_certs) is set to V(true) as well, it will take precedence. */
  tls?: boolean;
  /** When verifying the authenticity of the Docker Host server, provide the expected name of the server. */
  tls_hostname?: string;
  /** For SSH transports, use the C(ssh) CLI tool instead of paramiko. */
  use_ssh_client?: boolean;
  /** Secure the connection to the API by using TLS and verifying the authenticity of the Docker host server. */
  validate_certs?: boolean;
}

export interface DockerSwarmReturn {
  /** Provides the actions done on the swarm. */
  actions?: string | string[];
  /** Information about swarm. */
  swarm_facts?: Record<string, unknown>;
}
export const docker_swarm = defineRemoteModule<DockerSwarmArgs, DockerSwarmReturn>(spec, meta);
