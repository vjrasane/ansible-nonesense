import {
  getModuleFn,
  Module,
  ModuleError,
  ModuleExecOpts,
  ModuleFn,
  ModuleResult,
} from "src/module/module.ts";
import { HostFacts } from "src/host.ts";
import { currentHost } from "src/context.ts";

interface DispatchArgs {
  use?: string;
}

type DispatchFn<TArgs extends DispatchArgs, TReturn> = ModuleFn<
  Omit<TArgs, "use">,
  TReturn
>;

export type DispatchRegistry<TArgs extends DispatchArgs, TReturn> = Record<
  string,
  () => Promise<DispatchFn<TArgs, TReturn>>
>;

export class DispatchModule<
  TArgs extends DispatchArgs,
  TReturn,
> implements Module<TArgs, TReturn> {
  constructor(
    private readonly fqcn: string,
    private readonly factName: keyof HostFacts,
    private readonly registry: DispatchRegistry<TArgs, TReturn>,
  ) {}

  private get factValue(): Promise<string> {
    return currentHost().facts.then((f) => f[this.factName]);
  }

  async exec(
    name: string | undefined,
    args: TArgs,
    opts?: ModuleExecOpts,
  ): Promise<ModuleResult<TReturn>> {
    const registryKey = args.use ?? (await this.factValue);
    const importer = this.registry[registryKey];
    if (!importer)
      throw new ModuleError(
        this.fqcn,
        `No module registered for ${registryKey}`,
      );

    try {
      const mod = await importer();
      return mod(args, opts);
    } catch (err) {
      throw new ModuleError(
        this.fqcn,
        `Failed to import module for ${registryKey}: ${err}`,
      );
    }
  }
}

export function defineDispatchModule<TArgs extends DispatchArgs, TReturn>(
  fqcn: string,
  factName: keyof HostFacts,
  registry: DispatchRegistry<TArgs, TReturn>,
): ModuleFn<TArgs, TReturn> {
  const mod = new DispatchModule<TArgs, TReturn>(fqcn, factName, registry);
  return getModuleFn(fqcn, mod);
}
