// Auto-generated from: community.general.jenkins_job_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface JenkinsJobInfoArgs {
  /** Only fetch jobs with the given status color. */
  color?: string;
  /** A shell glob of Jenkins job names to fetch information about. */
  glob?: string;
  /** Exact name of the Jenkins job to fetch information about. */
  name?: string;
  /** Password to authenticate with the Jenkins server. */
  password?: string;
  /** API token used to authenticate with the Jenkins server. */
  token?: string;
  /** URL where the Jenkins server is accessible. */
  url?: string;
  /** User to authenticate with the Jenkins server. */
  user?: string;
  /** If set to V(false), the SSL certificates are not validated. */
  validate_certs?: boolean;
}

export interface JenkinsJobInfoReturn {
  /** All jobs found matching the specified criteria. */
  jobs?: string | string[];
}

export const jenkins_job_info = defineModule<JenkinsJobInfoArgs, JenkinsJobInfoReturn>("community.general.jenkins_job_info");
