// Auto-generated from: community.general.spectrum_model_attrs
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SpectrumModelAttrsArgs {
  /** A list of attribute names and values to enforce. */
  attributes: Record<string, unknown> | Record<string, unknown>[];
  /** Model name. */
  name: string;
  /** Model type. */
  type: string;
  /** URL of OneClick server. */
  url: string;
  /** OneClick password. */
  url_password: string;
  /** OneClick username. */
  url_username: string;
  /** If V(false), it does not use a proxy, even if one is defined in an environment variable on the target hosts. */
  use_proxy?: boolean;
  /** Validate SSL certificates. Only change this to V(false) if you can guarantee that you are talking to the correct endpoint and there is no man-in-the-middle attack happening. */
  validate_certs?: boolean;
}

export interface SpectrumModelAttrsReturn {
  /** Dictionary of changed name or hex IDs (whichever was specified) to their new corresponding values. */
  changed_attrs?: Record<string, unknown>;
  /** Informational message on the job result. */
  msg?: string;
}

export const spectrum_model_attrs = defineModule<SpectrumModelAttrsArgs, SpectrumModelAttrsReturn>("community.general.spectrum_model_attrs");
