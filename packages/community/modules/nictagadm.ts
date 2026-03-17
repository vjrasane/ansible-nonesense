// Auto-generated from: community.general.nictagadm
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface NictagadmArgs {
  /** Specifies that the nic tag is attached to a created O(etherstub). */
  etherstub?: boolean;
  /** When O(state=absent) this switch uses the C(-f) parameter and delete the nic tag regardless of existing VMs. */
  force?: boolean;
  /** Specifies the O(mac) address to attach the nic tag to when not creating an O(etherstub). */
  mac?: string;
  /** Specifies the size of the O(mtu) of the desired nic tag. */
  mtu?: number;
  /** Name of the nic tag. */
  name: string;
  /** Create or delete a SmartOS nic tag. */
  state?: "absent" | "present";
}

export interface NictagadmReturn {
  /** Specifies if the nic tag was created and attached to an etherstub. */
  etherstub?: boolean;
  /** Shows if C(-f) was used during the deletion of a nic tag. */
  force?: boolean;
  /** MAC Address that the nic tag was attached to. */
  mac?: string;
  /** Specifies which MTU size was passed during the nictagadm add command. mtu and etherstub are mutually exclusive. */
  mtu?: number;
  /** Nic tag name. */
  name?: string;
  /** State of the target. */
  state?: string;
}

export const nictagadm = defineModule<NictagadmArgs, NictagadmReturn>("community.general.nictagadm");
