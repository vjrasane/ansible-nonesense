// Auto-generated from: community.general.parted
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PartedArgs {
  /** Set alignment for newly created partitions. Use V(undefined) for parted default alignment. */
  align?: "cylinder" | "minimal" | "none" | "optimal" | "undefined";
  /** The block device (disk) where to operate. */
  device: string;
  /** A list of the flags that has to be set on the partition. */
  flags?: string | string[];
  /** If specified and the partition does not exist, sets filesystem type to given partition. */
  fs_type?: string;
  /** Disk label type or partition table to use. */
  label?: "aix" | "amiga" | "bsd" | "dvh" | "gpt" | "loop" | "mac" | "msdos" | "pc98" | "sun";
  /** Sets the name for the partition number (GPT, Mac, MIPS and PC98 only). */
  name?: string;
  /** The partition number being affected. */
  number?: number;
  /** Where the partition ends as offset from the beginning of the disk, that is, the "distance" from the start of the disk. Negative numbers specify distance from the end of the disk. */
  part_end?: string;
  /** Where the partition starts as offset from the beginning of the disk, that is, the "distance" from the start of the disk. Negative numbers specify distance from the end of the disk. */
  part_start?: string;
  /** May be specified only with O(label=msdos) or O(label=dvh). */
  part_type?: "extended" | "logical" | "primary";
  /** Call C(resizepart) on existing partitions to match the size specified by O(part_end). */
  resize?: boolean;
  /** Whether to create or delete a partition. */
  state?: "absent" | "present" | "info";
  /** Selects the current default unit that Parted uses to display locations and capacities on the disk and to interpret those given by the user if they are not suffixed by an unit. */
  unit?: "s" | "B" | "KB" | "KiB" | "MB" | "MiB" | "GB" | "GiB" | "TB" | "TiB" | "%" | "cyl" | "chs" | "compact";
}

export interface PartedReturn {
  /** Current partition information. */
  partition_info?: unknown;
}

export const parted = defineModule<PartedArgs, PartedReturn>("community.general.parted");
