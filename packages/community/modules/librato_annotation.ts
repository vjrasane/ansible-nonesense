// Auto-generated from: community.general.librato_annotation
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LibratoAnnotationArgs {
  /** Librato account API key. */
  api_key: string;
  /** The description contains extra metadata about a particular annotation. */
  description?: string;
  /** The unix timestamp indicating the time at which the event referenced by this annotation ended. */
  end_time?: number;
  /** See examples. */
  links?: Record<string, unknown> | Record<string, unknown>[];
  /** The annotation stream name. */
  name?: string;
  /** A string which describes the originating source of an annotation when that annotation is tracked across multiple members of a population. */
  source?: string;
  /** The unix timestamp indicating the time at which the event referenced by this annotation started. */
  start_time?: number;
  /** The title of an annotation is a string and may contain spaces. */
  title: string;
  /** Librato account username. */
  user: string;
}

export type LibratoAnnotationReturn = Record<string, unknown>;

export const librato_annotation = defineModule<LibratoAnnotationArgs, LibratoAnnotationReturn>("community.general.librato_annotation");
