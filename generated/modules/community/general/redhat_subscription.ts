import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.redhat_subscription
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.redhat_subscription",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.redhat_subscription",
  moduleFqn: "ansible_collections.community.general.plugins.modules.redhat_subscription",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/redhat_subscription.py"] }],
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
export interface RedhatSubscriptionArgs {
  /** Supply an activation key for use with registration. */
  activationkey?: string;
  /** Upon successful registration, auto-consume available subscriptions. */
  auto_attach?: boolean;
  /** References an existing consumer ID to resume using a previous registration for this system. If the system's identity certificate is lost or corrupted, this option allows it to resume using its previous identity and subscriptions. The default is to not specify a consumer ID so a new ID is created. */
  consumer_id?: string;
  /** Name of the system to register, defaults to the hostname. */
  consumer_name?: string;
  /** The type of unit to register, defaults to system. */
  consumer_type?: string;
  /** Register with a specific environment in the destination org. Used with Red Hat Satellite or Katello. */
  environment?: string;
  /** Register the system even if it is already registered. */
  force_register?: boolean;
  /** Organization ID to use in conjunction with activationkey. */
  org_id?: string;
  /** Access.redhat.com or Red Hat Satellite or Katello password. */
  password?: string;
  /** Specify subscription pool IDs to consume. */
  pool_ids?: unknown | unknown[];
  /** Set a release version. */
  release?: string;
  /** Specify CDN baseurl. */
  rhsm_baseurl?: string;
  /** Specify an alternative location for a CA certificate for CDN. */
  rhsm_repo_ca_cert?: string;
  /** Specify an alternative Red Hat Subscription Management or Red Hat Satellite or Katello server. */
  server_hostname?: string;
  /** Enable or disable https server certificate verification when connecting to O(server_hostname). */
  server_insecure?: string;
  /** Specify the port when registering to the Red Hat Subscription Management or Red Hat Satellite or Katello server. */
  server_port?: string;
  /** Specify the prefix when registering to the Red Hat Subscription Management or Red Hat Satellite or Katello server. */
  server_prefix?: string;
  /** Specify an HTTP proxy hostname. */
  server_proxy_hostname?: string;
  /** Specify a password for HTTP proxy with basic authentication. */
  server_proxy_password?: string;
  /** Specify an HTTP proxy port. */
  server_proxy_port?: string;
  /** Specify an HTTP proxy scheme, for example V(http) or V(https). */
  server_proxy_scheme?: string;
  /** Specify a user for HTTP proxy with basic authentication. */
  server_proxy_user?: string;
  /** Whether to register and subscribe (V(present)), or unregister (V(absent)) a system. */
  state?: "present" | "absent";
  /** Set syspurpose attributes in file C(/etc/rhsm/syspurpose/syspurpose.json) and synchronize these attributes with RHSM server. Syspurpose attributes help attach the most appropriate subscriptions to the system automatically. When C(syspurpose.json) file already contains some attributes, then new attributes overwrite existing attributes. When some attribute is not listed in the new list of attributes, the existing attribute is removed from C(syspurpose.json) file. Unknown attributes are ignored. */
  syspurpose?: {
    addons?: string | string[];
    role?: string;
    service_level_agreement?: string;
    sync?: boolean;
    usage?: string;
  };
  /** Sso.redhat.com API access token. */
  token?: string;
  /** Access.redhat.com or Red Hat Satellite or Katello username. */
  username?: string;
}

export interface RedhatSubscriptionReturn {
  /** List of pool IDs to which system is now subscribed. */
  subscribed_pool_ids?: Record<string, unknown>;
}
export const redhat_subscription = defineRemoteModule<RedhatSubscriptionArgs, RedhatSubscriptionReturn>(spec, meta);
