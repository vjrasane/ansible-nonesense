// Auto-generated from: community.general.atomic_container
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface AtomicContainerArgs {
  /** Define the backend to use for the container. */
  backend: "docker" | "ostree";
  /** The image to use to install the container. */
  image: string;
  /** Define if it is an user or a system container. */
  mode?: "user" | "system";
  /** Name of the container. */
  name: string;
  /** Define the rootfs of the image. */
  rootfs?: string;
  /** State of the container. */
  state?: "absent" | "latest" | "present" | "rollback";
  /** Values for the installation of the container. */
  values?: string | string[];
}

export interface AtomicContainerReturn {
  /** The command standard output. */
  msg?: string;
}

export const atomic_container = defineModule<AtomicContainerArgs, AtomicContainerReturn>("community.general.atomic_container");
