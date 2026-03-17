// Auto-generated from: community.general.etcd3
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface Etcd3Args {
  /** The Certificate Authority to use to verify the etcd host. */
  ca_cert?: string;
  /** PEM formatted certificate chain file to be used for SSL client authentication. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. */
  client_key?: string;
  /** The IP address of the cluster. */
  host?: string;
  /** The key where the information is stored in the cluster. */
  key: string;
  /** The password to use for authentication. */
  password?: string;
  /** The port number used to connect to the cluster. */
  port?: number;
  /** The state of the value for the key. */
  state: "present" | "absent";
  /** The socket level timeout in seconds. */
  timeout?: number;
  /** The etcd user to authenticate with. */
  user?: string;
  /** The information stored. */
  value: string;
}

export interface Etcd3Return {
  /** The key that was queried. */
  key?: string;
  /** The previous value in the cluster. */
  old_value?: string;
}

export const etcd3 = defineModule<Etcd3Args, Etcd3Return>("community.general.etcd3");
