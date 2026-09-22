export { type AnsibleModuleMeta } from "src/module/module.ts";
export {
  defineRemoteModule,
  type RemoteModuleSpec,
} from "src/module/remote.ts";
export {
  defineDispatchModule,
  type DispatchModuleSpec,
  type DispatchRegistry,
} from "src/module/dispatch.ts";
export { defineActionModule, copyAction } from "src/module/action.ts";

export { host, type HostFacts } from "src/host.ts";
