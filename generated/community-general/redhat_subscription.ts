// Auto-generated from: community.general.redhat_subscription
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface RedhatSubscriptionArgs {
  /** Supply an activation key for use with registration. */
  activationkey?: string;
  /** Upon successful registration, auto-consume available subscriptions. */
  auto_attach?: boolean;
  /** References an existing consumer ID to resume using a previous registration for this system. If the system's identity certificate is lost or corrupted, this option allows it to resume using its previous identity and subscriptions. The default is to not specify a consumer ID so a new ID is created. */
  consumer_id?: string;
  /** Name of the system to register, defaults to the hostname. */
  consumer_name?: string;
  /** The type of unit to register, defaults to system. */
  consumer_type?: string;
  /** Register with a specific environment in the destination org. Used with Red Hat Satellite or Katello. */
  environment?: string;
  /** Register the system even if it is already registered. */
  force_register?: boolean;
  /** Organization ID to use in conjunction with activationkey. */
  org_id?: string;
  /** Access.redhat.com or Red Hat Satellite or Katello password. */
  password?: string;
  /** Specify subscription pool IDs to consume. */
  pool_ids?: unknown | unknown[];
  /** Set a release version. */
  release?: string;
  /** Specify CDN baseurl. */
  rhsm_baseurl?: string;
  /** Specify an alternative location for a CA certificate for CDN. */
  rhsm_repo_ca_cert?: string;
  /** Specify an alternative Red Hat Subscription Management or Red Hat Satellite or Katello server. */
  server_hostname?: string;
  /** Enable or disable https server certificate verification when connecting to O(server_hostname). */
  server_insecure?: string;
  /** Specify the port when registering to the Red Hat Subscription Management or Red Hat Satellite or Katello server. */
  server_port?: string;
  /** Specify the prefix when registering to the Red Hat Subscription Management or Red Hat Satellite or Katello server. */
  server_prefix?: string;
  /** Specify an HTTP proxy hostname. */
  server_proxy_hostname?: string;
  /** Specify a password for HTTP proxy with basic authentication. */
  server_proxy_password?: string;
  /** Specify an HTTP proxy port. */
  server_proxy_port?: string;
  /** Specify an HTTP proxy scheme, for example V(http) or V(https). */
  server_proxy_scheme?: string;
  /** Specify a user for HTTP proxy with basic authentication. */
  server_proxy_user?: string;
  /** Whether to register and subscribe (V(present)), or unregister (V(absent)) a system. */
  state?: "present" | "absent";
  /** Set syspurpose attributes in file C(/etc/rhsm/syspurpose/syspurpose.json) and synchronize these attributes with RHSM server. Syspurpose attributes help attach the most appropriate subscriptions to the system automatically. When C(syspurpose.json) file already contains some attributes, then new attributes overwrite existing attributes. When some attribute is not listed in the new list of attributes, the existing attribute is removed from C(syspurpose.json) file. Unknown attributes are ignored. */
  syspurpose?: {
    addons?: string | string[];
    role?: string;
    service_level_agreement?: string;
    sync?: boolean;
    usage?: string;
  };
  /** Sso.redhat.com API access token. */
  token?: string;
  /** Access.redhat.com or Red Hat Satellite or Katello username. */
  username?: string;
}

export interface RedhatSubscriptionReturn {
  /** List of pool IDs to which system is now subscribed. */
  subscribed_pool_ids?: Record<string, unknown>;
}

export const redhat_subscription = defineModule<RedhatSubscriptionArgs, RedhatSubscriptionReturn>("community.general.redhat_subscription");
