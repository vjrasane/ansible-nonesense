// Auto-generated from: community.general.spectrum_device
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SpectrumDeviceArgs {
  /** UDP port used for SNMP discovery. */
  agentport?: number;
  /** SNMP community used for device discovery. */
  community: string;
  /** IP address of the device. */
  device: string;
  /** Landscape handle of the SpectroServer to which add or remove the device. */
  landscape: string;
  /** On V(present) creates the device when it does not exist. */
  state?: "present" | "absent";
  /** HTTP, HTTPS URL of the Oneclick server in the form V((http|https\)://host.domain[:port]). */
  url: string;
  /** Oneclick user password. */
  url_password: string;
  /** Oneclick user name. */
  url_username: string;
  /** If V(false), it does not use a proxy, even if one is defined in an environment variable on the target hosts. */
  use_proxy?: boolean;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export interface SpectrumDeviceReturn {
  /** Device data when O(state=present). */
  device?: Record<string, unknown>;
}

export const spectrum_device = defineModule<SpectrumDeviceArgs, SpectrumDeviceReturn>("community.general.spectrum_device");
