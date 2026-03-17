// Auto-generated from: community.general.keycloak_user
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface KeycloakUserArgs {
  /** List user access. */
  access?: Record<string, unknown>;
  /** List of user attributes. */
  attributes?: Record<string, unknown> | Record<string, unknown>[];
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
  /** Client Authenticator Type. */
  client_consents?: Record<string, unknown> | Record<string, unknown>[];
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** User credentials. */
  credentials?: Record<string, unknown> | Record<string, unknown>[];
  /** List user Credential Type. */
  disableable_credential_types?: string | string[];
  /** User email. */
  email?: string;
  /** Check the validity of user email. */
  email_verified?: boolean;
  /** Enabled user. */
  enabled?: boolean;
  /** List of IDPs of user. */
  federated_identities?: string | string[];
  /** Federation Link. */
  federation_link?: string;
  /** The user's first name. */
  first_name?: string;
  /** If V(true), allows to remove user and recreate it. */
  force?: boolean;
  /** List of groups for the user. */
  groups?: Record<string, unknown> | Record<string, unknown>[];
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** ID of the user on the Keycloak server if known. */
  id?: string;
  /** The user's last name. */
  last_name?: string;
  /** User origin. */
  origin?: string;
  /** The name of the realm in which is the client. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** RequiredActions user Auth. */
  required_actions?: string | string[];
  /** User self administration. */
  self?: string;
  /** Description of the client Application. */
  service_account_client_id?: string;
  /** Control whether the user should exists or not. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Username for the user. */
  username: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakUserReturn {
  /** Representation of the user after module execution. */
  end_state?: Record<string, unknown>;
  /** Representation of the existing user. */
  existing?: Record<string, unknown>;
  /** Representation of the proposed user. */
  proposed?: Record<string, unknown>;
  /** Indicates whether a user was created. */
  user_created?: boolean;
}

export const keycloak_user = defineModule<KeycloakUserArgs, KeycloakUserReturn>("community.general.keycloak_user");
