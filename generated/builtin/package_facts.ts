// Auto-generated from: ansible.builtin.package_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface PackageFactsArgs {
  /** The package manager(s) used by the system so we can query the package information. This is a list and can support multiple package managers per system, since version 2.8. */
  manager?: "apk" | "apt" | "auto" | "dnf" | "dnf5" | "openbsd_pkg" | "pacman" | "pkg" | "pkg5" | "pkg_info" | "pkgng" | "portage" | "rpm" | "yum" | "zypper";
  /** This option controls how the module queries the package managers on the system. */
  strategy?: "all" | "first";
}

export interface PackageFactsReturn {
  /** Facts to add to ansible_facts. */
  ansible_facts?: unknown;
}

export const package_facts = defineModule<PackageFactsArgs, PackageFactsReturn>("ansible.builtin.package_facts");
