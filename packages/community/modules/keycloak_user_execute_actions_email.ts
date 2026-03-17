// Auto-generated from: community.general.keycloak_user_execute_actions_email
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface KeycloakUserExecuteActionsEmailArgs {
  /** List of required actions to include in the email. */
  actions?: string | string[];
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
  /** Optional client ID used for the redirect link. */
  client_id?: string;
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** The unique ID (UUID) of the user. */
  id?: string;
  /** Optional lifespan (in seconds) for the action token (supported on newer Keycloak versions). Forwarded as query parameter if provided. */
  lifespan?: number;
  /** The Keycloak realm where the user resides. */
  realm?: string;
  /** Optional redirect URI. Must be valid for the given client if O(client_id) is set. */
  redirect_uri?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Username of the user. */
  username?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakUserExecuteActionsEmailReturn {
  /** List of actions included in the email. */
  actions?: string | string[];
  /** The user ID the email was (or would be, in check mode) sent to. */
  user_id?: string;
}

export const keycloak_user_execute_actions_email = defineModule<KeycloakUserExecuteActionsEmailArgs, KeycloakUserExecuteActionsEmailReturn>("community.general.keycloak_user_execute_actions_email");
