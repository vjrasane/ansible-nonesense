import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.gitlab_hook
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.gitlab_hook",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.gitlab_hook",
  moduleFqn: "ansible_collections.community.general.plugins.modules.gitlab_hook",
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
      "ansible/module_utils/api.py",
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
      "ansible/module_utils/compat/version.py",
      "ansible/module_utils/datatag.py",
      "ansible/module_utils/distro/__init__.py",
      "ansible/module_utils/distro/_distro.py",
      "ansible/module_utils/errors.py",
      "ansible/module_utils/parsing/convert_bool.py",
      "ansible/module_utils/six/__init__.py",
    ],
  }, {
    artifact: communityGeneral,
    files: ["plugins/module_utils/_gitlab.py", "plugins/module_utils/_version.py", "plugins/modules/gitlab_hook.py"],
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
export interface GitlabHookArgs {
  /** GitLab CI job token for logging in. */
  api_job_token?: string;
  /** GitLab OAuth token for logging in. */
  api_oauth_token?: string;
  /** The password to use for authentication against the API. */
  api_password?: string;
  /** GitLab access token with API permissions. */
  api_token?: string;
  /** The resolvable endpoint for the API. */
  api_url?: string;
  /** The username to use for authentication against the API. */
  api_username?: string;
  /** How O(push_events_branch_filter) is used to filter push events by branch. */
  branch_filter_strategy?: "wildcard" | "regex" | "all_branches";
  /** The CA certificates bundle to use to verify GitLab server certificate. */
  ca_path?: string;
  /** Custom webhook template for the project webhook. */
  custom_webhook_template?: string;
  /** The URL that you want GitLab to post to, this is used as the primary key for updates and deletion. */
  hook_url: string;
  /** Whether GitLab performs SSL verification when triggering the hook. */
  hook_validate_certs?: boolean;
  /** Trigger hook on issues events. */
  issues_events?: boolean;
  /** Trigger hook on job events. */
  job_events?: boolean;
  /** Trigger hook on merge requests events. */
  merge_requests_events?: boolean;
  /** Trigger hook on note events or when someone adds a comment. */
  note_events?: boolean;
  /** Trigger hook on pipeline events. */
  pipeline_events?: boolean;
  /** ID or Full path of the project in the form of group/name. */
  project: string;
  /** Trigger hook on push events. */
  push_events?: boolean;
  /** Branch name, wildcard, or regular expression to trigger hook on push events. */
  push_events_branch_filter?: string;
  /** Trigger hook on release events. */
  releases_events?: boolean;
  /** When V(present) the hook is updated to match the input or created if it does not exist. */
  state?: "present" | "absent";
  /** Trigger hook on tag push events. */
  tag_push_events?: boolean;
  /** Secret token to validate hook messages at the receiver. */
  token?: string;
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
  /** Trigger hook on wiki events. */
  wiki_page_events?: boolean;
}

export interface GitlabHookReturn {
  /** The error message returned by the GitLab API. */
  error?: string;
  /** API object. */
  hook?: Record<string, unknown>;
  /** Success or failure message. */
  msg?: string;
  /** JSON parsed response from the server. */
  result?: Record<string, unknown>;
}
export const gitlab_hook = defineRemoteModule<GitlabHookArgs, GitlabHookReturn>(spec, meta);
