import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.jenkins_plugin
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.jenkins_plugin",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.jenkins_plugin",
  moduleFqn: "ansible_collections.community.general.plugins.modules.jenkins_plugin",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_jenkins.py", "plugins/modules/jenkins_plugin.py"] }],
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
export interface JenkinsPluginArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** PEM formatted certificate chain file to be used for SSL client authentication. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. */
  client_key?: string;
  /** If V(yes) do not get a cached copy. */
  force?: boolean;
  /** Credentials specified with O(url_username) and O(url_password) should be passed in HTTP Header. */
  force_basic_auth?: boolean;
  /** GID or name of the Jenkins group on the OS. */
  group?: string;
  /** Header to identify as, generally appears in web server logs. */
  http_agent?: string;
  /** Home directory of the Jenkins user. */
  jenkins_home?: string;
  /** Path inside the O(updates_url) to get latest plugins from. */
  latest_plugins_url_segments?: string | string[];
  /** File mode applied on versioned plugins. */
  mode?: unknown;
  /** Unique plugin ID obtained from L(Jenkins Plugin Index, https://plugins.jenkins.io). See the notes for more information. */
  name: string;
  /** UID or name of the Jenkins user on the OS. */
  owner?: string;
  /** A list of URL segment(s) to retrieve the plugin versions JSON file from. */
  plugin_versions_url_segment?: string | string[];
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** Desired plugin state. */
  state?: "absent" | "present" | "pinned" | "unpinned" | "enabled" | "disabled" | "latest";
  /** Server connection timeout in secs. */
  timeout?: number;
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
  /** A list of URL segment(s) to retrieve the update center JSON file from. */
  update_json_url_segment?: string | string[];
  /** Number of seconds after which a new copy of the C(update-center.json) file is downloaded. This is used to avoid the need to download the plugin to calculate its checksum when O(state=latest) is specified. */
  updates_expiration?: number;
  /** A list of base URL(s) to retrieve C(update-center.json), and direct plugin files from. */
  updates_url?: string | string[];
  /** If using a custom O(updates_url), set this as the password of the user with access to the URL. */
  updates_url_password?: string;
  /** If using a custom O(updates_url), set this as the username of the user with access to the URL. */
  updates_url_username?: string;
  /** URL of the Jenkins server. */
  url?: string;
  /** The password for use in HTTP basic authentication. */
  url_password?: string;
  /** The username for use in HTTP basic authentication. */
  url_username?: string;
  /** Use GSSAPI to perform the authentication, typically this is for Kerberos or Kerberos through Negotiate authentication. */
  use_gssapi?: boolean;
  /** If V(no), it will not use a proxy, even if one is defined in an environment variable on the target hosts. */
  use_proxy?: boolean;
  /** If V(no), SSL certificates will not be validated. */
  validate_certs?: boolean;
  /** Plugin version number. */
  version?: string;
  /** Path inside the O(updates_url) to get specific version of plugins from. */
  versioned_plugins_url_segments?: string | string[];
  /** Defines whether to install plugin dependencies. */
  with_dependencies?: boolean;
}

export interface JenkinsPluginReturn {
  /** Unique plugin ID based on plugin name. */
  plugin?: string;
  /** State of the target, after execution. */
  state?: string;
}
export const jenkins_plugin = defineRemoteModule<JenkinsPluginArgs, JenkinsPluginReturn>(spec, meta);
