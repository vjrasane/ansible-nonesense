import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.imc_rest
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.imc_rest",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.imc_rest",
  moduleFqn: "ansible_collections.community.general.plugins.modules.imc_rest",
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
      "ansible/module_utils/urls.py",
    ],
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_datetime.py", "plugins/modules/imc_rest.py"] }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible_collections/__init__.py",
    "ansible_collections/community/__init__.py",
    "ansible_collections/community/general/__init__.py",
    "ansible_collections/community/general/plugins/__init__.py",
    "ansible_collections/community/general/plugins/module_utils/__init__.py",
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface ImcRestArgs {
  /** When used instead of O(path), sets the content of the API requests directly. */
  content?: string;
  /** IP Address or hostname of Cisco IMC, resolvable by Ansible control host. */
  hostname: string;
  /** The password to use for authentication. */
  password?: string;
  /** Name of the absolute path of the filename that includes the body of the http request being sent to the Cisco IMC REST API. */
  path?: string;
  /** Connection protocol to use. */
  protocol?: "http" | "https";
  /** The socket level timeout in seconds. */
  timeout?: number;
  /** Username used to login to the switch. */
  username?: string;
  /** If V(false), SSL certificates are not validated. */
  validate_certs?: boolean;
}

export interface ImcRestReturn {
  /** Cisco IMC XML output for the login, translated to JSON using Cobra convention. */
  aaLogin?: Record<string, unknown>;
  /** Cisco IMC XML output for any configConfMo XML fragments, translated to JSON using Cobra convention. */
  configConfMo?: Record<string, unknown>;
  /** Elapsed time in seconds. */
  elapsed?: number;
  /** Cisco IMC XML error output for last request, translated to JSON using Cobra convention. */
  error?: Record<string, unknown>;
  /** Cisco IMC error code. */
  error_code?: string;
  /** Cisco IMC error message. */
  error_text?: string;
  /** RAW XML input sent to the Cisco IMC, causing the error. */
  input?: string;
  /** RAW XML output received from the Cisco IMC, with error details. */
  output?: string;
  /** HTTP response message, including content length. */
  response?: string;
  /** The HTTP response status code. */
  status?: Record<string, unknown>;
}
export const imc_rest = defineRemoteModule<ImcRestArgs, ImcRestReturn>(spec, meta);
