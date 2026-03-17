// Auto-generated from: community.general.keycloak_user_rolemapping
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface KeycloakUserRolemappingArgs {
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
  /** ID of the client whose role is to be mapped. */
  cid?: string;
  /** Name of the client (different than O(cid)) whose role is to be mapped. */
  client_id?: string;
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** They Keycloak realm under which this role_representation resides. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Roles to be mapped to the user. */
  roles?: Record<string, unknown> | Record<string, unknown>[];
  /** Client ID of the service-account-user to be mapped. */
  service_account_user_client_id?: string;
  /** State of the user_rolemapping. */
  state?: "present" | "absent";
  /** Username of the user roles are mapped to. */
  target_username?: string;
  /** Authentication token for Keycloak API. */
  token?: string;
  /** ID of the user to be mapped. */
  uid?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakUserRolemappingReturn {
  /** Representation of client role mapping after module execution. */
  end_state?: Record<string, unknown>;
  /** Representation of existing client role mapping. */
  existing?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
  /** Representation of proposed client role mapping. */
  proposed?: Record<string, unknown>;
}

export const keycloak_user_rolemapping = defineModule<KeycloakUserRolemappingArgs, KeycloakUserRolemappingReturn>("community.general.keycloak_user_rolemapping");
