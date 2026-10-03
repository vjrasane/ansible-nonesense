import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.apt_repository
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.apt_repository",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.apt_repository",
  moduleFqn: "ansible.modules.apt_repository",
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
      "ansible/module_utils/urls.py",
      "ansible/modules/apt_repository.py",
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
export interface AptRepositoryArgs {
  /** Override the distribution codename to use for PPA repositories. Should usually only be set when working with a PPA on a non-Ubuntu target (for example, Debian or Mint). */
  codename?: string;
  /** Sets the name of the source list file in C(sources.list.d). Defaults to a file name based on the repository source url. The C(.list) extension will be automatically added. */
  filename?: string;
  /** Whether to automatically try to install the Python apt library or not, if it is not already installed. Without this library, the module does not work. */
  install_python_apt?: boolean;
  /** The octal mode for newly created files in C(sources.list.d). */
  mode?: unknown;
  /** A source string for the repository. */
  repo: string;
  /** A source string state. */
  state?: "absent" | "present";
  /** Run the equivalent of C(apt-get update) when a change occurs. Cache updates are run after making changes. */
  update_cache?: boolean;
  /** Amount of retries if the cache update fails. Also see O(update_cache_retry_max_delay). */
  update_cache_retries?: number;
  /** Use an exponential backoff delay for each retry (see O(update_cache_retries)) up to this max delay in seconds. */
  update_cache_retry_max_delay?: number;
  /** If V(false), SSL certificates for the target repo will not be validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export interface AptRepositoryReturn {
  /** A source string for the repository */
  repo?: string;
  /** List of sources added */
  sources_added?: string | string[];
  /** List of sources removed */
  sources_removed?: string | string[];
}
export const apt_repository = defineRemoteModule<AptRepositoryArgs, AptRepositoryReturn>(spec, meta);
