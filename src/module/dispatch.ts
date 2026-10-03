import { ModuleError, ModuleFn } from "src/module/module.ts";
import { ActionFn } from "src/module/action.ts";
import { HostFacts } from "src/core/host.ts";
import { currentHost } from "src/core/context.ts";

interface DispatchArgs {
  use?: string;
}

export type DispatchRegistry<TArgs extends DispatchArgs, TReturn> = Record<
  string,
  () => Promise<ModuleFn<TArgs, TReturn>>
>;

/** Pick the backend for the host's fact (or the explicit `use`), if registered. */
async function resolve<TArgs extends DispatchArgs, TReturn>(
  factName: keyof HostFacts,
  registry: DispatchRegistry<TArgs, TReturn>,
  args: TArgs,
): Promise<ModuleFn<TArgs, TReturn> | undefined> {
  const key = args.use ?? (await currentHost().facts)[factName];
  const importer = registry[key];
  return importer ? await importer() : undefined;
}

/** `use` selects the backend here; it must not reach the backend module itself. */
function withoutUse<TArgs extends DispatchArgs>(args: TArgs): TArgs {
  const rest = { ...args };
  delete rest.use;
  return rest;
}

/**
 * Dispatch as an action impl: route by fact to a backend; on a miss fall back to
 * the action's own module (`mod`) — ansible's generic fallback, e.g.
 * ansible.legacy.service. With no fallback module it fails, like AnsibleActionFail.
 */
export function dispatchImpl<TArgs extends DispatchArgs, TReturn>(
  factName: keyof HostFacts,
  registry: DispatchRegistry<TArgs, TReturn>,
): ActionFn<TArgs, TReturn> {
  return async (args, opts, mod) => {
    const target = (await resolve(factName, registry, args)) ?? mod;
    if (!target)
      throw new ModuleError(
        String(factName),
        `no module registered for ${String(factName)}`,
      );
    return target(withoutUse(args), opts);
  };
}
