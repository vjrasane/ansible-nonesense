// Auto-generated from: community.general.heroku_collaborator
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HerokuCollaboratorArgs {
  /** Heroku API key. */
  api_key?: string;
  /** List of Heroku App names. */
  apps: string | string[];
  /** Create or remove the heroku collaborator. */
  state?: "present" | "absent";
  /** Suppress email invitation when creating collaborator. */
  suppress_invitation?: boolean;
  /** User ID or e-mail. */
  user: string;
}

export type HerokuCollaboratorReturn = Record<string, unknown>;

export const heroku_collaborator = defineModule<HerokuCollaboratorArgs, HerokuCollaboratorReturn>("community.general.heroku_collaborator");
