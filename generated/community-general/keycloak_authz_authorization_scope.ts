// Auto-generated from: community.general.keycloak_authz_authorization_scope
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakAuthzAuthorizationScopeArgs {
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
  /** The C(clientId) of the Keycloak client that should have the authorization scope. */
  client_id: string;
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** The display name of the authorization scope. */
  display_name?: string;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** The icon URI for the authorization scope. */
  icon_uri?: string;
  /** Name of the authorization scope to create. */
  name: string;
  /** The name of the Keycloak realm the Keycloak client is in. */
  realm: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** State of the authorization scope. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakAuthzAuthorizationScopeReturn {
  /** Representation of the authorization scope after module execution. */
  end_state?: unknown;
  /** Message as to what action was taken. */
  msg?: string;
}

export const keycloak_authz_authorization_scope = defineModule<KeycloakAuthzAuthorizationScopeArgs, KeycloakAuthzAuthorizationScopeReturn>("community.general.keycloak_authz_authorization_scope");
