// Auto-generated from: community.general.pritunl_org
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PritunlOrgArgs {
  /** If O(force) is V(true) and O(state) is V(absent), the module deletes the organization, no matter if it contains users or not. By default O(force) is V(false), which causes the module to fail the deletion of the organization when it contains users. */
  force?: boolean;
  /** The name of the organization to manage in Pritunl. */
  name: string;
  /** API Secret found in Administrators > USERNAME > API Secret. */
  pritunl_api_secret: string;
  /** API Token of a Pritunl admin user. */
  pritunl_api_token: string;
  /** URL and port of the Pritunl server on which the API is enabled. */
  pritunl_url: string;
  /** If V(present), the module adds organization O(name) to Pritunl. If V(absent), attempt to delete the organization from Pritunl (please read about O(force) usage). */
  state?: "present" | "absent";
  /** If certificates should be validated or not. */
  validate_certs?: boolean;
}

export interface PritunlOrgReturn {
  /** JSON representation of a Pritunl Organization. */
  response?: Record<string, unknown>;
}

export const pritunl_org = defineModule<PritunlOrgArgs, PritunlOrgReturn>("community.general.pritunl_org");
