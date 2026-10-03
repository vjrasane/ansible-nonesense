import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.keycloak_user
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.keycloak_user",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.keycloak_user",
  moduleFqn: "ansible_collections.community.general.plugins.modules.keycloak_user",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_keycloak.py", "plugins/modules/keycloak_user.py"] }],
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
export interface KeycloakUserArgs {
  /** List user access. */
  access?: Record<string, unknown>;
  /** List of user attributes. */
  attributes?: Record<string, unknown> | Record<string, unknown>[];
  /** OpenID Connect C(client_id) to authenticate to the API with. */
  auth_client_id?: string;
  /** Client Secret to use in conjunction with O(auth_client_id) (if required). */
  auth_client_secret?: string;
  /** URL to the Keycloak instance. */
  auth_keycloak_url: string;
  /** Password to authenticate for API access with. */
  auth_password?: string;
  /** Keycloak realm name to authenticate to for API access. */
  auth_realm?: string;
  /** Username to authenticate for API access with. */
  auth_username?: string;
  /** Client Authenticator Type. */
  client_consents?: Record<string, unknown> | Record<string, unknown>[];
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** User credentials. */
  credentials?: Record<string, unknown> | Record<string, unknown>[];
  /** List user Credential Type. */
  disableable_credential_types?: string | string[];
  /** User email. */
  email?: string;
  /** Set or reset the C(emailVerified) flag of the user. */
  email_verified?: boolean;
  /** The O(email_verified) option used to have a default value. This caused problems when the user expects different behavior from keycloak by default. */
  email_verified_behavior?: "compatibility" | "no_defaults";
  /** Enabled user. */
  enabled?: boolean;
  /** List of IDPs of user. */
  federated_identities?: string | string[];
  /** Federation Link. */
  federation_link?: string;
  /** The user's first name. */
  first_name?: string;
  /** If V(true), allows to remove user and recreate it. */
  force?: boolean;
  /** List of groups for the user. */
  groups?: Record<string, unknown> | Record<string, unknown>[];
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** ID of the user on the Keycloak server if known. */
  id?: string;
  /** The user's last name. */
  last_name?: string;
  /** User origin. */
  origin?: string;
  /** The name of the realm in which is the client. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Set or reset a user's required actions. */
  required_actions?: string | string[];
  /** User self administration. */
  self?: string;
  /** Description of the client Application. */
  service_account_client_id?: string;
  /** Control whether the user should exists or not. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Username for the user. */
  username: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakUserReturn {
  /** Representation of the user after module execution. */
  end_state?: Record<string, unknown>;
  /** Representation of the existing user. */
  existing?: Record<string, unknown>;
  /** Representation of the proposed user. */
  proposed?: Record<string, unknown>;
  /** Indicates whether a user was created. */
  user_created?: boolean;
}
export const keycloak_user = defineRemoteModule<KeycloakUserArgs, KeycloakUserReturn>(spec, meta);
