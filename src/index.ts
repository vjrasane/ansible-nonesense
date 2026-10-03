export {
  type AnsibleModuleMeta,
  type ModuleFn,
  ModuleError,
  define,
} from "src/module/module.ts";
export {
  type Artifact,
  type ArtifactFiles,
  type ScaffoldFile,
} from "src/core/cache.ts";
export {
  defineRemoteModule,
  type RemoteModuleSpec,
} from "src/module/remote.ts";
export { dispatchImpl, type DispatchRegistry } from "src/module/dispatch.ts";
export {
  defineActionModule,
  copyAction,
  fetchAction,
  shellAction,
} from "src/module/action.ts";

import { currentHost as _currentHost } from "src/core/context.ts";
export { host, type HostFacts, type HostRef } from "src/core/host.ts";
import type { HostRef } from "src/core/host.ts";
export const currentHost = (): HostRef => _currentHost();
export { setEventHandler } from "src/core/events.ts";
export { setLogger, logReporter, withLevel } from "src/core/logger.ts";
