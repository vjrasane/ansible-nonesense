// Auto-generated from: ansible.builtin.hostname
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HostnameArgs {
  /** Name of the host. */
  name: string;
  /** Which strategy to use to update the hostname. */
  use?: "alpine" | "debian" | "freebsd" | "generic" | "macos" | "macosx" | "darwin" | "openbsd" | "openrc" | "redhat" | "sles" | "solaris" | "systemd";
}

export type HostnameReturn = Record<string, unknown>;

export const hostname = defineModule<HostnameArgs, HostnameReturn>("ansible.builtin.hostname");
