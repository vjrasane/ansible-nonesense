// Auto-generated from: community.general.znode
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ZnodeArgs {
  /** The authentication credential value. Depends on O(auth_scheme). */
  auth_credential?: string;
  /** Authentication scheme. */
  auth_scheme?: "digest" | "sasl";
  /** A list of ZooKeeper servers (format V([server]:[port])). */
  hosts: string;
  /** The path of the znode. */
  name: string;
  /** An operation to perform. Mutually exclusive with state. */
  op?: "get" | "wait" | "list";
  /** Recursively delete node and all its children. */
  recursive?: boolean;
  /** The state to enforce. Mutually exclusive with op. */
  state?: "present" | "absent";
  /** The amount of time to wait for a node to appear. */
  timeout?: number;
  /** Using TLS/SSL or not. */
  use_tls?: boolean;
  /** The value assigned to the znode. */
  value?: string;
}

export type ZnodeReturn = Record<string, unknown>;

export const znode = defineModule<ZnodeArgs, ZnodeReturn>("community.general.znode");
