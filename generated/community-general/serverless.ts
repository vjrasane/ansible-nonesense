// Auto-generated from: community.general.serverless
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ServerlessArgs {
  /** Whether or not to deploy artifacts after building them. */
  deploy?: boolean;
  /** Whether or not to force full deployment, equivalent to serverless C(--force) option. */
  force?: boolean;
  /** AWS region to deploy the service to. */
  region?: string;
  /** The path of a serverless framework binary relative to the O(service_path), for example V(node_module/.bin/serverless). */
  serverless_bin_path?: string;
  /** The path to the root of the Serverless Service to be operated on. */
  service_path: string;
  /** The name of the serverless framework project stage to deploy to. */
  stage?: string;
  /** Goal state of given stage/project. */
  state?: "absent" | "present";
  /** Shows all stack events during deployment, and display any Stack Output. */
  verbose?: boolean;
}

export interface ServerlessReturn {
  /** Full C(serverless) command run by this module, in case you want to re-run the command outside the module. */
  command?: string;
  /** The service name specified in the serverless.yml that was just deployed. */
  service_name?: string;
  /** Whether the stack for the serverless project is present/absent. */
  state?: string;
}

export const serverless = defineModule<ServerlessArgs, ServerlessReturn>("community.general.serverless");
