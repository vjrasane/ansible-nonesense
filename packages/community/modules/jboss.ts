// Auto-generated from: community.general.jboss
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface JbossArgs {
  /** The location in the filesystem where the deployment scanner listens. */
  deploy_path?: string;
  /** The name of the deployment. */
  deployment: string;
  /** The remote path of the application ear or war to deploy. */
  src?: string;
  /** Whether the application should be deployed or undeployed. */
  state?: "present" | "absent";
}

export type JbossReturn = Record<string, unknown>;

export const jboss = defineModule<JbossArgs, JbossReturn>("community.general.jboss");
