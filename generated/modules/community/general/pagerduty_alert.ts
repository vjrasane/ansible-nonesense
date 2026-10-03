import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.pagerduty_alert
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.pagerduty_alert",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.pagerduty_alert",
  moduleFqn: "ansible_collections.community.general.plugins.modules.pagerduty_alert",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/pagerduty_alert.py"] }],
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
export interface PagerdutyAlertArgs {
  /** The pagerduty API key (readonly access), generated on the pagerduty site. */
  api_key?: string;
  /** The API version we want to use to run the module. */
  api_version?: "v1" | "v2";
  /** The name of the monitoring client that is triggering this event. */
  client?: string;
  /** The URL of the monitoring client that is triggering this event. */
  client_url?: string;
  /** Component of the source machine that is responsible for the event, for example C(mysql) or C(eth0). */
  component?: string;
  /** Additional details about the event and affected system. */
  custom_details?: Record<string, unknown>;
  /** For O(state=triggered) - Required. Short description of the problem that led to this trigger. This field (or a truncated version) is used when generating phone calls, SMS messages and alert emails. It also appears on the incidents tables in the PagerDuty UI. The maximum length is 1024 characters. */
  desc?: string;
  /** The class/type of the event, for example C(ping failure) or C(cpu load). */
  incident_class?: string;
  /** Identifies the incident to which this O(state) should be applied. */
  incident_key?: string;
  /** The GUID of one of your 'Generic API' services. */
  integration_key?: string;
  /** A short description of the O(link_url). */
  link_text?: string;
  /** Relevant link URL to the alert. For example, the website or the job link. */
  link_url?: string;
  /** PagerDuty unique subdomain. Obsolete. It is not used with PagerDuty REST v2 API. */
  name?: string;
  /** ID of PagerDuty service when incidents are triggered, acknowledged or resolved. */
  service_id?: string;
  /** The GUID of one of your 'Generic API' services. Obsolete. Please use O(integration_key). */
  service_key?: string;
  /** The perceived severity of the status the event is describing with respect to the affected system. */
  severity?: "critical" | "warning" | "error" | "info";
  /** The unique location of the affected system, preferably a hostname or FQDN. */
  source?: string;
  /** Type of event to be sent. */
  state: "triggered" | "acknowledged" | "resolved";
}

export type PagerdutyAlertReturn = Record<string, unknown>;
export const pagerduty_alert = defineRemoteModule<PagerdutyAlertArgs, PagerdutyAlertReturn>(spec, meta);
