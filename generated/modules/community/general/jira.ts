import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.jira
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.jira",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.jira",
  moduleFqn: "ansible_collections.community.general.plugins.modules.jira",
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
      "ansible/module_utils/common/dict_transformations.py",
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
  }, {
    artifact: communityGeneral,
    files: [
      "plugins/module_utils/_mh/base.py",
      "plugins/module_utils/_mh/deco.py",
      "plugins/module_utils/_mh/exceptions.py",
      "plugins/module_utils/_mh/mixins/deprecate_attrs.py",
      "plugins/module_utils/_mh/mixins/state.py",
      "plugins/module_utils/_mh/module_helper.py",
      "plugins/module_utils/_module_helper.py",
      "plugins/module_utils/_vardict.py",
      "plugins/modules/jira.py",
    ],
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
    "ansible_collections/community/general/plugins/module_utils/_mh/__init__.py",
    "ansible_collections/community/general/plugins/module_utils/_mh/mixins/__init__.py",
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface JiraArgs {
  /** Sets the account identifier for the assignee when O(operation) is V(create), V(transition), or V(edit). */
  account_id?: string;
  /** Sets the assignee when O(operation) is V(create), V(transition), or V(edit). */
  assignee?: string;
  /** Information about the attachment being uploaded. */
  attachment?: { content?: string; filename: string; mimetype?: string };
  /** Client certificate if required. */
  client_cert?: string;
  /** Client certificate key if required. */
  client_key?: string;
  /** Enable when using Jira Cloud. */
  cloud?: boolean;
  /** The comment text to add. */
  comment?: string;
  /** Used to specify comment comment visibility. */
  comment_visibility?: { type: "group" | "role"; value: string };
  /** A list of field names (for example V(customfield_10050)) that hold user values. */
  custom_user_fields?: string | string[];
  /** The issue description, where appropriate. */
  description?: string;
  /** This is a free-form data structure that can contain arbitrary data. This is passed directly to the JIRA REST API (possibly after merging with other required data, as when passed to create). See examples for more information, and the JIRA REST API for the structure required for various fields. */
  fields?: Record<string, unknown>;
  /** Set issue from which link is created. */
  inwardissue?: string;
  /** An existing issue key to operate on. */
  issue?: string;
  /** The issue type, for issue creation. */
  issuetype?: string;
  /** Query JIRA in JQL Syntax, for example V("CMDB Hostname" = test.example.com). */
  jql?: string;
  /** Set type of link, when action 'link' selected. */
  linktype?: string;
  /** Limit the result of O(operation=search). If no value is specified, the default JIRA limit is used. */
  maxresults?: number;
  /** The operation to perform. */
  operation:
    | "attach"
    | "comment"
    | "create"
    | "edit"
    | "fetch"
    | "link"
    | "search"
    | "transition"
    | "update"
    | "worklog";
  /** Set issue to which link is created. */
  outwardissue?: string;
  /** The password to log-in with. */
  password?: string;
  /** The project for this operation. Required for issue creation. */
  project?: string;
  /** Only used when O(operation) is V(transition), and a bit of a misnomer, it actually refers to the transition name. */
  status?: string;
  /** Only used when O(operation) is V(transition), and refers to the transition ID. */
  status_id?: string;
  /** The issue summary, where appropriate. */
  summary?: string;
  /** Set timeout, in seconds, on requests to JIRA API. */
  timeout?: number;
  /** The personal access token to log-in with. */
  token?: string;
  /** Base URI for the JIRA instance. */
  uri: string;
  /** The username to log-in with. */
  username?: string;
  /** Require valid SSL certificates (set to V(false) if you would like to use self-signed certificates). */
  validate_certs?: boolean;
}

export type JiraReturn = Record<string, unknown>;
export const jira = defineRemoteModule<JiraArgs, JiraReturn>(spec, meta);
