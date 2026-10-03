import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.dnf5
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.dnf5",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.dnf5",
  moduleFqn: "ansible.modules.dnf5",
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
      "ansible/module_utils/yumdnf.py",
      "ansible/modules/dnf5.py",
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
export interface Dnf5Args {
  /** Specify if the named package and version is allowed to downgrade a maybe already installed higher version of that package. Note that setting O(allow_downgrade=true) can make this module behave in a non-idempotent way. The task could end up with a set of packages that does not match the complete list of specified packages to install (because dependencies between the downgraded package and others can cause changes to the packages which were in the earlier transaction). */
  allow_downgrade?: boolean;
  /** If V(true) it allows  erasing  of  installed  packages to resolve dependencies. */
  allowerasing?: boolean;
  /** Automatically install dependencies required to run this module. */
  auto_install_module_deps?: boolean;
  /** If V(true), removes all "leaf" packages from the system that were originally installed as dependencies of user-installed packages but which are no longer required by any such package. Should be used alone or when O(state=absent). */
  autoremove?: boolean;
  /** When set to V(true), either use a package with the highest version available or fail. */
  best?: boolean;
  /** If set to V(true), and O(state=latest) then only installs updates that have been marked bugfix related. */
  bugfix?: boolean;
  /** Tells dnf to run entirely from system cache; does not download or update metadata. */
  cacheonly?: boolean;
  /** The remote dnf configuration file to use for the transaction. */
  conf_file?: string;
  /** Disable the excludes defined in DNF config files. */
  disable_excludes?: string;
  /** Whether to disable the GPG checking of signatures of packages being installed. Has an effect only if O(state) is V(present) or V(latest). */
  disable_gpg_check?: boolean;
  /** I(Plugin) name to disable for the install/update operation. The disabled plugins will not persist beyond the transaction. */
  disable_plugin?: string | string[];
  /** I(Repoid) of repositories to disable for the install/update operation. These repos will not persist beyond the transaction. When specifying multiple repos, separate them with a C(,). */
  disablerepo?: string | string[];
  /** Specifies an alternate directory to store packages. */
  download_dir?: string;
  /** Only download the packages, do not install them. */
  download_only?: boolean;
  /** I(Plugin) name to enable for the install/update operation. The enabled plugin will not persist beyond the transaction. */
  enable_plugin?: string | string[];
  /** I(Repoid) of repositories to enable for the install/update operation. These repos will not persist beyond the transaction. When specifying multiple repos, separate them with a C(,). */
  enablerepo?: string | string[];
  /** Package name(s) to exclude when O(state=present) or O(state=latest). This can be a list or a comma separated string. */
  exclude?: string | string[];
  /** This is effectively a no-op in DNF as it is not needed with DNF. */
  install_repoquery?: boolean;
  /** Will also install all packages linked by a weak dependency relation. */
  install_weak_deps?: boolean;
  /** Specifies an alternative installroot, relative to which all packages will be installed. */
  installroot?: string;
  /** Various (non-idempotent) commands for usage with C(/usr/bin/ansible) and I(not) playbooks. Use M(ansible.builtin.package_facts) instead of the O(list) argument as a best practice. */
  list?: string;
  /** This is currently a no-op as dnf5 does not provide an option to configure it. */
  lock_timeout?: number;
  /** A package name or package specifier with version, like C(name-1.0). When using O(state=latest), this can be C(*) which means run: C(dnf -y update). You can also pass a url or a local path to an rpm file. To operate on several packages this can accept a comma separated string of packages or a list of packages. */
  name?: string | string[];
  /** This is the opposite of the O(best) option kept for backwards compatibility. */
  nobest?: boolean;
  /** Specifies an alternative release from which all packages will be installed. */
  releasever?: string;
  /** If set to V(true), and O(state=latest) then only installs updates that have been marked security related. */
  security?: boolean;
  /** Skip all unavailable packages or packages with broken dependencies without raising an error. Equivalent to passing the C(--skip-broken) option. */
  skip_broken?: boolean;
  /** Disables SSL validation of the repository server for this transaction. */
  sslverify?: boolean;
  /** Whether to install (V(present), V(latest)), or remove (V(absent)) a package. */
  state?: "absent" | "present" | "installed" | "removed" | "latest";
  /** Force dnf to check if cache is out of date and redownload if needed. Has an effect only if O(state=present) or O(state=latest). */
  update_cache?: boolean;
  /** When using latest, only update installed packages. Do not install packages. */
  update_only?: boolean;
  /** This is effectively a no-op in the dnf5 module as dnf5 itself handles downloading a https url as the source of the rpm, but is an accepted parameter for feature parity/compatibility with the M(ansible.builtin.dnf) module. */
  validate_certs?: boolean;
}

export interface Dnf5Return {
  /** A list of the dnf transaction failures */
  failures?: string | string[];
  /** Additional information about the result */
  msg?: string;
  /** For compatibility, 0 for success, 1 for failure */
  rc?: number;
  /** A list of the dnf transaction results */
  results?: string | string[];
}
export const dnf5 = defineRemoteModule<Dnf5Args, Dnf5Return>(spec, meta);
