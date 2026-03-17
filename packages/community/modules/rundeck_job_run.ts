// Auto-generated from: community.general.rundeck_job_run
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface RundeckJobRunArgs {
  /** Send a job abort request if exceeded the O(wait_execution_timeout) specified. */
  abort_on_timeout?: boolean;
  /** Rundeck User API Token. */
  api_token: string;
  /** Rundeck API version to be used. */
  api_version?: number;
  /** PEM formatted certificate chain file to be used for SSL client authentication. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. */
  client_key?: string;
  /** Filter the nodes where the jobs must run. */
  filter_nodes?: string;
  /** If V(yes) do not get a cached copy. */
  force?: boolean;
  /** Credentials specified with O(url_username) and O(url_password) should be passed in HTTP Header. */
  force_basic_auth?: boolean;
  /** Header to identify as, generally appears in web server logs. */
  http_agent?: string;
  /** The job unique ID. */
  job_id: string;
  /** The job options for the steps. */
  job_options?: Record<string, unknown>;
  /** Log level configuration. */
  loglevel?: "debug" | "verbose" | "info" | "warn" | "error";
  /** Schedule the job execution to run at specific date and time. */
  run_at_time?: string;
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
  /** Wait until the job finished the execution. */
  wait_execution?: boolean;
  /** Delay, in seconds, between job execution status check requests. */
  wait_execution_delay?: number;
  /** Job execution wait timeout in seconds. */
  wait_execution_timeout?: number;
}

export interface RundeckJobRunReturn {
  /** Rundeck job execution metadata. */
  execution_info?: Record<string, unknown>;
}

export const rundeck_job_run = defineModule<RundeckJobRunArgs, RundeckJobRunReturn>("community.general.rundeck_job_run");
