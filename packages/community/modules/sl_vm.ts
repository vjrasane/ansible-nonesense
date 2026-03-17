// Auto-generated from: community.general.sl_vm
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SlVmArgs {
  /** Count of cpus to be assigned to new virtual instance. */
  cpus?: number;
  /** Datacenter for the virtual instance to be deployed. */
  datacenter?: "ams01" | "ams03" | "che01" | "dal01" | "dal05" | "dal06" | "dal09" | "dal10" | "dal12" | "dal13" | "fra02" | "fra04" | "fra05" | "hkg02" | "hou02" | "lon02" | "lon04" | "lon06" | "mel01" | "mex01" | "mil01" | "mon01" | "osl01" | "par01" | "sao01" | "sea01" | "seo01" | "sjc01" | "sjc03" | "sjc04" | "sng01" | "syd01" | "syd04" | "tok02" | "tor01" | "wdc01" | "wdc04" | "wdc06" | "wdc07";
  /** Flag to determine if the instance should be deployed in dedicated space. */
  dedicated?: boolean;
  /** List of disk sizes to be assigned to new virtual instance. */
  disks?: number | number[];
  /** Domain name to be provided to a virtual instance. */
  domain?: string;
  /** Specify which SoftLayer flavor template to use instead of cpus and memory. */
  flavor?: string;
  /** Hostname to be provided to a virtual instance. */
  hostname?: string;
  /** Flag to determine if the instance should be hourly billed. */
  hourly?: boolean;
  /** Image Template to be used for new virtual instance. */
  image_id?: string;
  /** Instance ID of the virtual instance to perform action option. */
  instance_id?: string;
  /** Flag to determine if local disk should be used for the new instance. */
  local_disk?: boolean;
  /** Amount of memory to be assigned to new virtual instance. */
  memory?: number;
  /** NIC Speed to be assigned to new virtual instance. */
  nic_speed?: number;
  /** OS Code to be used for new virtual instance. */
  os_code?: string;
  /** URL of a post provisioning script to be loaded and executed on virtual instance. */
  post_uri?: string;
  /** Flag to determine if the instance should be private only. */
  private?: boolean;
  /** VLAN by its ID to be assigned to the private NIC. */
  private_vlan?: string;
  /** VLAN by its ID to be assigned to the public NIC. */
  public_vlan?: string;
  /** List of ssh keys by their ID to be assigned to a virtual instance. */
  ssh_keys?: string | string[];
  /** Create, or cancel a virtual instance. */
  state?: "absent" | "present";
  /** Tag or list of tags to be provided to a virtual instance. */
  tags?: string;
  /** Flag used to wait for active status before returning. */
  wait?: boolean;
  /** Time in seconds before wait returns. */
  wait_time?: number;
}

export type SlVmReturn = Record<string, unknown>;

export const sl_vm = defineModule<SlVmArgs, SlVmReturn>("community.general.sl_vm");
