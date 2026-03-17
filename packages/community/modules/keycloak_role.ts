// Auto-generated from: community.general.keycloak_role
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface KeycloakRoleArgs {
  /** A dict of key/value pairs to set as custom attributes for the role. */
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
  /** If the role is a client role, the client ID under which it resides. */
  client_id?: string;
  /** If V(true), the role is a composition of other realm and/or client role. */
  composite?: boolean;
  /** List of roles to include to the composite realm role. */
  composites?: Record<string, unknown> | Record<string, unknown>[];
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** The role description. */
  description?: string;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** Name of the role. */
  name: string;
  /** The Keycloak realm under which this role resides. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** State of the role. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakRoleReturn {
  /** Representation of role after module execution (sample is truncated). */
  end_state?: Record<string, unknown>;
  /** Representation of existing role. */
  existing?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
  /** Representation of proposed role. */
  proposed?: Record<string, unknown>;
}

export const keycloak_role = defineModule<KeycloakRoleArgs, KeycloakRoleReturn>("community.general.keycloak_role");
