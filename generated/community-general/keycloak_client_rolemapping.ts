// Auto-generated from: community.general.keycloak_client_rolemapping
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakClientRolemappingArgs {
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
  /** ID of the client to be mapped. */
  cid?: string;
  /** Name of the client to be mapped (different than O(cid)). */
  client_id?: string;
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** ID of the group to be mapped. */
  gid?: string;
  /** Name of the group to be mapped. */
  group_name?: string;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** List of parent groups for the group to handle sorted top to bottom. */
  parents?: Record<string, unknown> | Record<string, unknown>[];
  /** They Keycloak realm under which this role_representation resides. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Roles to be mapped to the group. */
  roles?: Record<string, unknown> | Record<string, unknown>[];
  /** State of the client_rolemapping. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakClientRolemappingReturn {
  /** Representation of client role mapping after module execution. */
  end_state?: Record<string, unknown>;
  /** Representation of existing client role mapping. */
  existing?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
  /** Representation of proposed client role mapping. */
  proposed?: Record<string, unknown>;
}

export const keycloak_client_rolemapping = defineModule<KeycloakClientRolemappingArgs, KeycloakClientRolemappingReturn>("community.general.keycloak_client_rolemapping");
