import path from "node:path";
import { code, Code, imp, joinCode } from "ts-poet";
import type { Artifact, ArtifactFiles, ScaffoldFile } from "src/cache.ts";
import { packageName } from "src/config.ts";

const CORE = packageName;

const defineRemoteModule = imp(`defineRemoteModule@${CORE}`);
const defineActionModule = imp(`defineActionModule@${CORE}`);
const dispatchImpl = imp(`dispatchImpl@${CORE}`);
const copyAction = imp(`copyAction@${CORE}`);
const fetchAction = imp(`fetchAction@${CORE}`);
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
  ))
    lines.push(`${pad}  ${name}${opt.required ? "" : "?"}: ${tsType(opt)};`);
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

function emitMeta(m: ModuleGen): Code {
  return code`const meta: ${AnsibleModuleMeta} = ${JSON.stringify(m.meta)} as const;`;
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

  if (m.fqcn in DISPATCHERS || m.fqcn in ACTIONS)
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
  const dispatchDecl = dispatch
    ? emitDispatchSpec(m, dispatch, Args, Return)
    : "";
  const impl = dispatch
    ? code`${dispatchImpl}(factName, registry)`
    : ACTIONS[m.fqcn].impl;

  const hasMod = m.style === "new";
  const modDecl = hasMod
    ? code`
${emitRemoteSpec(m)}
const mod = ${defineRemoteModule}<${Args}, ${Return}>(spec, meta);`
    : "";

  return code`
${preamble(m.fqcn)}
${emitMeta(m)}
${types}
${dispatchDecl}${modDecl}
export const ${fn} = ${defineActionModule}<${Args}, ${Return}>(${impl}, ${hasMod ? "mod" : "undefined"}, meta);
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
  for (const m of result.modules) {
    // dispatchers/actions don't need a remote closure; only plain remote modules require "new"
    if (m.style !== "new" && !(m.fqcn in ACTIONS) && !(m.fqcn in DISPATCHERS))
      continue;
    out.set(`${shortName(m.fqcn)}.ts`, emitModule(m).toString());
    emitted.push(m);
  }

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
