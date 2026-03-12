// Auto-generated from: community.general.vdo
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface VdoArgs {
  /** Specifies the number of threads to use for acknowledging completion of requested VDO I/O operations. Valid values are integer values from V(1) to V(100) (lower numbers are preferable due to overhead). The default is V(1). Existing volumes maintain their previously configured setting unless a different value is specified in the playbook. */
  ackthreads?: string;
  /** The C(activate) status for a VDO volume. If this is set to V(false), the VDO volume cannot be started, and it does not start on system startup. However, on initial creation, a VDO volume with O(activated=false) is set to be running until stopped. This is the default behavior of the C(vdo create) command; it provides the user an opportunity to write a base amount of metadata (filesystem, LVM headers, and so on) to the VDO volume prior to stopping the volume, and leaving it deactivated until ready to use. */
  activated?: boolean;
  /** Specifies the number of threads to use for submitting I/O operations to the storage device. Valid values are integer values from V(1) to V(100) (lower numbers are preferable due to overhead). The default is V(4). Existing volumes maintain their previously configured setting unless a different value is specified in the playbook. */
  biothreads?: string;
  /** The amount of memory allocated for caching block map pages, in megabytes (or may be issued with an LVM-style suffix of K, M, G, or T). The default (and minimum) value is V(128M). The value specifies the size of the cache; there is a 15% memory usage overhead. Each 1.25G of block map covers 1T of logical blocks, therefore a small amount of block map cache memory can cache a significantly large amount of block map data. */
  blockmapcachesize?: string;
  /** Configures whether compression is enabled. The default for a created volume is V(enabled). Existing volumes maintain their previously configured setting unless a different value is specified in the playbook. */
  compression?: "disabled" | "enabled";
  /** Specifies the number of threads to use for CPU-intensive work such as hashing or compression. Valid values are integer values from V(1) to V(100) (lower numbers are preferable due to overhead). The default is V(2). Existing volumes maintain their previously configured setting unless a different value is specified in the playbook. */
  cputhreads?: string;
  /** Configures whether deduplication is enabled. The default for a created volume is V(enabled). Existing volumes maintain their previously configured setting unless a different value is specified in the playbook. */
  deduplication?: "disabled" | "enabled";
  /** The full path of the device to use for VDO storage. */
  device?: string;
  /** Enables 512-byte emulation mode, allowing drivers or filesystems to access the VDO volume at 512-byte granularity, instead of the default 4096-byte granularity. */
  emulate512?: boolean;
  /** When creating a volume, ignores any existing file system or VDO signature already present in the storage device. When stopping or removing a VDO volume, first unmounts the file system stored on the device if mounted. */
  force?: boolean;
  /** Specifies whether to attempt to execute a C(growphysical) operation, if there is enough unused space on the device. A C(growphysical) operation is executed if there is at least 64 GB of free space, relative to the previous physical size of the affected VDO volume. */
  growphysical?: boolean;
  /** Specifies the amount of index memory in gigabytes. The default is V(0.25). The special decimal values V(0.25), V(0.5), and V(0.75) can be used, as can any positive integer. This option is only available when creating a new volume, and cannot be changed for an existing volume. */
  indexmem?: string;
  /** Specifies the index mode of the Albireo index. */
  indexmode?: "dense" | "sparse";
  /** The logical size of the VDO volume (in megabytes, or LVM suffix format). If not specified for a new volume, this defaults to the same size as the underlying storage device, which is specified in the O(device) parameter. Existing volumes maintain their size if the O(logicalsize) parameter is not specified, or is smaller than or identical to the current size. If the specified size is larger than the current size, a C(growlogical) operation is performed. */
  logicalsize?: string;
  /** Specifies the number of threads across which to subdivide parts of the VDO processing based on logical block addresses. Valid values are integer values from V(1) to V(100) (lower numbers are preferable due to overhead). The default is V(1). Existing volumes maintain their previously configured setting unless a different value is specified in the playbook. */
  logicalthreads?: string;
  /** The name of the VDO volume. */
  name: string;
  /** Specifies the number of threads across which to subdivide parts of the VDO processing based on physical block addresses. Valid values are integer values from V(1) to V(16) (lower numbers are preferable due to overhead). The physical space used by the VDO volume must be larger than (O(slabsize) * O(physicalthreads)). The default is V(1). Existing volumes maintain their previously configured setting unless a different value is specified in the playbook. */
  physicalthreads?: string;
  /** Enables or disables the read cache. The default is V(disabled). Choosing V(enabled) enables a read cache which may improve performance for workloads of high deduplication, read workloads with a high level of compression, or on hard disk storage. Existing volumes maintain their previously configured setting unless a different value is specified in the playbook. */
  readcache?: "disabled" | "enabled";
  /** Specifies the extra VDO device read cache size in megabytes. This is in addition to a system-defined minimum. Using a value with a suffix of K, M, G, or T is optional. The default value is V(0). 1.125 MB of memory per bio thread is used per 1 MB of read cache specified (for example, a VDO volume configured with 4 bio threads has a read cache memory usage overhead of 4.5 MB per 1 MB of read cache specified). Existing volumes maintain their previously configured setting unless a different value is specified in the playbook. */
  readcachesize?: string;
  /** Whether this VDO volume is running. */
  running?: boolean;
  /** The size of the increment by which the physical size of a VDO volume is grown, in megabytes (or may be issued with an LVM-style suffix of K, M, G, or T). Must be a power of two between 128M and 32G. The default is V(2G), which supports volumes having a physical size up to 16T. The maximum, V(32G), supports a physical size of up to 256T. This option is only available when creating a new volume, and cannot be changed for an existing volume. */
  slabsize?: string;
  /** Whether this VDO volume should be V(present) or V(absent). If a V(present) VDO volume does not exist, it is created. If a V(present) VDO volume already exists, it is modified by updating the configuration, which takes effect when the VDO volume is restarted. Not all parameters of an existing VDO volume can be modified; the C(statusparamkeys) list in the code contains the parameters that can be modified after creation. If an V(absent) VDO volume does not exist, it is not removed. */
  state?: "absent" | "present";
  /** Specifies the write policy of the VDO volume. */
  writepolicy?: "async" | "auto" | "sync";
}

export type VdoReturn = Record<string, unknown>;

export const vdo = defineModule<VdoArgs, VdoReturn>("community.general.vdo");
