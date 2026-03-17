// Auto-generated from: community.general.composer
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ComposerArgs {
  /** Uses APCu to cache found/not-found classes. */
  apcu_autoloader?: boolean;
  /** Composer arguments like required package, version and so on. */
  arguments?: string;
  /** Autoload classes from classmap only. */
  classmap_authoritative?: boolean;
  /** Composer command like V(install), V(update) and so on. */
  command?: string;
  /** Path to composer executable on the remote host, if composer is not in E(PATH) or a custom composer is needed. */
  composer_executable?: string;
  /** Path to PHP executable on the remote host, if PHP is not in E(PATH). */
  executable?: string;
  /** Runs the specified command globally. */
  global_command?: boolean;
  /** Ignore C(php), C(hhvm), C(lib-*) and C(ext-*) requirements and force the installation even if the local machine does not fulfill these. */
  ignore_platform_reqs?: boolean;
  /** Disables installation of require-dev packages (see C(--no-dev)). */
  no_dev?: boolean;
  /** Disables all plugins (see C(--no-plugins)). */
  no_plugins?: boolean;
  /** Skips the execution of all scripts defined in composer.json (see C(--no-scripts)). */
  no_scripts?: boolean;
  /** Optimize autoloader during autoloader dump (see C(--optimize-autoloader)). */
  optimize_autoloader?: boolean;
  /** Forces installation from package dist even for dev versions (see C(--prefer-dist)). */
  prefer_dist?: boolean;
  /** Forces installation from package sources when possible (see C(--prefer-source)). */
  prefer_source?: boolean;
  /** Directory of your project (see C(--working-dir)). This is required when the command is not run globally. */
  working_dir?: string;
}

export type ComposerReturn = Record<string, unknown>;

export const composer = defineModule<ComposerArgs, ComposerReturn>("community.general.composer");
