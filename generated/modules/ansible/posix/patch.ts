import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, ansiblePosix, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.posix.patch
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.posix.patch",
  "actionPlugin": true,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.posix.patch",
  moduleFqn: "ansible_collections.ansible.posix.plugins.modules.patch",
  sources: [{
    artifact: ansibleCore,
    files: [
      "ansible/module_utils/_internal/__init__.py",
      "ansible/module_utils/_internal/_ansiballz/_loader.py",
      "ansible/module_utils/_internal/_dataclass_validation.py",
      "ansible/module_utils/_internal/_datatag/__init__.py",
      "ansible/module_utils/_internal/_datatag/_tags.py",
      "ansible/module_utils/_internal/_debugging.py",
      "ansible/module_utils/_internal/_deprecator.py",
      "ansible/module_utils/_internal/_errors.py",
      "ansible/module_utils/_internal/_event_utils.py",
      "ansible/module_utils/_internal/_json/__init__.py",
      "ansible/module_utils/_internal/_json/_legacy_encoder.py",
      "ansible/module_utils/_internal/_json/_profiles/__init__.py",
      "ansible/module_utils/_internal/_json/_profiles/_module_legacy_c2m.py",
      "ansible/module_utils/_internal/_json/_profiles/_module_legacy_m2c.py",
      "ansible/module_utils/_internal/_json/_profiles/_tagless.py",
      "ansible/module_utils/_internal/_messages.py",
      "ansible/module_utils/_internal/_patches/__init__.py",
      "ansible/module_utils/_internal/_patches/_dataclass_annotation_patch.py",
      "ansible/module_utils/_internal/_patches/_socket_patch.py",
      "ansible/module_utils/_internal/_patches/_sys_intern_patch.py",
      "ansible/module_utils/_internal/_plugin_info.py",
      "ansible/module_utils/_internal/_stack.py",
      "ansible/module_utils/_internal/_text_utils.py",
      "ansible/module_utils/_internal/_traceback.py",
      "ansible/module_utils/_internal/_validation.py",
      "ansible/module_utils/basic.py",
      "ansible/module_utils/common/_utils.py",
      "ansible/module_utils/common/arg_spec.py",
      "ansible/module_utils/common/collections.py",
      "ansible/module_utils/common/file.py",
      "ansible/module_utils/common/json.py",
      "ansible/module_utils/common/locale.py",
      "ansible/module_utils/common/parameters.py",
      "ansible/module_utils/common/process.py",
      "ansible/module_utils/common/sys_info.py",
      "ansible/module_utils/common/text/converters.py",
      "ansible/module_utils/common/text/formatters.py",
      "ansible/module_utils/common/validation.py",
      "ansible/module_utils/common/warnings.py",
      "ansible/module_utils/compat/selinux.py",
      "ansible/module_utils/compat/typing.py",
      "ansible/module_utils/datatag.py",
      "ansible/module_utils/distro/__init__.py",
      "ansible/module_utils/distro/_distro.py",
      "ansible/module_utils/errors.py",
      "ansible/module_utils/parsing/convert_bool.py",
      "ansible/module_utils/six/__init__.py",
    ],
  }, { artifact: ansiblePosix, files: ["plugins/modules/patch.py"] }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible_collections/__init__.py",
    "ansible_collections/ansible/__init__.py",
    "ansible_collections/ansible/posix/__init__.py",
    "ansible_collections/ansible/posix/plugins/__init__.py",
    "ansible_collections/ansible/posix/plugins/modules/__init__.py",
  ],
} as const;
export interface PatchArgs {
  /** Passes C(--backup --version-control=numbered) to patch, producing numbered backup copies. */
  backup?: boolean;
  /** Path of a base directory in which the patch file will be applied. */
  basedir?: string;
  /** Setting to V(true) will disable patch's heuristic for transforming CRLF line endings into LF. */
  binary?: boolean;
  /** Path of the file on the remote machine to be patched. */
  dest?: string;
  /** Setting to V(true) will ignore white space changes between patch and input. */
  ignore_whitespace?: boolean;
  /** If V(false), it will search for src at originating/controller machine, */
  remote_src?: boolean;
  /** Path of the patch file as accepted by the GNU patch tool. If O(remote_src=false), the patch source file is looked up from the module's I(files) directory. */
  src: string;
  /** Whether the patch should be applied or reverted. */
  state?: "absent" | "present";
  /** Number that indicates the smallest prefix containing leading slashes that will be stripped from each file name found in the patch file. */
  strip?: number;
}

export type PatchReturn = Record<string, unknown>;
export const patch = defineRemoteModule<PatchArgs, PatchReturn>(spec, meta);
