import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.composer
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.composer",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.composer",
  moduleFqn: "ansible_collections.community.general.plugins.modules.composer",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/composer.py"] }],
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
export interface ComposerArgs {
  /** Uses APCu to cache found/not-found classes. */
  apcu_autoloader?: boolean;
  /** Composer arguments like required package, version and so on. */
  arguments?: string;
  /** Autoload classes from classmap only. */
  classmap_authoritative?: boolean;
  /** Composer command like V(install), V(update) and so on. */
  command?: string;
  /** Path to composer executable on the remote host, if composer is not in E(PATH) or a custom composer is needed. */
  composer_executable?: string;
  /** Path to PHP executable on the remote host, if PHP is not in E(PATH). */
  executable?: string;
  /** When O(command) is V(create-project), the module checks whether a V(composer.json) already exists in O(working_dir) and skips the command if it does, making the task idempotent. */
  force?: boolean;
  /** Runs the specified command globally. */
  global_command?: boolean;
  /** Ignore C(php), C(hhvm), C(lib-*) and C(ext-*) requirements and force the installation even if the local machine does not fulfill these. */
  ignore_platform_reqs?: boolean;
  /** Disables installation of require-dev packages (see C(--no-dev)). */
  no_dev?: boolean;
  /** Disables all plugins (see C(--no-plugins)). */
  no_plugins?: boolean;
  /** Skips the execution of all scripts defined in composer.json (see C(--no-scripts)). */
  no_scripts?: boolean;
  /** Optimize autoloader during autoloader dump (see C(--optimize-autoloader)). */
  optimize_autoloader?: boolean;
  /** Forces installation from package dist even for dev versions (see C(--prefer-dist)). */
  prefer_dist?: boolean;
  /** Forces installation from package sources when possible (see C(--prefer-source)). */
  prefer_source?: boolean;
  /** Directory of your project (see C(--working-dir)). This is required when the command is not run globally. */
  working_dir?: string;
}

export type ComposerReturn = Record<string, unknown>;
export const composer = defineRemoteModule<ComposerArgs, ComposerReturn>(spec, meta);
