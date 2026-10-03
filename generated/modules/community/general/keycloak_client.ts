import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.keycloak_client
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.keycloak_client",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.keycloak_client",
  moduleFqn: "ansible_collections.community.general.plugins.modules.keycloak_client",
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
    files: [
      "plugins/module_utils/_keycloak.py",
      "plugins/module_utils/_keycloak_utils.py",
      "plugins/modules/keycloak_client.py",
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
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface KeycloakClientArgs {
  /** URL to the admin interface of the client. This is C(adminUrl) in the Keycloak REST API. */
  admin_url?: string;
  /** Whether or not to display this client in account console, even if the user does not have an active session. */
  always_display_in_console?: boolean;
  /** A dict of further attributes for this client. This can contain various configuration settings; an example is given in the examples section. While an exhaustive list of permissible options is not available; possible options as of Keycloak 3.4 are listed below. The Keycloak API does not validate whether a given option is appropriate for the protocol used; if specified anyway, Keycloak does not use it. */
  attributes?: {
    "jwks.url"?: string;
    "jwt.credential.certificate"?: string;
    "request.object.signature.alg"?: string;
    saml_assertion_consumer_url_post?: string;
    saml_assertion_consumer_url_redirect?: string;
    saml_force_name_id_format?: string;
    saml_name_id_format?: string;
    saml_signature_canonicalization_method?: string;
    saml_single_logout_service_url_post?: string;
    saml_single_logout_service_url_redirect?: string;
    "saml.authnstatement"?: string;
    "saml.client.signature"?: string;
    "saml.encrypt"?: string;
    "saml.force.post.binding"?: string;
    "saml.onetimeuse.condition"?: string;
    "saml.server.signature"?: string;
    "saml.server.signature.keyinfo.ext"?: string;
    "saml.signature.algorithm"?: string;
    "saml.signing.certificate"?: string;
    "saml.signing.private.key"?: string;
    "use.jwks.url"?: string;
    "user.info.response.signature.alg"?: string;
    "x509.allow.regex.pattern.comparison"?: boolean;
    "x509.subjectdn"?: string;
  };
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
  /** Override realm authentication flow bindings. */
  authentication_flow_binding_overrides?: {
    browser?: string;
    browser_name?: string;
    direct_grant?: string;
    direct_grant_name?: string;
  };
  /** Are authorization services enabled for this client or not (OpenID connect). This is C(authorizationServicesEnabled) in the Keycloak REST API. */
  authorization_services_enabled?: boolean;
  /** A data structure defining the authorization settings for this client. For reference, please see the Keycloak API docs at U(https://www.keycloak.org/docs-api/8.0/rest-api/index.html#_resourceserverrepresentation). This is C(authorizationSettings) in the Keycloak REST API. */
  authorization_settings?: Record<string, unknown>;
  /** URL that will cause the client to log itself out when a logout request is sent to this realm. */
  backchannel_logout_url?: string;
  /** Default URL to use when the auth server needs to redirect or link back to the client This is C(baseUrl) in the Keycloak REST API. */
  base_url?: string;
  /** The access type of this client is bearer-only. This is C(bearerOnly) in the Keycloak REST API. */
  bearer_only?: boolean;
  /** How do clients authenticate with the auth server? Either V(client-secret), V(client-jwt), or V(client-x509) can be chosen. When using V(client-secret), the module parameter O(secret) can set it, for V(client-jwt), you can use the keys C(use.jwks.url), C(jwks.url), and C(jwt.credential.certificate) in the O(attributes) module parameter to configure its behavior. For V(client-x509) you can use the keys C(x509.allow.regex.pattern.comparison) and C(x509.subjectdn) in the O(attributes) module parameter to configure which certificate(s) to accept. */
  client_authenticator_type?: "client-secret" | "client-jwt" | "client-x509";
  /** Client ID of client to be worked on. This is usually an alphanumeric name chosen by you. Either this or O(id) is required. If you specify both, O(id) takes precedence. This is C(clientId) in the Keycloak REST API. */
  client_id?: string;
  /** Determine how O(default_client_scopes) and O(optional_client_scopes) behave when updating an existing client. */
  client_scopes_behavior?: "ignore" | "patch" | "idempotent";
  /** Client template to use for this client. If it does not exist this field is silently dropped. This is C(clientTemplate) in the Keycloak REST API. */
  client_template?: string;
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** If enabled, users have to consent to client access. This is C(consentRequired) in the Keycloak REST API. */
  consent_required?: boolean;
  /** List of default client scopes. */
  default_client_scopes?: string | string[];
  /** List of default roles for this client. If the client roles referenced do not exist yet, they are created. This is C(defaultRoles) in the Keycloak REST API. */
  default_roles?: string | string[];
  /** Description of the client in Keycloak. */
  description?: string;
  /** Are direct access grants enabled for this client or not (OpenID connect). This is C(directAccessGrantsEnabled) in the Keycloak REST API. */
  direct_access_grants_enabled?: boolean;
  /** Is this client enabled or not? */
  enabled?: boolean;
  /** Is frontchannel logout enabled for this client or not. This is C(frontchannelLogout) in the Keycloak REST API. */
  frontchannel_logout?: boolean;
  /** Is the "Full Scope Allowed" feature set for this client or not. This is C(fullScopeAllowed) in the Keycloak REST API. */
  full_scope_allowed?: boolean;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** ID of client to be worked on. This is usually an UUID. Either this or O(client_id) is required. If you specify both, this takes precedence. */
  id?: string;
  /** Enable implicit flow for this client or not (OpenID connect). This is C(implicitFlowEnabled) in the Keycloak REST API. */
  implicit_flow_enabled?: boolean;
  /** Name of the client (this is not the same as O(client_id)). */
  name?: string;
  /** Cluster node re-registration timeout for this client. This is C(nodeReRegistrationTimeout) in the Keycloak REST API. */
  node_re_registration_timeout?: number;
  /** Revoke any tokens issued before this date for this client (this is a UNIX timestamp). This is C(notBefore) in the Keycloak REST API. */
  not_before?: number;
  /** List of optional client scopes. */
  optional_client_scopes?: string | string[];
  /** Type of client. */
  protocol?: "openid-connect" | "saml" | "docker-v2";
  /** A list of dicts defining protocol mappers for this client. This is C(protocolMappers) in the Keycloak REST API. */
  protocol_mappers?: Record<string, unknown> | Record<string, unknown>[];
  /** Is the access type for this client public or not. This is C(publicClient) in the Keycloak REST API. */
  public_client?: boolean;
  /** The realm to create the client in. */
  realm?: string;
  /** Acceptable redirect URIs for this client. This is C(redirectUris) in the Keycloak REST API. */
  redirect_uris?: string | string[];
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Dict of registered cluster nodes (with C(nodename) as the key and last registration time as the value). This is C(registeredNodes) in the Keycloak REST API. */
  registered_nodes?: Record<string, unknown>;
  /** The registration access token provides access for clients to the client registration service. This is C(registrationAccessToken) in the Keycloak REST API. */
  registration_access_token?: string;
  /** Root URL appended to relative URLs for this client. This is C(rootUrl) in the Keycloak REST API. */
  root_url?: string;
  /** When using O(client_authenticator_type=client-secret) (the default), you can specify a secret here (otherwise one is generated if it does not exit). If changing this secret, the module does not register a change currently (but the changed secret is saved). */
  secret?: string;
  /** Are service accounts enabled for this client or not (OpenID connect). This is C(serviceAccountsEnabled) in the Keycloak REST API. */
  service_accounts_enabled?: boolean;
  /** Enable standard flow for this client or not (OpenID connect). This is C(standardFlowEnabled) in the Keycloak REST API. */
  standard_flow_enabled?: boolean;
  /** State of the client. */
  state?: "present" | "absent";
  /** Whether or not surrogate auth is required. This is C(surrogateAuthRequired) in the Keycloak REST API. */
  surrogate_auth_required?: boolean;
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Whether or not to use configuration from the O(client_template). This is C(useTemplateConfig) in the Keycloak REST API. */
  use_template_config?: boolean;
  /** Whether or not to use mapper configuration from the O(client_template). This is C(useTemplateMappers) in the Keycloak REST API. */
  use_template_mappers?: boolean;
  /** Whether or not to use scope configuration from the O(client_template). This is C(useTemplateScope) in the Keycloak REST API. */
  use_template_scope?: boolean;
  /** Valid post logout redirect URIs for this client. */
  valid_post_logout_redirect_uris?: string | string[];
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
  /** List of allowed CORS origins. This is C(webOrigins) in the Keycloak REST API. */
  web_origins?: string | string[];
}

export interface KeycloakClientReturn {
  /** Representation of client after module execution (sample is truncated). */
  end_state?: Record<string, unknown>;
  /** Representation of existing client (sample is truncated). */
  existing?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
  /** Representation of proposed client. */
  proposed?: Record<string, unknown>;
}
export const keycloak_client = defineRemoteModule<KeycloakClientArgs, KeycloakClientReturn>(spec, meta);
