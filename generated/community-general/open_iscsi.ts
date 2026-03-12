// Auto-generated from: community.general.open_iscsi
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OpenIscsiArgs {
  /** Whether the target node should be automatically connected at startup. */
  auto_node_startup?: boolean;
  /** Whether the target node portal should be automatically connected at startup. */
  auto_portal_startup?: boolean;
  /** Whether the list of target nodes on the portal should be (re)discovered and added to the persistent iSCSI database. */
  discover?: boolean;
  /** Whether the target node should be connected. */
  login?: boolean;
  /** The value for C(node.session.auth.authmethod). */
  node_auth?: string;
  /** The value for C(node.session.auth.password). */
  node_pass?: string;
  /** The value for C(node.session.auth.password_in). */
  node_pass_in?: string;
  /** The value for C(node.session.auth.username). */
  node_user?: string;
  /** The value for C(node.session.auth.username_in). */
  node_user_in?: string;
  /** The port on which the iSCSI target process listens. */
  port?: string;
  /** The domain name or IP address of the iSCSI target. */
  portal?: string;
  /** Rescan an established session for discovering new targets. */
  rescan?: boolean;
  /** Whether the list of nodes in the persistent iSCSI database should be returned by the module. */
  show_nodes?: boolean;
  /** The iSCSI target name. */
  target?: string;
}

export type OpenIscsiReturn = Record<string, unknown>;

export const open_iscsi = defineModule<OpenIscsiArgs, OpenIscsiReturn>("community.general.open_iscsi");
