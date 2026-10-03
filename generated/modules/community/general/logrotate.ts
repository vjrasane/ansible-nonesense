import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.logrotate
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.logrotate",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.logrotate",
  moduleFqn: "ansible_collections.community.general.plugins.modules.logrotate",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/logrotate.py"] }],
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
export interface LogrotateArgs {
  /** Create a backup of the existing configuration file before overwriting. */
  backup?: boolean;
  /** Compress rotated log files. */
  compress?: boolean;
  /** Options to pass to compression program. */
  compress_options?: string;
  /** Compression method to use. */
  compression_method?: "gzip" | "bzip2" | "xz" | "zstd" | "lzma" | "lz4";
  /** Directory where logrotate configurations are stored. */
  config_dir?: string;
  /** Copy the log file but do not truncate the original. */
  copy?: boolean;
  /** Copy the log file and then truncate it in place. */
  copy_truncate?: boolean;
  /** Create new log file with specified permissions after rotation. */
  create?: string;
  /** Create O(old_dir) directory if it does not exist. */
  create_old_dir?: boolean;
  /** Use date as extension for rotated files (using the date format specified in O(date_format) instead of sequential numbers). */
  date_ext?: boolean;
  /** Format for date extension. */
  date_format?: string;
  /** Use yesterday's date for O(date_ext) instead of today's date. */
  date_yesterday?: boolean;
  /** Postpone compression of the previous log file to the next rotation cycle. */
  delay_compress?: boolean;
  /** Whether the configuration should be enabled. */
  enabled?: boolean;
  /** Extension to use for rotated log files (including dot). */
  extension?: string;
  /** Commands to execute once before all log files that match the wildcard pattern are rotated. */
  first_action?: string | string[];
  /** Include additional configuration files from specified directory. */
  include?: string;
  /** Commands to execute once after all log files that match the wildcard pattern are rotated. */
  last_action?: string | string[];
  /** Mail logs to specified address when removed. */
  mail?: string;
  /** Mail just-created log file, not the about-to-expire one. */
  mail_first?: boolean;
  /** Mail about-to-expire log file (default). */
  mail_last?: boolean;
  /** Remove rotated logs older than specified number of days. */
  max_age?: number;
  /** Rotate log file when it grows bigger than specified size, but at most once per O(rotation_period). */
  max_size?: string;
  /** Rotate log file only if it has grown bigger than specified size. */
  min_size?: string;
  /** Do not issue an error if the log file is missing. */
  missing_ok?: boolean;
  /** Name of the logrotate configuration. */
  name: string;
  /** Opposite of O(delay_compress). Ensure compression happens immediately. */
  no_delay_compress?: boolean;
  /** Keep rotated logs in the same directory as the original log. */
  no_old_dir?: boolean;
  /** Do not rotate the log file if it is empty. */
  not_if_empty?: boolean;
  /** Move rotated logs into specified directory. */
  old_dir?: string;
  /** List of log file paths or patterns to rotate. */
  paths?: string | string[];
  /** Commands to execute after rotating the log file. */
  post_rotate?: string | string[];
  /** Commands to execute before removing rotated log files. */
  pre_remove?: string | string[];
  /** Commands to execute before rotating the log file. */
  pre_rotate?: string | string[];
  /** Rename and copy the log file, leaving the original in place. */
  rename_copy?: boolean;
  /** Number of rotated log files to keep. */
  rotate_count?: number;
  /** How often to rotate the logs. */
  rotation_period?: "hourly" | "daily" | "weekly" | "monthly" | "yearly";
  /** Run O(pre_rotate) and O(post_rotate) scripts only once for all matching log files. */
  shared_scripts?: boolean;
  /** Use C(shred) to securely delete rotated log files. */
  shred?: boolean;
  /** Number of times to overwrite files when using O(shred=true). */
  shred_cycles?: number;
  /** Rotate log file when it grows bigger than specified size. */
  size?: string;
  /** Base number for rotated files. Allowed values are from V(0) to V(999). */
  start?: number;
  /** Whether the configuration should be present or absent. */
  state?: "present" | "absent";
  /** Set user and group for rotated files. */
  su?: string;
  /** Send logrotate messages to syslog. */
  syslog?: boolean;
  /** List of extensions that logrotate should not touch. */
  taboo_ext?: string | string[];
}

export interface LogrotateReturn {
  /** Path to the backup of the original configuration file, if it was backed up. */
  backup_file?: string;
  /** The generated logrotate configuration content. */
  config_content?: string;
  /** Path to the created/updated logrotate configuration file. */
  config_file?: string;
  /** Current enabled state of the configuration. */
  enabled_state?: boolean;
}
export const logrotate = defineRemoteModule<LogrotateArgs, LogrotateReturn>(spec, meta);
