// Auto-generated from: community.general.homectl
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface HomectlArgs {
  /** The intended home directory disk space. */
  disksize?: string;
  /** The email address of the user. */
  email?: string;
  /** String separated by comma each containing an environment variable and its value to set for the user's login session, in a format compatible with C(putenv(\)). */
  environment?: string;
  /** Sets the gid of the user. */
  gid?: number;
  /** Path to use as home directory for the user. */
  homedir?: string;
  /** The name of an icon picked by the user, for example for the purpose of an avatar. */
  iconname?: string;
  /** Path to place the user's home directory. */
  imagepath?: string;
  /** The preferred language/locale for the user. */
  language?: string;
  /** A free-form location string describing the location of the user. */
  location?: string;
  /** Whether the user account should be locked or not. */
  locked?: boolean;
  /** String separated by comma each indicating a UNIX group this user shall be a member of. */
  memberof?: string;
  /** String separated by comma each indicating mount options for a users home directory. */
  mountopts?: string;
  /** The user name to create, remove, or update. */
  name: string;
  /** A time since the UNIX epoch after which the record should be considered invalid for the purpose of logging in. */
  notafter?: number;
  /** A time since the UNIX epoch before which the record should be considered invalid for the purpose of logging in. */
  notbefore?: number;
  /** Set the user's password to this. */
  password?: string;
  /** Password hint for the given user. */
  passwordhint?: string;
  /** The 'realm' a user is defined in. */
  realm?: string;
  /** The user's real ('human') name. */
  realname?: string;
  /** When used with O(disksize) this attempts to resize the home directory immediately. */
  resize?: boolean;
  /** Shell binary to use for terminal logins of given user. */
  shell?: string;
  /** The absolute path to the skeleton directory to populate a new home directory from. */
  skeleton?: string;
  /** String separated by comma each listing a SSH public key that is authorized to access the account. */
  sshkeys?: string;
  /** The operation to take on the user. */
  state?: "absent" | "present";
  /** Indicates the storage mechanism for the user's home directory. */
  storage?: "classic" | "luks" | "directory" | "subvolume" | "fscrypt" | "cifs";
  /** Preferred timezone to use for the user. */
  timezone?: string;
  /** Sets the UID of the user. */
  uid?: number;
  /** Sets the umask for the user's login sessions. */
  umask?: number;
}

export interface HomectlReturn {
  /** Dictionary returned from C(homectl inspect -j). */
  data?: Record<string, unknown>;
}

export const homectl = defineModule<HomectlArgs, HomectlReturn>("community.general.homectl");
