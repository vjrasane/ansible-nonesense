import {
  AnsibleModuleMeta,
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

export interface DispatchModuleSpec<TArgs extends DispatchArgs, TReturn> {
  factName: keyof HostFacts;
  registry: DispatchRegistry<TArgs, TReturn>;
}

export type DispatchRegistry<TArgs extends DispatchArgs, TReturn> = Record<
  string,
  () => Promise<DispatchFn<TArgs, TReturn>>
>;

export class DispatchModule<
  TArgs extends DispatchArgs,
  TReturn,
> implements Module<TArgs, TReturn> {
  constructor(
    private readonly spec: DispatchModuleSpec<TArgs, TReturn>,
    public readonly meta: AnsibleModuleMeta,
  ) {}

  get displayName(): string {
    return this.meta.fqcn;
  }

  private get factValue(): Promise<string> {
    return currentHost().facts.then((f) => f[this.spec.factName]);
  }

  async exec(
    name: string | undefined,
    args: TArgs,
    opts?: ModuleExecOpts,
  ): Promise<ModuleResult<TReturn>> {
    const registryKey = args.use ?? (await this.factValue);
    const importer = this.spec.registry[registryKey];
    if (!importer)
      throw new ModuleError(
        this.meta.fqcn,
        `No module registered for ${registryKey}`,
      );

    try {
      const mod = await importer();
      return mod(args, opts);
    } catch (err) {
      throw new ModuleError(
        this.meta.fqcn,
        `Failed to import module for ${registryKey}: ${err}`,
      );
    }
  }
}

export function defineDispatchModule<TArgs extends DispatchArgs, TReturn>(
  spec: DispatchModuleSpec<TArgs, TReturn>,
  meta: AnsibleModuleMeta,
): ModuleFn<TArgs, TReturn> {
  const mod = new DispatchModule<TArgs, TReturn>(spec, meta);
  return getModuleFn(mod);
}
