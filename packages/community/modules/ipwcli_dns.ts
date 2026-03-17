// Auto-generated from: community.general.ipwcli_dns
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface IpwcliDnsArgs {
  /** The IP address for the A or AAAA record. */
  address?: string;
  /** Sets the container zone for the record. */
  container: string;
  /** Name of the record. */
  dnsname: string;
  /** Sets one of the possible flags of NAPTR record. */
  flags?: "S" | "A" | "U" | "P";
  /** Sets the order of the NAPTR record. */
  order?: number;
  /** Password to login on ipwcli. */
  password: string;
  /** Sets the port of the SRV record. */
  port?: number;
  /** Sets the preference of the NAPTR record. */
  preference?: number;
  /** Sets the priority of the SRV record. */
  priority?: number;
  /** Sets the replacement of the NAPTR record. */
  replacement?: string;
  /** Sets the service of the NAPTR record. */
  service?: string;
  /** Whether the record should exist or not. */
  state?: "absent" | "present";
  /** Sets the target of the SRV record. */
  target?: string;
  /** Sets the TTL of the record. */
  ttl?: number;
  /** Type of the record. */
  type: "NAPTR" | "SRV" | "A" | "AAAA";
  /** Username to login on ipwcli. */
  username: string;
  /** Sets the weight of the SRV record. */
  weight?: number;
}

export interface IpwcliDnsReturn {
  /** The created record from the input params. */
  record?: string;
}

export const ipwcli_dns = defineModule<IpwcliDnsArgs, IpwcliDnsReturn>("community.general.ipwcli_dns");
