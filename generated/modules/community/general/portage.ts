import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.portage
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.portage",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.portage",
  moduleFqn: "ansible_collections.community.general.plugins.modules.portage",
  sources: [{
    artifact: ansibleCore,
    files: [
      "ansible/module_utils/_internal/__init__.py",
      "ansible/module_utils/_internal/_ansiballz/_loader.py",
      "ansible/module_utils/_internal/_ansiballz/_respawn.py",
      "ansible/module_utils/_internal/_ansiballz/_respawn_wrapper.py",
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
      "ansible/module_utils/common/respawn.py",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/portage.py"] }],
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
export interface PortageArgs {
  /** Set backtrack value (C(--backtrack)). */
  backtrack?: number;
  /** Tells emerge to replace installed packages for which the ebuild dependencies have changed since the packages were built (C(--changed-deps)). */
  changed_deps?: boolean;
  /** Include installed packages where USE flags have changed, except when. */
  changed_use?: boolean;
  /** Consider the entire dependency tree of packages (C(--deep)). */
  deep?: boolean;
  /** Remove packages not needed by explicitly merged packages (C(--depclean)). */
  depclean?: boolean;
  /** Prefer packages specified at C(PORTAGE_BINHOST) in C(make.conf). */
  getbinpkg?: boolean;
  /** Merge only packages specified at C(PORTAGE_BINHOST) in C(make.conf). */
  getbinpkgonly?: boolean;
  /** Specifies the number of packages to build simultaneously. */
  jobs?: number;
  /** Continue as much as possible after an error. */
  keepgoing?: boolean;
  /** Specifies that no new builds should be started if there are other builds running and the load average is at least LOAD. */
  loadavg?: number;
  /** Include installed packages where USE flags have changed (C(--newuse)). */
  newuse?: boolean;
  /** Only merge packages but not their dependencies (C(--nodeps)). */
  nodeps?: boolean;
  /** Do not re-emerge installed packages (C(--noreplace)). */
  noreplace?: boolean;
  /** Do not add the packages to the world file (C(--oneshot)). */
  oneshot?: boolean;
  /** Only merge packages' dependencies but not the packages (C(--onlydeps)). */
  onlydeps?: boolean;
  /** Package atom or set, for example V(sys-apps/foo) or V(>foo-2.13) or V(@world). */
  package?: string | string[];
  /** Run emerge in quiet mode (C(--quiet)). */
  quiet?: boolean;
  /** Redirect all build output to logs alone, and do not display it on stdout (C(--quiet-build)). */
  quietbuild?: boolean;
  /** Suppresses display of the build log on stdout (--quiet-fail). */
  quietfail?: boolean;
  /** If set to V(true), explicitely add the package to the world file. */
  select?: boolean;
  /** State of the package atom. */
  state?: "present" | "installed" | "emerged" | "absent" | "removed" | "unmerged" | "latest";
  /** Sync package repositories first. */
  sync?: "web" | "yes" | "no";
  /** Update packages to the best version available (C(--update)). */
  update?: boolean;
  /** Tries to use the binary package(s) in the locally available packages directory. */
  usepkg?: boolean;
  /** Merge only binaries (no compiling). */
  usepkgonly?: boolean;
  /** Run emerge in verbose mode (C(--verbose)). */
  verbose?: boolean;
  /** Specifies that build time dependencies should be installed. */
  withbdeps?: boolean;
}

export type PortageReturn = Record<string, unknown>;
export const portage = defineRemoteModule<PortageArgs, PortageReturn>(spec, meta);
