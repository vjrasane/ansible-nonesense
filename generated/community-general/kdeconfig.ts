// Auto-generated from: community.general.kdeconfig
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface KdeconfigArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** Create a backup file. */
  backup?: boolean;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** Path to the kwriteconfig executable. If not specified, Ansible tries to discover it. */
  kwriteconfig_path?: string;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** Path to the config file. If the file does not exist it is created. */
  path: string;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
  /** List of values to set. */
  values: Record<string, unknown> | Record<string, unknown>[];
}

export type KdeconfigReturn = Record<string, unknown>;

export const kdeconfig = defineModule<KdeconfigArgs, KdeconfigReturn>("community.general.kdeconfig");
