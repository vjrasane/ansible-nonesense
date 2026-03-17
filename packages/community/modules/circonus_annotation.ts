// Auto-generated from: community.general.circonus_annotation
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface CirconusAnnotationArgs {
  /** Circonus API key. */
  api_key: string;
  /** Annotation Category. */
  category: string;
  /** Description of annotation. */
  description: string;
  /** Duration in seconds of annotation. */
  duration?: number;
  /** Unix timestamp of event start. */
  start?: number;
  /** Unix timestamp of event end. */
  stop?: number;
  /** Title of annotation. */
  title: string;
}

export interface CirconusAnnotationReturn {
  /** Details about the created annotation. */
  annotation?: unknown;
}

export const circonus_annotation = defineModule<CirconusAnnotationArgs, CirconusAnnotationReturn>("community.general.circonus_annotation");
