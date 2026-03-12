// Auto-generated from: community.general.ansible_galaxy_install
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface AnsibleGalaxyInstallArgs {
  /** The path to the directory containing your collections or roles, according to the value of O(type). */
  dest?: string;
  /** Force overwriting existing roles and/or collections. */
  force?: boolean;
  /** Name of the collection or role being installed. */
  name?: string;
  /** Refrain from installing dependencies. */
  no_deps?: boolean;
  /** Path to a file containing a list of requirements to be installed. */
  requirements_file?: string;
  /** If O(state=present) then the collection or role is installed. Note that the collections and roles are not updated with this option. */
  state?: "present" | "latest";
  /** The type of installation performed by C(ansible-galaxy). */
  type: "collection" | "role" | "both";
}

export interface AnsibleGalaxyInstallReturn {
  /** The value of the O(dest) parameter. */
  dest?: string;
  /** The value of the O(force) parameter. */
  force?: boolean;
  /** If O(requirements_file) is specified instead, returns dictionary with all the collections installed per path. */
  installed_collections?: Record<string, unknown>;
  /** If O(requirements_file) is specified instead, returns dictionary with all the roles installed per path. */
  installed_roles?: Record<string, unknown>;
  /** The value of the O(name) parameter. */
  name?: string;
  /** New collections installed by this module. */
  new_collections?: Record<string, unknown>;
  /** New roles installed by this module. */
  new_roles?: Record<string, unknown>;
  /** The value of the O(requirements_file) parameter. */
  requirements_file?: string;
  /** The value of the O(type) parameter. */
  type?: string;
  /** Version of ansible-core for ansible-galaxy. */
  version?: string;
}

export const ansible_galaxy_install = defineModule<AnsibleGalaxyInstallArgs, AnsibleGalaxyInstallReturn>("community.general.ansible_galaxy_install");
