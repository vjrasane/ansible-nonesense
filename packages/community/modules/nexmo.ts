// Auto-generated from: community.general.nexmo
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface NexmoArgs {
  /** Nexmo API Key. */
  api_key: string;
  /** Nexmo API Secret. */
  api_secret: string;
  /** PEM formatted certificate chain file to be used for SSL client authentication. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. */
  client_key?: string;
  /** Phone number(s) to send SMS message to. */
  dest: number | number[];
  /** If V(yes) do not get a cached copy. */
  force?: boolean;
  /** Credentials specified with O(url_username) and O(url_password) should be passed in HTTP Header. */
  force_basic_auth?: boolean;
  /** Header to identify as, generally appears in web server logs. */
  http_agent?: string;
  /** Message text to send. Messages longer than 160 characters are split into multiple messages. */
  msg: string;
  /** Nexmo Number to send from. */
  src: number;
  /** HTTP, HTTPS, or FTP URL in the form (http|https|ftp)://[user[:pass]]@host.domain[:port]/path */
  url?: string;
  /** The password for use in HTTP basic authentication. */
  url_password?: string;
  /** The username for use in HTTP basic authentication. */
  url_username?: string;
  /** Use GSSAPI to perform the authentication, typically this is for Kerberos or Kerberos through Negotiate authentication. */
  use_gssapi?: boolean;
  /** If V(no), it will not use a proxy, even if one is defined in an environment variable on the target hosts. */
  use_proxy?: boolean;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
}

export type NexmoReturn = Record<string, unknown>;

export const nexmo = defineModule<NexmoArgs, NexmoReturn>("community.general.nexmo");
