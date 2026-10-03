import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.cloudflare_dns
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.cloudflare_dns",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.cloudflare_dns",
  moduleFqn: "ansible_collections.community.general.plugins.modules.cloudflare_dns",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/cloudflare_dns.py"] }],
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
export interface CloudflareDnsArgs {
  /** Account API key. */
  account_api_key?: string;
  /** Account email. Required for API keys authentication. */
  account_email?: string;
  /** Algorithm number. */
  algorithm?: number;
  /** API token. */
  api_token?: string;
  /** Certificate usage number. */
  cert_usage?: number;
  /** Comments or notes about the DNS record. */
  comment?: string;
  /** Issuer Critical Flag. */
  flag?: number;
  /** Hash type number. */
  hash_type?: number;
  /** DNSSEC key tag. */
  key_tag?: number;
  /** Service port. */
  port?: number;
  /** Record priority. */
  priority?: number;
  /** Service protocol. Required for O(type=SRV) and O(type=TLSA). */
  proto?: string;
  /** Proxy through Cloudflare network or just use DNS. */
  proxied?: boolean;
  /** Record to add. */
  record?: string;
  /** Selector number. */
  selector?: number;
  /** Record service. */
  service?: string;
  /** Whether the record should be the only one for that record type and record name. */
  solo?: boolean;
  /** Whether the record(s) should exist or not. */
  state?: "absent" | "present";
  /** CAA issue restriction. */
  tag?: "issue" | "issuewild" | "iodef";
  /** Custom tags for the DNS record. */
  tags?: string | string[];
  /** Timeout for Cloudflare API calls. */
  timeout?: number;
  /** The TTL to give the new record. */
  ttl?: number;
  /** The type of DNS record to create. Required if O(state=present). */
  type?: "A" | "AAAA" | "CNAME" | "DS" | "MX" | "NS" | "SRV" | "SSHFP" | "TLSA" | "CAA" | "TXT" | "PTR";
  /** The record value. */
  value?: string;
  /** Service weight. */
  weight?: number;
  /** The name of the Zone to work with (for example V(example.com)). */
  zone: string;
}

export interface CloudflareDnsReturn {
  /** A dictionary containing the record data. */
  record?: Record<string, unknown>;
}
export const cloudflare_dns = defineRemoteModule<CloudflareDnsArgs, CloudflareDnsReturn>(spec, meta);
