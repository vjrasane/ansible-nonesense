// Auto-generated from: community.general.sensu_subscription
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SensuSubscriptionArgs {
  /** Create a backup file (if yes), including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. */
  backup?: boolean;
  /** The name of the channel. */
  name: string;
  /** Path to the subscriptions JSON file. */
  path?: string;
  /** Whether the machine should subscribe or unsubscribe from the channel. */
  state?: "present" | "absent";
}

export interface SensuSubscriptionReturn {
  /** The reasons why the module changed or did not change something. */
  reasons?: string | string[];
}

export const sensu_subscription = defineModule<SensuSubscriptionArgs, SensuSubscriptionReturn>("community.general.sensu_subscription");
