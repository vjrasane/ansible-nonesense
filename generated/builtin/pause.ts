// Auto-generated from: ansible.builtin.pause
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PauseArgs {
  /** Controls whether or not keyboard input is shown when typing. */
  echo?: boolean;
  /** A positive number of minutes to pause for. */
  minutes?: string;
  /** Optional text to use for the prompt message. */
  prompt?: string;
  /** A positive number of seconds to pause for. */
  seconds?: string;
}

export interface PauseReturn {
  /** Time paused in seconds */
  delta?: string;
  /** Value of echo setting */
  echo?: boolean;
  /** Time when started pausing */
  start?: string;
  /** Output of pause module */
  stdout?: string;
  /** Time when ended pausing */
  stop?: string;
  /** User input from interactive console */
  user_input?: string;
}

export const pause = defineModule<PauseArgs, PauseReturn>("ansible.builtin.pause");
