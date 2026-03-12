// Auto-generated from: community.general.keycloak_realm_keys_metadata_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakRealmKeysMetadataInfoArgs {
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
  /** They Keycloak realm to fetch keys metadata. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakRealmKeysMetadataInfoReturn {
  /** Representation of the realm keys metadata (see U(https://www.keycloak.org/docs-api/latest/rest-api/index.html#KeysMetadataRepresentation)). */
  keys_metadata?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
}

export const keycloak_realm_keys_metadata_info = defineModule<KeycloakRealmKeysMetadataInfoArgs, KeycloakRealmKeysMetadataInfoReturn>("community.general.keycloak_realm_keys_metadata_info");
