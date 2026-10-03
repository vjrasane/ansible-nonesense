import path from "node:path";
import { code, Code, imp, joinCode } from "ts-poet";
import type { Artifact, ArtifactFiles, ScaffoldFile } from "src/core/cache.ts";
import { packageName } from "src/core/config.ts";

const CORE = packageName;

const defineRemoteModule = imp(`defineRemoteModule@${CORE}`);
const defineActionModule = imp(`defineActionModule@${CORE}`);
const dispatchImpl = imp(`dispatchImpl@${CORE}`);
const copyAction = imp(`copyAction@${CORE}`);
const fetchAction = imp(`fetchAction@${CORE}`);
const shellAction = imp(`shellAction@${CORE}`);
const AnsibleModuleMeta = imp(`t:AnsibleModuleMeta@${CORE}`);
const RemoteModuleSpec = imp(`t:RemoteModuleSpec@${CORE}`);
const DispatchRegistry = imp(`t:DispatchRegistry@${CORE}`);
const ModuleFnType = imp(`t:ModuleFn@${CORE}`);
const ArtifactType = imp(`t:Artifact@${CORE}`);
const ScaffoldFileType = imp(`t:ScaffoldFile@${CORE}`);

const ARTIFACTS_MODULE = "./artifacts.ts";
const coreScaffold = imp(`coreScaffold@${ARTIFACTS_MODULE}`);

/** Stable camelCase const name for an artifact, from its name (one version per run). */
const artifactConst = (id: string) =>
  id
    .split("@")[0]
    .split(/[.\-_]/)
    .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join("");

/** python → TS contract: one record per module, JSON on process_module.py's stdout. */
export interface ModuleGen {
  fqcn: string;
  moduleFqn: string; // runpy target (style "new")
  style: "new" | "old";
  meta: {
    fqcn: string;
    actionPlugin: boolean;
    powershell: boolean;
    rawParams: boolean;
    checkMode: "full" | "partial" | "none" | "N/A";
  };
  options: Record<string, AnsibleOption>;
  returndocs: Record<string, AnsibleOption>;
  sources: ArtifactFiles[]; // closure grouped by artifact (incl. the module file)
  markers: string[]; // empty __init__.py package markers
}

/** Full process_module.py output: run-level scaffold + per-module records. */
export interface CodegenResult {
  scaffold: ScaffoldFile[]; // the 2 core stubs, shared by every module
  modules: ModuleGen[];
}

interface AnsibleOption {
  type?: string;
  elements?: string | { type?: string };
  choices?: unknown[];
  required?: boolean;
  description?: string | string[];
  suboptions?: Record<string, AnsibleOption>;
}

// --- codegen config (moved off the python side) ---------------------------

const ACTIONS: Record<string, { impl: ReturnType<typeof imp> }> = {
  "ansible.builtin.copy": { impl: copyAction },
  "ansible.builtin.fetch": { impl: fetchAction },
};

// Modules with no shippable module of their own: emitted as an action whose
// backing `mod` is another module's remote closure. shell is command run with
// _uses_shell (mirrors ansible's shell action plugin).
const DELEGATES: Record<
  string,
  { impl: ReturnType<typeof imp>; target: string }
> = {
  "ansible.builtin.shell": {
    impl: shellAction,
    target: "ansible.builtin.command",
  },
};

// Action plugins that are pure passthroughs: they ship and run the module like a
// normal remote module, with no controller-side work. We clear the actionPlugin
// flag so RemoteModule runs them instead of hitting the unimplemented guard.
// (copy/fetch/script/unarchive do real controller work; raw bypasses the module
// system entirely — none belong here.)
const PASSTHROUGH_ACTIONS = new Set(["ansible.builtin.command"]);

// Modules we knowingly do not emit (no shippable module and no controller-side
// support planned). Anything not emitted and not listed here makes codegen throw,
// so skips stay a conscious decision rather than silent gaps.
const SKIP = new Set<string>([
  // Control-flow / meta / strategy plugins — no remote module, run controller-side.
  "ansible.builtin.import_role",
  "ansible.builtin.include_role",
  "ansible.builtin.import_tasks",
  "ansible.builtin.include_tasks",
  "ansible.builtin.import_playbook",
  "ansible.builtin.include_vars",
  "ansible.builtin.set_fact",
  "ansible.builtin.set_stats",
  "ansible.builtin.pause",
  "ansible.builtin.fail",
  "ansible.builtin.assert",
  "ansible.builtin.debug",
  "ansible.builtin.meta",
  "ansible.builtin.group_by",
  "ansible.builtin.add_host",
  "ansible.builtin.gather_facts",
  "ansible.builtin.validate_argument_spec",
  // Real modules needing controller-side work (file transfer / connection / reboot)
  // not yet implemented — candidates for future action/delegate support.
  "ansible.builtin.template",
  "ansible.builtin.script",
  "ansible.builtin.raw",
  "ansible.builtin.reboot",
  "ansible.builtin.wait_for_connection",
  "community.general.shutdown",
]);

/** What a module emits as, or null when it cannot be emitted (must be in SKIP). */
function kindOf(m: ModuleGen): string | null {
  if (m.fqcn in DISPATCHERS) return "dispatcher";
  if (m.fqcn in DELEGATES) return "delegate";
  if (m.fqcn in ACTIONS) return "action";
  if (m.style === "new") {
    if (m.fqcn in PASSTHROUGH_ACTIONS) return "passthrough";
    return m.meta.actionPlugin ? "remote(unhandled-action)" : "remote";
  }
  return null;
}

const DISPATCHERS: Record<
  string,
  { fact: string; registry: Record<string, string> }
> = {
  "ansible.builtin.package": {
    fact: "ansible_pkg_mgr",
    registry: {
      apt: "ansible.builtin.apt",
      dnf: "ansible.builtin.dnf",
      dnf5: "ansible.builtin.dnf5",
      apk: "community.general.apk",
      pacman: "community.general.pacman",
      zypper: "community.general.zypper",
    },
  },
  // service is style "new", so the collapse gives it its own closure as the
  // fallback mod (ansible.legacy.service) — openrc/bsd/etc. route there.
  "ansible.builtin.service": {
    fact: "ansible_service_mgr",
    registry: {
      systemd: "ansible.builtin.systemd",
      sysvinit: "ansible.builtin.sysvinit",
    },
  },
};

// --- identifiers & types --------------------------------------------------

const JS_RESERVED = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  "let",
  "static",
  "await",
  "async",
  "implements",
  "interface",
  "package",
  "private",
  "protected",
  "public",
]);

const ANSIBLE_TO_TS: Record<string, string> = {
  str: "string",
  string: "string",
  bool: "boolean",
  int: "number",
  float: "number",
  path: "string",
  raw: "unknown",
  jsonarg: "unknown",
  json: "unknown",
  dict: "Record<string, unknown>",
  list: "unknown[]",
  bits: "number",
  bytes: "number",
  sid: "string",
};

/** Binding names must dodge reserved words; object keys only need quoting when not identifiers. */
const safeBinding = (name: string) =>
  JS_RESERVED.has(name) ? `${name}_` : name;
const isIdent = (s: string) => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(s);
const shortName = (fqcn: string) => fqcn.split(".").at(-1)!;

/** fqcn → its generated file, relative to the modules root (ns/coll/short.ts). */
const fqcnToFile = (fqcn: string) => `${fqcn.split(".").join("/")}.ts`;

/** Relative import path from one module's generated file to another's (cross-collection safe). */
function relModulePath(fromFqcn: string, toFqcn: string): string {
  const rel = path.posix.relative(
    path.posix.dirname(fqcnToFile(fromFqcn)),
    fqcnToFile(toFqcn),
  );
  return rel.startsWith(".") ? rel : `./${rel}`;
}
const pascal = (name: string) =>
  name
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");

function tsType(opt: AnsibleOption): string {
  const { choices } = opt;
  if (Array.isArray(choices) && choices.every((c) => typeof c === "string"))
    return choices.map((c) => `"${c}"`).join(" | ");

  const t = opt.type ?? "str";
  if (t === "list") {
    const el = opt.elements;
    const inner =
      typeof el === "string"
        ? (ANSIBLE_TO_TS[el] ?? "unknown")
        : (ANSIBLE_TO_TS[el?.type ?? "str"] ?? "unknown");
    return `${inner} | ${inner}[]`;
  }
  if (t === "dict" && opt.suboptions) return emitSuboptions(opt.suboptions, 2);
  return ANSIBLE_TO_TS[t] ?? "unknown";
}

function emitSuboptions(
  subs: Record<string, AnsibleOption>,
  indent: number,
): string {
  const pad = " ".repeat(indent);
  const lines = ["{"];
  for (const [name, opt] of Object.entries(subs).sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    const key = isIdent(name) ? name : `"${name}"`;
    lines.push(`${pad}  ${key}${opt.required ? "" : "?"}: ${tsType(opt)};`);
  }
  lines.push(`${pad}}`);
  return lines.join("\n");
}

function emitInterface(
  name: string,
  opts: Record<string, AnsibleOption>,
): string {
  if (!opts || Object.keys(opts).length === 0)
    return `export type ${name} = Record<string, unknown>;`;

  const lines = [`export interface ${name} {`];
  for (const [optName, opt] of Object.entries(opts).sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    const d = Array.isArray(opt.description)
      ? opt.description[0]
      : opt.description;
    if (d) lines.push(`  /** ${d.replace(/\*\//g, "* /")} */`);
    const key = isIdent(optName) ? optName : `"${optName}"`;
    lines.push(`  ${key}${opt.required ? "" : "?"}: ${tsType(opt)};`);
  }
  lines.push("}");
  return lines.join("\n");
}

// --- per-module emitters --------------------------------------------------

const preamble = (fqcn: string) =>
  `// Auto-generated from: ${fqcn}\n// DO NOT EDIT — regenerate with codegen`;

// A handled module (passthrough, or action/dispatch/delegate whose backing remote
// module we run ourselves) must not carry actionPlugin: true, or RemoteModule's
// "action plugin not implemented" guard fires when we execute it. Only genuinely
// unhandled action plugins keep the flag (and are meant to throw at runtime).
function emitMeta(m: ModuleGen): Code {
  const handled =
    PASSTHROUGH_ACTIONS.has(m.fqcn) ||
    m.fqcn in ACTIONS ||
    m.fqcn in DISPATCHERS ||
    m.fqcn in DELEGATES;
  const meta =
    handled && m.meta.actionPlugin ? { ...m.meta, actionPlugin: false } : m.meta;
  return code`const meta: ${AnsibleModuleMeta} = ${JSON.stringify(meta)} as const;`;
}

function emitRemoteSpec(m: ModuleGen): Code {
  const groups = m.sources.map((s) => {
    const sym = imp(`${artifactConst(s.artifact.id)}@${ARTIFACTS_MODULE}`);
    return code`{ artifact: ${sym}, files: ${JSON.stringify(s.files)} }`;
  });
  return code`const spec: ${RemoteModuleSpec} = {
  fqcn: ${JSON.stringify(m.fqcn)},
  moduleFqn: ${JSON.stringify(m.moduleFqn)},
  sources: [${joinCode(groups, { on: ", " })}],
  scaffold: ${coreScaffold},
  markers: ${JSON.stringify(m.markers)},
} as const;`;
}

/** The shared per-collection module: each descriptor and the core stubs, once. */
function emitArtifacts(
  artifacts: Artifact[],
  scaffold: ScaffoldFile[],
): string {
  const decls = artifacts.map(
    (a) =>
      code`export const ${artifactConst(a.id)}: ${ArtifactType} = ${JSON.stringify(a)} as const;`,
  );
  decls.push(
    code`export const coreScaffold: ${ScaffoldFileType}[] = ${JSON.stringify(scaffold)} as const;`,
  );
  return `// Auto-generated — DO NOT EDIT\n\n${joinCode(decls, { on: "\n" }).toString()}\n`;
}

function emitModule(m: ModuleGen): Code {
  const short = shortName(m.fqcn);
  const fn = safeBinding(short);
  const Args = `${pascal(short)}Args`;
  const Return = `${pascal(short)}Return`;
  const types = `${emitInterface(Args, m.options)}\n\n${emitInterface(Return, m.returndocs)}`;

  if (m.fqcn in DISPATCHERS || m.fqcn in ACTIONS || m.fqcn in DELEGATES)
    return emitActionLike(m, fn, Args, Return, types);

  return code`
${preamble(m.fqcn)}
${emitMeta(m)}
${emitRemoteSpec(m)}
${types}
export const ${fn} = ${defineRemoteModule}<${Args}, ${Return}>(spec, meta);
`;
}

/**
 * action / controller / dispatch all collapse to defineActionModule(impl, mod?, meta):
 * `impl` is a named action impl or dispatchImpl(spec); `mod` is the module's own
 * remote closure when it has one (style "new"), else undefined.
 */
function emitActionLike(
  m: ModuleGen,
  fn: string,
  Args: string,
  Return: string,
  types: string,
): Code {
  const dispatch = DISPATCHERS[m.fqcn];
  const delegate = DELEGATES[m.fqcn];
  const dispatchDecl = dispatch
    ? emitDispatchSpec(m, dispatch, Args, Return)
    : "";
  const impl = dispatch
    ? code`${dispatchImpl}(factName, registry)`
    : (delegate ?? ACTIONS[m.fqcn]).impl;

  // mod precedence: a delegated module's closure, else the module's own (style
  // "new"), else none.
  const hasOwnMod = !delegate && m.style === "new";
  const modDecl = hasOwnMod
    ? code`
${emitRemoteSpec(m)}
const mod = ${defineRemoteModule}<${Args}, ${Return}>(spec, meta);`
    : "";
  const modArg = delegate
    ? code`${imp(
        `${safeBinding(shortName(delegate.target))}@${relModulePath(m.fqcn, delegate.target)}`,
      )} as unknown as ${ModuleFnType}<${Args}, ${Return}>`
    : hasOwnMod
      ? code`mod`
      : code`undefined`;

  return code`
${preamble(m.fqcn)}
${emitMeta(m)}
${types}
${dispatchDecl}${modDecl}
export const ${fn} = ${defineActionModule}${dispatch || delegate ? code`<${Args}, ${Return}>` : code``}(${impl}, ${modArg}, meta);
`;
}

/** Lazy cross-module registry → a typed DispatchModuleSpec (backends must conform). */
function emitDispatchSpec(
  m: ModuleGen,
  dispatch: { fact: string; registry: Record<string, string> },
  Args: string,
  Return: string,
): Code {
  const entries = Object.entries(dispatch.registry).map(([key, target]) => {
    const k = isIdent(key) ? key : JSON.stringify(key);
    const exp = safeBinding(shortName(target));
    // TODO: backends are heterogeneous; assert to the dispatcher's type until a
    // discriminated union lets this check properly.
    return code`${k}: () => import(${JSON.stringify(relModulePath(m.fqcn, target))}).then((mod) => mod.${exp} as unknown as ${ModuleFnType}<${Args}, ${Return}>)`;
  });
  return code`const factName = ${JSON.stringify(dispatch.fact)};
const registry: ${DispatchRegistry}<${Args}, ${Return}> = {
  ${joinCode(entries, { on: ",\n    " })},
};`;
}

// --- public API -----------------------------------------------------------

/** Render a collection's modules to a filename → source map (modules, shared artifacts, barrel). */
export function emitCollection(result: CodegenResult): Map<string, string> {
  const out = new Map<string, string>();
  const emitted: ModuleGen[] = [];
  const unexpected: string[] = [];
  for (const m of result.modules) {
    const kind = kindOf(m);
    if (!kind) {
      if (!SKIP.has(m.fqcn)) unexpected.push(m.fqcn);
      else console.error(`  skip  ${m.fqcn}`);
      continue;
    }
    out.set(`${shortName(m.fqcn)}.ts`, emitModule(m).toString());
    emitted.push(m);
    console.error(`  emit  ${kind.padEnd(24)} ${m.fqcn}`);
  }

  if (unexpected.length)
    throw new Error(
      `codegen: ${unexpected.length} module(s) neither emitted nor in SKIP — ` +
        `add each to SKIP (in emit.ts) or give it handling:\n` +
        unexpected.map((f) => `  ${f}`).join("\n"),
    );

  const artifacts = new Map<string, Artifact>();
  for (const m of emitted)
    for (const s of m.sources) artifacts.set(s.artifact.id, s.artifact);

  if (artifacts.size || result.scaffold.length)
    out.set(
      "artifacts.ts",
      emitArtifacts([...artifacts.values()], result.scaffold),
    );

  const barrel = joinCode(
    emitted.map((m) => code`export * from "./${shortName(m.fqcn)}.ts";`),
    { on: "\n" },
  );
  out.set(
    "index.ts",
    `// Auto-generated barrel — DO NOT EDIT\n\n${barrel.toString()}\n`,
  );
  return out;
}
