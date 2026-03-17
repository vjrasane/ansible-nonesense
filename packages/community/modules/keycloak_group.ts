// Auto-generated from: community.general.keycloak_group
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface KeycloakGroupArgs {
  /** A dict of key/value pairs to set as custom attributes for the group. */
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
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** The unique identifier for this group. */
  id?: string;
  /** Name of the group. */
  name?: string;
  /** List of parent groups for the group to handle sorted top to bottom. */
  parents?: Record<string, unknown> | Record<string, unknown>[];
  /** They Keycloak realm under which this group resides. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** State of the group. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakGroupReturn {
  /** Representation of the group after module execution (sample is truncated). */
  end_state?: unknown;
  /** Message as to what action was taken. */
  msg?: string;
}

export const keycloak_group = defineModule<KeycloakGroupArgs, KeycloakGroupReturn>("community.general.keycloak_group");
