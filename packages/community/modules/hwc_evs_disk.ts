// Auto-generated from: community.general.hwc_evs_disk
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface HwcEvsDiskArgs {
  /** Specifies the AZ where you want to create the disk. */
  availability_zone: string;
  /** Specifies the ID of the backup that can be used to create a disk. This parameter is mandatory when you use a backup to create the disk. */
  backup_id?: string;
  /** Specifies the disk description. The value can contain a maximum of 255 bytes. */
  description?: string;
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** If the disk is created from a snapshot and linked cloning needs to be used, set this parameter to True. */
  enable_full_clone?: boolean;
  /** If this parameter is set to V(true), the disk device type is SCSI, which allows ECS OSs to directly access underlying storage media. SCSI reservation command is supported. If this parameter is set to V(false), the disk device type is VBD, which supports only simple SCSI read/write commands. */
  enable_scsi?: boolean;
  /** Specifies whether the disk is shareable. The default value is False. */
  enable_share?: boolean;
  /** Specifies the encryption ID. The length of it fixes at 36 bytes. */
  encryption_id?: string;
  /** Specifies the enterprise project ID. This ID is associated with the disk during the disk creation. If it is not specified, the disk is bound to the default enterprise project. */
  enterprise_project_id?: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** Specifies the image ID. If this parameter is specified, the disk is created from an image. BMS system disks cannot be created from BMS images. */
  image_id?: string;
  /** Specifies the disk name. The value can contain a maximum of 255 bytes. */
  name: string;
  /** The password to login with. */
  password: string;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Specifies the disk size, in GB. Its values are as follows, System disk 1 GB to 1024 GB, Data disk 10 GB to 32768 GB. This parameter is mandatory when you create an empty disk or use an image or a snapshot to create a disk. If you use an image or a snapshot to create a disk, the disk size must be greater than or equal to the image or snapshot size. This parameter is optional when you use a backup to create a disk. If this parameter is not specified, the disk size is equal to the backup size. */
  size?: number;
  /** Specifies the snapshot ID. If this parameter is specified, the disk is created from a snapshot. */
  snapshot_id?: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** The timeouts for each operations. */
  timeouts?: {
    create?: string;
    delete?: string;
    update?: string;
  };
  /** The user name to login with. */
  user: string;
  /** Specifies the disk type. Currently, the value can be SSD, SAS, or SATA. */
  volume_type: string;
}

export interface HwcEvsDiskReturn {
  /** Specifies the disk attachment information. */
  attachments?: unknown;
  /** Specifies the AZ where you want to create the disk. */
  availability_zone?: string;
  /** Specifies the ID of the backup that can be used to create a disk. This parameter is mandatory when you use a backup to create the disk. */
  backup_id?: string;
  /** Specifies the backup policy ID. */
  backup_policy_id?: string;
  /** Specifies the time when the disk was created. Time format is 'UTC YYYY-MM-DDTHH:MM:SS'. */
  created_at?: string;
  /** Specifies the disk description. The value can contain a maximum of 255 bytes. */
  description?: string;
  /** If the disk is created from a snapshot and linked cloning needs to be used, set this parameter to True. */
  enable_full_clone?: boolean;
  /** If this parameter is set to V(true), the disk device type is SCSI, which allows ECS OSs to directly access underlying storage media. SCSI reservation command is supported. If this parameter is set to V(false), the disk device type is VBD, which supports only simple SCSI read/write commands. */
  enable_scsi?: boolean;
  /** Specifies whether the disk is shareable. The default value is False. */
  enable_share?: boolean;
  /** Specifies the encryption ID. The length of it fixes at 36 bytes. */
  encryption_id?: string;
  /** Specifies the enterprise project ID. This ID is associated with the disk during the disk creation. If it is not specified, the disk is bound to the default enterprise project. */
  enterprise_project_id?: string;
  /** Specifies the image ID. If this parameter is specified, the disk is created from an image. BMS system disks cannot be created from BMS images. */
  image_id?: string;
  /** Specifies whether the disk is bootable. */
  is_bootable?: boolean;
  /** Specifies whether the disk is read-only or read/write. True indicates that the disk is read-only. False indicates that the disk is read/write. */
  is_readonly?: boolean;
  /** Specifies the disk name. The value can contain a maximum of 255 bytes. */
  name?: string;
  /** Specifies the disk size, in GB. Its values are as follows, System disk 1 GB to 1024 GB, Data disk 10 GB to 32768 GB. This parameter is mandatory when you create an empty disk or use an image or a snapshot to create a disk. If you use an image or a snapshot to create a disk, the disk size must be greater than or equal to the image or snapshot size. This parameter is optional when you use a backup to create a disk. If this parameter is not specified, the disk size is equal to the backup size. */
  size?: number;
  /** Specifies the snapshot ID. If this parameter is specified, the disk is created from a snapshot. */
  snapshot_id?: string;
  /** Specifies the source disk ID. This parameter has a value if the disk is created from a source disk. */
  source_volume_id?: string;
  /** Specifies the disk status. */
  status?: string;
  /** Specifies the disk tags. */
  tags?: Record<string, unknown>;
  /** Specifies the disk type. Currently, the value can be SSD, SAS, or SATA. */
  volume_type?: string;
}

export const hwc_evs_disk = defineModule<HwcEvsDiskArgs, HwcEvsDiskReturn>("community.general.hwc_evs_disk");
