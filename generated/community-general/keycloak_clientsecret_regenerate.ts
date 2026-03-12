// Auto-generated from: community.general.keycloak_clientsecret_regenerate
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakClientsecretRegenerateArgs {
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
  /** The client_id of the client. Passing this instead of ID results in an extra API call. */
  client_id?: string;
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** The unique identifier for this client. */
  id?: string;
  /** They Keycloak realm under which this client resides. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakClientsecretRegenerateReturn {
  /** Representation of the client credential after module execution. */
  end_state?: unknown;
  /** Message as to what action was taken. */
  msg?: string;
}

export const keycloak_clientsecret_regenerate = defineModule<KeycloakClientsecretRegenerateArgs, KeycloakClientsecretRegenerateReturn>("community.general.keycloak_clientsecret_regenerate");
