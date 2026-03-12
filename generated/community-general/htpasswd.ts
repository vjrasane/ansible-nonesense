// Auto-generated from: community.general.htpasswd
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HtpasswdArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** Used with O(state=present). If V(true), the file is created if it does not exist. Conversely, if set to V(false) and the file does not exist, it fails. */
  create?: boolean;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** Hashing scheme to be used. As well as the four choices listed here, you can also use any other hash supported by passlib, such as V(portable_apache22) and V(host_apache24); or V(md5_crypt) and V(sha256_crypt), which are Linux passwd hashes. Only some schemes in addition to the four choices below are compatible with Apache or Nginx, and supported schemes depend on C(passlib) version and its dependencies. */
  hash_scheme?: string;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** User name to add or remove. */
  name: string;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** Password associated with user. */
  password?: string;
  /** Path to the file that contains the usernames and passwords. */
  path: string;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** Whether the user entry should be present or not. */
  state?: "present" | "absent";
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
}

export type HtpasswdReturn = Record<string, unknown>;

export const htpasswd = defineModule<HtpasswdArgs, HtpasswdReturn>("community.general.htpasswd");
