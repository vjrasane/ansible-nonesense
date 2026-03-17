// Auto-generated from: community.general.omapi_host
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OmapiHostArgs {
  /** Enable dynamic DNS updates for this host. */
  ddns?: boolean;
  /** Sets OMAPI server host to interact with. */
  host?: string;
  /** Sets the host lease hostname (mandatory if O(state=present)). */
  hostname?: string;
  /** Sets the lease host IP address. */
  ip?: string;
  /** Sets the TSIG key content for authenticating against OMAPI server. */
  key: string;
  /** Sets the TSIG key name for authenticating against OMAPI server. */
  key_name: string;
  /** Sets the lease host MAC address. */
  macaddr: string;
  /** Sets the OMAPI server port to interact with. */
  port?: number;
  /** Create or remove OMAPI host. */
  state: "absent" | "present";
  /** Attach a list of OMAPI DHCP statements with host lease (without ending semicolon). */
  statements?: string | string[];
}

export interface OmapiHostReturn {
  /** Dictionary containing host information. */
  lease?: unknown;
}

export const omapi_host = defineModule<OmapiHostArgs, OmapiHostReturn>("community.general.omapi_host");
