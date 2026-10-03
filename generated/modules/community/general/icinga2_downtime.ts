import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.icinga2_downtime
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.icinga2_downtime",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.icinga2_downtime",
  moduleFqn: "ansible_collections.community.general.plugins.modules.icinga2_downtime",
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
      "ansible/module_utils/common/dict_transformations.py",
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
  }, {
    artifact: communityGeneral,
    files: [
      "plugins/module_utils/_icinga2.py",
      "plugins/module_utils/_mh/base.py",
      "plugins/module_utils/_mh/deco.py",
      "plugins/module_utils/_mh/exceptions.py",
      "plugins/module_utils/_mh/mixins/deprecate_attrs.py",
      "plugins/module_utils/_mh/mixins/state.py",
      "plugins/module_utils/_mh/module_helper.py",
      "plugins/module_utils/_module_helper.py",
      "plugins/module_utils/_vardict.py",
      "plugins/modules/icinga2_downtime.py",
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
    "ansible_collections/community/general/plugins/module_utils/_mh/__init__.py",
    "ansible_collections/community/general/plugins/module_utils/_mh/mixins/__init__.py",
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface Icinga2DowntimeArgs {
  /** Whether downtimes should be created for all services of the matched host objects. */
  all_services?: boolean;
  /** Name of the author. */
  author?: string;
  /** CA certificates bundle to use to verify the Icinga 2 server certificate. */
  ca_path?: string;
  /** Schedule child downtimes. */
  child_options?: "DowntimeNoChildren" | "DowntimeTriggeredChildren" | "DowntimeNonTriggeredChildren";
  /** PEM formatted certificate chain file to be used for SSL client authentication. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. */
  client_key?: string;
  /** A descriptive comment. */
  comment?: string;
  /** Duration of the downtime. */
  duration?: number;
  /** End time of the downtime as UNIX timestamp. */
  end_time?: number;
  /** Filter expression limiting the objects to operate on. */
  filter?: string;
  /** Variable names and values used in the filter expression. */
  filter_vars?: Record<string, unknown>;
  /** Whether the downtime is fixed or flexible. */
  fixed?: boolean;
  /** If V(yes) do not get a cached copy. */
  force?: boolean;
  /** Credentials specified with O(url_username) and O(url_password) should be passed in HTTP Header. */
  force_basic_auth?: boolean;
  /** Header to identify as, generally appears in web server logs. */
  http_agent?: string;
  /** Name of the downtime object. */
  name?: string;
  /** Use V(Host) for a host downtime and V(Service) for a service downtime. */
  object_type?: "Service" | "Host" | "Downtime";
  /** Start time of the downtime as UNIX timestamp. */
  start_time?: number;
  /** State of the downtime. */
  state?: "present" | "absent";
  /** How long to wait for the server to send data before giving up. */
  timeout?: number;
  /** Name of the downtime trigger. */
  trigger_name?: string;
  /** URL of the Icinga 2 REST API. */
  url: string;
  /** The password for use in HTTP basic authentication. */
  url_password?: string;
  /** The username for use in HTTP basic authentication. */
  url_username?: string;
  /** Use GSSAPI to perform the authentication, typically this is for Kerberos or Kerberos through Negotiate authentication. */
  use_gssapi?: boolean;
  /** If V(no), it will not use a proxy, even if one is defined in an environment variable on the target hosts. */
  use_proxy?: boolean;
  /** If V(no), SSL certificates will not be validated. */
  validate_certs?: boolean;
}

export interface Icinga2DowntimeReturn {
  /** Error message as JSON dictionary returned from the Icinga 2 API. */
  error?: Record<string, unknown>;
  /** Results of downtime scheduling or removal */
  results?: Record<string, unknown> | Record<string, unknown>[];
}
export const icinga2_downtime = defineRemoteModule<Icinga2DowntimeArgs, Icinga2DowntimeReturn>(spec, meta);
