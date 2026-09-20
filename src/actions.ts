import { currentHost } from "./context.ts";
import { ModuleExecOpts, ModuleFn } from "src/module/module.ts";

async function pkgDispatch(
  args: { use?: string; [k: string]: unknown },
  opts: ModuleExecOpts | undefined,
  backends: Record<string, ModuleFn<any, any>>,
) {
  const mgr =
    args.use ?? ((await currentHost().facts).ansible_pkg_mgr as string);
  const mod = backends[mgr];
  if (!mod) throw new Error(`no package backend for ${mgr}`);
  const { use, ...rest } = args;
  return mod(rest, opts);
}

export function definePackageModule<TArgs extends Record<string, any>, TReturn>(
  candidates: Record<string, ModuleFn<any, any>>,
): ModuleFn<TArgs, TReturn> {
  function invoke(
    a?: string | TArgs,
    b?: TArgs | ModuleExecOpts,
    c?: ModuleExecOpts,
  ) {
    const named = typeof a === "string";
    const name = named ? a : undefined;
    const args = (named ? b : a) as TArgs | undefined;
    const opts = (named ? c : b) as ModuleExecOpts | undefined;
    return pkgDispatch(args ?? {}, opts, candidates);
  }
  return invoke as ModuleFn<TArgs, TReturn>;
}
