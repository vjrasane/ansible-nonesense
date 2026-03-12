// Auto-generated from: community.general.rhevm
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface RhevmArgs {
  /** This option uses complex arguments and is a list of items that specify the bootorder. */
  boot_order?: string | string[];
  /** The CD you wish to have mounted on the VM when O(state=cd). */
  cd_drive?: string;
  /** The RHEV/oVirt cluster in which you want you VM to start. */
  cluster?: string;
  /** This parameter is used to configure the CPU share. */
  cpu_share?: number;
  /** The RHEV/oVirt datacenter in which you want you VM to start. */
  datacenter?: string;
  /** This option sets the delete protection checkbox. */
  del_prot?: boolean;
  /** This option uses complex arguments and is a list of disks with the options V(name), V(size), and V(domain). */
  disks?: string | string[];
  /** This option uses complex arguments and is a list of interfaces with the options V(name) and V(vlan). */
  ifaces?: string | string[];
  /** The template to use for the VM. */
  image?: string;
  /** A boolean switch to make a secure or insecure connection to the server. */
  insecure_api?: boolean;
  /** The minimum amount of memory you wish to reserve for this system. */
  mempol?: number;
  /** The name of the VM. */
  name?: string;
  /** The operating system option in RHEV/oVirt. */
  osver?: string;
  /** The password for user authentication. */
  password: string;
  /** The port on which the API is reachable. */
  port?: number;
  /** The name/IP of your RHEV-m/oVirt instance. */
  server?: string;
  /** This serves to create/remove/update or powermanage your VM. */
  state?: "absent" | "cd" | "down" | "info" | "ping" | "present" | "restarted" | "up";
  /** The timeout you wish to define for power actions. */
  timeout?: number;
  /** To define if the VM is a server or desktop. */
  type?: "desktop" | "host" | "server";
  /** The user to authenticate with. */
  user?: string;
  /** To make your VM High Available. */
  vm_ha?: boolean;
  /** The number of CPUs you want in your VM. */
  vmcpu?: number;
  /** The host you wish your VM to run on. */
  vmhost?: string;
  /** The amount of memory you want your VM to use (in GB). */
  vmmem?: number;
}

export interface RhevmReturn {
  /** Returns all of the VMs variables and execution. */
  vm?: Record<string, unknown>;
}

export const rhevm = defineModule<RhevmArgs, RhevmReturn>("community.general.rhevm");
