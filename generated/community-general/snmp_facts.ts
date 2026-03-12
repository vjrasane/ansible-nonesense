// Auto-generated from: community.general.snmp_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SnmpFactsArgs {
  /** Authentication key. */
  authkey?: string;
  /** The SNMP community string, required if O(version) is V(v2) or V(v2c). */
  community?: string;
  /** Set to target SNMP server (normally C({{ inventory_hostname }})). */
  host: string;
  /** Hashing algorithm. */
  integrity?: "md5" | "sha";
  /** Authentication level. */
  level?: "authNoPriv" | "authPriv";
  /** Encryption algorithm. */
  privacy?: "aes" | "des";
  /** Encryption key. */
  privkey?: string;
  /** Maximum number of request retries, 0 retries means just a single request. */
  retries?: number;
  /** Response timeout in seconds. */
  timeout?: number;
  /** Username for SNMPv3. */
  username?: string;
  /** SNMP Version to use, V(v2), V(v2c) or V(v3). */
  version: "v2" | "v2c" | "v3";
}

export interface SnmpFactsReturn {
  /** The returned facts. */
  ansible_facts?: Record<string, unknown>;
}

export const snmp_facts = defineModule<SnmpFactsArgs, SnmpFactsReturn>("community.general.snmp_facts");
