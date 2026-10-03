import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.jenkins_credential
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.jenkins_credential",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.jenkins_credential",
  moduleFqn: "ansible_collections.community.general.plugins.modules.jenkins_credential",
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
    ],
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_deps.py", "plugins/modules/jenkins_credential.py"] }],
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
export interface JenkinsCredentialArgs {
  /** Link to Github API. */
  api_uri?: string;
  /** GitHub App ID. */
  appID?: string;
  /** Description of the credential or domain. */
  description?: string;
  /** List of hostnames to exclude from scope. */
  exc_hostname?: string | string[];
  /** List of host:port to exclude from scope. */
  exc_hostname_port?: string | string[];
  /** List of URL paths to exclude. */
  exc_path?: string | string[];
  /** File path to secret file (for example O(type=file) or O(type=certificate)). */
  file_path?: string;
  /** Force update if the credential already exists, used with O(state=present). */
  force?: boolean;
  /** The ID of the Jenkins credential or domain. */
  id?: string;
  /** List of hostnames to include in scope. */
  inc_hostname?: string | string[];
  /** List of V(host:port) to include in scope. */
  inc_hostname_port?: string | string[];
  /** List of URL paths to include when matching credentials to domains. */
  inc_path?: string | string[];
  /** Jenkins password for token creation. Required if O(type=token). */
  jenkins_password?: string;
  /** Jenkins user for authentication. */
  jenkins_user: string;
  /** Location of the credential. Either V(system) or V(folder). */
  location?: "system" | "folder";
  /** Name of the token to generate. Required if O(type=token). */
  name?: string;
  /** GitHub App owner. */
  owner?: string;
  /** SSH passphrase if needed. */
  passphrase?: string;
  /** Password for credentials types that require it (for example O(type=user_and_passs) or O(type=certificate)). */
  password?: string;
  /** Path to private key file for PEM certificates or GitHub Apps. */
  private_key_path?: string;
  /** List of schemes (for example V(http) or V(https)) to match. */
  schemes?: string | string[];
  /** Jenkins credential domain scope. */
  scope?: string;
  /** Secret text (used when O(type=text)). */
  secret?: string;
  /** The state of the credential. */
  state?: "present" | "absent";
  /** Jenkins API token. Required unless O(type=token). */
  token?: string;
  /** Type of the credential or action. */
  type?: "user_and_pass" | "file" | "text" | "github_app" | "ssh_key" | "certificate" | "scope" | "token";
  /** Jenkins server URL. */
  url?: string;
  /** Username for credentials types that require it (for example O(type=ssh_key) or O(type=user_and_pass)). */
  username?: string;
}

export interface JenkinsCredentialReturn {
  /** Return more details in case of errors. */
  details?: string;
  /** The generated API token if O(type=token). */
  token?: string;
  /** The generated ID of the token. */
  token_uuid?: string;
}
export const jenkins_credential = defineRemoteModule<JenkinsCredentialArgs, JenkinsCredentialReturn>(spec, meta);
