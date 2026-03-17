// Auto-generated from: community.general.hpilo_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface HpiloInfoArgs {
  /** The HP iLO hostname/address that is linked to the physical system. */
  host: string;
  /** The login name to authenticate to the HP iLO interface. */
  login?: string;
  /** The password to authenticate to the HP iLO interface. */
  password?: string;
  /** Change the ssl_version used. */
  ssl_version?: "SSLv3" | "SSLv23" | "TLSv1" | "TLSv1_1" | "TLSv1_2";
}

export interface HpiloInfoReturn {
  /** Power status of host. */
  host_power_status?: string;
  /** BIOS date. */
  hw_bios_date?: string;
  /** BIOS version. */
  hw_bios_version?: string;
  /** Interface information (for each interface). */
  hw_ethX?: Record<string, unknown>;
  /** Interface information (for the iLO network interface). */
  hw_eth_ilo?: Record<string, unknown>;
  /** Product name. */
  hw_product_name?: string;
  /** Product UUID. */
  hw_product_uuid?: string;
  /** System serial number. */
  hw_system_serial?: string;
  /** Hardware UUID. */
  hw_uuid?: string;
}

export const hpilo_info = defineModule<HpiloInfoArgs, HpiloInfoReturn>("community.general.hpilo_info");
