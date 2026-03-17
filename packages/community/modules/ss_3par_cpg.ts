// Auto-generated from: community.general.ss_3par_cpg
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface Ss3parCpgArgs {
  /** Name of the CPG. */
  cpg_name: string;
  /** Specifies that physical disks must have the specified device type. */
  disk_type?: "FC" | "NL" | "SSD";
  /** Specifies the name of the domain in which the object resides. */
  domain?: string;
  /** Specifies the growth increment(in MiB, GiB or TiB) the amount of logical disk storage created on each auto-grow operation. */
  growth_increment?: string;
  /** Specifies that the autogrow operation is limited to the specified storage amount that sets the growth limit (in MiB, GiB or TiB). */
  growth_limit?: string;
  /** Specifies that the threshold (in MiB, GiB or TiB) of used logical disk space when exceeded results in a warning alert. */
  growth_warning?: string;
  /** Specifies that the layout must support the failure of one port pair, one cage, or one magazine. */
  high_availability?: "PORT" | "CAGE" | "MAG";
  /** Specifies the RAID type for the logical disk. */
  raid_type?: "R0" | "R1" | "R5" | "R6";
  /** Specifies whether the certificate needs to be validated while communicating. */
  secure?: boolean;
  /** Specifies the set size in the number of chunklets. */
  set_size?: number;
  /** Whether the specified CPG should exist or not. */
  state: "present" | "absent";
  /** The storage system IP address. */
  storage_system_ip: string;
  /** The storage system password. */
  storage_system_password: string;
  /** The storage system user name. */
  storage_system_username: string;
}

export type Ss3parCpgReturn = Record<string, unknown>;

export const ss_3par_cpg = defineModule<Ss3parCpgArgs, Ss3parCpgReturn>("community.general.ss_3par_cpg");
