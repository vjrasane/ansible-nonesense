// Auto-generated from: community.general.redfish_config
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

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

export const redfish_config = defineModule<RedfishConfigArgs, RedfishConfigReturn>("community.general.redfish_config");
