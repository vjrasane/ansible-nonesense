// Auto-generated from: community.general.gandi_livedns
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GandiLivednsArgs {
  /** Account API token. */
  api_key?: string;
  /** The name of the Domain to work with (for example, V(example.com)). */
  domain: string;
  /** Scoped API token. */
  personal_access_token?: string;
  /** Record to add. */
  record: string;
  /** Whether the record(s) should exist or not. */
  state?: "absent" | "present";
  /** The TTL to give the new record. */
  ttl?: number;
  /** The type of DNS record to create. */
  type: string;
  /** The record values. */
  values?: string | string[];
}

export interface GandiLivednsReturn {
  /** A dictionary containing the record data. */
  record?: Record<string, unknown>;
}

export const gandi_livedns = defineModule<GandiLivednsArgs, GandiLivednsReturn>("community.general.gandi_livedns");
