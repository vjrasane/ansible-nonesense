// Auto-generated from: community.general.iptables_state
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface IptablesStateArgs {
  /** Save or restore the values of all packet and byte counters. */
  counters?: boolean;
  /** Which version of the IP protocol this module should apply to. */
  ip_version?: "ipv4" | "ipv6";
  /** Specify the path to the C(modprobe) program internally used by iptables related commands to load kernel modules. */
  modprobe?: string;
  /** For O(state=restored), ignored otherwise. */
  noflush?: boolean;
  /** The file the iptables state should be saved to. */
  path: string;
  /** Whether the firewall state should be saved (into a file) or restored (from a file). */
  state: "saved" | "restored";
  /** When O(state=restored), restore only the named table even if the input file contains other tables. Fail if the named table is not declared in the file. */
  table?: "filter" | "nat" | "mangle" | "raw" | "security";
  /** Wait N seconds for the xtables lock to prevent instant failure in case multiple instances of the program are running concurrently. */
  wait?: number;
}

export interface IptablesStateReturn {
  /** Whether or not the wanted state has been successfully restored. */
  applied?: boolean;
  /** The current state of the firewall when module starts. */
  initial_state?: string | string[];
  /** The state the module restored, whenever it is finally applied or not. */
  restored?: string | string[];
  /** The iptables state the module saved. */
  saved?: string | string[];
  /** The iptables on the system before the module has run, separated by table. */
  tables?: Record<string, unknown>;
}

export const iptables_state = defineModule<IptablesStateArgs, IptablesStateReturn>("community.general.iptables_state");
