// Auto-generated from: community.general.krb_ticket
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KrbTicketArgs {
  /** Request tickets restricted to the host's local address or non-restricted. */
  address_restricted?: boolean;
  /** Requests anonymous processing. */
  anonymous?: boolean;
  /** Use O(cache_name) as the ticket cache name and location. */
  cache_name?: string;
  /** Requests canonicalization of the principal name, and allows the KDC to reply with a different client principal from the one requested. */
  canonicalization?: boolean;
  /** Treats the principal name as an enterprise name (implies the O(canonicalization) option). */
  enterprise?: boolean;
  /** Request forwardable or non-forwardable tickets. */
  forwardable?: boolean;
  /** When O(state=absent) destroys all credential caches in collection. */
  kdestroy_all?: boolean;
  /** Requests a ticket, obtained from a key in the local host's keytab. */
  keytab?: boolean;
  /** Use when O(keytab=true) to specify path to a keytab file. */
  keytab_path?: string;
  /** Requests a ticket with the lifetime, if the O(lifetime) is not specified, the default ticket lifetime is used. */
  lifetime?: string;
  /** Principal password. */
  password?: string;
  /** The principal name. */
  principal?: string;
  /** Request proxiable or non-proxiable tickets. */
  proxiable?: boolean;
  /** Requests renewable tickets, with a total lifetime equal to O(renewable). */
  renewable?: string;
  /** Requests renewal of the ticket-granting ticket. */
  renewal?: boolean;
  /** Requests a postdated ticket. */
  start_time?: string;
  /** The state of the Kerberos ticket. */
  state?: "present" | "absent";
  /** Requests that the ticket-granting ticket in the cache (with the invalid flag set) be passed to the KDC for validation. */
  validate?: boolean;
}

export type KrbTicketReturn = Record<string, unknown>;

export const krb_ticket = defineModule<KrbTicketArgs, KrbTicketReturn>("community.general.krb_ticket");
