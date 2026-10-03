import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.aerospike_migrations
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.aerospike_migrations",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.aerospike_migrations",
  moduleFqn: "ansible_collections.community.general.plugins.modules.aerospike_migrations",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/aerospike_migrations.py"] }],
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
export interface AerospikeMigrationsArgs {
  /** How long to try to connect before giving up (milliseconds). */
  connect_timeout?: number;
  /** How many times should the cluster report "no migrations" consecutively before returning OK back to ansible? */
  consecutive_good_checks?: number;
  /** Fail if the cluster key changes if something else is changing the cluster, we may want to fail. */
  fail_on_cluster_change?: boolean;
  /** Which host do we use as seed for info connection. */
  host?: string;
  /** Do you wish to only check for migrations on the local node before returning, or do you want all nodes in the cluster to finish before returning? */
  local_only: boolean;
  /** The metric key used to determine if we have rx migrations remaining. Changeable due to backwards compatibility. */
  migrate_rx_key?: string;
  /** The metric key used to determine if we have tx migrations remaining. Changeable due to backwards compatibility. */
  migrate_tx_key?: string;
  /** Check fails until cluster size is met or until tries is exhausted. */
  min_cluster_size?: number;
  /** Which port to connect to Aerospike on (service port). */
  port?: number;
  /** How long to sleep between each check (seconds). */
  sleep_between_checks?: number;
  /** When all aerospike builds in the cluster are greater than version 4.3, then the C(cluster-stable) info command is used. Inside this command, you can optionally specify what the target cluster size is - but it is not necessary. You can still rely on O(min_cluster_size) if you do not want to use this option. */
  target_cluster_size?: number;
  /** How many times do we poll before giving up and failing? */
  tries_limit?: number;
}

export type AerospikeMigrationsReturn = Record<string, unknown>;
export const aerospike_migrations = defineRemoteModule<AerospikeMigrationsArgs, AerospikeMigrationsReturn>(spec, meta);
