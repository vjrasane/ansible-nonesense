// Auto-generated from: community.general.keycloak_authentication_required_actions
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakAuthenticationRequiredActionsArgs {
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
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** The name of the realm in which are the authentication required actions. */
  realm: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Authentication required action. */
  required_actions?: Record<string, unknown> | Record<string, unknown>[];
  /** Control if the realm authentication required actions are going to be registered/updated (V(present)) or deleted (V(absent)). */
  state: "absent" | "present";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakAuthenticationRequiredActionsReturn {
  /** Representation of the authentication required actions after module execution. */
  end_state?: unknown;
  /** Message as to what action was taken. */
  msg?: string;
}

export const keycloak_authentication_required_actions = defineModule<KeycloakAuthenticationRequiredActionsArgs, KeycloakAuthenticationRequiredActionsReturn>("community.general.keycloak_authentication_required_actions");
