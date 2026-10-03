import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.datadog_monitor
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.datadog_monitor",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.datadog_monitor",
  moduleFqn: "ansible_collections.community.general.plugins.modules.datadog_monitor",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/datadog_monitor.py"] }],
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
export interface DatadogMonitorArgs {
  /** The URL to the Datadog API. Default value is V(https://api.datadoghq.com). */
  api_host?: string;
  /** Your Datadog API key. */
  api_key: string;
  /** Your Datadog app key. */
  app_key: string;
  /** A message to include with a re-notification. Supports the '@username' notification we allow elsewhere. */
  escalation_message?: string;
  /** Time to delay evaluation (in seconds). */
  evaluation_delay?: string;
  /** The ID of the alert. */
  id?: string;
  /** Whether notifications from this monitor automatically inserts its triggering tags into the title. */
  include_tags?: boolean;
  /** Whether changes to this monitor should be restricted to the creator or admins. */
  locked?: boolean;
  /** The name of the alert. */
  name: string;
  /** A positive integer representing the number of seconds to wait before evaluating the monitor for new hosts. */
  new_host_delay?: string;
  /** The number of minutes before a monitor notifies when data stops reporting. */
  no_data_timeframe?: string;
  /** A message to include with notifications for this monitor. */
  notification_message?: string;
  /** Toggles the display of additional content sent in the monitor notification. */
  notification_preset_name?: "show_all" | "hide_query" | "hide_handles" | "hide_all";
  /** Whether tagged users are notified on changes to this monitor. */
  notify_audit?: boolean;
  /** Whether this monitor notifies when data stops reporting. */
  notify_no_data?: boolean;
  /** Integer from V(1) (high) to V(5) (low) indicating alert severity. */
  priority?: number;
  /** The monitor query to notify on. */
  query?: string;
  /** The number of minutes after the last notification before a monitor re-notifies on the current status. */
  renotify_interval?: string;
  /** The number of times re-notification messages should be sent on the current status at the provided re-notification interval. */
  renotify_occurrences?: number;
  /** The types of monitor statuses for which re-notification messages are sent. */
  renotify_statuses?: "alert" | "warn" | "no data";
  /** Whether this monitor needs a full window of data before it gets evaluated. */
  require_full_window?: boolean;
  /** Dictionary of scopes to silence, with timestamps or None. */
  silenced?: Record<string, unknown>;
  /** The designated state of the monitor. */
  state: "present" | "absent" | "mute" | "unmute";
  /** A list of tags to associate with your monitor when creating or updating. */
  tags?: string | string[];
  /** A dictionary of thresholds by status. */
  thresholds?: Record<string, unknown>;
  /** The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. */
  timeout_h?: string;
  /** The type of the monitor. */
  type?:
    | "metric alert"
    | "service check"
    | "event alert"
    | "event-v2 alert"
    | "process alert"
    | "log alert"
    | "query alert"
    | "trace-analytics alert"
    | "rum alert"
    | "composite";
}

export type DatadogMonitorReturn = Record<string, unknown>;
export const datadog_monitor = defineRemoteModule<DatadogMonitorArgs, DatadogMonitorReturn>(spec, meta);
