// Auto-generated from: community.general.kibana_plugin
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface KibanaPluginArgs {
  /** Whether to allow C(kibana) and C(kibana-plugin) to be run as root. Passes the C(--allow-root) flag to these commands. */
  allow_root?: boolean;
  /** Delete and re-install the plugin. It can be useful for plugins update. */
  force?: boolean;
  /** Name of the plugin to install. */
  name: string;
  /** Location of the Kibana binary. */
  plugin_bin?: string;
  /** Your configured plugin directory specified in Kibana. */
  plugin_dir?: string;
  /** Desired state of a plugin. */
  state?: "present" | "absent";
  /** Timeout setting: V(30s), V(1m), V(1h) and so on. */
  timeout?: string;
  /** Set exact URL to download the plugin from. */
  url?: string;
  /** Version of the plugin to be installed. */
  version?: string;
}

export interface KibanaPluginReturn {
  /** The launched command during plugin management (install / remove). */
  cmd?: string;
  /** The plugin name to install or remove. */
  name?: string;
  /** The state for the managed plugin. */
  state?: string;
  /** The timeout for plugin download. */
  timeout?: string;
  /** The URL from where the plugin is installed from. */
  url?: string;
}

export const kibana_plugin = defineModule<KibanaPluginArgs, KibanaPluginReturn>("community.general.kibana_plugin");
