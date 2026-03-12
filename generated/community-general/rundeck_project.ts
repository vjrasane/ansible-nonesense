// Auto-generated from: community.general.rundeck_project
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface RundeckProjectArgs {
  /** Sets the token to authenticate against Rundeck API. */
  api_token: string;
  /** Rundeck API version to be used. */
  api_version?: number;
  /** PEM formatted certificate chain file to be used for SSL client authentication. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. */
  client_key?: string;
  /** If V(yes) do not get a cached copy. */
  force?: boolean;
  /** Credentials specified with O(url_username) and O(url_password) should be passed in HTTP Header. */
  force_basic_auth?: boolean;
  /** Header to identify as, generally appears in web server logs. */
  http_agent?: string;
  /** Sets the project name. */
  name: string;
  /** Create or remove Rundeck project. */
  state?: "present" | "absent";
  /** HTTP, HTTPS, or FTP URL in the form (http|https|ftp)://[user[:pass]]@host.domain[:port]/path */
  url: string;
  /** The password for use in HTTP basic authentication. */
  url_password?: string;
  /** The username for use in HTTP basic authentication. */
  url_username?: string;
  /** Use GSSAPI to perform the authentication, typically this is for Kerberos or Kerberos through Negotiate authentication. */
  use_gssapi?: boolean;
  /** If V(no), it will not use a proxy, even if one is defined in an environment variable on the target hosts. */
  use_proxy?: boolean;
  /** If V(no), SSL certificates will not be validated. */
  validate_certs?: boolean;
}

export interface RundeckProjectReturn {
  /** Dictionary containing project information after modification. */
  after?: Record<string, unknown>;
  /** Dictionary containing project information before modification. */
  before?: Record<string, unknown>;
  /** Rundeck response when a failure occurs. */
  rundeck_response?: string;
}

export const rundeck_project = defineModule<RundeckProjectArgs, RundeckProjectReturn>("community.general.rundeck_project");
