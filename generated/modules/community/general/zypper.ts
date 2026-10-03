import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.zypper
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.zypper",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.zypper",
  moduleFqn: "ansible_collections.community.general.plugins.modules.zypper",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/zypper.py"] }],
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
export interface ZypperArgs {
  /** Adds C(--allow_vendor_change) option to I(zypper) dist-upgrade command. */
  allow_vendor_change?: boolean;
  /** Whether to automatically import new repository signing keys. Adds C(--gpg-auto-import-keys) option to I(zypper). */
  auto_import_keys?: boolean;
  /** Adds C(--clean-deps) option to I(zypper) remove command. */
  clean_deps?: boolean;
  /** Whether to disable to GPG signature checking of the package signature being installed. Has an effect only if O(state) is V(present) or V(latest). */
  disable_gpg_check?: boolean;
  /** Corresponds to the C(--no-recommends) option for I(zypper). Default behavior (V(true)) modifies zypper's default behavior; V(false) does install recommended packages. */
  disable_recommends?: boolean;
  /** Add additional options to C(zypper) command. */
  extra_args?: string;
  /** Add additional global target options to C(zypper). */
  extra_args_precommand?: string;
  /** Adds C(--force) option to I(zypper). Allows to downgrade packages and change vendor or architecture. */
  force?: boolean;
  /** Adds C(--force-resolution) option to I(zypper). Allows to (un)install packages with conflicting requirements (resolver chooses a solution). */
  force_resolution?: boolean;
  /** Corresponds to the C(--recommends) and C(--no-recommends) options for I(zypper). */
  install_recommends?: boolean;
  /** Package name V(name) or package specifier or a list of either. */
  name: string | string[];
  /** Adds C(--oldpackage) option to I(zypper). Allows to downgrade packages with less side-effects than force. This is implied as soon as a version is specified as part of the package name. */
  oldpackage?: boolean;
  /** Adds C(--quiet) option to I(zypper) install/update command. */
  quiet?: boolean;
  /** Adds C(--replacefiles) option to I(zypper) install/update command. */
  replacefiles?: boolean;
  /** When set to V(true), provide a simplified error output (parses only the C(<message>) tag text in the XML output). */
  simple_errors?: boolean;
  /** When set to V(true), ignore I(zypper) return code 107 (post install script errors). */
  skip_post_errors?: boolean;
  /** V(present) makes sure the package is installed. */
  state?: "present" | "latest" | "absent" | "dist-upgrade" | "installed" | "removed";
  /** The type of package to be operated on. */
  type?: "package" | "patch" | "pattern" | "product" | "srcpackage" | "application";
  /** Run the equivalent of C(zypper refresh) before the operation. Disabled in check mode. */
  update_cache?: boolean;
}

export type ZypperReturn = Record<string, unknown>;
export const zypper = defineRemoteModule<ZypperArgs, ZypperReturn>(spec, meta);
