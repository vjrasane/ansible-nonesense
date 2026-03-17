// Auto-generated from: community.general.supervisorctl
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SupervisorctlArgs {
  /** The supervisor configuration file path. */
  config?: string;
  /** The name of the supervisord program or group to manage. */
  name: string;
  /** Password to use for authentication. */
  password?: string;
  /** URL on which supervisord server is listening. */
  server_url?: string;
  /** The signal to send to the program/group, when combined with the V(signalled) state. Required when l(state=signalled). */
  signal?: string;
  /** The desired state of program/group. */
  state: "present" | "started" | "stopped" | "restarted" | "absent" | "signalled";
  /** Use O(stop_before_removing=true) to stop the program/group before removing it. */
  stop_before_removing?: boolean;
  /** Path to C(supervisorctl) executable. */
  supervisorctl_path?: string;
  /** Username to use for authentication. */
  username?: string;
}

export type SupervisorctlReturn = Record<string, unknown>;

export const supervisorctl = defineModule<SupervisorctlArgs, SupervisorctlReturn>("community.general.supervisorctl");
