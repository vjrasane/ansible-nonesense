// Auto-generated from: community.general.gem
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface GemArgs {
  /** Install executables into a specific directory. */
  bindir?: string;
  /** Allow adding build flags for gem compilation. */
  build_flags?: string;
  /** Rewrite the shebang line on installed scripts to use /usr/bin/env. */
  env_shebang?: boolean;
  /** Override the path to the gem executable. */
  executable?: string;
  /** Force gem to (un-)install, bypassing dependency checks. */
  force?: boolean;
  /** The path to a local gem used as installation source. */
  gem_source?: string;
  /** Whether to include dependencies or not. */
  include_dependencies?: boolean;
  /** Install with or without docs. */
  include_doc?: boolean;
  /** Install the gems into a specific directory. These gems are independent from the global installed ones. Specifying this requires user_install to be false. */
  install_dir?: string;
  /** The name of the gem to be managed. */
  name: string;
  /** Avoid loading any C(.gemrc) file. Ignored for RubyGems prior to 2.5.2. */
  norc?: boolean;
  /** Allow installation of pre-release versions of the gem. */
  pre_release?: boolean;
  /** The repository from which the gem is installed. */
  repository?: string;
  /** The desired state of the gem. V(latest) ensures that the latest version is installed. */
  state?: "present" | "absent" | "latest";
  /** Install gem in user's local gems cache or for all users. */
  user_install?: boolean;
  /** Version of the gem to be installed/removed. */
  version?: string;
}

export type GemReturn = Record<string, unknown>;

export const gem = defineModule<GemArgs, GemReturn>("community.general.gem");
