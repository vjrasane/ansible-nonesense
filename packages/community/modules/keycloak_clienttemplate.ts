// Auto-generated from: community.general.keycloak_clienttemplate
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface KeycloakClienttemplateArgs {
  /** A dict of further attributes for this client template. This can contain various configuration settings, though in the default installation of Keycloak as of 3.4, none are documented or known, so this is usually empty. */
  attributes?: Record<string, unknown>;
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
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Description of the client template in Keycloak. */
  description?: string;
  /** Is the "Full Scope Allowed" feature set for this client template or not. This is C(fullScopeAllowed) in the Keycloak REST API. */
  full_scope_allowed?: boolean;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** ID of client template to be worked on. This is usually a UUID. */
  id?: string;
  /** Name of the client template. */
  name?: string;
  /** Type of client template. */
  protocol?: "openid-connect" | "saml" | "docker-v2";
  /** A list of dicts defining protocol mappers for this client template. This is C(protocolMappers) in the Keycloak REST API. */
  protocol_mappers?: Record<string, unknown> | Record<string, unknown>[];
  /** Realm this client template is found in. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** State of the client template. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakClienttemplateReturn {
  /** Representation of client template after module execution (sample is truncated). */
  end_state?: Record<string, unknown>;
  /** Representation of existing client template (sample is truncated). */
  existing?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
  /** Representation of proposed client template. */
  proposed?: Record<string, unknown>;
}

export const keycloak_clienttemplate = defineModule<KeycloakClienttemplateArgs, KeycloakClienttemplateReturn>("community.general.keycloak_clienttemplate");
