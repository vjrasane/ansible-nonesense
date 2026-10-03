import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.krb_ticket
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.krb_ticket",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.krb_ticket",
  moduleFqn: "ansible_collections.community.general.plugins.modules.krb_ticket",
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
  }, {
    artifact: communityGeneral,
    files: [
      "plugins/module_utils/_cmd_runner.py",
      "plugins/module_utils/_cmd_runner_fmt.py",
      "plugins/modules/krb_ticket.py",
    ],
  }],
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
export interface KrbTicketArgs {
  /** Request tickets restricted to the host's local address or non-restricted. */
  address_restricted?: boolean;
  /** Requests anonymous processing. */
  anonymous?: boolean;
  /** Use O(cache_name) as the ticket cache name and location. */
  cache_name?: string;
  /** Requests canonicalization of the principal name, and allows the KDC to reply with a different client principal from the one requested. */
  canonicalization?: boolean;
  /** Treats the principal name as an enterprise name (implies the O(canonicalization) option). */
  enterprise?: boolean;
  /** Request forwardable or non-forwardable tickets. */
  forwardable?: boolean;
  /** When O(state=absent) destroys all credential caches in collection. */
  kdestroy_all?: boolean;
  /** Requests a ticket, obtained from a key in the local host's keytab. */
  keytab?: boolean;
  /** Use when O(keytab=true) to specify path to a keytab file. */
  keytab_path?: string;
  /** Requests a ticket with the lifetime, if the O(lifetime) is not specified, the default ticket lifetime is used. */
  lifetime?: string;
  /** Principal password. */
  password?: string;
  /** The principal name. */
  principal?: string;
  /** Request proxiable or non-proxiable tickets. */
  proxiable?: boolean;
  /** Requests renewable tickets, with a total lifetime equal to O(renewable). */
  renewable?: string;
  /** Requests renewal of the ticket-granting ticket. */
  renewal?: boolean;
  /** Requests a postdated ticket. */
  start_time?: string;
  /** The state of the Kerberos ticket. */
  state?: "present" | "absent";
  /** Requests that the ticket-granting ticket in the cache (with the invalid flag set) be passed to the KDC for validation. */
  validate?: boolean;
}

export type KrbTicketReturn = Record<string, unknown>;
export const krb_ticket = defineRemoteModule<KrbTicketArgs, KrbTicketReturn>(spec, meta);
