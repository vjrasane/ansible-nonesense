// Auto-generated from: community.general.keycloak_clientscope_type
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakClientscopeTypeArgs {
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
  /** The O(client_id) of the client. If not set the clientscope types are set as a default for the realm. */
  client_id?: string;
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Client scopes that should be of type default. */
  default_clientscopes?: string | string[];
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** Client scopes that should be of type optional. */
  optional_clientscopes?: string | string[];
  /** The Keycloak realm. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakClientscopeTypeReturn {
  /** Representation of client scopes after module execution. */
  end_state?: Record<string, unknown>;
  /** Representation of client scopes before module execution. */
  existing?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
  /** Representation of proposed client-scope types mapping. */
  proposed?: Record<string, unknown>;
}

export const keycloak_clientscope_type = defineModule<KeycloakClientscopeTypeArgs, KeycloakClientscopeTypeReturn>("community.general.keycloak_clientscope_type");
