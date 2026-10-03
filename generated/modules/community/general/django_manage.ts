import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.django_manage
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.django_manage",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.django_manage",
  moduleFqn: "ansible_collections.community.general.plugins.modules.django_manage",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/django_manage.py"] }],
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
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface DjangoManageArgs {
  /** A list of space-delimited apps to target. Used by the V(test) command. */
  apps?: string;
  /** The name of the table used for database-backed caching. Used by the V(createcachetable) command. */
  cache_table?: string;
  /** Clear the existing files before trying to copy or link the original file. */
  clear?: boolean;
  /** The name of the Django management command to run. The commands listed below are built in this module and have some basic parameter validation. */
  command: string;
  /** The database to target. Used by the V(createcachetable), V(flush), V(loaddata), V(syncdb), and V(migrate) commands. */
  database?: string;
  /** Fail the command immediately if a test fails. Used by the V(test) command. */
  failfast?: boolean;
  /** A space-delimited list of fixture file names to load in the database. B(Required) by the V(loaddata) command. */
  fixtures?: string;
  /** Creates links to the files instead of copying them, you can only use this parameter with V(collectstatic) command. */
  link?: boolean;
  /** Runs out-of-order or missing migrations as they are not rollback migrations, you can only use this parameter with V(migrate) command. */
  merge?: boolean;
  /** The path to the root of the Django application where C(manage.py) lives. */
  project_path: string;
  /** A directory to add to the Python path. Typically used to include the settings module if it is located external to the application directory. */
  pythonpath?: string;
  /** The Python path to the application's settings module, such as V(myapp.settings). */
  settings?: string;
  /** Skips over out-of-order missing migrations, you can only use this parameter with V(migrate) command. */
  skip?: boolean;
  /** Controls the test runner class that is used to execute tests. */
  testrunner?: string;
  /** An optional path to a C(virtualenv) installation to use while running the manage application. */
  virtualenv?: string;
}

export type DjangoManageReturn = Record<string, unknown>;
export const django_manage = defineRemoteModule<DjangoManageArgs, DjangoManageReturn>(spec, meta);
