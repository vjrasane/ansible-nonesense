// Auto-generated from: community.general.xdg_mime
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface XdgMimeArgs {
  /** Sets the default handler for the specified MIME types. */
  handler: string;
  /** One or more MIME types for which a default handler is set. */
  mime_types: string | string[];
}

export interface XdgMimeReturn {
  /** Currently set handlers for the passed MIME types. */
  current_handlers?: string | string[];
  /** Version of the C(xdg-mime) tool. */
  version?: string;
}

export const xdg_mime = defineModule<XdgMimeArgs, XdgMimeReturn>("community.general.xdg_mime");
