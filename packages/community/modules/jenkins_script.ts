// Auto-generated from: community.general.jenkins_script
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface JenkinsScriptArgs {
  /** A dict of key-value pairs used in formatting the script using string.Template (see https://docs.python.org/2/library/string.html#template-strings). */
  args?: Record<string, unknown>;
  /** The password to connect to the jenkins server with. */
  password?: string;
  /** The groovy script to be executed. This gets passed as a string Template if args is defined. */
  script: string;
  /** The request timeout in seconds. */
  timeout?: number;
  /** The jenkins server to execute the script against. The default is a local jenkins instance that is not being proxied through a webserver. */
  url?: string;
  /** The username to connect to the jenkins server with. */
  user?: string;
  /** If set to V(false), the SSL certificates are not validated. This should only set to V(false) used on personally controlled sites using self-signed certificates as it avoids verifying the source site. */
  validate_certs?: boolean;
}

export interface JenkinsScriptReturn {
  /** Result of script. */
  output?: string;
}

export const jenkins_script = defineModule<JenkinsScriptArgs, JenkinsScriptReturn>("community.general.jenkins_script");
