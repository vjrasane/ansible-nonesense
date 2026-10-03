import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.linode
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.linode",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.linode",
  moduleFqn: "ansible_collections.community.general.plugins.modules.linode",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/linode.py"] }],
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
export interface LinodeArgs {
  /** List of dictionaries for creating additional disks that are added to the Linode configuration settings. */
  additional_disks?: Record<string, unknown> | Record<string, unknown>[];
  /** Set status of bandwidth in alerts. */
  alert_bwin_enabled?: boolean;
  /** Set threshold in MB of bandwidth in alerts. */
  alert_bwin_threshold?: number;
  /** Set status of bandwidth out alerts. */
  alert_bwout_enabled?: boolean;
  /** Set threshold in MB of bandwidth out alerts. */
  alert_bwout_threshold?: number;
  /** Set status of bandwidth quota alerts as percentage of network transfer quota. */
  alert_bwquota_enabled?: boolean;
  /** Set threshold in MB of bandwidth quota alerts. */
  alert_bwquota_threshold?: number;
  /** Set status of receiving CPU usage alerts. */
  alert_cpu_enabled?: boolean;
  /** Set percentage threshold for receiving CPU usage alerts. Each CPU core adds 100% to total. */
  alert_cpu_threshold?: number;
  /** Set status of receiving disk IO alerts. */
  alert_diskio_enabled?: boolean;
  /** Set threshold for average IO ops/sec over 2 hour period. */
  alert_diskio_threshold?: number;
  /** Linode API key. */
  api_key: string;
  /** Day of the week to take backups. */
  backupweeklyday?: number;
  /** The time window in which backups are taken. */
  backupwindow?: number;
  /** Datacenter to create an instance in (Linode Datacenter). */
  datacenter?: number;
  /** Add the instance to a Display Group in Linode Manager. */
  displaygroup?: string;
  /** Distribution to use for the instance (Linode Distribution). */
  distribution?: number;
  /** Kernel to use for the instance (Linode Kernel). */
  kernel_id?: number;
  /** Unique ID of a Linode server. This value is read-only in the sense that if you specify it on creation of a Linode it is not used. The Linode API generates these IDs and we can those generated value here to reference a Linode more specifically. This is useful for idempotency. */
  linode_id?: number;
  /** Name to give the instance (alphanumeric, dashes, underscore). */
  name: string;
  /** Root password to apply to a new server (auto generated if missing). */
  password?: string;
  /** Payment term to use for the instance (payment term in months). */
  payment_term?: number;
  /** Plan to use for the instance (Linode plan). */
  plan?: number;
  /** Add private IPv4 address when Linode is created. */
  private_ip?: boolean;
  /** SSH public key applied to root user. */
  ssh_pub_key?: string;
  /** Indicate desired state of the resource. */
  state?: "absent" | "active" | "deleted" | "present" | "restarted" | "started" | "stopped";
  /** Swap size in MB. */
  swap?: number;
  /** Wait for the instance to be in state V(running) before returning. */
  wait?: boolean;
  /** How long before wait gives up, in seconds. */
  wait_timeout?: number;
  /** Set status of Lassie watchdog. */
  watchdog?: boolean;
}

export type LinodeReturn = Record<string, unknown>;
export const linode = defineRemoteModule<LinodeArgs, LinodeReturn>(spec, meta);
