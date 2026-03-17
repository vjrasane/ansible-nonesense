// Auto-generated from: community.general.manageiq_provider
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ManageiqProviderArgs {
  /** Alerts endpoint connection information. */
  alerts?: {
    auth_key?: string;
    certificate_authority?: string;
    hostname: string;
    password?: string;
    path?: string;
    port?: number;
    project?: string;
    role?: string;
    security_protocol?: "ssl-with-validation" | "ssl-with-validation-custom-ca" | "ssl-without-validation" | "non-ssl";
    subscription?: string;
    uid_ems?: string;
    userid?: string;
    validate_certs?: boolean;
  };
  /** The OpenStack Keystone API version. */
  api_version?: "v2" | "v3";
  /** Tenant ID. Defaults to V(null). */
  azure_tenant_id?: string;
  /** The last port in the host VNC range. */
  host_default_vnc_port_end?: string;
  /** The first port in the host VNC range. */
  host_default_vnc_port_start?: string;
  /** ManageIQ connection configuration information. */
  manageiq_connection?: {
    ca_cert?: string;
    password?: string;
    token?: string;
    url?: string;
    username?: string;
    validate_certs?: boolean;
  };
  /** Metrics endpoint connection information. */
  metrics?: {
    auth_key?: string;
    certificate_authority?: string;
    hostname: string;
    password?: string;
    path?: string;
    port?: number;
    project?: string;
    role?: string;
    security_protocol?: "ssl-with-validation" | "ssl-with-validation-custom-ca" | "ssl-without-validation" | "non-ssl";
    subscription?: string;
    uid_ems?: string;
    userid?: string;
    validate_certs?: boolean;
  };
  /** The provider's name. */
  name: string;
  /** Google Compute Engine Project ID. */
  project?: string;
  /** Default endpoint connection information, required if state is true. */
  provider?: {
    auth_key?: string;
    certificate_authority?: string;
    hostname: string;
    password?: string;
    path?: string;
    port?: number;
    project?: string;
    role?: string;
    security_protocol?: "ssl-with-validation" | "ssl-with-validation-custom-ca" | "ssl-without-validation" | "non-ssl";
    subscription?: string;
    uid_ems?: string;
    userid?: string;
    validate_certs?: boolean;
  };
  /** The provider region name to connect to (for example AWS region for Amazon). */
  provider_region?: string;
  /** SSH key pair used for SSH connections to all hosts in this provider. */
  ssh_keypair?: {
    auth_key?: string;
    certificate_authority?: string;
    hostname: string;
    password?: string;
    path?: string;
    port?: number;
    project?: string;
    role?: string;
    security_protocol?: "ssl-with-validation" | "ssl-with-validation-custom-ca" | "ssl-without-validation" | "non-ssl";
    subscription?: string;
    uid_ems?: string;
    userid?: string;
    validate_certs?: boolean;
  };
  /** V(absent) - provider should not exist, */
  state?: "absent" | "present" | "refresh";
  /** Microsoft Azure subscription ID. */
  subscription?: string;
  /** Whether to enable mapping of existing tenants. */
  tenant_mapping_enabled?: boolean;
  /** The provider's type. */
  type?: "Openshift" | "Amazon" | "oVirt" | "VMware" | "Azure" | "Director" | "OpenStack" | "GCE";
  /** The ManageIQ zone name that manages the provider. */
  zone?: string;
}

export type ManageiqProviderReturn = Record<string, unknown>;

export const manageiq_provider = defineModule<ManageiqProviderArgs, ManageiqProviderReturn>("community.general.manageiq_provider");
