// Auto-generated from: community.general.gio_mime
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GioMimeArgs {
  /** Default handler set for the MIME type. */
  handler: string;
  /** MIME type for which a default handler is set. */
  mime_type: string;
}

export interface GioMimeReturn {
  /** The handler set as default. */
  handler?: string;
  /** Version of gio. */
  version?: string;
}

export const gio_mime = defineModule<GioMimeArgs, GioMimeReturn>("community.general.gio_mime");
