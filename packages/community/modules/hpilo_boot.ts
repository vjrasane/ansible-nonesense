// Auto-generated from: community.general.hpilo_boot
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface HpiloBootArgs {
  /** Whether to force a reboot (even when the system is already booted). */
  force?: boolean;
  /** The HP iLO hostname/address that is linked to the physical system. */
  host: string;
  /** This option makes O(state=boot_once) succeed instead of failing when the server is already powered on. */
  idempotent_boot_once?: boolean;
  /** The URL of a cdrom, floppy or usb boot media image in the form V(protocol://username:password@hostname:port/filename). */
  image?: string;
  /** The login name to authenticate to the HP iLO interface. */
  login?: string;
  /** The boot media to boot the system from. */
  media?: "cdrom" | "floppy" | "rbsu" | "hdd" | "network" | "normal" | "usb";
  /** The password to authenticate to the HP iLO interface. */
  password?: string;
  /** Change the ssl_version used. */
  ssl_version?: "SSLv3" | "SSLv23" | "TLSv1" | "TLSv1_1" | "TLSv1_2";
  /** The state of the boot media. */
  state?: "boot_always" | "boot_once" | "connect" | "disconnect" | "no_boot" | "poweroff";
}

export type HpiloBootReturn = Record<string, unknown>;

export const hpilo_boot = defineModule<HpiloBootArgs, HpiloBootReturn>("community.general.hpilo_boot");
