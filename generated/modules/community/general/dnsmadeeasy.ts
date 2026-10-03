import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.dnsmadeeasy
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.dnsmadeeasy",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.dnsmadeeasy",
  moduleFqn: "ansible_collections.community.general.plugins.modules.dnsmadeeasy",
  sources: [{
    artifact: ansibleCore,
    files: [
      "ansible/module_utils/_internal/__init__.py",
      "ansible/module_utils/_internal/_ansiballz/_loader.py",
      "ansible/module_utils/_internal/_dataclass_validation.py",
      "ansible/module_utils/_internal/_datatag/__init__.py",
      "ansible/module_utils/_internal/_datatag/_tags.py",
      "ansible/module_utils/_internal/_debugging.py",
      "ansible/module_utils/_internal/_deprecator.py",
      "ansible/module_utils/_internal/_errors.py",
      "ansible/module_utils/_internal/_event_utils.py",
      "ansible/module_utils/_internal/_json/__init__.py",
      "ansible/module_utils/_internal/_json/_legacy_encoder.py",
      "ansible/module_utils/_internal/_json/_profiles/__init__.py",
      "ansible/module_utils/_internal/_json/_profiles/_module_legacy_c2m.py",
      "ansible/module_utils/_internal/_json/_profiles/_module_legacy_m2c.py",
      "ansible/module_utils/_internal/_json/_profiles/_tagless.py",
      "ansible/module_utils/_internal/_messages.py",
      "ansible/module_utils/_internal/_patches/__init__.py",
      "ansible/module_utils/_internal/_patches/_dataclass_annotation_patch.py",
      "ansible/module_utils/_internal/_patches/_socket_patch.py",
      "ansible/module_utils/_internal/_patches/_sys_intern_patch.py",
      "ansible/module_utils/_internal/_plugin_info.py",
      "ansible/module_utils/_internal/_stack.py",
      "ansible/module_utils/_internal/_text_utils.py",
      "ansible/module_utils/_internal/_traceback.py",
      "ansible/module_utils/_internal/_validation.py",
      "ansible/module_utils/basic.py",
      "ansible/module_utils/common/_utils.py",
      "ansible/module_utils/common/arg_spec.py",
      "ansible/module_utils/common/collections.py",
      "ansible/module_utils/common/file.py",
      "ansible/module_utils/common/json.py",
      "ansible/module_utils/common/locale.py",
      "ansible/module_utils/common/parameters.py",
      "ansible/module_utils/common/process.py",
      "ansible/module_utils/common/sys_info.py",
      "ansible/module_utils/common/text/converters.py",
      "ansible/module_utils/common/text/formatters.py",
      "ansible/module_utils/common/validation.py",
      "ansible/module_utils/common/warnings.py",
      "ansible/module_utils/compat/selinux.py",
      "ansible/module_utils/compat/typing.py",
      "ansible/module_utils/datatag.py",
      "ansible/module_utils/distro/__init__.py",
      "ansible/module_utils/distro/_distro.py",
      "ansible/module_utils/errors.py",
      "ansible/module_utils/parsing/convert_bool.py",
      "ansible/module_utils/six/__init__.py",
      "ansible/module_utils/urls.py",
    ],
  }, { artifact: communityGeneral, files: ["plugins/modules/dnsmadeeasy.py"] }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible_collections/__init__.py",
    "ansible_collections/community/__init__.py",
    "ansible_collections/community/general/__init__.py",
    "ansible_collections/community/general/plugins/__init__.py",
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
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
export const dnsmadeeasy = defineRemoteModule<DnsmadeeasyArgs, DnsmadeeasyReturn>(spec, meta);
