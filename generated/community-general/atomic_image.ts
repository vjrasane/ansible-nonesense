// Auto-generated from: community.general.atomic_image
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface AtomicImageArgs {
  /** Define the backend where the image is pulled. */
  backend?: "docker" | "ostree";
  /** Name of the container image. */
  name: string;
  /** Start or stop the container. */
  started?: boolean;
  /** The state of the container image. */
  state?: "absent" | "latest" | "present";
}

export interface AtomicImageReturn {
  /** The command standard output. */
  msg?: string;
}

export const atomic_image = defineModule<AtomicImageArgs, AtomicImageReturn>("community.general.atomic_image");
