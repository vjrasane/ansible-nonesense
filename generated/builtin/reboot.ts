// Auto-generated from: ansible.builtin.reboot
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface RebootArgs {
  /** Command to run that returns a unique string indicating the last time the system was booted. */
  boot_time_command?: string;
  /** Maximum seconds to wait for a successful connection to the managed hosts before trying again. */
  connect_timeout?: number;
  /** Message to display to users before reboot. */
  msg?: string;
  /** Seconds to wait after the reboot command was successful before attempting to validate the system rebooted successfully. */
  post_reboot_delay?: number;
  /** Seconds to wait before reboot. Passed as a parameter to the reboot command. */
  pre_reboot_delay?: number;
  /** Command to run that reboots the system, including any parameters passed to the command. */
  reboot_command?: string;
  /** Maximum seconds to wait for machine to reboot and respond to a test command. */
  reboot_timeout?: number;
  /** Paths to search on the remote machine for the C(shutdown) command. */
  search_paths?: string | string[];
  /** Command to run on the rebooted host and expect success from to determine the machine is ready for further tasks. */
  test_command?: string;
}

export interface RebootReturn {
  /** The number of seconds that elapsed waiting for the system to be rebooted. */
  elapsed?: number;
  /** true if the machine was rebooted */
  rebooted?: boolean;
}

export const reboot = defineModule<RebootArgs, RebootReturn>("ansible.builtin.reboot");
