import { Artifact, Cache } from "src/cache.ts";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { env } from "src/config.ts";

const exec = promisify(execFile);

const python = env("PYTHON") ?? "python3";

const [, , arg] = process.argv;

if (!arg) {
  console.error("Artifact ID is required");
  process.exit(1);
}

main();

async function getInstalledCoreVersion(): Promise<string> {
  const { stdout } = await exec(python, [
    "-c",
    "import ansible.release; print(ansible.release.__version__)",
  ]);
  return stdout.trim(); // "2.17.4"
}

async function getCoreArtifact(version: string): Promise<Artifact> {
  const id = "ansible-core@" + version;
  const url = `https://pypi.org/pypi/ansible-core/${version}/json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${id} not found (${res.status}) at ${url}`);
  const j = await res.json();
  const sdist = j.urls.find((u: any) => u.packagetype === "sdist");
  if (!sdist) throw new Error(`${id} no sdist package type found`);
  return {
    id,
    url: sdist.url,
    sha256: sdist.digests.sha256,
    format: "tar.gz",
    root: `${sdist.filename.replace(/\.tar\.gz$/, "")}/lib`, // ansible_core-2.17.14/lib
  };
}

export function splitId(id: string): [name: string, version: string] {
  const [name, ...rest] = id.split("@");
  return [name, rest.join("@")];
}

async function getLatestVersion(name: string): Promise<string> {
  const base =
    "https://galaxy.ansible.com/api/v3/plugin/ansible/content/published/collections/index";

  const [ns, coll] = name.split(".");
  const url = `${base}/${ns}/${coll}/`;
  const res = await fetch(url);
  if (!res.ok)
    throw new Error(
      `${name} latest version not found (${res.status}) at ${url}`,
    );
  const j = await res.json();
  const version = j.highest_version.version;
  if (!version) throw new Error(`${name} latest version not in response: ${j}`);
  return version;
}

async function getArtifact(name: string, version: string): Promise<Artifact> {
  const id = name + "@" + version;
  if (name === "ansible.builtin" || name === "ansible.legacy")
    throw new Error(
      `${name} ships in ansible-core - use ansible-core@<version>`,
    );

  const [ns, coll] = name.split(".");
  const base =
    "https://galaxy.ansible.com/api/v3/plugin/ansible/content/published/collections/index";
  const url = `${base}/${ns}/${coll}/versions/${version}/`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${id} not found (${res.status}) at ${url}`);
  const j = await res.json();
  return {
    id,
    url: j.download_url,
    sha256: j.artifact.sha256,
    format: "tar.gz",
    root: "", // Galaxy tarballs are flat
  };
}

async function getId(arg: string): Promise<[string, string]> {
  let [name, version] = splitId(arg);
  if (!name) throw new Error(`Malformed name: ${name}`);
  if (!version) version = await getLatestVersion(name);
  return [name, version] as const;
}

async function main() {
  const [name, version] = await getId(arg);
  const coreVersion = await getInstalledCoreVersion();
  const core = await getCoreArtifact(coreVersion);

  const cache = new Cache();

  const artifact = await getArtifact(name, version);

  await cache.ensureArtifact(core);
  const dir = await cache.ensureArtifact(artifact);
  console.log(dir);
}
