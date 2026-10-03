import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.nsupdate
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.nsupdate",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.nsupdate",
  moduleFqn: "ansible_collections.community.general.plugins.modules.nsupdate",
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
    ],
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_deps.py", "plugins/modules/nsupdate.py"] }],
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
    "ansible_collections/community/general/plugins/module_utils/__init__.py",
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface NsupdateArgs {
  /** Specify key algorithm used by O(key_secret). */
  key_algorithm?:
    | "HMAC-MD5.SIG-ALG.REG.INT"
    | "hmac-md5"
    | "hmac-sha1"
    | "hmac-sha224"
    | "hmac-sha256"
    | "hmac-sha384"
    | "hmac-sha512"
    | "gss-tsig";
  /** Use TSIG key name to authenticate against DNS O(server). */
  key_name?: string;
  /** Use TSIG key secret, associated with O(key_name), to authenticate against O(server). */
  key_secret?: string;
  /** Use this TCP port when connecting to O(server). */
  port?: number;
  /** Sets the transport protocol (TCP or UDP). TCP is the recommended and a more robust option. */
  protocol?: "tcp" | "udp";
  /** Sets the DNS record to modify. When zone is omitted this has to be absolute (ending with a dot). */
  record: string;
  /** Apply DNS modification on this server, specified by IPv4/IPv6 address or FQDN. */
  server: string;
  /** Manage DNS record. */
  state?: "present" | "absent";
  /** Timeout in seconds for each DNS query sent to O(server). */
  timeout?: number;
  /** Sets the record TTL. */
  ttl?: number;
  /** Sets the record type. */
  type?: string;
  /** Sets the record value. */
  value?: string | string[];
  /** DNS record is modified on this O(zone). */
  zone?: string;
}

export interface NsupdateReturn {
  /** C(dnspython) return code. */
  dns_rc?: number;
  /** C(dnspython) return code (string representation). */
  dns_rc_str?: string;
  /** DNS record. */
  record?: string;
  /** DNS record TTL. */
  ttl?: number;
  /** DNS record type. */
  type?: string;
  /** DNS record value(s). */
  value?: string | string[];
  /** DNS record zone. */
  zone?: string;
}
export const nsupdate = defineRemoteModule<NsupdateArgs, NsupdateReturn>(spec, meta);
