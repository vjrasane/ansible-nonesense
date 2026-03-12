// Auto-generated from: community.general.rundeck_job_executions_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface RundeckJobExecutionsInfoArgs {
  /** Rundeck User API Token. */
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
  /** The job unique ID. */
  job_id: string;
  /** Max results to return. */
  max?: number;
  /** The start point to return the results. */
  offset?: number;
  /** The job status to filter. */
  status?: "succeeded" | "failed" | "aborted" | "running";
  /** Rundeck instance URL. */
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

export interface RundeckJobExecutionsInfoReturn {
  /** Job executions list. */
  executions?: Record<string, unknown> | Record<string, unknown>[];
  /** Results pagination info. */
  paging?: Record<string, unknown>;
}

export const rundeck_job_executions_info = defineModule<RundeckJobExecutionsInfoArgs, RundeckJobExecutionsInfoReturn>("community.general.rundeck_job_executions_info");
