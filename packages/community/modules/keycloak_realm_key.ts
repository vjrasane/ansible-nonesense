// Auto-generated from: community.general.keycloak_realm_key
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface KeycloakRealmKeyArgs {
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
  /** Dict specifying the key and its properties. */
  config?: {
    active?: boolean;
    algorithm?: "RS256" | "RS384" | "RS512" | "PS256" | "PS384" | "PS512" | "RSA1_5" | "RSA-OAEP" | "RSA-OAEP-256";
    certificate: string;
    enabled?: boolean;
    priority: number;
    private_key: string;
  };
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Enforce the state of the private key and certificate. This is not automatically the case as this module is unable to determine the current state of the private key and thus cannot trigger an update based on an actual divergence. That said, a private key update may happen even if force is false as a side-effect of other changes. */
  force?: boolean;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** Name of the realm key to create. */
  name: string;
  /** The parent_id of the realm key. In practice the name of the realm. */
  parent_id: string;
  /** The name of the "provider ID" for the key. */
  provider_id?: "rsa" | "rsa-enc";
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** State of the keycloak realm key. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakRealmKeyReturn {
  /** Representation of the keycloak_realm_key after module execution. */
  end_state?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
}

export const keycloak_realm_key = defineModule<KeycloakRealmKeyArgs, KeycloakRealmKeyReturn>("community.general.keycloak_realm_key");
