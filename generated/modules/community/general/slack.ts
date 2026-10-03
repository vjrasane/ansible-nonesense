import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.slack
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.slack",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.slack",
  moduleFqn: "ansible_collections.community.general.plugins.modules.slack",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/slack.py"] }],
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
export interface SlackArgs {
  /** Define a list of attachments. This list mirrors the Slack JSON API. */
  attachments?: Record<string, unknown> | Record<string, unknown>[];
  /** Define a list of blocks. This list mirrors the Slack JSON API. */
  blocks?: Record<string, unknown> | Record<string, unknown>[];
  /** Channel to send the message to. If absent, the message goes to the channel selected for the O(token). */
  channel?: string;
  /** Allow text to use default colors - use the default of V(normal) to not send a custom color bar at the start of the message. */
  color?: string;
  /** When using new format 'Webhook token' and WebAPI tokens: this can be V(slack.com) or V(slack-gov.com) and is ignored otherwise. */
  domain?: string;
  /** If V(true), the module fails if a file is missing or encounters an upload error. */
  fail_on_file_error?: boolean;
  /** A list of files to be uploaded to Slack. */
  files?: Record<string, unknown> | Record<string, unknown>[];
  /** Emoji for the message sender. See Slack documentation for options. */
  icon_emoji?: string;
  /** URL for the message sender's icon. */
  icon_url?: string;
  /** Automatically create links for channels and usernames in O(msg). */
  link_names?: number;
  /** Optional. Message ID to edit, instead of posting a new message. */
  message_id?: string;
  /** Message to send. Note that the module does not handle escaping characters. Plain-text angle brackets and ampersands should be converted to HTML entities (for example C(&) to C(&amp;)) before sending. See Slack's documentation (U(https://api.slack.com/docs/message-formatting)) for more. */
  msg?: string;
  /** Setting for the message parser at Slack. */
  parse?: "full" | "none";
  /** Setting for automatically prepending a V(#) symbol on the passed in O(channel). */
  prepend_hash?: "always" | "never" | "auto";
  /** Used in conjunction with O(thread_id). */
  reply_broadcast?: boolean;
  /** Optional. Timestamp of parent message to thread this message, see U(https://api.slack.com/docs/message-threading). */
  thread_id?: string;
  /** Slack integration token. This authenticates you to the Slack service. Make sure to use the correct type of token, depending on what method you use. */
  token: string;
  /** This is the sender of the message. */
  username?: string;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export type SlackReturn = Record<string, unknown>;
export const slack = defineRemoteModule<SlackArgs, SlackReturn>(spec, meta);
