// Auto-generated from: community.general.vmadm
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface VmadmArgs {
  /** When enabled, the zone dataset is mounted on C(/zones/archive) upon removal. */
  archive_on_delete?: boolean;
  /** Whether or not a VM is booted when the system is rebooted. */
  autoboot?: boolean;
  /** Set the boot order for KVM VMs. */
  boot?: string;
  /** Type of virtual machine. The V(bhyve) option was added in community.general 0.2.0. */
  brand?: "joyent" | "joyent-minimal" | "lx" | "kvm" | "bhyve";
  /** Sets a limit on the amount of CPU time that can be used by a VM. Use V(0) for no cap. */
  cpu_cap?: number;
  /** Sets a limit on the number of fair share scheduler (FSS) CPU shares for a VM. This limit is relative to all other VMs on the system. */
  cpu_shares?: number;
  /** Control the type of virtual CPU exposed to KVM VMs. */
  cpu_type?: "qemu64" | "host";
  /** Metadata to be set and associated with this VM, this contain customer modifiable keys. */
  customer_metadata?: Record<string, unknown>;
  /** Whether to delegate a ZFS dataset to an OS VM. */
  delegate_dataset?: boolean;
  /** Default value for a virtual disk model for KVM guests. */
  disk_driver?: string;
  /** A list of disks to add, valid properties are documented in vmadm(1M). */
  disks?: Record<string, unknown> | Record<string, unknown>[];
  /** Domain value for C(/etc/hosts). */
  dns_domain?: string;
  /** Docker images need this flag enabled along with the O(brand) set to C(lx). */
  docker?: boolean;
  /** Mount additional filesystems into an OS VM. */
  filesystems?: Record<string, unknown> | Record<string, unknown>[];
  /** Enables the firewall, allowing fwadm(1M) rules to be applied. */
  firewall_enabled?: boolean;
  /** This sets an upper bound for the amount of space that a bhyve instance may use for its disks and snapshots of those disks (in MiBs). */
  flexible_disk_size?: number;
  /** Force a particular action (in other words, stop or delete a VM). */
  force?: boolean;
  /** Comma separated list of filesystem types this zone is allowed to mount. */
  fs_allowed?: string;
  /** Zone/VM hostname. */
  hostname?: string;
  /** Image UUID. */
  image_uuid?: string;
  /** Adds an C(@indestructible) snapshot to delegated datasets. */
  indestructible_delegated?: boolean;
  /** Adds an C(@indestructible) snapshot to zoneroot. */
  indestructible_zoneroot?: boolean;
  /** Metadata to be set and associated with this VM, this contains operator generated keys. */
  internal_metadata?: Record<string, unknown>;
  /** List of namespaces to be set as C(internal_metadata-only); these namespaces come from O(internal_metadata) rather than O(customer_metadata). */
  internal_metadata_namespace?: string;
  /** Kernel version to emulate for LX VMs. */
  kernel_version?: string;
  /** Set (comma separated) list of privileges the zone is allowed to use. */
  limit_priv?: string;
  /** Resolvers in C(/etc/resolv.conf) are updated when updating the O(resolvers) property. */
  maintain_resolvers?: boolean;
  /** Total amount of memory (in MiBs) on the host that can be locked by this VM. */
  max_locked_memory?: number;
  /** Maximum number of lightweight processes this VM is allowed to have running. */
  max_lwps?: number;
  /** Maximum amount of memory (in MiBs) on the host that the VM is allowed to use. */
  max_physical_memory?: number;
  /** Maximum amount of virtual memory (in MiBs) the VM is allowed to use. */
  max_swap?: number;
  /** Timeout in seconds (or 0 to disable) for the C(svc:/smartdc/mdata:execute) service that runs user-scripts in the zone. */
  mdata_exec_timeout?: number;
  /** Name of the VM. vmadm(1M) uses this as an optional name. */
  name?: string;
  /** Default value for a virtual NIC model for KVM guests. */
  nic_driver?: string;
  /** A list of nics to add, valid properties are documented in vmadm(1M). */
  nics?: Record<string, unknown> | Record<string, unknown>[];
  /** Consider the provisioning complete when the VM first starts, rather than when the VM has rebooted. */
  nowait?: boolean;
  /** Define the UUID of the owner of the VM. */
  owner_uuid?: string;
  /** Additional qemu cmdline arguments for KVM guests. */
  qemu_extra_opts?: string;
  /** Additional qemu arguments for KVM guests. This overwrites the default arguments provided by vmadm(1M) and should only be used for debugging. */
  qemu_opts?: string;
  /** Quota on zone filesystems (in MiBs). */
  quota?: number;
  /** Amount of virtual RAM for a KVM guest (in MiBs). */
  ram?: number;
  /** List of resolvers to be put into C(/etc/resolv.conf). */
  resolvers?: string | string[];
  /** Dictionary that maps destinations to gateways, these are set as static routes in the VM. */
  routes?: Record<string, unknown>;
  /** Addition options for SPICE-enabled KVM VMs. */
  spice_opts?: string;
  /** Password required to connect to SPICE. By default no password is set. Please note this can be read from the Global Zone. */
  spice_password?: string;
  /** States for the VM to be in. Please note that V(present), V(stopped) and V(restarted) operate on a VM that is currently provisioned. V(present) means that the VM is created if it was absent, and that it is in a running state. V(absent) shutdowns the zone before removing it. V(stopped) means the zone is created if it does not exist already, before shutting it down. */
  state?: "present" | "running" | "absent" | "deleted" | "stopped" | "created" | "restarted" | "rebooted";
  /** Amount of memory (in MiBs) that is available in the VM for the C(/tmp) filesystem. */
  tmpfs?: number;
  /** UUID of the VM. Can either be a full UUID or V(*) for all VMs. */
  uuid?: string;
  /** Number of virtual CPUs for a KVM guest. */
  vcpus?: number;
  /** Specify VGA emulation used by KVM VMs. */
  vga?: string;
  /** Number of packets that can be sent in a single flush of the tx queue of virtio NICs. */
  virtio_txburst?: number;
  /** Timeout (in nanoseconds) for the TX timer of virtio NICs. */
  virtio_txtimer?: number;
  /** Password required to connect to VNC. By default no password is set. Please note this can be read from the Global Zone. */
  vnc_password?: string;
  /** TCP port to listen of the VNC server. Or set V(0) for random, or V(-1) to disable. */
  vnc_port?: number;
  /** Specifies compression algorithm used for this VMs data dataset. This option only has effect on delegated datasets. */
  zfs_data_compression?: string;
  /** Suggested block size (power of 2) for files in the delegated dataset's filesystem. */
  zfs_data_recsize?: number;
  /** Maximum number of filesystems the VM can have. */
  zfs_filesystem_limit?: number;
  /** IO throttle priority value relative to other VMs. */
  zfs_io_priority?: number;
  /** Specifies compression algorithm used for this VMs root dataset. This option only has effect on the zoneroot dataset. */
  zfs_root_compression?: string;
  /** Suggested block size (power of 2) for files in the zoneroot dataset's filesystem. */
  zfs_root_recsize?: number;
  /** Number of snapshots the VM can have. */
  zfs_snapshot_limit?: number;
  /** ZFS pool the VM's zone dataset is created in. */
  zpool?: string;
}

export interface VmadmReturn {
  /** Alias of the managed VM. */
  alias?: string;
  /** State of the target, after execution. */
  state?: string;
  /** UUID of the managed VM. */
  uuid?: string;
}

export const vmadm = defineModule<VmadmArgs, VmadmReturn>("community.general.vmadm");
