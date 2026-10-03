import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.mail
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.mail",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.mail",
  moduleFqn: "ansible_collections.community.general.plugins.modules.mail",
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
    ],
  }, { artifact: communityGeneral, files: ["plugins/modules/mail.py"] }],
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
export interface MailArgs {
  /** A list of pathnames of files to attach to the message. */
  attach?: string | string[];
  /** The email-address(es) the mail is being 'blind' copied to. */
  bcc?: string | string[];
  /** The body of the email being sent. */
  body?: string;
  /** The email-address(es) the mail is being copied to. */
  cc?: string | string[];
  /** The character set of email being sent. */
  charset?: string;
  /** Allows for manual specification of host for EHLO. */
  ehlohost?: string;
  /** A list of headers which should be added to the message. */
  headers?: string | string[];
  /** The mail server. */
  host?: string;
  /** A list of images to embed inline in the message body via C(Content-ID). */
  inline?: Record<string, unknown> | Record<string, unknown>[];
  /** The domain name to use for the L(Message-ID header, https://en.wikipedia.org/wiki/Message-ID). */
  message_id_domain?: string;
  /** If SMTP requires password. */
  password?: string;
  /** The mail server port. */
  port?: number;
  /** If V(always), the connection only sends email if the connection is Encrypted. If the server does not accept the encrypted connection it fails. */
  secure?: "always" | "never" | "starttls" | "try";
  /** The email-address the mail is sent from. May contain address and phrase. */
  sender?: string;
  /** The subject of the email being sent. */
  subject: string;
  /** The minor mime type, can be either V(plain) or V(html). */
  subtype?: "html" | "plain";
  /** Sets the timeout in seconds for connection attempts. */
  timeout?: number;
  /** The email-address(es) the mail is being sent to. */
  to?: string | string[];
  /** If SMTP requires username. */
  username?: string;
}

export type MailReturn = Record<string, unknown>;
export const mail = defineRemoteModule<MailArgs, MailReturn>(spec, meta);
