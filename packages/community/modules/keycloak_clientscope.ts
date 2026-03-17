// Auto-generated from: community.general.keycloak_clientscope
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface KeycloakClientscopeArgs {
  /** A dict of key/value pairs to set as custom attributes for the client_scope. */
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
  /** Description for this client_scope. */
  description?: string;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** The unique identifier for this client_scope. */
  id?: string;
  /** Name of the client_scope. */
  name?: string;
  /** Type of client. */
  protocol?: "openid-connect" | "saml" | "wsfed" | "docker-v2";
  /** A list of dicts defining protocol mappers for this client. */
  protocol_mappers?: Record<string, unknown> | Record<string, unknown>[];
  /** They Keycloak realm under which this client_scope resides. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** State of the client_scope. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakClientscopeReturn {
  /** Representation of client scope after module execution (sample is truncated). */
  end_state?: Record<string, unknown>;
  /** Representation of existing client scope (sample is truncated). */
  existing?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
  /** Representation of proposed client scope. */
  proposed?: Record<string, unknown>;
}

export const keycloak_clientscope = defineModule<KeycloakClientscopeArgs, KeycloakClientscopeReturn>("community.general.keycloak_clientscope");
