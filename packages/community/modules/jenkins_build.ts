// Auto-generated from: community.general.jenkins_build
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface JenkinsBuildArgs {
  /** A list of parameters to pass to the build. */
  args?: Record<string, unknown>;
  /** An integer which specifies a build of a job. Is required to remove a build from the queue. */
  build_number?: number;
  /** Enable detached mode to not wait for the build end. */
  detach?: boolean;
  /** Name of the Jenkins job to build. */
  name: string;
  /** Password to authenticate with the Jenkins server. */
  password?: string;
  /** Attribute that specifies if the build is to be created, deleted or stopped. */
  state?: "present" | "absent" | "stopped";
  /** Time in seconds to wait between requests to the Jenkins server. */
  time_between_checks?: number;
  /** API token used to authenticate with the Jenkins server. */
  token?: string;
  /** URL of the Jenkins server. */
  url?: string;
  /** User to authenticate with the Jenkins server. */
  user?: string;
}

export interface JenkinsBuildReturn {
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

export const jenkins_build = defineModule<JenkinsBuildArgs, JenkinsBuildReturn>("community.general.jenkins_build");
