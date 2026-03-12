// Auto-generated from: community.general.keycloak_component
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakComponentArgs {
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
  /** Configuration properties for the provider. */
  config?: Record<string, unknown>;
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** Name of the component to create. */
  name: string;
  /** The parent_id of the component. In practice the ID (name) of the realm. */
  parent_id: string;
  /** The name of the "provider ID" for the key. */
  provider_id: string;
  /** The name of the "provider type" for the key. That is, V(org.keycloak.storage.UserStorageProvider), V(org.keycloak.userprofile.UserProfileProvider), ... */
  provider_type: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** State of the Keycloak component. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakComponentReturn {
  /** Representation of the keycloak_component after module execution. */
  end_state?: Record<string, unknown>;
}

export const keycloak_component = defineModule<KeycloakComponentArgs, KeycloakComponentReturn>("community.general.keycloak_component");
