import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.deb822_repository
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.deb822_repository",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.deb822_repository",
  moduleFqn: "ansible.modules.deb822_repository",
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
      "ansible/modules/deb822_repository.py",
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
export interface Deb822RepositoryArgs {
  /** Allow downgrading a package that was previously authenticated but is no longer authenticated. */
  allow_downgrade_to_insecure?: boolean;
  /** Allow insecure repositories. */
  allow_insecure?: boolean;
  /** Allow repositories signed with a key using a weak digest algorithm. */
  allow_weak?: boolean;
  /** Architectures to search within repository. */
  architectures?: string | string[];
  /** Controls if APT should try to acquire indexes via a URI constructed from a hashsum of the expected file instead of using the well-known stable filename of the index. */
  by_hash?: boolean;
  /** Controls if APT should consider the machine's time correct and hence perform time related checks, such as verifying that a Release file is not from the future. */
  check_date?: boolean;
  /** Controls if APT should try to detect replay attacks. */
  check_valid_until?: boolean;
  /** Components specify different sections of one distribution version present in a C(Suite). */
  components?: string | string[];
  /** Controls how far from the future a repository may be. */
  date_max_future?: number;
  /** Tells APT whether the source is enabled or not. */
  enabled?: boolean;
  /** Determines the path to the C(InRelease) file, relative to the normal position of an C(InRelease) file. */
  inrelease_path?: string;
  /** Defines which languages information such as translated package descriptions should be downloaded. */
  languages?: string | string[];
  /** The octal mode for newly created files in C(sources.list.d). */
  mode?: unknown;
  /** Name of the repo. Specifically used for C(X-Repolib-Name) and in naming the repository and signing key files. */
  name: string;
  /** Controls if APT should try to use C(PDiffs) to update old indexes instead of downloading the new indexes entirely. */
  pdiffs?: boolean;
  /** Either a URL to a GPG key, absolute path to a keyring file, one or more fingerprints of keys either in the C(trusted.gpg) keyring or in the keyrings in the C(trusted.gpg.d/) directory, or an ASCII armored GPG public key block. */
  signed_by?: string;
  /** A source string state. */
  state?: "absent" | "present";
  /** Suite can specify an exact path in relation to the URI(s) provided, in which case the Components: must be omitted and suite must end with a slash (C(/)). Alternatively, it may take the form of a distribution version (for example a version codename like C(disco) or C(artful)). If the suite does not specify a path, at least one component must be present. */
  suites?: string | string[];
  /** Defines which download targets apt will try to acquire from this source. */
  targets?: string | string[];
  /** Decides if a source is considered trusted or if warnings should be raised before, for example packages are installed from this source. */
  trusted?: boolean;
  /** Which types of packages to look for from a given source; either binary V(deb) or source code V(deb-src). */
  types?: "deb" | "deb-src";
  /** The URIs must specify the base of the Debian distribution archive, from which APT finds the information it needs. */
  uris?: string | string[];
}

export interface Deb822RepositoryReturn {
  /** Path to the repository file */
  dest?: string;
  /** Path to the signed_by key file */
  key_filename?: string;
  /** A source string for the repository */
  repo?: string;
}
export const deb822_repository = defineRemoteModule<Deb822RepositoryArgs, Deb822RepositoryReturn>(spec, meta);
