// Auto-generated from: community.general.lxd_container
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface LxdContainerArgs {
  /** The architecture for the instance (for example V(x86_64) or V(i686)). */
  architecture?: string;
  /** The client certificate file path. */
  client_cert?: string;
  /** The client certificate key file path. */
  client_key?: string;
  /** The config for the instance (for example V({"limits.cpu": "2"})). */
  config?: Record<string, unknown>;
  /** The devices for the instance (for example V({ "rootfs": { "path": "/dev/kvm", "type": "unix-char" }})). */
  devices?: Record<string, unknown>;
  /** Whether or not the instance is ephemeral (for example V(true) or V(false)). */
  ephemeral?: boolean;
  /** If this is V(true), the C(lxd_container) forces to stop the instance when it stops or restarts the instance. */
  force_stop?: boolean;
  /** If set to V(true), options starting with C(volatile.) are ignored. As a result, they are reapplied for each execution. */
  ignore_volatile_options?: boolean;
  /** Name of an instance. */
  name: string;
  /** Profile to be used by the instance. */
  profiles?: string | string[];
  /** Project of an instance. */
  project?: string;
  /** The unix domain socket path when LXD is installed by snap package manager. */
  snap_url?: string;
  /** The source for the instance (for example V({ "type": "image", "mode": "pull", "server": "https://cloud-images.ubuntu.com/releases/", "protocol": "simplestreams", "alias": "22.04" })). */
  source?: Record<string, unknown>;
  /** Define the state of an instance. */
  state?: "started" | "stopped" | "restarted" | "absent" | "frozen";
  /** For cluster deployments. It attempts to create an instance on a target node. If the instance exists elsewhere in a cluster, then it is not replaced nor moved. The name should respond to same name of the node you see in C(lxc cluster list). */
  target?: string;
  /** A timeout for changing the state of the instance. */
  timeout?: number;
  /** The client trusted password. */
  trust_password?: string;
  /** Instance type can be either V(virtual-machine) or V(container). */
  type?: "container" | "virtual-machine";
  /** The unix domain socket path or the https URL for the LXD server. */
  url?: string;
  /** If set to V(true), the tasks wait until the task reports a success status when performing container operations. */
  wait_for_container?: boolean;
  /** If this is V(true), the C(lxd_container) waits until IPv4 addresses are set to the all network interfaces in the instance after starting or restarting. */
  wait_for_ipv4_addresses?: boolean;
}

export interface LxdContainerReturn {
  /** List of actions performed for the instance. */
  actions?: string | string[];
  /** Mapping from the network device name to a list of IPv4 addresses in the instance. */
  addresses?: Record<string, unknown>;
  /** The logs of requests and responses. */
  logs?: string | string[];
  /** The old state of the instance. */
  old_state?: string;
}

export const lxd_container = defineModule<LxdContainerArgs, LxdContainerReturn>("community.general.lxd_container");
