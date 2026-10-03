import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.redfish_config
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.redfish_config",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.redfish_config",
  moduleFqn: "ansible_collections.community.general.plugins.modules.redfish_config",
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
    files: ["plugins/module_utils/_redfish_utils.py", "plugins/modules/redfish_config.py"],
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
export interface RedfishConfigArgs {
  /** Security token for authenticating to OOB controller. */
  auth_token?: string;
  /** Base URI of OOB controller. */
  baseuri: string;
  /** Dictionary of BIOS attributes to update. */
  bios_attributes?: Record<string, unknown>;
  /** List of BootOptionReference strings specifying the BootOrder. */
  boot_order?: string | string[];
  /** PEM formatted file that contains a CA certificate to be used for validation. */
  ca_path?: string;
  /** Category to execute on OOB controller. */
  category: string;
  /** TLS/SSL Ciphers to use for the request. */
  ciphers?: string | string[];
  /** List of commands to execute on OOB controller. */
  command: string | string[];
  /** Setting dict of HostInterface on OOB controller. */
  hostinterface_config?: Record<string, unknown>;
  /** Redfish HostInterface instance ID if multiple HostInterfaces are present. */
  hostinterface_id?: string;
  /** Setting dict of manager services to update. */
  network_protocols?: Record<string, unknown>;
  /** EthernetInterface Address string on OOB controller. */
  nic_addr?: string;
  /** Setting dict of EthernetInterface on OOB controller. */
  nic_config?: Record<string, unknown>;
  /** Password for authenticating to OOB controller. */
  password?: string;
  /** The desired power state of the system when power is restored after a power loss. */
  power_restore_policy?: "AlwaysOn" | "AlwaysOff" | "LastState";
  /** ID of the System, Manager or Chassis to modify. */
  resource_id?: string;
  /** Setting parameter to enable or disable SecureBoot. */
  secure_boot_enable?: boolean;
  /** ID of the manager to update. */
  service_id?: string;
  /** Setting dict of Sessions. */
  sessions_config?: Record<string, unknown>;
  /** Indicates if all non-RAID volumes are automatically deleted prior to creating the new volume. */
  storage_none_volume_deletion?: boolean;
  /** ID of the Storage Subsystem on which the volume is to be created. */
  storage_subsystem_id?: string;
  /** Removes surrounding quotes of etag used in C(If-Match) header of C(PATCH) requests. */
  strip_etag_quotes?: boolean;
  /** Timeout in seconds for HTTP requests to OOB controller. */
  timeout?: number;
  /** Username for authenticating to OOB controller. */
  username?: string;
  /** If V(false), TLS/SSL certificates are not validated. */
  validate_certs?: boolean;
  /** Setting dictionary of volume to be created. */
  volume_details?: Record<string, unknown>;
  /** List of IDs of volumes to be deleted. */
  volume_ids?: string | string[];
}

export interface RedfishConfigReturn {
  /** Message with action result or error description. */
  msg?: string;
}
export const redfish_config = defineRemoteModule<RedfishConfigArgs, RedfishConfigReturn>(spec, meta);
