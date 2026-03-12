// Auto-generated from: community.general.logstash_plugin
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LogstashPluginArgs {
  /** Install plugin with that name. */
  name: string;
  /** Specify logstash-plugin to use for plugin management. */
  plugin_bin?: string;
  /** Proxy host to use during plugin installation. */
  proxy_host?: string;
  /** Proxy port to use during plugin installation. */
  proxy_port?: string;
  /** Apply plugin state. */
  state?: "present" | "absent";
  /** Specify version of the plugin to install. If the plugin exists with a previous version, it is B(not) updated. */
  version?: string;
}

export type LogstashPluginReturn = Record<string, unknown>;

export const logstash_plugin = defineModule<LogstashPluginArgs, LogstashPluginReturn>("community.general.logstash_plugin");
