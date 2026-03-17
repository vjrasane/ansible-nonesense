// Auto-generated from: community.general.pkg5_publisher
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface Pkg5PublisherArgs {
  /** Is the repository enabled or disabled? */
  enabled?: boolean;
  /** A path or URL to the repository mirror. */
  mirror?: string | string[];
  /** The publisher's name. */
  name: string;
  /** A path or URL to the repository. */
  origin?: string | string[];
  /** Whether to ensure that a publisher is present or absent. */
  state?: "present" | "absent";
  /** Packages installed from a sticky repository can only receive updates from that repository. */
  sticky?: boolean;
}

export type Pkg5PublisherReturn = Record<string, unknown>;

export const pkg5_publisher = defineModule<Pkg5PublisherArgs, Pkg5PublisherReturn>("community.general.pkg5_publisher");
