// Auto-generated from: community.general.linode
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface LinodeArgs {
  /** List of dictionaries for creating additional disks that are added to the Linode configuration settings. */
  additional_disks?: Record<string, unknown> | Record<string, unknown>[];
  /** Set status of bandwidth in alerts. */
  alert_bwin_enabled?: boolean;
  /** Set threshold in MB of bandwidth in alerts. */
  alert_bwin_threshold?: number;
  /** Set status of bandwidth out alerts. */
  alert_bwout_enabled?: boolean;
  /** Set threshold in MB of bandwidth out alerts. */
  alert_bwout_threshold?: number;
  /** Set status of bandwidth quota alerts as percentage of network transfer quota. */
  alert_bwquota_enabled?: boolean;
  /** Set threshold in MB of bandwidth quota alerts. */
  alert_bwquota_threshold?: number;
  /** Set status of receiving CPU usage alerts. */
  alert_cpu_enabled?: boolean;
  /** Set percentage threshold for receiving CPU usage alerts. Each CPU core adds 100% to total. */
  alert_cpu_threshold?: number;
  /** Set status of receiving disk IO alerts. */
  alert_diskio_enabled?: boolean;
  /** Set threshold for average IO ops/sec over 2 hour period. */
  alert_diskio_threshold?: number;
  /** Linode API key. */
  api_key: string;
  /** Day of the week to take backups. */
  backupweeklyday?: number;
  /** The time window in which backups are taken. */
  backupwindow?: number;
  /** Datacenter to create an instance in (Linode Datacenter). */
  datacenter?: number;
  /** Add the instance to a Display Group in Linode Manager. */
  displaygroup?: string;
  /** Distribution to use for the instance (Linode Distribution). */
  distribution?: number;
  /** Kernel to use for the instance (Linode Kernel). */
  kernel_id?: number;
  /** Unique ID of a Linode server. This value is read-only in the sense that if you specify it on creation of a Linode it is not used. The Linode API generates these IDs and we can those generated value here to reference a Linode more specifically. This is useful for idempotency. */
  linode_id?: number;
  /** Name to give the instance (alphanumeric, dashes, underscore). */
  name: string;
  /** Root password to apply to a new server (auto generated if missing). */
  password?: string;
  /** Payment term to use for the instance (payment term in months). */
  payment_term?: number;
  /** Plan to use for the instance (Linode plan). */
  plan?: number;
  /** Add private IPv4 address when Linode is created. */
  private_ip?: boolean;
  /** SSH public key applied to root user. */
  ssh_pub_key?: string;
  /** Indicate desired state of the resource. */
  state?: "absent" | "active" | "deleted" | "present" | "restarted" | "started" | "stopped";
  /** Swap size in MB. */
  swap?: number;
  /** Wait for the instance to be in state V(running) before returning. */
  wait?: boolean;
  /** How long before wait gives up, in seconds. */
  wait_timeout?: number;
  /** Set status of Lassie watchdog. */
  watchdog?: boolean;
}

export type LinodeReturn = Record<string, unknown>;

export const linode = defineModule<LinodeArgs, LinodeReturn>("community.general.linode");
