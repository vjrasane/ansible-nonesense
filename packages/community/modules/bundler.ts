// Auto-generated from: community.general.bundler
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface BundlerArgs {
  /** Only applies if O(state=present). Specifies the directory to install any gem bins files to. When executed the bin files run within the context of the Gemfile and fail if any required gem dependencies are not installed. If O(chdir) is set then this path is relative to O(chdir). */
  binstub_directory?: string;
  /** The directory to execute the bundler commands from. This directory needs to contain a valid Gemfile or .bundle/ directory. */
  chdir?: string;
  /** Only applies if O(state=present). If set removes any gems on the target host that are not in the gemfile. */
  clean?: boolean;
  /** Only applies if O(state=present). If set it installs gems in C(./vendor/bundle) instead of the default location. Requires a C(Gemfile.lock) file to have been created prior. */
  deployment_mode?: boolean;
  /** A list of Gemfile groups to exclude during operations. This only applies when O(state=present). Bundler considers this a 'remembered' property for the Gemfile and automatically excludes groups in future operations even if O(exclude_groups) is not set. */
  exclude_groups?: string | string[];
  /** The path to the bundler executable. */
  executable?: string;
  /** A space separated string of additional commands that can be applied to the Bundler command. Refer to the Bundler documentation for more information. */
  extra_args?: string;
  /** Only applies if O(state=present). Specifies the directory to install the gems into. If O(chdir) is set then this path is relative to O(chdir). */
  gem_path?: string;
  /** Only applies if O(state=present). The path to the gemfile to use to install gems. */
  gemfile?: string;
  /** If set only installs gems from the cache on the target host. */
  local?: boolean;
  /** The desired state of the Gem bundle. V(latest) updates gems to the most recent, acceptable version. */
  state?: "present" | "latest";
  /** Only applies if O(state=present). Installs gems in the local user's cache or for all users. */
  user_install?: boolean;
}

export type BundlerReturn = Record<string, unknown>;

export const bundler = defineModule<BundlerArgs, BundlerReturn>("community.general.bundler");
