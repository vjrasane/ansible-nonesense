// Auto-generated from: community.general.packet_volume_attachment
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PacketVolumeAttachmentArgs {
  /** Packet API token. You can also supply it in environment variable E(PACKET_API_TOKEN). */
  auth_token?: string;
  /** Selector for the device. */
  device?: string;
  /** UUID of the project to which the device and volume belong. */
  project_id: string;
  /** Indicate desired state of the attachment. */
  state?: "present" | "absent";
  /** Selector for the volume. */
  volume: string;
}

export interface PacketVolumeAttachmentReturn {
  /** UUID of device addressed by the module call. */
  device_id?: string;
  /** UUID of volume addressed by the module call. */
  volume_id?: string;
}

export const packet_volume_attachment = defineModule<PacketVolumeAttachmentArgs, PacketVolumeAttachmentReturn>("community.general.packet_volume_attachment");
