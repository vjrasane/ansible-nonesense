// Auto-generated from: community.general.selogin
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SeloginArgs {
  /** Run independent of selinux runtime state. */
  ignore_selinux_state?: boolean;
  /** A Linux user. */
  login: string;
  /** Reload SELinux policy after commit. */
  reload?: boolean;
  /** MLS/MCS Security Range (MLS/MCS Systems only) SELinux Range for SELinux login mapping defaults to the SELinux user record range. */
  selevel?: string;
  /** SELinux user name. */
  seuser?: string;
  /** Desired mapping value. */
  state?: "present" | "absent";
}

export type SeloginReturn = Record<string, unknown>;

export const selogin = defineModule<SeloginArgs, SeloginReturn>("community.general.selogin");
