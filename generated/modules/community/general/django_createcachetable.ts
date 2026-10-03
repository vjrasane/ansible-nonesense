import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.django_createcachetable
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.django_createcachetable",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.django_createcachetable",
  moduleFqn: "ansible_collections.community.general.plugins.modules.django_createcachetable",
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
      "plugins/module_utils/_django.py",
      "plugins/module_utils/_mh/base.py",
      "plugins/module_utils/_mh/deco.py",
      "plugins/module_utils/_mh/exceptions.py",
      "plugins/module_utils/_mh/mixins/deprecate_attrs.py",
      "plugins/module_utils/_mh/mixins/state.py",
      "plugins/module_utils/_mh/module_helper.py",
      "plugins/module_utils/_module_helper.py",
      "plugins/module_utils/_python_runner.py",
      "plugins/module_utils/_vardict.py",
      "plugins/modules/django_createcachetable.py",
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
export interface DjangoCreatecachetableArgs {
  /** Specify the database to be used. */
  database?: string;
  /** Adds the given filesystem path to the Python import search path. */
  pythonpath?: string;
  /** Specifies the settings module to use. */
  settings: string;
  /** Skips running system checks prior to running the command. */
  skip_checks?: boolean;
  /** Provides a full stack trace in the output when a C(CommandError) is raised. */
  traceback?: boolean;
  /** Use the Python interpreter from this virtual environment. */
  venv?: string;
  /** Specifies the amount of notification and debug information in the output of C(django-admin). */
  verbosity?: number;
}

export interface DjangoCreatecachetableReturn {
  /** Command-line execution information. */
  run_info?: Record<string, unknown>;
  /** Version of Django. */
  version?: string;
}
export const django_createcachetable = defineRemoteModule<DjangoCreatecachetableArgs, DjangoCreatecachetableReturn>(
  spec,
  meta,
);
