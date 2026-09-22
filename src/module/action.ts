import { join, basename } from "path";
import { currentHost } from "src/context.ts";
import {
  AnsibleModuleMeta,
  getModuleFn,
  Module,
  ModuleError,
  ModuleExecOpts,
  ModuleFn,
  ModuleResult,
} from "src/module/module.ts";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { packageName } from "src/config.ts";
import { dirname } from "node:path";

type ActionFn<TArgs, TReturn> = (
  args: TArgs,
  opts: ModuleExecOpts | undefined,
  mod: ModuleFn<TArgs, TReturn>,
  meta: AnsibleModuleMeta,
) => Promise<ModuleResult<TReturn>>;

class ActionModule<
  TArgs extends Record<string, any>,
  TReturn,
> implements Module<TArgs, TReturn> {
  constructor(
    private readonly impl: ActionFn<TArgs, TArgs>,
    private readonly mod: ModuleFn<TArgs, TReturn>,
    public readonly meta: AnsibleModuleMeta,
  ) {}

  get displayName(): string {
    return this.meta.fqcn;
  }

  async exec(
    _name: string | undefined,
    args: TArgs,
    opts?: ModuleExecOpts,
  ): Promise<ModuleResult<TReturn>> {
    return this.impl(args, opts, this.mod, this.meta);
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
    private readonly impl: ControllerFn<TArgs, TReturn>,
    public readonly meta: AnsibleModuleMeta,
  ) {}

  get displayName(): string {
    return this.meta.fqcn;
  }

  async exec(
    _name: string | undefined,
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
  meta: AnsibleModuleMeta,
): Promise<ModuleResult<TReturn>> {
  const host = currentHost();
  const src =
    args.content != null ? await writeLocalTemp(args.content) : args.src;

  if (!src)
    throw new ModuleError(meta.fqcn, `source or content must be defined`);

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
    await host.removeFile(tmp);
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

export async function fetchAction<TReturn>(d): Promise<ModuleResult<TReturn>> {}

export function defineActionModule<TArgs extends Record<string, any>, TReturn>(
  impl: ActionFn<TArgs, TReturn>,
  mod: ModuleFn<TArgs, TReturn>,
  meta: AnsibleModuleMeta,
): ModuleFn<TArgs, TReturn> {
  const act = new ActionModule<TArgs, TReturn>(impl, mod, meta);
  return getModuleFn(act);
}

export function defineControllerModule<
  TArgs extends Record<string, any>,
  TReturn,
>(
  impl: ControllerFn<TArgs, TReturn>,
  meta: AnsibleModuleMeta,
): ModuleFn<TArgs, TReturn> {
  const mod = new ControllerModule<TArgs, TReturn>(impl, meta);
  return getModuleFn(mod);
}
