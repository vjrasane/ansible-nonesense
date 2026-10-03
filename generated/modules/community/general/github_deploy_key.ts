import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.github_deploy_key
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.github_deploy_key",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.github_deploy_key",
  moduleFqn: "ansible_collections.community.general.plugins.modules.github_deploy_key",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/github_deploy_key.py"] }],
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
export interface GithubDeployKeyArgs {
  /** If V(true), forcefully adds the deploy key by deleting any existing deploy key with the same public key or title. */
  force?: boolean;
  /** The base URL of the GitHub API. */
  github_url?: string;
  /** The SSH public key to add to the repository as a deploy key. */
  key: string;
  /** The name for the deploy key. */
  name: string;
  /** The 6 digit One Time Password for 2-Factor Authentication. Required together with O(username) and O(password). */
  otp?: number;
  /** The name of the individual account or organization that owns the GitHub repository. */
  owner: string;
  /** The password to authenticate with. Alternatively, a personal access token can be used instead of O(username) and O(password) combination. */
  password?: string;
  /** If V(true), the deploy key is only able to read repository contents. Otherwise, the deploy key is able to read and write. */
  read_only?: boolean;
  /** The name of the GitHub repository. */
  repo: string;
  /** The state of the deploy key. */
  state?: "present" | "absent";
  /** The OAuth2 token or personal access token to authenticate with. Mutually exclusive with O(password). */
  token?: string;
  /** The username to authenticate with. Should not be set when using personal access token. */
  username?: string;
}

export interface GithubDeployKeyReturn {
  /** The error message returned by the GitHub API. */
  error?: string;
  /** The HTTP status code returned by the GitHub API. */
  http_status_code?: number;
  /** The key identifier assigned by GitHub for the deploy key. */
  id?: number;
  /** The status message describing what occurred. */
  msg?: string;
}
export const github_deploy_key = defineRemoteModule<GithubDeployKeyArgs, GithubDeployKeyReturn>(spec, meta);
