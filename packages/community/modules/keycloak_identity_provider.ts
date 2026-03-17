// Auto-generated from: community.general.keycloak_identity_provider
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface KeycloakIdentityProviderArgs {
  /** Enable/disable whether new users can read any stored tokens. This assigns the C(broker.read-token) role. */
  add_read_token_role_on_create?: boolean;
  /** The alias uniquely identifies an identity provider and it is also used to build the redirect URI. */
  alias: string;
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
  /** Specifies if this identity provider should be used by default for authentication even before displaying login screen. */
  authenticate_by_default?: boolean;
  /** Dict specifying the configuration options for the provider; the contents differ depending on the value of O(provider_id). Examples are given below for V(oidc) and V(saml). It is easiest to obtain valid config values by dumping an already-existing identity provider configuration through check-mode in the RV(existing) field. */
  config?: {
    authorizationUrl?: string;
    backchannelSupported?: string;
    clientAuthMethod?: string;
    clientId?: string;
    clientSecret?: string;
    defaultScope?: string;
    entityId?: string;
    fromUrl?: string;
    gui_order?: number;
    hide_on_login_page?: boolean;
    issuer?: string;
    jwksUrl?: string;
    logoutUrl?: string;
    nameIDPolicyFormat?: string;
    principalType?: string;
    singleLogoutServiceUrl?: string;
    singleSignOnServiceUrl?: string;
    sync_mode?: string;
    tokenUrl?: string;
    useJwksUrl?: boolean;
    userInfoUrl?: string;
    validateSignature?: boolean;
  };
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Friendly name for identity provider. */
  display_name?: string;
  /** Enable/disable this identity provider. */
  enabled?: boolean;
  /** Alias of authentication flow, which is triggered after first login with this identity provider. */
  first_broker_login_flow_alias?: string;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** If true, users cannot log in through this provider. They can only link to this provider. This is useful if you do not want to allow login from the provider, but want to integrate with a provider. */
  link_only?: boolean;
  /** A list of dicts defining mappers associated with this Identity Provider. */
  mappers?: Record<string, unknown> | Record<string, unknown>[];
  /** Alias of authentication flow, which is triggered after each login with this identity provider. */
  post_broker_login_flow_alias?: string;
  /** Protocol used by this provider (supported values are V(oidc) or V(saml)). */
  provider_id?: string;
  /** The Keycloak realm under which this identity provider resides. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** State of the identity provider. */
  state?: "present" | "absent";
  /** Enable/disable whether tokens must be stored after authenticating users. */
  store_token?: boolean;
  /** Authentication token for Keycloak API. */
  token?: string;
  /** If enabled, email provided by this provider is not verified even if verification is enabled for the realm. */
  trust_email?: boolean;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakIdentityProviderReturn {
  /** Representation of identity provider after module execution. */
  end_state?: Record<string, unknown>;
  /** Representation of existing identity provider. */
  existing?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
  /** Representation of proposed identity provider. */
  proposed?: Record<string, unknown>;
}

export const keycloak_identity_provider = defineModule<KeycloakIdentityProviderArgs, KeycloakIdentityProviderReturn>("community.general.keycloak_identity_provider");
