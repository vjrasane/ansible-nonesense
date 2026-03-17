// Auto-generated from: community.general.jenkins_build_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface JenkinsBuildInfoArgs {
  /** An integer which specifies a build of a job. */
  build_number?: number;
  /** Name of the Jenkins job to which the build belongs. */
  name: string;
  /** Password to authenticate with the Jenkins server. */
  password?: string;
  /** API token used to authenticate with the Jenkins server. */
  token?: string;
  /** URL of the Jenkins server. */
  url?: string;
  /** User to authenticate with the Jenkins server. */
  user?: string;
}

export interface JenkinsBuildInfoReturn {
  /** Build info of the jenkins job. */
  build_info?: Record<string, unknown>;
  /** Name of the jenkins job. */
  name?: string;
  /** State of the jenkins job. */
  state?: string;
  /** URL to connect to the Jenkins server. */
  url?: string;
  /** User used for authentication. */
  user?: string;
}

export const jenkins_build_info = defineModule<JenkinsBuildInfoArgs, JenkinsBuildInfoReturn>("community.general.jenkins_build_info");
