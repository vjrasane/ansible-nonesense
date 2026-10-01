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
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { packageName } from "src/config.ts";
import { dirname } from "node:path";

/**
 * Controller-side impl. `TMod` is the backing remote module's type — a concrete
 * `ModuleFn` when the impl needs one (an action proper), `undefined` for
 * controller-only impls, or the union for dispatchers that may fall back.
 * `defineActionModule` keys `mod` off this, so the compiler forces the right call.
 */
export type ActionFn<
  TArgs,
  TReturn,
  TMod extends ModuleFn<TArgs, TReturn> | undefined =
    | ModuleFn<TArgs, TReturn>
    | undefined,
> = (
  args: TArgs,
  opts: ModuleExecOpts | undefined,
  mod: TMod,
  meta: AnsibleModuleMeta,
) => Promise<ModuleResult<TReturn>>;

class ActionModule<
  TArgs extends Record<string, any>,
  TReturn,
> implements Module<TArgs, TReturn> {
  constructor(
    private readonly impl: ActionFn<TArgs, TReturn>,
    private readonly mod: ModuleFn<TArgs, TReturn> | undefined,
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
    await host.connection.removeFile(tmp);
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

export interface FetchReturn {
  dest?: string;
  msg?: string;
}

export async function fetchAction(
  args: FetchArgs,
  opts: ModuleExecOpts | undefined,
  _mod: undefined, // controller-only: no remote module
): Promise<ModuleResult<FetchReturn>> {
  const fqcn = "ansible.builtin.fetch";
  const host = currentHost();

  const { rc } = await host.connection.exec(["test", "-r", args.src]);
  if (rc !== 0) {
    if (args.fail_on_missing ?? true)
      throw new ModuleError(fqcn, {
        changed: false,
        failed: true,
        skipped: false,
        msg: `remote file not readable: ${args.src}`,
        invocation: { module_args: args },
      });
    return {
      status: "ok",
      changed: false,
      failed: false,
      skipped: false,
      msg: `remote file not present: ${args.src}`,
      invocation: { module_args: args },
    };
  }

  // flat → dest verbatim (dest/basename when it ends in "/"); otherwise ansible's
  // per-host layout: dest/<host>/<remote src path>.
  const dest = args.flat
    ? args.dest.endsWith("/")
      ? join(args.dest, basename(args.src))
      : args.dest
    : join(args.dest, host.name, args.src);

  const result: ModuleResult<FetchReturn> = {
    status: "changed",
    changed: true,
    failed: false,
    skipped: false,
    dest,
    invocation: { module_args: args },
  };

  if (opts?.check) return result;

  await mkdir(dirname(dest), { recursive: true });
  await host.connection.getFile(args.src, dest);
  return result;
}

// The impl's `mod` type dictates the call: a required module, a forbidden one
// (undefined), or either (dispatchers). The implementation signature is loose;
// only these overloads are visible to callers.
export function defineActionModule<TArgs extends Record<string, any>, TReturn>(
  impl: ActionFn<TArgs, TReturn, ModuleFn<TArgs, TReturn>>,
  mod: ModuleFn<TArgs, TReturn>,
  meta: AnsibleModuleMeta,
): ModuleFn<TArgs, TReturn>;
export function defineActionModule<TArgs extends Record<string, any>, TReturn>(
  impl: ActionFn<TArgs, TReturn, undefined>,
  mod: undefined,
  meta: AnsibleModuleMeta,
): ModuleFn<TArgs, TReturn>;
export function defineActionModule<TArgs extends Record<string, any>, TReturn>(
  impl: ActionFn<TArgs, TReturn, any>,
  mod: ModuleFn<TArgs, TReturn> | undefined,
  meta: AnsibleModuleMeta,
): ModuleFn<TArgs, TReturn> {
  const act = new ActionModule<TArgs, TReturn>(impl, mod, meta);
  return getModuleFn(act);
}
