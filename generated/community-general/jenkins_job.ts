// Auto-generated from: community.general.jenkins_job
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface JenkinsJobArgs {
  /** Config in XML format. */
  config?: string;
  /** Whether the job should be enabled or disabled. */
  enabled?: boolean;
  /** Name of the Jenkins job. */
  name: string;
  /** Password to authenticate with the Jenkins server. */
  password?: string;
  /** Attribute that specifies if the job has to be created or deleted. */
  state?: "present" | "absent";
  /** API token used to authenticate alternatively to password. */
  token?: string;
  /** URL where the Jenkins server is accessible. */
  url?: string;
  /** User to authenticate with the Jenkins server. */
  user?: string;
  /** If set to V(false), the SSL certificates are not validated. This should only set to V(false) used on personally controlled sites using self-signed certificates as it avoids verifying the source site. */
  validate_certs?: boolean;
}

export interface JenkinsJobReturn {
  /** Whether the jenkins job is enabled or not. */
  enabled?: boolean;
  /** Name of the jenkins job. */
  name?: string;
  /** State of the jenkins job. */
  state?: string;
  /** URL to connect to the Jenkins server. */
  url?: string;
  /** User used for authentication. */
  user?: string;
}

export const jenkins_job = defineModule<JenkinsJobArgs, JenkinsJobReturn>("community.general.jenkins_job");
