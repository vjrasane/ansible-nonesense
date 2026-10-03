import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.puppet
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.puppet",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.puppet",
  moduleFqn: "ansible_collections.community.general.plugins.modules.puppet",
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
  }, {
    artifact: communityGeneral,
    files: [
      "plugins/module_utils/_cmd_runner.py",
      "plugins/module_utils/_cmd_runner_fmt.py",
      "plugins/module_utils/_puppet.py",
      "plugins/modules/puppet.py",
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
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface PuppetArgs {
  /** The name to use when handling certificates. */
  certname?: string;
  /** Path to the directory containing the puppet.conf file. */
  confdir?: string;
  /** Enable full debugging. */
  debug?: boolean;
  /** Puppet environment to be used. */
  environment?: string;
  /** The lang environment to use when running the puppet agent. */
  environment_lang?: string;
  /** Execute a specific piece of Puppet code. */
  execute?: string;
  /** Basename of the facter output file. */
  facter_basename?: string;
  /** A dict of values to pass in as persistent external facter facts. */
  facts?: Record<string, unknown>;
  /** Where the puppet logs should go, if puppet apply is being used. */
  logdest?: "all" | "stdout" | "syslog";
  /** Path to the manifest file to run puppet apply on. */
  manifest?: string;
  /** Path to an alternate location for puppet modules. */
  modulepath?: string;
  /** Override puppet.conf noop mode. */
  noop?: boolean;
  /** The hostname of the puppetmaster to contact. */
  puppetmaster?: string;
  /** Whether to print file changes details. */
  show_diff?: boolean;
  /** A list of puppet tags to be excluded. */
  skip_tags?: string | string[];
  /** Whether to print a transaction summary. */
  summarize?: boolean;
  /** A list of puppet tags to be used. */
  tags?: string | string[];
  /** How long to wait for C(puppet) to finish. */
  timeout?: string;
  /** Toggles use_srv_records flag. */
  use_srv_records?: boolean;
  /** Print extra information. */
  verbose?: boolean;
  /** The maximum amount of time C(puppet) should wait for an already running C(puppet) agent to finish before starting. */
  waitforlock?: string;
}

export type PuppetReturn = Record<string, unknown>;
export const puppet = defineRemoteModule<PuppetArgs, PuppetReturn>(spec, meta);
