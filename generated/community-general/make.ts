// Auto-generated from: community.general.make
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface MakeArgs {
  /** Change to this directory before running make. */
  chdir: string;
  /** Use a custom Makefile. */
  file?: string;
  /** Set the number of make jobs to run concurrently. */
  jobs?: number;
  /** Use a specific make binary. */
  make?: string;
  /** Any extra parameters to pass to make. */
  params?: Record<string, unknown>;
  /** The target to run. */
  target?: string;
  /** The list of targets to run. */
  targets?: string | string[];
}

export interface MakeReturn {
  /** The value of the module parameter O(chdir). */
  chdir?: string;
  /** The command built and executed by the module. */
  command?: string;
  /** The value of the module parameter O(file). */
  file?: string;
  /** The value of the module parameter O(jobs). */
  jobs?: number;
  /** The value of the module parameter O(params). */
  params?: Record<string, unknown>;
  /** The value of the module parameter O(target). */
  target?: string;
  /** The value of the module parameter O(targets). */
  targets?: string;
}

export const make = defineModule<MakeArgs, MakeReturn>("community.general.make");
