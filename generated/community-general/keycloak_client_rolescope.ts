// Auto-generated from: community.general.keycloak_client_rolescope
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakClientRolescopeArgs {
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
  /** Roles provided in O(role_names) while be added to this client scope. */
  client_id: string;
  /** If the O(role_names) are client role, the client ID under which it resides. */
  client_scope_id?: string;
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** The Keycloak realm under which clients resides. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Names of roles to manipulate. */
  role_names: string | string[];
  /** State of the role mapping. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakClientRolescopeReturn {
  /** Representation of role role scope after module execution. */
  end_state?: Record<string, unknown> | Record<string, unknown>[];
  /** Message as to what action was taken. */
  msg?: string;
}

export const keycloak_client_rolescope = defineModule<KeycloakClientRolescopeArgs, KeycloakClientRolescopeReturn>("community.general.keycloak_client_rolescope");
