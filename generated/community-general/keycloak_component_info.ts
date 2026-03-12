// Auto-generated from: community.general.keycloak_component_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakComponentInfoArgs {
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
  /** Name of the Component. */
  name?: string;
  /** Container ID of the components. */
  parent_id?: string;
  /** Provider type of components. */
  provider_type?: string;
  /** The name of the realm. */
  realm: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakComponentInfoReturn {
  /** JSON representation of components. */
  components?: Record<string, unknown> | Record<string, unknown>[];
}

export const keycloak_component_info = defineModule<KeycloakComponentInfoArgs, KeycloakComponentInfoReturn>("community.general.keycloak_component_info");
