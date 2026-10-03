import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.bundler
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.bundler",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.bundler",
  moduleFqn: "ansible_collections.community.general.plugins.modules.bundler",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/bundler.py"] }],
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
export interface BundlerArgs {
  /** Only applies if O(state=present). Specifies the directory to install any gem bins files to. When executed the bin files run within the context of the Gemfile and fail if any required gem dependencies are not installed. If O(chdir) is set then this path is relative to O(chdir). */
  binstub_directory?: string;
  /** The directory to execute the bundler commands from. This directory needs to contain a valid Gemfile or .bundle/ directory. */
  chdir?: string;
  /** Only applies if O(state=present). If set removes any gems on the target host that are not in the gemfile. */
  clean?: boolean;
  /** Only applies if O(state=present). If set it installs gems in C(./vendor/bundle) instead of the default location. Requires a C(Gemfile.lock) file to have been created prior. */
  deployment_mode?: boolean;
  /** A list of Gemfile groups to exclude during operations. This only applies when O(state=present). Bundler considers this a 'remembered' property for the Gemfile and automatically excludes groups in future operations even if O(exclude_groups) is not set. */
  exclude_groups?: string | string[];
  /** The path to the bundler executable. */
  executable?: string;
  /** A space separated string of additional commands that can be applied to the Bundler command. Refer to the Bundler documentation for more information. */
  extra_args?: string;
  /** Only applies if O(state=present). Specifies the directory to install the gems into. If O(chdir) is set then this path is relative to O(chdir). */
  gem_path?: string;
  /** Only applies if O(state=present). The path to the gemfile to use to install gems. */
  gemfile?: string;
  /** If set only installs gems from the cache on the target host. */
  local?: boolean;
  /** The desired state of the Gem bundle. V(latest) updates gems to the most recent, acceptable version. */
  state?: "present" | "latest";
  /** Only applies if O(state=present). Installs gems in the local user's cache or for all users. */
  user_install?: boolean;
}

export type BundlerReturn = Record<string, unknown>;
export const bundler = defineRemoteModule<BundlerArgs, BundlerReturn>(spec, meta);
