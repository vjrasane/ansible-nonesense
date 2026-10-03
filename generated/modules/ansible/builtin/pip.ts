import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.pip
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.pip",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.pip",
  moduleFqn: "ansible.modules.pip",
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
      "ansible/module_utils/compat/version.py",
      "ansible/module_utils/datatag.py",
      "ansible/module_utils/distro/__init__.py",
      "ansible/module_utils/distro/_distro.py",
      "ansible/module_utils/errors.py",
      "ansible/module_utils/parsing/convert_bool.py",
      "ansible/module_utils/six/__init__.py",
      "ansible/modules/pip.py",
    ],
  }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible/modules/__init__.py",
  ],
} as const;
export interface PipArgs {
  /** Allow C(pip) to modify an externally-managed Python installation as defined by PEP 668. */
  break_system_packages?: boolean;
  /** cd into this directory before running the command. */
  chdir?: string;
  /** Pass the editable flag. */
  editable?: boolean;
  /** The explicit executable or pathname for the C(pip) executable, if different from the Ansible Python interpreter. For example V(pip3.13), if there are multiple Python installations in the system and you want to run pip for the Python 3.13 installation. */
  executable?: string;
  /** Extra arguments passed to C(pip). */
  extra_args?: string;
  /** The name of a Python library to install or the url(bzr+,hg+,git+,svn+) of the remote package. */
  name?: string | string[];
  /** The path to a pip requirements file, which should be local to the remote system. File can be specified as a relative path if using the O(chdir) option. */
  requirements?: string;
  /** The state of module. */
  state?: "absent" | "forcereinstall" | "latest" | "present";
  /** The system umask to apply before installing the pip package. This is useful, for example, when installing on systems that have a very restrictive umask by default (e.g., C(0077)) and you want to C(pip install) packages which are to be used by all users. Note that this requires you to specify desired umask mode as an octal string, (e.g., C(0022)). */
  umask?: string;
  /** The version number to install of the Python library specified in the O(name) parameter. */
  version?: string;
  /** An optional path to a I(virtualenv) directory to install into. It cannot be specified together with the O(executable) parameter (added in 2.1). If the virtualenv does not exist, it will be created before installing packages. The optional O(virtualenv_site_packages), O(virtualenv_command), and O(virtualenv_python) options affect the creation of the virtualenv. */
  virtualenv?: string;
  /** The command or a pathname to the command to create the virtual environment with. For example V(pyvenv), V(virtualenv), V(virtualenv2), V(~/bin/virtualenv), V(/usr/local/bin/virtualenv). */
  virtualenv_command?: string;
  /** The Python executable used for creating the virtual environment. For example V(python3.13). When not specified, the Python version used to run the ansible module is used. This parameter should not be used when O(virtualenv_command) is using V(pyvenv) or the C(-m venv) module. */
  virtualenv_python?: string;
  /** Whether the virtual environment will inherit packages from the global C(site-packages) directory. Note that if this setting is changed on an already existing virtual environment it will not have any effect, the environment must be deleted and newly created. */
  virtualenv_site_packages?: boolean;
}

export interface PipReturn {
  /** pip command used by the module */
  cmd?: string;
  /** list of python modules targeted by pip */
  name?: string | string[];
  /** Path to the requirements file */
  requirements?: string;
  /** Version of the package specified in 'name' */
  version?: string;
  /** Path to the virtualenv */
  virtualenv?: string;
}
export const pip = defineRemoteModule<PipArgs, PipReturn>(spec, meta);
