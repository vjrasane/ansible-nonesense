import {
  type AnsibleModuleMeta,
  defineActionModule,
  dispatchImpl,
  type DispatchRegistry,
  type ModuleFn,
} from "@sensible-ts/core";

// Auto-generated from: ansible.builtin.package
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.package",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "N/A",
} as const;
export interface PackageArgs {
  /** Package name, or package specifier with version. */
  name: string;
  /** Whether to install (V(present)), or remove (V(absent)) a package. */
  state: string;
  /** The required package manager module to use (V(dnf), V(apt), and so on). The default V(auto) will use existing facts or try to auto-detect it. */
  use?: string;
}

export type PackageReturn = Record<string, unknown>;
const factName = "ansible_pkg_mgr";
const registry: DispatchRegistry<PackageArgs, PackageReturn> = {
  apt: () => import("./apt.ts").then((mod) => mod.apt as unknown as ModuleFn<PackageArgs, PackageReturn>),
  dnf: () => import("./dnf.ts").then((mod) => mod.dnf as unknown as ModuleFn<PackageArgs, PackageReturn>),
  dnf5: () => import("./dnf5.ts").then((mod) => mod.dnf5 as unknown as ModuleFn<PackageArgs, PackageReturn>),
  apk: () =>
    import("../../community/general/apk.ts").then((mod) => mod.apk as unknown as ModuleFn<PackageArgs, PackageReturn>),
  pacman: () =>
    import("../../community/general/pacman.ts").then((mod) =>
      mod.pacman as unknown as ModuleFn<PackageArgs, PackageReturn>
    ),
  zypper: () =>
    import("../../community/general/zypper.ts").then((mod) =>
      mod.zypper as unknown as ModuleFn<PackageArgs, PackageReturn>
    ),
};
export const package_ = defineActionModule<PackageArgs, PackageReturn>(
  dispatchImpl(factName, registry),
  undefined,
  meta,
);
