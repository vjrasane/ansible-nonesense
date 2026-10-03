import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.find
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.find",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.find",
  moduleFqn: "ansible.modules.find",
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
      "ansible/modules/find.py",
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
export interface FindArgs {
  /** Select files whose age is equal to or greater than the specified time. */
  age?: string;
  /** Choose the file property against which we compare age. */
  age_stamp?: "atime" | "ctime" | "mtime";
  /** Algorithm to determine checksum of file. */
  checksum_algorithm?: "md5" | "sha1" | "sha224" | "sha256" | "sha384" | "sha512";
  /** A regular expression or pattern which should be matched against the file content. */
  contains?: string;
  /** Set the maximum number of levels to descend into. */
  depth?: number;
  /** When doing a O(contains) search, determine the encoding of the files to be searched. */
  encoding?: string;
  /** Restrict mode matching to exact matches only, and not as a minimum set of permissions to match. */
  exact_mode?: boolean;
  /** One or more (shell or regex) patterns, which type is controlled by O(use_regex) option. */
  excludes?: string | string[];
  /** Type of file to select. */
  file_type?: "any" | "directory" | "file" | "link";
  /** Set this to V(true) to follow symlinks in path for systems with python 2.6+. */
  follow?: boolean;
  /** Whether to return a checksum of the file. */
  get_checksum?: boolean;
  /** Set this to V(true) to include hidden files, otherwise they will be ignored. */
  hidden?: boolean;
  /** Limit the maximum number of matching paths returned. After finding this many, the find action will stop looking. */
  limit?: number;
  /** Choose objects matching a specified permission. This value is restricted to modes that can be applied using the python C(os.chmod) function. */
  mode?: unknown;
  /** List of paths of directories to search. All paths must be fully qualified. */
  paths: string | string[];
  /** One or more (shell or regex) patterns, which type is controlled by O(use_regex) option. */
  patterns?: string | string[];
  /** When doing a C(contains) search, determines whether the whole file should be read into memory or if the regex should be applied to the file line-by-line. */
  read_whole_file?: boolean;
  /** If target is a directory, recursively descend into the directory looking for files. */
  recurse?: boolean;
  /** Select files whose size is equal to or greater than the specified size. */
  size?: string;
  /** If V(false), the patterns are file globs (shell). */
  use_regex?: boolean;
}

export interface FindReturn {
  /** Number of filesystem objects looked at */
  examined?: number;
  /** All matches found with the specified criteria (see stat module for full output of each dictionary) */
  files?: string | string[];
  /** Number of matches */
  matched?: number;
  /** skipped paths and reasons they were skipped */
  skipped_paths?: Record<string, unknown>;
}
export const find = defineRemoteModule<FindArgs, FindReturn>(spec, meta);
