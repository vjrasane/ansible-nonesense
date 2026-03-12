// Auto-generated from: community.general.solaris_zone
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SolarisZoneArgs {
  /** Extra options to the zoneadm attach command. For example, this can be used to specify whether a minimum or full update of packages is required and if any packages need to be deleted. For valid values, see zoneadm(1M). */
  attach_options?: string;
  /** The C(zonecfg) configuration commands for this zone. See zonecfg(1M) for the valid options and syntax. Typically this is a list of options separated by semi-colons or new lines, for example V(set auto-boot=true;add net;set physical=bge0;set address=10.1.1.1;end). */
  config?: string;
  /** Extra options to the zonecfg(1M) create command. */
  create_options?: string;
  /** Extra options to the zoneadm(1M) install command. To automate Solaris 11 zone creation, use this to specify the profile XML file, for example O(install_options=-c sc_profile.xml). */
  install_options?: string;
  /** Zone name. */
  name: string;
  /** The path where the zone is created. This is required when the zone is created, but not used otherwise. */
  path?: string;
  /** The password hash for the root account. If not specified, the zone's root account does not have a password. */
  root_password?: string;
  /** Whether to create a sparse (V(true)) or whole root (V(false)) zone. */
  sparse?: boolean;
  /** V(present), configure and install the zone. */
  state?: "absent" | "attached" | "configured" | "detached" | "installed" | "present" | "running" | "started" | "stopped";
  /** Timeout, in seconds, for zone to boot. */
  timeout?: number;
}

export type SolarisZoneReturn = Record<string, unknown>;

export const solaris_zone = defineModule<SolarisZoneArgs, SolarisZoneReturn>("community.general.solaris_zone");
