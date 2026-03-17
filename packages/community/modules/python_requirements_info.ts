// Auto-generated from: community.general.python_requirements_info
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface PythonRequirementsInfoArgs {
  /** A list of version-likes or module names to check for installation. Supported operators: C(<), C(>), C(<=), C(>=), or C(==). */
  dependencies?: string | string[];
}

export interface PythonRequirementsInfoReturn {
  /** A dictionary of dependencies that did not satisfy the desired version. */
  mismatched?: Record<string, unknown>;
  /** A list of packages that could not be imported at all, and are not installed. */
  not_found?: string | string[];
  /** Path to the Python interpreter used. */
  python?: string;
  /** List of paths Python is looking for modules in. */
  python_system_path?: string | string[];
  /** Version of Python. */
  python_version?: string;
  /** Breakdown version of Python. */
  python_version_info?: Record<string, unknown>;
  /** A dictionary of dependencies that matched their desired versions. If no version was specified, then RV(ignore:desired) is V(null). */
  valid?: Record<string, unknown>;
}

export const python_requirements_info = defineModule<PythonRequirementsInfoArgs, PythonRequirementsInfoReturn>("community.general.python_requirements_info");
