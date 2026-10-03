import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.gem
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.gem",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.gem",
  moduleFqn: "ansible_collections.community.general.plugins.modules.gem",
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
  }, {
    artifact: communityGeneral,
    files: ["plugins/module_utils/_cmd_runner.py", "plugins/module_utils/_cmd_runner_fmt.py", "plugins/modules/gem.py"],
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
export interface GemArgs {
  /** Install executables into a specific directory. */
  bindir?: string;
  /** Allow adding build flags for gem compilation. */
  build_flags?: string;
  /** Rewrite the shebang line on installed scripts to use /usr/bin/env. */
  env_shebang?: boolean;
  /** Override the path to the gem executable. */
  executable?: string;
  /** Force gem to (un-)install, bypassing dependency checks. */
  force?: boolean;
  /** The path to a local gem used as installation source. */
  gem_source?: string;
  /** Whether to include dependencies or not. */
  include_dependencies?: boolean;
  /** Install with or without docs. */
  include_doc?: boolean;
  /** Install the gems into a specific directory. These gems are independent from the global installed ones. Specifying this requires user_install to be false. */
  install_dir?: string;
  /** The name of the gem to be managed. */
  name: string;
  /** Avoid loading any C(.gemrc) file. Ignored for RubyGems prior to 2.5.2. */
  norc?: boolean;
  /** Resolve the user gem installation directory via C(gem environment) and pass it explicitly as C(--install-dir) to both C(gem install) and C(gem uninstall), instead of using C(--user-install). */
  override_platform_install_dir?: boolean;
  /** Allow installation of pre-release versions of the gem. */
  pre_release?: boolean;
  /** The repository from which the gem is installed. */
  repository?: string;
  /** The desired state of the gem. V(latest) ensures that the latest version is installed. */
  state?: "present" | "absent" | "latest";
  /** Install gem in user's local gems cache or for all users. */
  user_install?: boolean;
  /** Version of the gem to be installed/removed. */
  version?: string;
}

export type GemReturn = Record<string, unknown>;
export const gem = defineRemoteModule<GemArgs, GemReturn>(spec, meta);
