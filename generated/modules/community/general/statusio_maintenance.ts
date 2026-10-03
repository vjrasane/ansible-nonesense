import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.statusio_maintenance
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.statusio_maintenance",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.statusio_maintenance",
  moduleFqn: "ansible_collections.community.general.plugins.modules.statusio_maintenance",
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
  }, {
    artifact: communityGeneral,
    files: ["plugins/module_utils/_datetime.py", "plugins/modules/statusio_maintenance.py"],
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
export interface StatusioMaintenanceArgs {
  /** If it affects all components and containers. */
  all_infrastructure_affected?: boolean;
  /** Your unique API ID from status.io. */
  api_id: string;
  /** Your unique API Key from status.io. */
  api_key: string;
  /** Automatically start and end the maintenance window. */
  automation?: boolean;
  /** The given name of your component (server name). */
  components?: string | string[];
  /** The given name of your container (data center). */
  containers?: string | string[];
  /** Message describing the maintenance window. */
  desc?: string;
  /** The maintenance ID number when deleting a maintenance window. */
  maintenance_id?: string;
  /** Notify subscribers 1 hour before maintenance start time. */
  maintenance_notify_1_hr?: boolean;
  /** Notify subscribers 24 hours before maintenance start time. */
  maintenance_notify_24_hr?: boolean;
  /** Notify subscribers 72 hours before maintenance start time. */
  maintenance_notify_72_hr?: boolean;
  /** Notify subscribers now. */
  maintenance_notify_now?: boolean;
  /** The duration of the maintenance window (starting from playbook runtime). */
  minutes?: number;
  /** Date maintenance is expected to start (Month/Day/Year) (UTC). */
  start_date?: string;
  /** Time maintenance is expected to start (Hour:Minutes) (UTC). */
  start_time?: string;
  /** Desired state of the package. */
  state?: "present" | "absent";
  /** Your unique StatusPage ID from status.io. */
  statuspage: string;
  /** A descriptive title for the maintenance window. */
  title?: string;
  /** Status.io API URL. A private apiary can be used instead. */
  url?: string;
}

export type StatusioMaintenanceReturn = Record<string, unknown>;
export const statusio_maintenance = defineRemoteModule<StatusioMaintenanceArgs, StatusioMaintenanceReturn>(spec, meta);
