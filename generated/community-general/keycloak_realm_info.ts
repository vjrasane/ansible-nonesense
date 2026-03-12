// Auto-generated from: community.general.keycloak_realm_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakRealmInfoArgs {
  /** URL to the Keycloak instance. */
  auth_keycloak_url: string;
  /** They Keycloak realm ID. */
  realm?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakRealmInfoReturn {
  /** Message as to what action was taken. */
  msg?: string;
  /** Representation of the realm public information. */
  realm_info?: Record<string, unknown>;
}

export const keycloak_realm_info = defineModule<KeycloakRealmInfoArgs, KeycloakRealmInfoReturn>("community.general.keycloak_realm_info");
