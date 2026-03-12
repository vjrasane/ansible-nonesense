// Auto-generated from: community.general.redfish_command
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface RedfishCommandArgs {
  /** Properties of account service to update. */
  account_properties?: Record<string, unknown>;
  /** Array of account types to apply to a user account. */
  account_types?: string | string[];
  /** Security token for authenticating to OOB controller. */
  auth_token?: string;
  /** Base URI of OOB controller. */
  baseuri: string;
  /** BIOS attributes that needs to be verified in the given server. */
  bios_attributes?: Record<string, unknown>;
  /** BootNext target when bootdevice is "UefiBootNext". */
  boot_next?: string;
  /** Boot mode when using an override. */
  boot_override_mode?: "Legacy" | "UEFI";
  /** Boot device when setting boot configuration. */
  bootdevice?: string;
  /** PEM formatted file that contains a CA certificate to be used for validation. */
  ca_path?: string;
  /** Category to execute on OOB controller. */
  category: string;
  /** TLS/SSL Ciphers to use for the request. */
  ciphers?: string | string[];
  /** List of commands to execute on OOB controller. */
  command: string | string[];
  /** ID of account to delete/modify. */
  id?: string;
  /** New password of account to add/modify. */
  new_password?: string;
  /** Username of account to add/delete/modify. */
  new_username?: string;
  /** Array of OEM account types to apply to a user account. */
  oem_account_types?: string | string[];
  /** Password for authenticating to OOB controller. */
  password?: string;
  /** Mode to apply when reseting to default. */
  reset_to_defaults_mode?: "ResetAll" | "PreserveNetworkAndUsers" | "PreserveNetwork";
  /** ID of the System, Manager or Chassis to modify. */
  resource_id?: string;
  /** Role of account to add/modify. */
  roleid?: string;
  /** URI of the session resource. */
  session_uri?: string;
  /** Removes surrounding quotes of etag used in C(If-Match) header of C(PATCH) requests. */
  strip_etag_quotes?: boolean;
  /** Timeout in seconds for HTTP requests to OOB controller. */
  timeout?: number;
  /** UEFI boot target when bootdevice is "UefiTarget". */
  uefi_target?: string;
  /** Time when to apply the update. */
  update_apply_time?: "Immediate" | "OnReset" | "AtMaintenanceWindowStart" | "InMaintenanceWindowOnReset" | "OnStartUpdateRequest";
  /** Credentials for retrieving the update image. */
  update_creds?: {
    password?: string;
    username?: string;
  };
  /** Optional OEM header, sent as separate form-data for the Multipart HTTP push update. */
  update_custom_oem_header?: string;
  /** MIME Type for custom OEM properties for HTTP Multipart Push updates. */
  update_custom_oem_mime_type?: string;
  /** Custom OEM properties for HTTP Multipart Push updates. */
  update_custom_oem_params?: unknown;
  /** Handle to check the status of an update in progress. */
  update_handle?: string;
  /** Filename, with optional path, of the image for the update. */
  update_image_file?: string;
  /** URI of the image for the update. */
  update_image_uri?: string;
  /** Properties for HTTP Multipart Push Updates. */
  update_oem_params?: Record<string, unknown>;
  /** Protocol for the update. */
  update_protocol?: string;
  /** List of target resource URIs to apply the update to. */
  update_targets?: string | string[];
  /** New user name for updating account_username. */
  update_username?: string;
  /** Username for authenticating to OOB controller. */
  username?: string;
  /** If V(false), TLS/SSL certificates are not validated. */
  validate_certs?: boolean;
  /** Options for VirtualMedia commands. */
  virtual_media?: {
    image_url?: string;
    inserted?: boolean;
    media_types?: string | string[];
    password?: string;
    transfer_method?: string;
    transfer_protocol_type?: string;
    username?: string;
    write_protected?: boolean;
  };
  /** Block until the service is ready again. */
  wait?: boolean;
  /** How long to block until the service is ready again before giving up. */
  wait_timeout?: number;
}

export interface RedfishCommandReturn {
  /** Message with action result or error description. */
  msg?: string;
  /** Dictionary containing command-specific response data from the action. */
  return_values?: Record<string, unknown>;
}

export const redfish_command = defineModule<RedfishCommandArgs, RedfishCommandReturn>("community.general.redfish_command");
