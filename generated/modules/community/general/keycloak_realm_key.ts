import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.keycloak_realm_key
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.keycloak_realm_key",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.keycloak_realm_key",
  moduleFqn: "ansible_collections.community.general.plugins.modules.keycloak_realm_key",
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
  }, {
    artifact: communityGeneral,
    files: ["plugins/module_utils/_keycloak.py", "plugins/modules/keycloak_realm_key.py"],
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
export interface KeycloakRealmKeyArgs {
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
  /** Dict specifying the key and its properties. */
  config?: {
    active?: boolean;
    algorithm?:
      | "RS256"
      | "RS384"
      | "RS512"
      | "PS256"
      | "PS384"
      | "PS512"
      | "RSA1_5"
      | "RSA-OAEP"
      | "RSA-OAEP-256"
      | "HS256"
      | "HS384"
      | "HS512"
      | "ES256"
      | "ES384"
      | "ES512"
      | "AES"
      | "ECDH_ES"
      | "ECDH_ES_A128KW"
      | "ECDH_ES_A192KW"
      | "ECDH_ES_A256KW"
      | "Ed25519"
      | "Ed448";
    certificate?: string;
    elliptic_curve?: "P-256" | "P-384" | "P-521" | "Ed25519" | "Ed448";
    enabled?: boolean;
    key_alias?: string;
    key_password?: string;
    key_size?: number;
    keystore?: string;
    keystore_password?: string;
    priority: number;
    private_key?: string;
    secret_size?: number;
  };
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Enforce the state of the private key and certificate. This is not automatically the case as this module is unable to determine the current state of the private key and thus cannot trigger an update based on an actual divergence. That said, a private key update may happen even if force is false as a side-effect of other changes. */
  force?: boolean;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** Name of the realm key to create. */
  name: string;
  /** The parent_id of the realm key. In practice the name of the realm. */
  parent_id: string;
  /** The name of the "provider ID" for the key. */
  provider_id?:
    | "rsa"
    | "rsa-enc"
    | "java-keystore"
    | "rsa-generated"
    | "rsa-enc-generated"
    | "hmac-generated"
    | "aes-generated"
    | "ecdsa-generated"
    | "ecdh-generated"
    | "eddsa-generated";
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** State of the keycloak realm key. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Controls when passwords are sent to Keycloak for V(java-keystore) provider. */
  update_password?: "always" | "on_create";
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakRealmKeyReturn {
  /** Representation of the keycloak_realm_key after module execution. */
  end_state?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
}
export const keycloak_realm_key = defineRemoteModule<KeycloakRealmKeyArgs, KeycloakRealmKeyReturn>(spec, meta);
