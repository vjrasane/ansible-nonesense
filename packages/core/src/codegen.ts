#!/usr/bin/env node
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const exec = promisify(execFile);

const JS_RESERVED = new Set([
  "abstract", "arguments", "await", "boolean", "break", "byte", "case", "catch",
  "char", "class", "const", "continue", "debugger", "default", "delete", "do",
  "double", "else", "enum", "eval", "export", "extends", "false", "final",
  "finally", "float", "for", "function", "goto", "if", "implements", "import",
  "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null",
  "package", "private", "protected", "public", "return", "short", "static",
  "super", "switch", "synchronized", "this", "throw", "throws", "transient",
  "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield",
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

function safeIdentifier(name: string): string {
  return JS_RESERVED.has(name) ? `${name}_` : name;
}

function toPascal(name: string): string {
  return name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

function tsType(option: Record<string, unknown>): string {
  const choices = option.choices as unknown[] | undefined;
  if (choices && choices.every(c => typeof c === "string")) {
    return choices.map(c => `"${c}"`).join(" | ");
  }

  const ansibleType = (option.type as string) ?? "str";

  if (ansibleType === "list") {
    const elements = option.elements;
    let inner: string;
    if (typeof elements === "string") {
      inner = ANSIBLE_TO_TS[elements] ?? "unknown";
    } else if (typeof elements === "object" && elements !== null) {
      inner = ANSIBLE_TO_TS[(elements as Record<string, string>).type ?? "str"] ?? "unknown";
    } else {
      inner = "unknown";
    }
    return `${inner} | ${inner}[]`;
  }

  if (ansibleType === "dict" && option.suboptions) {
    return formatSuboptions(option.suboptions as Record<string, Record<string, unknown>>);
  }

  return ANSIBLE_TO_TS[ansibleType] ?? "unknown";
}

function formatSuboptions(suboptions: Record<string, Record<string, unknown>>, indent = 2): string {
  const pad = " ".repeat(indent);
  const lines = ["{"];
  for (const [name, opt] of Object.entries(suboptions).sort(([a], [b]) => a.localeCompare(b))) {
    const suffix = opt.required ? "" : "?";
    lines.push(`${pad}  ${name}${suffix}: ${tsType(opt)};`);
  }
  lines.push(`${pad}}`);
  return lines.join("\n");
}

function generateInterface(name: string, options: Record<string, Record<string, unknown>> | undefined): string {
  if (!options || Object.keys(options).length === 0) {
    return `export type ${name} = Record<string, unknown>;`;
  }

  const lines = [`export interface ${name} {`];
  for (const [optName, opt] of Object.entries(options).sort(([a], [b]) => a.localeCompare(b))) {
    const suffix = opt.required ? "" : "?";
    const t = tsType(opt);
    const rawDesc = Array.isArray(opt.description) ? (opt.description[0] ?? "") : (opt.description ?? "");
    const desc = (rawDesc as string).replace(/\*\//g, "* /");
    if (desc) lines.push(`  /** ${desc} */`);
    const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(optName) ? optName : `"${optName}"`;
    lines.push(`  ${key}${suffix}: ${t};`);
  }
  lines.push("}");
  return lines.join("\n");
}

async function runAnsibleDoc(fqcn: string): Promise<Record<string, unknown>> {
  const { stdout } = await exec("ansible-doc", ["-t", "module", fqcn, "--json"]);
  return JSON.parse(stdout);
}

async function listCollectionModules(namespace: string): Promise<string[]> {
  const { stdout } = await exec("ansible-doc", ["-t", "module", "-l", "--json"], { maxBuffer: 50 * 1024 * 1024 });
  const all = JSON.parse(stdout) as Record<string, unknown>;
  return Object.keys(all).filter(k => k.startsWith(namespace + ".")).sort();
}

function generateModule(fqcn: string, docData: Record<string, unknown>, importPath: string): string {
  const doc = (docData[fqcn] ?? docData[Object.keys(docData)[0]!]) as Record<string, unknown>;
  const docInfo = (doc.doc ?? {}) as Record<string, unknown>;
  const returnInfo = (doc.return ?? {}) as Record<string, Record<string, unknown>> | undefined;

  const shortName = fqcn.split(".").pop()!;
  const pascal = toPascal(shortName);
  const fnName = safeIdentifier(shortName);

  const options = docInfo.options as Record<string, Record<string, unknown>> | undefined;
  const argsInterface = generateInterface(`${pascal}Args`, options);
  const returnInterface = generateInterface(`${pascal}Return`, returnInfo);

  return `// Auto-generated from: ${fqcn}
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "${importPath}";

${argsInterface}

${returnInterface}

export const ${fnName} = defineModule<${pascal}Args, ${pascal}Return>("${fqcn}");
`;
}

function generateBarrel(dir: string): void {
  const files = readdirSync(dir)
    .filter(f => f.endsWith(".ts") && f !== "index.ts")
    .map(f => f.replace(/\.ts$/, ""))
    .sort();

  const lines = [
    "// Auto-generated barrel — DO NOT EDIT",
    "",
    ...files.map(f => `export * from "./${f}.js";`),
    "",
  ];
  writeFileSync(join(dir, "index.ts"), lines.join("\n"));
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Usage: codegen <fqcn|namespace> [module...]");
    console.error("  codegen ansible.builtin.debug       — generate one module");
    console.error("  codegen ansible.builtin              — generate all in namespace");
    console.error("  codegen community.general debug copy — generate specific modules");
    process.exit(1);
  }

  const target = args[0]!;
  const parts = target.split(".");

  // Single fully-qualified module name (3+ parts like ansible.builtin.debug)
  if (parts.length >= 3) {
    const namespace = parts.slice(0, 2).join(".");
    const outputDir = resolveOutputDir(namespace);
    mkdirSync(outputDir, { recursive: true });

    console.error(`  Generating ${target}...`);
    const docData = await runAnsibleDoc(target);
    const importPath = resolveImportPath(namespace);
    const source = generateModule(target, docData, importPath);
    const shortName = parts.pop()!;
    writeFileSync(join(outputDir, `${shortName}.ts`), source);
    generateBarrel(outputDir);
    console.error(`Generated 1 module in ${outputDir}`);
    return;
  }

  // Namespace (2 parts like ansible.builtin)
  const namespace = target;
  const explicitModules = args.slice(1);
  const outputDir = resolveOutputDir(namespace);
  mkdirSync(outputDir, { recursive: true });

  let modules: string[];
  if (explicitModules.length > 0) {
    modules = explicitModules.map(m => m.includes(".") ? m : `${namespace}.${m}`);
  } else {
    console.error(`Listing modules for ${namespace}...`);
    modules = await listCollectionModules(namespace);
  }

  if (modules.length === 0) {
    console.error(`No modules found for namespace: ${namespace}`);
    process.exit(1);
  }

  const importPath = resolveImportPath(namespace);
  let count = 0;
  for (const fqcn of modules) {
    const shortName = fqcn.split(".").pop()!;
    console.error(`  Generating ${fqcn}...`);
    try {
      const docData = await runAnsibleDoc(fqcn);
      const source = generateModule(fqcn, docData, importPath);
      writeFileSync(join(outputDir, `${shortName}.ts`), source);
      count++;
    } catch (e) {
      console.error(`  WARNING: skipping ${fqcn}: ${e}`);
    }
  }

  generateBarrel(outputDir);
  console.error(`Generated ${count} modules in ${outputDir}`);
}

function resolveOutputDir(namespace: string): string {
  const coreDir = resolve(import.meta.dirname!, "..");
  if (namespace.startsWith("ansible.")) {
    return join(coreDir, "builtins");
  }
  return join(coreDir, "..", "community", "modules");
}

function resolveImportPath(namespace: string): string {
  if (namespace.startsWith("ansible.")) return "@sensible-ts/core";
  return "@sensible-ts/core";
}

main();
