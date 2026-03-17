// Auto-generated from: community.general.imgadm
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ImgadmArgs {
  /** Force a given operation (where supported by imgadm(8)). */
  force?: boolean;
  /** The zpool to import to or delete images from. */
  pool?: string;
  /** URI for the image source. */
  source?: string;
  /** State the object operated on should be in. V(imported) is an alias for for V(present) and V(deleted) for V(absent). When set to V(vacuumed) and O(uuid=*), it removes all unused images. */
  state: "present" | "absent" | "deleted" | "imported" | "updated" | "vacuumed";
  /** Type for image sources. */
  type?: "imgapi" | "docker" | "dsapi";
  /** Image UUID. Can either be a full UUID or V(*) for all images. */
  uuid?: string;
}

export interface ImgadmReturn {
  /** Source that is managed. */
  source?: string;
  /** State of the target, after execution. */
  state?: string;
  /** UUID for an image operated on. */
  uuid?: string;
}

export const imgadm = defineModule<ImgadmArgs, ImgadmReturn>("community.general.imgadm");
