import { join, basename } from "path";
import { currentHost } from "src/context.ts";
import {
  getModuleFn,
  Module,
  ModuleError,
  ModuleExecOpts,
  ModuleFn,
  ModuleMeta,
  ModuleResult,
  ModuleSkippedResult,
  ModuleStatus,
  RawResult,
} from "./module.ts";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { packageName } from "src/config.ts";
import { dirname } from "node:path";

type ActionFn<TArgs, TReturn> = (
  args: TArgs,
  opts: ModuleExecOpts | undefined,
  mod: ModuleFn<TArgs, TReturn>,
) => Promise<ModuleResult<TReturn>>;

class ActionModule<
  TArgs extends Record<string, any>,
  TReturn,
> implements Module<TArgs, TReturn> {
  constructor(
    private readonly fqcn: string,
    private readonly impl: ActionFn<TArgs, TArgs>,
    private readonly mod: ModuleFn<TArgs, TReturn>,
  ) {}

  async exec(
    name: string | undefined,
    args: TArgs,
    opts?: ModuleExecOpts,
  ): Promise<ModuleResult<TReturn>> {
    return this.impl(args, opts, this.mod);
  }
}

type ControllerFn<TArgs, TReturn> = (
  args: TArgs,
  opts: ModuleExecOpts | undefined,
) => Promise<ModuleResult<TReturn>>;

class ControllerModule<
  TArgs extends Record<string, any>,
  TReturn,
> implements Module<TArgs, TReturn> {
  constructor(
    private readonly fqcn: string,
    private readonly impl: ControllerFn<TArgs, TReturn>,
  ) {}

  async exec(
    name: string | undefined,
    args: TArgs,
    opts?: ModuleExecOpts,
  ): Promise<ModuleResult<TReturn>> {
    return this.impl(args, opts);
  }
}

interface CopyArgs {
  attributes?: string;
  backup?: boolean;
  checksum?: string;
  content?: string;
  decrypt?: boolean;
  dest: string;
  directory_mode?: unknown;
  follow?: boolean;
  force?: boolean;
  group?: string;
  local_follow?: boolean;
  mode?: unknown;
  owner?: string;
  remote_src?: boolean;
  selevel?: string;
  serole?: string;
  setype?: string;
  seuser?: string;
  src?: string;
  unsafe_writes?: boolean;
  validate?: string;
}

async function writeLocalTemp(
  content: string,
  name: string = "content",
): Promise<string> {
  const dir = await mkdtemp(join(tmpdir(), packageName + "-"));
  const path = join(dir, name);
  await writeFile(path, content);
  return path;
}

export async function copyAction<TReturn>(
  args: CopyArgs,
  opts: ModuleExecOpts | undefined,
  mod: ModuleFn<CopyArgs, TReturn>,
): Promise<ModuleResult<TReturn>> {
  const host = currentHost();
  const src =
    args.content != null ? await writeLocalTemp(args.content) : args.src;

  if (!src)
    throw new ModuleError(
      "ansible.builtin.copy",
      `source or content must be defined`,
    );

  const localDir = dirname(src);
  const tmp = await host.makeTmpPath();
  try {
    const rsrc = join(tmp, basename(src));
    await host.connection.putFile(src, rsrc);

    const margs = {
      ...args,
      src: rsrc,
      _original_basename: basename(src),
    };
    delete margs.content;

    return await mod(margs, opts);
  } finally {
    await host.cleanup(tmp);
    if (args.content !== undefined)
      await rm(localDir, { recursive: true, force: true });
  }
}
export interface FetchArgs {
  dest: string;
  fail_on_missing?: boolean;
  flat?: boolean;
  src: string;
  validate_checksum?: boolean;
}

export async function fetchAction<TReturn>(
  args: FetchArgs,
  opts: ModuleExecOpts | undefined,
): Promise<ModuleResult<TReturn>> {}

export function defineActionModule<TArgs extends Record<string, any>, TReturn>(
  fqcn: string,
  impl: ActionFn<TArgs, TReturn>,
  mod: ModuleFn<TArgs, TReturn>,
): ModuleFn<TArgs, TReturn> {
  const act = new ActionModule<TArgs, TReturn>(fqcn, impl, mod);
  return getModuleFn(fqcn, act);
}

export function defineControllerModule<
  TArgs extends Record<string, any>,
  TReturn,
>(fqcn: string, impl: ControllerFn<TArgs, TReturn>): ModuleFn<TArgs, TReturn> {
  const mod = new ControllerModule<TArgs, TReturn>(fqcn, impl);
  return getModuleFn(fqcn, mod);
}
