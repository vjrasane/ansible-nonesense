// Auto-generated from: community.general.keycloak_authentication
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakAuthenticationArgs {
  /** Alias for the authentication flow. */
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
  /** Configuration structure for the executions. */
  authenticationExecutions?: Record<string, unknown> | Record<string, unknown>[];
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** C(flowAlias) of the authentication flow to use for the copy. */
  copyFrom?: string;
  /** Description of the flow. */
  description?: string;
  /** If V(true), allows to remove the authentication flow and recreate it. */
  force?: boolean;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** C(providerId) for the new flow when not copied from an existing flow. */
  providerId?: "basic-flow" | "client-flow";
  /** The name of the realm in which is the authentication. */
  realm: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Control if the authentication flow must exists or not. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakAuthenticationReturn {
  /** Representation of the authentication after module execution. */
  end_state?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
}

export const keycloak_authentication = defineModule<KeycloakAuthenticationArgs, KeycloakAuthenticationReturn>("community.general.keycloak_authentication");
