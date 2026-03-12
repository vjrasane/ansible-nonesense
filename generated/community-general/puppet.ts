// Auto-generated from: community.general.puppet
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PuppetArgs {
  /** The name to use when handling certificates. */
  certname?: string;
  /** Path to the directory containing the puppet.conf file. */
  confdir?: string;
  /** Enable full debugging. */
  debug?: boolean;
  /** Puppet environment to be used. */
  environment?: string;
  /** The lang environment to use when running the puppet agent. */
  environment_lang?: string;
  /** Execute a specific piece of Puppet code. */
  execute?: string;
  /** Basename of the facter output file. */
  facter_basename?: string;
  /** A dict of values to pass in as persistent external facter facts. */
  facts?: Record<string, unknown>;
  /** Where the puppet logs should go, if puppet apply is being used. */
  logdest?: "all" | "stdout" | "syslog";
  /** Path to the manifest file to run puppet apply on. */
  manifest?: string;
  /** Path to an alternate location for puppet modules. */
  modulepath?: string;
  /** Override puppet.conf noop mode. */
  noop?: boolean;
  /** The hostname of the puppetmaster to contact. */
  puppetmaster?: string;
  /** Whether to print file changes details. */
  show_diff?: boolean;
  /** A list of puppet tags to be excluded. */
  skip_tags?: string | string[];
  /** Whether to print a transaction summary. */
  summarize?: boolean;
  /** A list of puppet tags to be used. */
  tags?: string | string[];
  /** How long to wait for C(puppet) to finish. */
  timeout?: string;
  /** Toggles use_srv_records flag. */
  use_srv_records?: boolean;
  /** Print extra information. */
  verbose?: boolean;
  /** The maximum amount of time C(puppet) should wait for an already running C(puppet) agent to finish before starting. */
  waitforlock?: string;
}

export type PuppetReturn = Record<string, unknown>;

export const puppet = defineModule<PuppetArgs, PuppetReturn>("community.general.puppet");
