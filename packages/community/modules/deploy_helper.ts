// Auto-generated from: community.general.deploy_helper
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface DeployHelperArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** Whether to run the clean procedure in case of O(state=finalize). */
  clean?: boolean;
  /** The name of the symlink that is created when the deploy is finalized. Used in O(state=finalize) and O(state=clean). Returned in the C(deploy_helper.current_path) fact. */
  current_path?: string;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** The number of old releases to keep when cleaning. Used in O(state=finalize) and O(state=clean). Any unfinished builds are deleted first, so only correct releases count. The current version does not count. */
  keep_releases?: number;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** The root path of the project. Returned in the C(deploy_helper.project_path) fact. */
  path: string;
  /** The release version that is being deployed. Defaults to a timestamp format C(%Y%m%d%H%M%S) (for example V(20141119223359)). This parameter is optional during O(state=present), but needs to be set explicitly for O(state=finalize). You can use the generated fact C(release={{ deploy_helper.new_release }}). */
  release?: string;
  /** The name of the folder that holds the releases. This can be relative to O(path) or absolute. Returned in the C(deploy_helper.releases_path) fact. */
  releases_path?: string;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** The name of the folder that holds the shared resources. This can be relative to O(path) or absolute. If this is set to an empty string, no shared folder is created. Returned in the C(deploy_helper.shared_path) fact. */
  shared_path?: string;
  /** The state of the project. */
  state?: "present" | "finalize" | "absent" | "clean" | "query";
  /** The name of the file that indicates a deploy has not finished. All folders in the O(releases_path) that contain this file are deleted on O(state=finalize) with O(clean=true), or O(state=clean). This file is automatically deleted from the C(new_release_path) during O(state=finalize). */
  unfinished_filename?: string;
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
}

export type DeployHelperReturn = Record<string, unknown>;

export const deploy_helper = defineModule<DeployHelperArgs, DeployHelperReturn>("community.general.deploy_helper");
