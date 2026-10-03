import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.cpanm
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.cpanm",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.cpanm",
  moduleFqn: "ansible_collections.community.general.plugins.modules.cpanm",
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
      "ansible/module_utils/common/dict_transformations.py",
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
  }, {
    artifact: communityGeneral,
    files: [
      "plugins/module_utils/_cmd_runner.py",
      "plugins/module_utils/_cmd_runner_fmt.py",
      "plugins/module_utils/_mh/base.py",
      "plugins/module_utils/_mh/deco.py",
      "plugins/module_utils/_mh/exceptions.py",
      "plugins/module_utils/_mh/mixins/deprecate_attrs.py",
      "plugins/module_utils/_mh/mixins/state.py",
      "plugins/module_utils/_mh/module_helper.py",
      "plugins/module_utils/_module_helper.py",
      "plugins/module_utils/_vardict.py",
      "plugins/modules/cpanm.py",
    ],
  }],
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
    "ansible_collections/community/general/plugins/module_utils/_mh/__init__.py",
    "ansible_collections/community/general/plugins/module_utils/_mh/mixins/__init__.py",
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface CpanmArgs {
  /** Override the path to the C(cpanm) executable. */
  executable?: string;
  /** The local directory or C(tar.gz) file to install from. */
  from_path?: string;
  /** If V(true), installs dependencies declared as recommends per META spec. */
  install_recommendations?: boolean;
  /** If V(true), installs dependencies declared as suggests per META spec. */
  install_suggestions?: boolean;
  /** Only install dependencies. */
  installdeps?: boolean;
  /** Specify the install base to install modules. */
  locallib?: string;
  /** Specifies the base URL for the CPAN mirror to use. */
  mirror?: string;
  /** Use the mirror's index file instead of the CPAN Meta DB. */
  mirror_only?: boolean;
  /** Controls the module behavior. See notes below for more details. */
  mode?: "new";
  /** The Perl library to install. Valid values change according to the O(mode), see notes for more details. */
  name?: string;
  /** When O(mode=new), this parameter can be used to check if there is a module O(name) installed (at O(version), when specified). */
  name_check?: string;
  /** Do not run unit tests. */
  notest?: boolean;
  /** Version specification for the perl module. When O(mode=new), C(cpanm) version operators are accepted. */
  version?: string;
}

export interface CpanmReturn {
  /** Version of CPANMinus. */
  cpanm_version?: string;
}
export const cpanm = defineRemoteModule<CpanmArgs, CpanmReturn>(spec, meta);
