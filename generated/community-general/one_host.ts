// Auto-generated from: community.general.one_host
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneHostArgs {
  /** The password or token for XMLRPC authentication. */
  api_password?: string;
  /** The ENDPOINT URL of the XMLRPC server. */
  api_url?: string;
  /** The name of the user for XMLRPC authentication. */
  api_username?: string;
  /** The cluster ID. */
  cluster_id?: number;
  /** The cluster specified by name. */
  cluster_name?: string;
  /** The name of the information manager, this values are taken from the oned.conf with the tag name IM_MAD (name). */
  im_mad_name?: string;
  /** The labels for this host. */
  labels?: string | string[];
  /** Hostname of the machine to manage. */
  name: string;
  /** Takes the host to the desired lifecycle state. */
  state?: "absent" | "present" | "enabled" | "disabled" | "offline";
  /** The template or attribute changes to merge into the host template. */
  template?: Record<string, unknown>;
  /** Whether to validate the TLS/SSL certificates or not. */
  validate_certs?: boolean;
  /** The name of the virtual machine manager mad name, this values are taken from the oned.conf with the tag name VM_MAD (name). */
  vmm_mad_name?: string;
  /** Time to wait for the desired state to be reached before timeout, in seconds. */
  wait_timeout?: number;
}

export type OneHostReturn = Record<string, unknown>;

export const one_host = defineModule<OneHostArgs, OneHostReturn>("community.general.one_host");
