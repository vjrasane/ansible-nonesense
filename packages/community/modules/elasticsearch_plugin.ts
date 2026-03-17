// Auto-generated from: community.general.elasticsearch_plugin
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ElasticsearchPluginArgs {
  /** Force batch mode when installing plugins. This is only necessary if a plugin requires additional permissions and console detection fails. */
  force?: boolean;
  /** Name of the plugin to install. */
  name: string;
  /** Location of the plugin binary. If this file is not found, the default plugin binaries are used. */
  plugin_bin?: string;
  /** Your configured plugin directory specified in Elasticsearch. */
  plugin_dir?: string;
  /** Proxy host to use during plugin installation. */
  proxy_host?: string;
  /** Proxy port to use during plugin installation. */
  proxy_port?: string;
  /** Optionally set the source location to retrieve the plugin from. This can be a C(file://) URL to install from a local file, or a remote URL. If this is not set, the plugin location is just based on the name. */
  src?: string;
  /** Desired state of a plugin. */
  state?: "present" | "absent";
  /** Timeout setting: V(30s), V(1m), V(1h)... */
  timeout?: string;
  /** Set exact URL to download the plugin from (Only works for ES 1.x). */
  url?: string;
  /** Version of the plugin to be installed. If plugin exists with previous version, it is NOT updated. */
  version?: string;
}

export type ElasticsearchPluginReturn = Record<string, unknown>;

export const elasticsearch_plugin = defineModule<ElasticsearchPluginArgs, ElasticsearchPluginReturn>("community.general.elasticsearch_plugin");
