// Auto-generated from: community.general.keycloak_authz_permission_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakAuthzPermissionInfoArgs {
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
  /** The clientId of the keycloak client that should have the authorization scope. */
  client_id: string;
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** Name of the authorization permission to create. */
  name: string;
  /** The name of the Keycloak realm the Keycloak client is in. */
  realm: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakAuthzPermissionInfoReturn {
  /** Message as to what action was taken. */
  msg?: string;
  /** State of the resource (a policy) as seen by Keycloak. */
  queried_state?: unknown;
}

export const keycloak_authz_permission_info = defineModule<KeycloakAuthzPermissionInfoArgs, KeycloakAuthzPermissionInfoReturn>("community.general.keycloak_authz_permission_info");
