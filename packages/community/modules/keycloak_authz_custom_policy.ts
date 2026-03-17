// Auto-generated from: community.general.keycloak_authz_custom_policy
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface KeycloakAuthzCustomPolicyArgs {
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
  /** The V(clientId) of the Keycloak client that should have the custom policy attached to it. */
  client_id: string;
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** Name of the custom policy to create. */
  name: string;
  /** The type of the policy. This must match the name of the custom policy deployed to the server. */
  policy_type: string;
  /** The name of the Keycloak realm the Keycloak client is in. */
  realm: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** State of the custom policy. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakAuthzCustomPolicyReturn {
  /** Representation of the custom policy after module execution. */
  end_state?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
}

export const keycloak_authz_custom_policy = defineModule<KeycloakAuthzCustomPolicyArgs, KeycloakAuthzCustomPolicyReturn>("community.general.keycloak_authz_custom_policy");
