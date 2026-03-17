// Auto-generated from: ansible.builtin.validate_argument_spec
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ValidateArgumentSpecArgs {
  /** A dictionary like AnsibleModule argument_spec. */
  argument_spec: string;
  /** A dictionary of the arguments that will be validated according to argument_spec. */
  provided_arguments?: string;
}

export interface ValidateArgumentSpecReturn {
  /** A list of arg validation errors. */
  argument_errors?: string | string[];
  /** A dict of the data from the 'argument_spec' arg. */
  argument_spec_data?: Record<string, unknown>;
  /** A dict of info about where validate_args_spec was used */
  validate_args_context?: Record<string, unknown>;
}

export const validate_argument_spec = defineModule<ValidateArgumentSpecArgs, ValidateArgumentSpecReturn>("ansible.builtin.validate_argument_spec");
