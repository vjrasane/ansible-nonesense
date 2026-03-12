// Auto-generated from: community.general.packet_project
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PacketProjectArgs {
  /** Packet API token. You can also supply it in environment variable E(PACKET_API_TOKEN). */
  auth_token?: string;
  /** Custom data about the project to create. */
  custom_data?: string;
  /** UUID of the project which you want to remove. */
  id?: string;
  /** Name for/of the project. */
  name?: string;
  /** UUID of the organization to create a project for. */
  org_id?: string;
  /** Payment method is name of one of the payment methods available to your user. */
  payment_method?: string;
  /** Indicate desired state of the target. */
  state?: "present" | "absent";
}

export interface PacketProjectReturn {
  /** UUID of addressed project. */
  id?: string;
  /** Name of addressed project. */
  name?: string;
}

export const packet_project = defineModule<PacketProjectArgs, PacketProjectReturn>("community.general.packet_project");
