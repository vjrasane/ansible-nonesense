import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.cron
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.cron",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.cron",
  moduleFqn: "ansible.modules.cron",
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
      "ansible/modules/cron.py",
    ],
  }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible/modules/__init__.py",
  ],
} as const;
export interface CronArgs {
  /** If set, create a backup of the crontab before it is modified. The location of the backup is returned in the RV(ignore:backup_file) variable by this module. */
  backup?: boolean;
  /** If specified, uses this file instead of an individual user's crontab. The assumption is that this file is exclusively managed by the module, do not use if the file contains multiple entries, NEVER use for /etc/crontab. */
  cron_file?: string;
  /** Day of the month the job should run (V(1-31), V(*), V(* /2), and so on). */
  day?: string;
  /** If the job should be disabled (commented out) in the crontab. */
  disabled?: boolean;
  /** If set, manages a crontab's environment variable. */
  env?: boolean;
  /** Hour when the job should run (V(0-23), V(*), V(* /2), and so on). */
  hour?: string;
  /** Used with O(state=present) and O(env). */
  insertafter?: string;
  /** Used with O(state=present) and O(env). */
  insertbefore?: string;
  /** The command to execute or, if O(env) is set, the value of environment variable. */
  job?: string;
  /** Minute when the job should run (V(0-59), V(*), V(* /2), and so on). */
  minute?: string;
  /** Month of the year the job should run (V(JAN-DEC) or V(1-12), V(*), V(* /2), and so on). */
  month?: string;
  /** Description of a crontab entry or, if O(env) is set, the name of environment variable. */
  name: string;
  /** Special time specification nickname. */
  special_time?: "annually" | "daily" | "hourly" | "monthly" | "reboot" | "weekly" | "yearly";
  /** Whether to ensure the job or environment variable is present or absent. */
  state?: "absent" | "present";
  /** The specific user whose crontab should be modified. */
  user?: string;
  /** Day of the week that the job should run (V(SUN-SAT) or V(0-6), V(*), and so on). */
  weekday?: string;
}

export type CronReturn = Record<string, unknown>;
export const cron = defineRemoteModule<CronArgs, CronReturn>(spec, meta);
