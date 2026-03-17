// Auto-generated from: community.general.xattr
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface XattrArgs {
  /** If V(true), dereferences symlinks and sets/gets attributes on symlink target, otherwise acts on symlink itself. */
  follow?: boolean;
  /** The name of a specific Extended attribute key to set/retrieve. */
  key?: string;
  /** Namespace of the named name/key. */
  namespace?: string;
  /** The full path of the file/object to get the facts of. */
  path: string;
  /** Defines which state you want to do. */
  state?: "absent" | "all" | "keys" | "present" | "read";
  /** The value to set the named name/key to, it automatically sets the O(state) to V(present). */
  value?: string;
}

export type XattrReturn = Record<string, unknown>;

export const xattr = defineModule<XattrArgs, XattrReturn>("community.general.xattr");
