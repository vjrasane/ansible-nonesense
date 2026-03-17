// Auto-generated from: community.general.dnsmadeeasy
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface DnsmadeeasyArgs {
  /** Account API Key. */
  account_key: string;
  /** Account Secret Key. */
  account_secret: string;
  /** If true, fallback to the primary IP address is manual after a failover. */
  autoFailover?: boolean;
  /** Name or ID of the contact list that the monitor notifies. */
  contactList?: string;
  /** Domain to work with. Can be the domain name (for example V(mydomain.com)) or the numeric ID of the domain in DNS Made Easy (for example V(839989)) for faster resolution. */
  domain: string;
  /** If V(true), add or change the failover. This is applicable only for A records. */
  failover?: boolean;
  /** The file at the Fqdn that the monitor queries for HTTP or HTTPS. */
  httpFile?: string;
  /** The fully qualified domain name used by the monitor. */
  httpFqdn?: string;
  /** The string in the httpFile that the monitor queries for HTTP or HTTPS. */
  httpQueryString?: string;
  /** Primary IP address for the failover. */
  ip1?: string;
  /** Secondary IP address for the failover. */
  ip2?: string;
  /** Tertiary IP address for the failover. */
  ip3?: string;
  /** Quaternary IP address for the failover. */
  ip4?: string;
  /** Quinary IP address for the failover. */
  ip5?: string;
  /** Number of emails sent to the contact list by the monitor. */
  maxEmails?: number;
  /** If V(true), add or change the monitor. This is applicable only for A records. */
  monitor?: boolean;
  /** Port used by the monitor. */
  port?: number;
  /** Protocol used by the monitor. */
  protocol?: "TCP" | "UDP" | "HTTP" | "DNS" | "SMTP" | "HTTPS";
  /** Record name to get/create/delete/update. If O(record_name) is not specified; all records for the domain are returned in "result" regardless of the state argument. */
  record_name?: string;
  /** Record's "Time-To-Live". Number of seconds the record remains cached in DNS servers. */
  record_ttl?: number;
  /** Record type. */
  record_type?: "A" | "AAAA" | "CNAME" | "ANAME" | "HTTPRED" | "MX" | "NS" | "PTR" | "SRV" | "TXT";
  /** Record value. HTTPRED: <redirection URL>, MX: <priority> <target name>, NS: <name server>, PTR: <target name>, SRV: <priority> <weight> <port> <target name>, TXT: <text value>". */
  record_value?: string;
  /** Decides if the sandbox API should be used. Otherwise (default) the production API of DNS Made Easy is used. */
  sandbox?: boolean;
  /** Number of checks the monitor performs before a failover occurs where Low = 8, Medium = 5,and High = 3. */
  sensitivity?: "Low" | "Medium" | "High";
  /** Whether the record should exist or not. */
  state: "present" | "absent";
  /** Description used by the monitor. */
  systemDescription?: string;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export type DnsmadeeasyReturn = Record<string, unknown>;

export const dnsmadeeasy = defineModule<DnsmadeeasyArgs, DnsmadeeasyReturn>("community.general.dnsmadeeasy");
