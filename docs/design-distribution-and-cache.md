# Design: Distribution, Artifact Fetching, and the Local Cache

Companion to `design-ansible-module-runtime.md` and `IMPLEMENTATION_PLAN.md`. This note covers what ships in our packages, what is fetched from upstream at first use, how the on-disk cache is laid out, and how module payloads are built from it.

## 1. Summary

We publish TypeScript only. Ansible's Python sources are never included in our packages, hosted on our infrastructure, or proxied through it. Each generated bindings package carries, as code, the exact upstream artifacts it was generated from (version, URL, sha256) and, per module, the list of files the module needs. At first use the runtime downloads those artifacts from PyPI and Ansible Galaxy, verifies them, extracts them into a content-addressed cache, and builds module payloads from the cached files. No `init` command is required; an explicit `prefetch` exists for CI and air-gapped environments.

Two things fall out of this arrangement. Consumers of the packages we publish need Node on the controller and nothing else; generating bindings for a collection we don't pre-ship is the one exception — it needs a Python env with the pinned `ansible-core`, see §11. And GPL-licensed material is obtained by the user from its authors' distribution channels; we convey none of it. (Engineering rationale, not legal advice.)

## 2. Package layout

We ship a single package containing both the runtime and the curated bindings:

```
@<scope>/ansible
  runtime      Connection impls, executor, bootstrap template, DSL, codegen, fetcher, cache
  bindings     generated: ansible.builtin + community.general
```

```
src/artifacts.ts     upstream pins for the curated set: ANSIBLE_CORE + COMMUNITY_GENERAL
src/<module>.ts      types + defineModule call carrying the module's own metadata
src/index.ts         barrel (runtime + bindings)
package.json         declares the artifacts entry point for the prefetch CLI
```

The runtime half is version-agnostic: it knows how to fetch an artifact and build a payload from a file list, and nothing about any particular Ansible release. The pins it needs are read from `artifacts.ts`, not baked into runtime logic; that separation survives even inside one package, so the runtime code stays release-independent.

Nothing in the mechanism depends on package count: pins live per artifact in `artifacts.ts`, module→artifact edges live inline in each `defineModule` (§4), and prefetch/prune enumerate by the `package.json` marker (§5, §10). A single package with two pins works identically to many single-collection packages — the marker walk finds one marked package and reads its two-pin `artifacts.ts`. The trade-off is a coupled release: any bump (a `community.general` pin, an `ansible-core` pin, or runtime code) republishes the one package. For a curated ship that is the point — one version number for the whole tool.

Splitting into separate packages (a version-agnostic `core` plus one package per collection) is the same design at finer granularity, and earns its keep only once we ship many collections on independent release cadences. Anything outside the curated set the user generates themselves (§11); no npm package is involved on that path.

The package's bindings are generated in our CI by the two-layer generator (`codegen.ts` + `generator.py`, §9–11; `ansible-core` is imported only there). Bindings contain option/return names and types (functional structure derived from argspecs) and a link to the module's page on docs.ansible.com. Description prose is not shipped; see §8.

## 3. Artifacts

An artifact is one upstream release file. Upstream ships them as `.tar.gz` (PyPI sdist for `ansible-core`, Galaxy tarball for a collection), so the fetcher handles gzip-tar; if we ever pin a wheel or a GitHub archive, the same record type covers zip.

```ts
export interface Artifact {
  id: string;        // "ansible-core@2.17.14" | "community.general@9.4.0"
  kind: "ansible-core" | "collection";
  url: string;       // canonical upstream URL
  sha256: string;    // of the downloaded file
  format: "tar.gz" | "zip";
  root: string;      // path prefix inside the archive to strip, e.g. "ansible_core-2.17.14/lib"
}
```

`artifacts.ts` in a bindings package is generated, e.g.:

```ts
export const ANSIBLE_CORE: Artifact = {
  id: "ansible-core@2.17.14",
  kind: "ansible-core",
  url: "https://files.pythonhosted.org/packages/.../ansible_core-2.17.14.tar.gz",
  sha256: "…",
  format: "tar.gz",
  root: "ansible_core-2.17.14/lib",
};
```

A collection package references its own tarball *and* the `ansible-core` artifact its closures were computed against, because collection modules import `ansible.module_utils`. Two bindings packages pinning different core versions coexist without coordination: content addressing gives each its own directory.

## 4. Module metadata, colocated with the binding

The generator emits the module's manifest entry into the binding itself, so there is no manifest file to locate at runtime and bundlers see ordinary imports:

```ts
export const apt = defineModule<AptArgs, AptReturn>({
  fqcn: "ansible.builtin.apt",
  entry: "ansible/modules/apt.py",
  artifacts: [ANSIBLE_CORE],
  files: [
    { artifact: "ansible-core@2.17.14", path: "ansible/__init__.py" },
    { artifact: "ansible-core@2.17.14", path: "ansible/module_utils/__init__.py" },
    { artifact: "ansible-core@2.17.14", path: "ansible/module_utils/basic.py" },
    // …
  ],
  actionPlugin: false,
  powershell: false,
  rawParams: false,
  attributes: { checkMode: "full", diffMode: "full" },
  docs: "https://docs.ansible.com/ansible/latest/collections/ansible/builtin/apt_module.html",
});
```

`files` is a list of `{ artifact, path }` tuples, where `artifact` is an `Artifact.id` and `path` is relative to that artifact's `root`. For collection modules the list mixes paths from the collection tarball and from `ansible-core`; the tuple tags each with its origin, so the payload builder resolves each file against the right cache directory. (Explicit tuples over a prefix convention: self-describing, no parsing, and a path colliding across artifacts is impossible to mis-attribute.)

`defineModule` constructs a `Module` instance (§7) and returns its callable form with the 1–3 argument signature. The instance stays reachable (`apt.meta`, `apt.payload()`) for tooling.

## 5. Cache layout

Content-addressed by artifact id and a hash prefix, under a single root:

```
$CACHE_ROOT/                              default: ~/.cache/<tool>/   (XDG_CACHE_HOME respected)
  artifacts/
    ansible-core/2.17.14-<sha256[:12]>/   extracted, root prefix stripped → ansible/modules/…, ansible/module_utils/…
    community.general/9.4.0-<sha…>/       → plugins/modules/…, plugins/module_utils/…
  payloads/
    <artifact-id-set-hash>/<fqcn>.zip     built module zips (§7)
  downloads/                              in-progress downloads; empty at rest
  locks/
```

Rules:

- A directory's presence means it is complete. Nothing checks partial state at read time.
- A new pin is a new directory; nothing is ever updated in place.
- `CACHE_ROOT` overridable with `<TOOL>_CACHE_DIR`. Upstream URLs overridable with `<TOOL>_ARTIFACT_MIRROR=<base-url>` for organisations that must fetch through an internal proxy (that is the *user's* mirror, not ours).
- `<tool> cache prune` removes artifact and payload directories not referenced by any installed bindings package.

## 6. Fetch and extract

Triggered lazily by the first payload build that needs an artifact whose directory is absent, or eagerly by `prefetch`.

1. **Lock.** Acquire `locks/<artifact-id>.lock` (advisory file lock). Re-check the target directory after acquiring; another process may have finished.
2. **Download** to `downloads/<artifact-id>.<random>.part`, streaming sha256. On completion compare with the pinned hash. Mismatch: delete, fail with the expected and actual hash and the URL. Never fall back to an unverified file.
3. **Extract** to `artifacts/<kind>/<version>-<hash>.tmp.<random>/`, stripping `root`, refusing entries that escape the target (absolute paths, `..`), and skipping symlinks. Only regular files are needed.
4. **Validate** that every path any loaded bindings package expects from this artifact exists. Cheap, and it turns "generator and pin drifted" into an error at fetch time instead of at first call of some rarely used module.
5. **Rename** the temp directory to its final name. `rename` is atomic on the same filesystem; the temp dir is created as a sibling to guarantee that.
6. **Release** the lock. Delete the `.part` file.

Failure at any step leaves no directory under `artifacts/`, so the next attempt starts clean. Progress is emitted as a span (`fetching ansible-core 2.17.14`) so the reporter can explain a slow first step.

Network access is a runtime side effect only on a cold cache. Environments that forbid it populate the cache with `prefetch` at image-build time and set `<TOOL>_OFFLINE=1`, under which a missing artifact is an immediate error with the artifact id and the prefetch command in the message.

## 7. Payload build and cache

A `Module` instance builds its payload once:

```ts
class Module<A, R> {
  #payload?: Promise<Uint8Array>;
  payload(): Promise<Uint8Array> {
    return (this.#payload ??= buildPayload(this.meta));
  }
}
```

The promise is cached, not the bytes, so concurrent first calls from several hosts share one build. A rejected promise is **not** reset: a build failure means missing files, a bad hash, or a corrupt extract, none of which a retry fixes. The error names the missing path and the artifact directory; the fix is to remove that cache entry.

`buildPayload`:

1. Look for `payloads/<artifact-set-hash>/<fqcn>.zip`. If present, read it and return.
2. Otherwise ensure each referenced artifact is present (§6), read the listed files, zip them with `ZIP_DEFLATED` (the bootstrap decodes with Python's stdlib `zipfile`; deflate is the fast, universal choice), place `entry` at its FQN path inside the archive, and include the package `__init__.py` files from the list.
3. Write the zip via temp-file-and-rename into `payloads/`, return the bytes.

The zip is version-independent of the call: params are added by the bootstrap at execution time, so one payload serves every invocation of the module for the life of the pin.

Cost expectations: tens of milliseconds for a typical module on first build in a process, more for `setup`; zero thereafter in-process; one file read across processes once the disk cache is warm. Not a bottleneck relative to remote execution, but the disk cache is cheap and removes the question.

## 8. What is and isn't in our packages

| Item | Shipped by us | Fetched by user | Notes |
|---|---|---|---|
| Runtime, DSL, bootstrap template | yes | | our code |
| TS bindings: names, types, choices, defaults, flags | yes | | derived structure |
| Module documentation prose | no | optional, generated locally from fetched sources | `DOCUMENTATION`/`RETURN` YAML → JSDoc overlay; never passes through our infrastructure |
| Artifact pins (version, URL, sha256) | yes | | facts about upstream releases |
| Closure file lists | yes | | paths, not contents |
| Python module and module_utils sources | no | yes, from PyPI / Galaxy | GPL and BSD-licensed upstream files |
| Built payload zips | no | built locally | derived from fetched sources |

Nothing licensed under the GPL is conveyed by us, and no GPL-licensed code is linked into our TypeScript; payloads execute in a separate process on the target over a pipe.

## 9. Generator responsibilities (our CI)

For each bindings package, per pin bump:

- Resolve, fetch, and pin the upstream artifacts via `codegen.ts` (§11): record URL, sha256, and `root` into `artifacts.ts`. `generator.py` copies no sources; the runtime fetcher is the sole cache writer.
- For each module: resolve FQCN (following `meta/runtime.yml` redirects), compute the closure with `ansible-core`'s own resolver, list paths relative to artifact roots, detect `action_plugin` / `powershell` / `raw_params`, copy `attributes`.
- Emit `artifacts.ts`, one `<module>.ts` per module, `index.ts`, and set `"<tool>": { "artifacts": "./dist/artifacts.js" }` in `package.json`.
- Run a smoke test: fetch the artifacts with the *runtime's* fetcher into a temp cache, build every payload, execute `ping` and one module per artifact against `localhost`. This is the check that generator and runtime agree on paths.

A pin bump is therefore an ordinary PR whose diff shows exactly which modules' types or closures changed upstream.

## 10. `prefetch` command

Walks `node_modules` for packages declaring the `"<tool>"` marker, imports each `artifacts` entry point, fetches and extracts every artifact, then imports each package's barrel and builds every payload. Idempotent; safe to run in a Dockerfile layer. Flags: `--cache-dir`, `--mirror`, `--only <package>`.

## 11. User-side generation for arbitrary collections

We pre-generate and publish only a curated set (`ansible.builtin`, `community.general`, …). Any other collection the user generates themselves with the same generator, producing an ordinary local TS package. This path — and only this path — requires a Python env with the pinned `ansible-core`. The user does **not** install the collection; `codegen.ts` fetches it. Consumers of pre-generated packages still need nothing but Node (§1).

Generation is two layers, split by capability:

1. **`codegen.ts` (TS).** Resolves `<collection>@<version>` (and the matching `ansible-core`) to canonical URLs, fetches them with the runtime fetcher (§6) — download, compute sha256, extract into the content-addressed cache. The cache is now warm and the pins (`url`/`sha256`/`root`/`version`) are known. Invokes `generator.py` with `ANSIBLE_COLLECTIONS_PATH` pointed at the extracted cache tree, so `ansible-core` resolves the collection without a separate install.

   Collection sources: **public Galaxy is the default**; `ansible-core` is always PyPI (the only PyPI artifact — §3). Three other collection sources normalize to the *same* pin record so the fetcher and cache never branch on origin:

   | Source | Resolver | Auth |
   |---|---|---|
   | Public Galaxy | v3 API | none |
   | Private Automation Hub / `galaxy_ng` | same v3 API, different base URL (`<TOOL>_ARTIFACT_MIRROR`) | bearer token |
   | Git ref | none — archive a specific commit | git creds |
   | Local / remote tarball | none — URL/path is the artifact | — |

   Only the resolver differs; every source produces one `{ url, sha256, format, root }` record. **Whatever codegen pins, the runtime must be able to re-fetch and verify from that record** — so git sources pin a specific commit's resolved archive URL + sha, never a floating branch. Build the public-Galaxy resolver first; AH (base-URL + token) and git/tarball (skip-resolve, fetch-direct) are later variants feeding the same fetcher.
2. **`generator.py` (Python).** Runs `modify_module`; reads the resulting `ZIPDATA` for the closure's **file names only**. Those extracted bytes are never written to the cache and never shipped — they answer only "which files does this module pull in." Emits the closure file-list and module metadata into each binding; `codegen.ts` fills in the pins it computed.

The invariant: **the runtime fetcher (§6) is the only thing that ever writes the cache.** `codegen.ts` warms it by importing and calling `core`'s fetcher/cache module directly — the same library the runtime and `prefetch` use, not a parallel copy; `generator.py` reads from the tree the fetcher produced but writes nothing. `ZIPDATA` is a name source, never a cache source. So user-side generation, CI generation, and runtime execution all converge on one cache-management implementation and one fetch-verify-extract codepath.

CI runs the same two layers but discards the cache afterward (ships TS only, §8). User-side generation keeps the seeded cache, so the runtime is offline-ready for those modules with no separate `prefetch`.

## 12. Open items

- Whether `prune` should be automatic (e.g. keep the last N pins) or manual only.
- Whether to verify extracted file hashes on read (defense against a tampered cache) or trust the directory-presence invariant. Default: trust it; the cache lives in the user's home directory.
- Docs overlay: generated on demand by an editor tooling command, or at prefetch time.

Settled:

- **Closure path tagging: explicit `{ artifact, path }` tuples** (§4), not a prefix convention.
- **Cache-tree-as-collections-path: option A (symlink).** `codegen.ts` builds a temp `ANSIBLE_COLLECTIONS_PATH/ansible_collections/<ns>/<name>` symlink pointing at the flat cache dir (§5 layout unchanged), confining the bridging to generation time and keeping the runtime payload path untouched.
