// Auto-generated from: community.general.consul_kv
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ConsulKvArgs {
  /** Used when acquiring a lock with a session. If the O(cas) is V(0), then Consul only puts the key if it does not already exist. If the O(cas) value is non-zero, then the key is only set if the index matches the ModifyIndex of that key. */
  cas?: string;
  /** The name of the datacenter to query. If unspecified, the query defaults to the datacenter of the Consul agent on O(host). */
  datacenter?: string;
  /** Opaque positive integer value that can be passed when setting a value. */
  flags?: string;
  /** Host of the Consul agent. */
  host?: string;
  /** The key at which the value should be stored. */
  key: string;
  /** The port on which the Consul agent is running. */
  port?: number;
  /** If the key represents a prefix, each entry with the prefix can be retrieved by setting this to V(true). */
  recurse?: boolean;
  /** If the O(state) is V(present) and O(value) is set, perform a read after setting the value and return this value. */
  retrieve?: boolean;
  /** The protocol scheme on which the Consul agent is running. */
  scheme?: string;
  /** The session that should be used to acquire or release a lock associated with a key/value pair. */
  session?: string;
  /** The action to take with the supplied key and value. If the state is V(present) and O(value) is set, the key contents is set to the value supplied and RV(ignore:changed) is set to V(true) only if the value was different to the current contents. If the state is V(present) and O(value) is not set, the existing value associated to the key is returned. The state V(absent) is used to remove the key/value pair, again RV(ignore:changed) is set to V(true) only if the key actually existed prior to the removal. An attempt can be made to obtain or free the lock associated with a key/value pair with the states V(acquire) or V(release) respectively. A valid session must be supplied to make the attempt RV(ignore:changed) is V(true) if the attempt is successful, V(false) otherwise. */
  state?: "absent" | "acquire" | "present" | "release";
  /** The token key identifying an ACL rule set that controls access to the key value pair. */
  token?: string;
  /** Whether to verify the tls certificate of the Consul agent. */
  validate_certs?: boolean;
  /** The value should be associated with the given key, required if O(state) is V(present). */
  value?: string;
}

export type ConsulKvReturn = Record<string, unknown>;

export const consul_kv = defineModule<ConsulKvArgs, ConsulKvReturn>("community.general.consul_kv");
