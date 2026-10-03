import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.gitlab_project
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.gitlab_project",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.gitlab_project",
  moduleFqn: "ansible_collections.community.general.plugins.modules.gitlab_project",
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
    files: ["plugins/module_utils/_gitlab.py", "plugins/module_utils/_version.py", "plugins/modules/gitlab_project.py"],
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
export interface GitlabProjectArgs {
  /** Allow merge when skipped pipelines exist. */
  allow_merge_on_skipped_pipeline?: boolean;
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
  /** Absolute path image to configure avatar. File size should not exceed 200 kb. */
  avatar_path?: string;
  /** Maximum number of seconds a CI job can run. */
  build_timeout?: number;
  /** V(private) means that repository CI/CD is allowed only to project members. */
  builds_access_level?: "private" | "disabled" | "enabled";
  /** The CA certificates bundle to use to verify GitLab server certificate. */
  ca_path?: string;
  /** Custom path to the CI configuration file for this project. */
  ci_config_path?: string;
  /** Project cleanup policy for its container registry. */
  container_expiration_policy?: {
    cadence?: "1d" | "7d" | "14d" | "1month" | "3month";
    enabled?: boolean;
    keep_n?: number;
    name_regex?: string;
    name_regex_keep?: string;
    older_than?: "0d" | "7d" | "14d" | "30d" | "90d";
  };
  /** V(private) means that container registry is allowed only to project members. */
  container_registry_access_level?: "private" | "disabled" | "enabled";
  /** The default branch name for this project. */
  default_branch?: string;
  /** An description for the project. */
  description?: string;
  /** V(private) means that deployment to environment is allowed only to project members. */
  environments_access_level?: "private" | "disabled" | "enabled";
  /** V(private) means that feature rollout is allowed only to project members. */
  feature_flags_access_level?: "private" | "disabled" | "enabled";
  /** V(private) means that repository forks is allowed only to project members. */
  forking_access_level?: "private" | "disabled" | "enabled";
  /** ID or the full path of the group of which this projects belongs to. */
  group?: string;
  /** Git repository which is imported into gitlab. */
  import_url?: string;
  /** V(private) means that configuring infrastructure is allowed only to project members. */
  infrastructure_access_level?: "private" | "disabled" | "enabled";
  /** Initializes the project with a default C(README.md). */
  initialize_with_readme?: boolean;
  /** V(private) means that accessing issues tab is allowed only to project members. */
  issues_access_level?: "private" | "disabled" | "enabled";
  /** Whether you want to create issues or not. */
  issues_enabled?: boolean;
  /** Enable Git large file systems to manages large files such as audio, video, and graphics files. */
  lfs_enabled?: boolean;
  /** What requirements are placed upon merges. */
  merge_method?: "ff" | "merge" | "rebase_merge";
  /** If merge requests can be made or not. */
  merge_requests_enabled?: boolean;
  /** V(private) means that accessing model registry tab is allowed only to project members. */
  model_registry_access_level?: "private" | "disabled" | "enabled";
  /** V(private) means that monitoring health is allowed only to project members. */
  monitor_access_level?: "private" | "disabled" | "enabled";
  /** The name of the project. */
  name: string;
  /** All discussions on a merge request (MR) have to be resolved. */
  only_allow_merge_if_all_discussions_are_resolved?: boolean;
  /** Only allow merges if pipeline succeeded. */
  only_allow_merge_if_pipeline_succeeds?: boolean;
  /** Enable GitLab package repository. */
  packages_enabled?: boolean;
  /** V(private) means that accessing pages tab is allowed only to project members. */
  pages_access_level?: "private" | "disabled" | "enabled";
  /** The path of the project you want to create, this is server_url/O(group)/O(path). */
  path?: string;
  /** V(private) means that accessing release is allowed only to project members. */
  releases_access_level?: "private" | "disabled" | "enabled";
  /** Remove the source branch after merge. */
  remove_source_branch_after_merge?: boolean;
  /** V(private) means that accessing repository is allowed only to project members. */
  repository_access_level?: "private" | "disabled" | "enabled";
  /** V(private) means that accessing security and complicance tab is allowed only to project members. */
  security_and_compliance_access_level?: "private" | "disabled" | "enabled";
  /** Enable Service Desk. */
  service_desk_enabled?: boolean;
  /** Enable shared runners for this project. */
  shared_runners_enabled?: boolean;
  /** If creating snippets should be available or not. */
  snippets_enabled?: boolean;
  /** Squash commits when merging. */
  squash_option?: "never" | "always" | "default_off" | "default_on";
  /** Create or delete project. */
  state?: "present" | "absent";
  /** A topic or list of topics to be assigned to a project. */
  topics?: string | string[];
  /** Used to create a personal project under a user's name. */
  username?: string;
  /** Whether or not to validate SSL certs when supplying a HTTPS endpoint. */
  validate_certs?: boolean;
  /** V(private) Project access must be granted explicitly for each user. */
  visibility?: "private" | "internal" | "public";
  /** If an wiki for this project should be available or not. */
  wiki_enabled?: boolean;
}

export interface GitlabProjectReturn {
  /** The error message returned by the GitLab API. */
  error?: string;
  /** Success or failure message. */
  msg?: string;
  /** API object. */
  project?: Record<string, unknown>;
  /** JSON-parsed response from the server. */
  result?: Record<string, unknown>;
}
export const gitlab_project = defineRemoteModule<GitlabProjectArgs, GitlabProjectReturn>(spec, meta);
