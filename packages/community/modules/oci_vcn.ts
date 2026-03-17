// Auto-generated from: community.general.oci_vcn
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OciVcnArgs {
  /** The OCID of the user, on whose behalf, OCI APIs are invoked. If not set, then the value of the E(OCI_USER_OCID) environment variable, if any, is used. This option is required if the user is not specified through a configuration file (See O(config_file_location)). To get the user's OCID, please refer U(https://docs.us-phoenix-1.oraclecloud.com/Content/API/Concepts/apisigningkey.htm). */
  api_user?: string;
  /** Fingerprint for the key pair being used. If not set, then the value of the E(OCI_USER_FINGERPRINT) environment variable, if any, is used. This option is required if the key fingerprint is not specified through a configuration file (See O(config_file_location)). To get the key pair's fingerprint value please refer to U(https://docs.us-phoenix-1.oraclecloud.com/Content/API/Concepts/apisigningkey.htm). */
  api_user_fingerprint?: string;
  /** Full path and filename of the private key (in PEM format). If not set, then the value of the E(OCI_USER_KEY_FILE) variable, if any, is used. This option is required if the private key is not specified through a configuration file (See O(config_file_location)). If the key is encrypted with a pass-phrase, the O(api_user_key_pass_phrase) option must also be provided. */
  api_user_key_file?: string;
  /** Passphrase used by the key referenced in O(api_user_key_file), if it is encrypted. If not set, then the value of the E(OCI_USER_KEY_PASS_PHRASE) variable, if any, is used. This option is required if the key passphrase is not specified through a configuration file (See O(config_file_location)). */
  api_user_key_pass_phrase?: string;
  /** The type of authentication to use for making API requests. By default O(auth_type=api_key) based authentication is performed and the API key (see O(api_user_key_file)) in your config file is used. If O(auth_type) is not specified, the value of the E(OCI_ANSIBLE_AUTH_TYPE), if any, is used. Use O(auth_type=instance_principal) to use instance principal based authentication when running ansible playbooks within an OCI compute instance. */
  auth_type?: "api_key" | "instance_principal";
  /** The CIDR IP address block of the VCN. Required when creating a VCN with O(state=present). */
  cidr_block?: string;
  /** The OCID of the compartment to contain the VCN. Required when creating a VCN with O(state=present). This option is mutually exclusive with O(vcn_id). */
  compartment_id?: string;
  /** Path to configuration file. If not set then the value of the E(OCI_CONFIG_FILE) environment variable, if any, is used. Otherwise, defaults to C(~/.oci/config). */
  config_file_location?: string;
  /** The profile to load from the config file referenced by O(config_file_location). If not set, then the value of the E(OCI_CONFIG_PROFILE) environment variable, if any, is used. Otherwise, defaults to the C(DEFAULT) profile in O(config_file_location). */
  config_profile_name?: string;
  /** Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see U(https://docs.us-phoenix-1.oraclecloud.com/Content/General/Concepts/resourcetags.htm). */
  defined_tags?: Record<string, unknown>;
  /** A user-friendly name. Does not have to be unique, and it is changeable. */
  display_name?: string;
  /** A DNS label for the VCN, used in conjunction with the VNIC's hostname and subnet's DNS label to form a fully qualified domain name (FQDN) for each VNIC within this subnet (for example, V(bminstance-1.subnet123.vcn1.oraclevcn.com)). Not required to be unique, but it is a best practice to set unique DNS labels for VCNs in your tenancy. Must be an alphanumeric string that begins with a letter. The value cannot be changed. */
  dns_label?: string;
  /** Whether to attempt non-idempotent creation of a resource. By default, create resource is an idempotent operation, and does not create the resource if it already exists. Setting this option to V(true), forcefully creates a copy of the resource, even if it already exists. This option is mutually exclusive with O(key_by). */
  force_create?: boolean;
  /** Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see U(https://docs.us-phoenix-1.oraclecloud.com/Content/General/Concepts/resourcetags.htm). */
  freeform_tags?: Record<string, unknown>;
  /** The list of comma-separated attributes of this resource which should be used to uniquely identify an instance of the resource. By default, all the attributes of a resource except O(freeform_tags) are used to uniquely identify a resource. */
  key_by?: string | string[];
  /** The Oracle Cloud Infrastructure region to use for all OCI API requests. If not set, then the value of the E(OCI_REGION) variable, if any, is used. This option is required if the region is not specified through a configuration file (See O(config_file_location)). Please refer to U(https://docs.us-phoenix-1.oraclecloud.com/Content/General/Concepts/regions.htm) for more information on OCI regions. */
  region?: string;
  /** Create or update a VCN with O(state=present). Use O(state=absent) to delete a VCN. */
  state?: "present" | "absent";
  /** OCID of your tenancy. If not set, then the value of the E(OCI_TENANCY) variable, if any, is used. This option is required if the tenancy OCID is not specified through a configuration file (See O(config_file_location)). To get the tenancy OCID, please refer to U(https://docs.us-phoenix-1.oraclecloud.com/Content/API/Concepts/apisigningkey.htm). */
  tenancy?: string;
  /** The OCID of the VCN. Required when deleting a VCN with O(state=absent) or updating a VCN with O(state=present). This option is mutually exclusive with O(compartment_id). */
  vcn_id?: string;
  /** Whether to wait for create or delete operation to complete. */
  wait?: boolean;
  /** Time, in seconds, to wait when O(wait=true). */
  wait_timeout?: number;
  /** The lifecycle state to wait for the resource to transition into when O(wait=true). By default, when O(wait=true), we wait for the resource to get into ACTIVE/ATTACHED/AVAILABLE/PROVISIONED/ RUNNING applicable lifecycle state during create operation and to get into DELETED/DETACHED/ TERMINATED lifecycle state during delete operation. */
  wait_until?: string;
}

export interface OciVcnReturn {
  /** Information about the VCN. */
  vcn?: Record<string, unknown>;
}

export const oci_vcn = defineModule<OciVcnArgs, OciVcnReturn>("community.general.oci_vcn");
