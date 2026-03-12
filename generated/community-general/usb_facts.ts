// Auto-generated from: community.general.usb_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export type UsbFactsArgs = Record<string, unknown>;

export interface UsbFactsReturn {
  /** Dictionary containing details of connected USB devices. */
  ansible_facts?: Record<string, unknown>;
}

export const usb_facts = defineModule<UsbFactsArgs, UsbFactsReturn>("community.general.usb_facts");
