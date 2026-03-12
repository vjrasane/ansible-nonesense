// Auto-generated from: community.general.emc_vnx_sg_member
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface EmcVnxSgMemberArgs {
  /** LUN ID to be added. */
  lunid: number;
  /** Name of the Storage group to manage. */
  name: string;
  /** Address of the SP of target/secondary storage. */
  sp_address: string;
  /** password for accessing SP. */
  sp_password?: string;
  /** Username for accessing SP. */
  sp_user?: string;
  /** Indicates the desired lunid state. */
  state?: "present" | "absent";
}

export interface EmcVnxSgMemberReturn {
  /** LUNID visible to hosts attached to the storage group. */
  hluid?: number;
}

export const emc_vnx_sg_member = defineModule<EmcVnxSgMemberArgs, EmcVnxSgMemberReturn>("community.general.emc_vnx_sg_member");
