// Auto-generated from: community.general.ssh_config
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SshConfigArgs {
  /** Sets the C(AddKeysToAgent) option. */
  add_keys_to_agent?: boolean;
  /** Sets the C(ControlMaster) option. */
  controlmaster?: "yes" | "no" | "ask" | "auto" | "autoask";
  /** Sets the C(ControlPath) option. */
  controlpath?: string;
  /** Sets the C(ControlPersist) option. */
  controlpersist?: string;
  /** Sets the C(DynamicForward) option. */
  dynamicforward?: string;
  /** Sets the C(ForwardAgent) option. */
  forward_agent?: boolean;
  /** Which group this configuration file belongs to. */
  group?: string;
  /** The endpoint this configuration is valid for. */
  host: string;
  /** Sets the C(HostKeyAlgorithms) option. */
  host_key_algorithms?: string;
  /** The actual host to connect to when connecting to the host defined. */
  hostname?: string;
  /** Specifies that SSH should only use the configured authentication identity and certificate files (either the default files, or those explicitly configured in the C(ssh_config) files or passed on the ssh command-line), even if C(ssh-agent) or a C(PKCS11Provider) or C(SecurityKeyProvider) offers more identities. */
  identities_only?: boolean;
  /** The path to an identity file (SSH private key) that is used when connecting to this host. */
  identity_file?: string;
  /** Allows specifying arbitrary SSH config entry options using a dictionary. */
  other_options?: Record<string, unknown>;
  /** The actual port to connect to when connecting to the host defined. */
  port?: string;
  /** Sets the C(ProxyCommand) option. */
  proxycommand?: string;
  /** Sets the C(ProxyJump) option. */
  proxyjump?: string;
  /** Specifies the user to log in as. */
  remote_user?: string;
  /** SSH config file. */
  ssh_config_file?: string;
  /** Whether a host entry should exist or not. */
  state?: "present" | "absent";
  /** Whether to strictly check the host key when doing connections to the remote host. */
  strict_host_key_checking?: "yes" | "no" | "ask" | "accept-new";
  /** Which user account this configuration file belongs to. */
  user?: string;
  /** Sets the user known hosts file option. */
  user_known_hosts_file?: string;
}

export interface SshConfigReturn {
  /** A list of host added. */
  hosts_added?: string | string[];
  /** A list of host diff changes. */
  hosts_change_diff?: string | string[];
  /** A list of host changed. */
  hosts_changed?: string | string[];
  /** A list of host removed. */
  hosts_removed?: string | string[];
}

export const ssh_config = defineModule<SshConfigArgs, SshConfigReturn>("community.general.ssh_config");
