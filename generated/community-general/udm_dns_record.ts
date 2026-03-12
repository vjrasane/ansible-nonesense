// Auto-generated from: community.general.udm_dns_record
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface UdmDnsRecordArgs {
  /** Additional data for this record, for example V({'a': '192.0.2.1'}). */
  data?: Record<string, unknown>;
  /** Name of the record, this is also the DNS record. For example V(www) for www.example.com. */
  name: string;
  /** Whether the DNS record is present or not. */
  state?: "present" | "absent";
  /** Define the record type. V(host_record) is a A or AAAA record, V(alias) is a CNAME, V(ptr_record) is a PTR record, V(srv_record) is a SRV record and V(txt_record) is a TXT record. */
  type: string;
  /** Corresponding DNS zone for this record, for example V(example.com). */
  zone: string;
}

export type UdmDnsRecordReturn = Record<string, unknown>;

export const udm_dns_record = defineModule<UdmDnsRecordArgs, UdmDnsRecordReturn>("community.general.udm_dns_record");
