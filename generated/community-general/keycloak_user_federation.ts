// Auto-generated from: community.general.keycloak_user_federation
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KeycloakUserFederationArgs {
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
  /** The value of the config parameter O(config.bindCredential) is redacted in the Keycloak responses. Comparing the redacted value with the desired value always evaluates to not equal. This means the before and desired states are never equal if the parameter is set. */
  bind_credential_update_mode?: "always" | "only_indirect";
  /** Dict specifying the configuration options for the provider; the contents differ depending on the value of O(provider_id). Examples are given below for V(ldap), V(kerberos) and V(sssd). It is easiest to obtain valid config values by dumping an already-existing user federation configuration through check-mode in the RV(existing) field. */
  config?: {
    allowKerberosAuthentication?: boolean;
    allowPasswordAuthentication?: boolean;
    authType?: "none" | "simple";
    batchSizeForSync?: number;
    bindCredential?: string;
    bindDn?: string;
    cachePolicy?: "DEFAULT" | "EVICT_DAILY" | "EVICT_WEEKLY" | "MAX_LIFESPAN" | "NO_CACHE";
    changedSyncPeriod?: number;
    connectionPooling?: boolean;
    connectionPoolingAuthentication?: "none" | "simple" | "DIGEST-MD5";
    connectionPoolingDebug?: string;
    connectionPoolingInitSize?: number;
    connectionPoolingMaxSize?: number;
    connectionPoolingPrefSize?: number;
    connectionPoolingProtocol?: string;
    connectionPoolingTimeout?: number;
    connectionTimeout?: number;
    connectionUrl?: string;
    customUserSearchFilter?: string;
    debug?: boolean;
    editMode?: "READ_ONLY" | "WRITABLE" | "UNSYNCED";
    enabled?: boolean;
    evictionDay?: string;
    evictionHour?: string;
    evictionMinute?: string;
    fullSyncPeriod?: number;
    importEnabled?: boolean;
    kerberosRealm?: string;
    keyTab?: string;
    krbPrincipalAttribute?: string;
    maxLifespan?: number;
    pagination?: boolean;
    priority?: number;
    rdnLDAPAttribute?: string;
    readTimeout?: number;
    referral?: "ignore" | "follow";
    searchScope?: "1" | "2";
    serverPrincipal?: string;
    startTls?: boolean;
    syncRegistrations?: boolean;
    trustEmail?: boolean;
    updateProfileFirstLogin?: boolean;
    useKerberosForPasswordAuthentication?: boolean;
    usePasswordModifyExtendedOp?: boolean;
    useTruststoreSpi?: "always" | "ldapsOnly" | "never";
    userObjectClasses?: string;
    usernameLDAPAttribute?: string;
    usersDn?: string;
    uuidLDAPAttribute?: string;
    validatePasswordPolicy?: boolean;
    vendor?: string;
  };
  /** Controls the HTTP connections timeout period (in seconds) to Keycloak API. */
  connection_timeout?: number;
  /** Configures the HTTP User-Agent header. */
  http_agent?: string;
  /** The unique ID for this user federation. If left empty, the user federation is searched by its O(name). */
  id?: string;
  /** A list of dicts defining mappers associated with this Identity Provider. */
  mappers?: Record<string, unknown> | Record<string, unknown>[];
  /** Display name of provider when linked in admin console. */
  name?: string;
  /** Unique ID for the parent of this user federation. Realm ID is automatically used if left blank. */
  parent_id?: string;
  /** Provider for this user federation. Built-in providers are V(ldap), V(kerberos), and V(sssd). Custom user storage providers can also be used. */
  provider_id?: string;
  /** Component type for user federation (only supported value is V(org.keycloak.storage.UserStorageProvider)). */
  provider_type?: string;
  /** The Keycloak realm under which this user federation resides. */
  realm?: string;
  /** Authentication refresh token for Keycloak API. */
  refresh_token?: string;
  /** Remove mappers that are not specified in the configuration for this federation. */
  remove_unspecified_mappers?: boolean;
  /** State of the user federation. */
  state?: "present" | "absent";
  /** Authentication token for Keycloak API. */
  token?: string;
  /** Verify TLS certificates (do not disable this in production). */
  validate_certs?: boolean;
}

export interface KeycloakUserFederationReturn {
  /** Representation of user federation after module execution. */
  end_state?: Record<string, unknown>;
  /** Representation of existing user federation. */
  existing?: Record<string, unknown>;
  /** Message as to what action was taken. */
  msg?: string;
  /** Representation of proposed user federation. */
  proposed?: Record<string, unknown>;
}

export const keycloak_user_federation = defineModule<KeycloakUserFederationArgs, KeycloakUserFederationReturn>("community.general.keycloak_user_federation");
