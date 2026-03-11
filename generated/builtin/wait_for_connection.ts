// Auto-generated from: ansible.builtin.wait_for_connection
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface WaitForConnectionArgs {
  /** Maximum number of seconds to wait for a connection to happen before closing and retrying. */
  connect_timeout?: number;
  /** Number of seconds to wait before starting to poll. */
  delay?: number;
  /** Number of seconds to sleep between checks. */
  sleep?: number;
  /** Maximum number of seconds to wait for. */
  timeout?: number;
}

export interface WaitForConnectionReturn {
  /** The number of seconds that elapsed waiting for the connection to appear. */
  elapsed?: number;
}

export const wait_for_connection = defineModule<WaitForConnectionArgs, WaitForConnectionReturn>("ansible.builtin.wait_for_connection");
