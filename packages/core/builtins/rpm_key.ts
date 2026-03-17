// Auto-generated from: ansible.builtin.rpm_key
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface RpmKeyArgs {
  /** The long-form fingerprint of the key being imported. */
  fingerprint?: string | string[];
  /** Key that will be modified. Can be a url, a file on the managed node, or a keyid if the key already exists in the database. */
  key: string;
  /** If the key will be imported or removed from the rpm db. */
  state?: "absent" | "present";
  /** If V(false) and the O(key) is a url starting with V(https), SSL certificates will not be validated. */
  validate_certs?: boolean;
}

export type RpmKeyReturn = Record<string, unknown>;

export const rpm_key = defineModule<RpmKeyArgs, RpmKeyReturn>("ansible.builtin.rpm_key");
