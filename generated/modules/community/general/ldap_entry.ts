import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.ldap_entry
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.ldap_entry",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.ldap_entry",
  moduleFqn: "ansible_collections.community.general.plugins.modules.ldap_entry",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_ldap.py", "plugins/modules/ldap_entry.py"] }],
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
export interface LdapEntryArgs {
  /** If O(state=present), attributes necessary to create an entry. Existing entries are never modified. To assert specific attribute values on an existing entry, use M(community.general.ldap_attrs) module instead. */
  attributes?: Record<string, unknown>;
  /** If O(state=present), attributes whose values must be handled as raw sequences of bytes must be listed here. */
  binary_attributes?: string | string[];
  /** A DN to bind with. Try to use a SASL bind with the EXTERNAL mechanism as default when this parameter is omitted. */
  bind_dn?: string;
  /** The password to use with O(bind_dn). */
  bind_pw?: string;
  /** Set the path to PEM file with CA certs. */
  ca_path?: string;
  /** PEM formatted certificate chain file to be used for SSL client authentication. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. */
  client_key?: string;
  /** The DN of the entry to add or remove. */
  dn: string;
  /** If O(state=present) and this option is V(true), attributes whose name include the V(binary) option will be treated as Base64-encoded byte sequences automatically, even if they are not listed in O(binary_attributes). */
  honor_binary?: boolean;
  /** If O(state=present), value or list of values to use when creating the entry. It can either be a string or an actual list of strings. */
  objectClass?: string | string[];
  /** If O(state=delete), a flag indicating whether a single entry or the whole branch must be deleted. */
  recursive?: boolean;
  /** Set the referrals chasing behavior. */
  referrals_chasing?: "disabled" | "anonymous";
  /** The class to use for SASL authentication. */
  sasl_class?: "external" | "gssapi";
  /** The O(server_uri) parameter may be a comma- or whitespace-separated list of URIs containing only the schema, the host, and the port fields. */
  server_uri?: string;
  /** Use the START_TLS LDAP extension if set to V(true). */
  start_tls?: boolean;
  /** The target state of the entry. */
  state?: "present" | "absent";
  /** If set to V(false), SSL certificates are not validated. */
  validate_certs?: boolean;
  /** Set the behavior on how to process Xordered DNs. */
  xorder_discovery?: "enable" | "auto" | "disable";
}

export type LdapEntryReturn = Record<string, unknown>;
export const ldap_entry = defineRemoteModule<LdapEntryArgs, LdapEntryReturn>(spec, meta);
