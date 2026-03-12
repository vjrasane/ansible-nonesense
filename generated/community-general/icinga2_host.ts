// Auto-generated from: community.general.icinga2_host
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface Icinga2HostArgs {
  /** The command used to check if the host is alive. */
  check_command?: string;
  /** PEM formatted certificate chain file to be used for SSL client authentication. This file can also include the key as well, and if the key is included, O(client_key) is not required. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. If O(client_cert) contains both the certificate and key, this option is not required. */
  client_key?: string;
  /** The name used to display the host. */
  display_name?: string;
  /** If V(yes) do not get a cached copy. */
  force?: boolean;
  /** C(httplib2), the library used by Ansible's HTTP request code only sends authentication information when a webservice responds to an initial request with a 401 status. Since some basic auth services do not properly send a 401, logins may fail. This option forces the sending of the Basic authentication header upon initial request. */
  force_basic_auth?: boolean;
  /** Header to identify as, generally appears in web server logs. */
  http_agent?: string;
  /** The IP address of the host. */
  ip?: string;
  /** Name used to create / delete the host. This does not need to be the FQDN, but does needs to be unique. */
  name: string;
  /** Apply feature state. */
  state?: "present" | "absent";
  /** The template used to define the host. */
  template?: string;
  /** HTTP, HTTPS, or FTP URL in the form V((http|https|ftp\)://[user[:pass]]@host.domain[:port]/path). */
  url?: string;
  /** The password for use in HTTP basic authentication. */
  url_password?: string;
  /** The username for use in HTTP basic authentication. */
  url_username?: string;
  /** Use GSSAPI to perform the authentication, typically this is for Kerberos or Kerberos through Negotiate authentication. */
  use_gssapi?: boolean;
  /** If V(false), it does not use a proxy, even if one is defined in an environment variable on the target hosts. */
  use_proxy?: boolean;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
  /** Dictionary of variables. */
  variables?: Record<string, unknown>;
  /** The zone from where this host should be polled. */
  zone?: string;
}

export interface Icinga2HostReturn {
  /** The data structure used for create, modify or delete of the host. */
  data?: Record<string, unknown>;
  /** The name used to create, modify or delete the host. */
  name?: string;
}

export const icinga2_host = defineModule<Icinga2HostArgs, Icinga2HostReturn>("community.general.icinga2_host");
