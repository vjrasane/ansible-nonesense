import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.xenserver_guest
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.xenserver_guest",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.xenserver_guest",
  moduleFqn: "ansible_collections.community.general.plugins.modules.xenserver_guest",
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
      "ansible/module_utils/ansible_release.py",
      "ansible/module_utils/basic.py",
      "ansible/module_utils/common/_utils.py",
      "ansible/module_utils/common/arg_spec.py",
      "ansible/module_utils/common/collections.py",
      "ansible/module_utils/common/file.py",
      "ansible/module_utils/common/json.py",
      "ansible/module_utils/common/locale.py",
      "ansible/module_utils/common/network.py",
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
    files: ["plugins/module_utils/_xenserver.py", "plugins/modules/xenserver_guest.py"],
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
export interface XenserverGuestArgs {
  /** A CD-ROM configuration for the VM. */
  cdrom?: { iso_name?: string; type?: "none" | "iso" };
  /** Define a list of custom VM params to set on VM. */
  custom_params?: Record<string, unknown> | Record<string, unknown>[];
  /** A list of disks to add to VM. */
  disks?: Record<string, unknown> | Record<string, unknown>[];
  /** Destination folder for VM. */
  folder?: string;
  /** Ignore warnings and complete the actions. */
  force?: boolean;
  /** Manage VM's hardware parameters. VM needs to be shut down to reconfigure these parameters. */
  hardware?: { memory_mb?: number; num_cpu_cores_per_socket?: number; num_cpus?: number };
  /** Name of a XenServer host that is a Home Server for the VM. */
  home_server?: string;
  /** The hostname or IP address of the XenServer host or XenServer pool master. */
  hostname?: string;
  /** Convert VM to template. */
  is_template?: boolean;
  /** Whether to create a Linked Clone from the template, existing VM or snapshot. If V(false), it creates a full copy. */
  linked_clone?: boolean;
  /** Name of the VM to work with. */
  name?: string;
  /** VM description. */
  name_desc?: string;
  /** A list of networks (in the order of the NICs). */
  networks?: Record<string, unknown> | Record<string, unknown>[];
  /** The password to use for connecting to XenServer. */
  password?: string;
  /** Specify the state VM should be in. */
  state?: "present" | "absent" | "poweredon";
  /** By default, the module waits indefinitely for VM to acquire an IP address if O(wait_for_ip_address=true). */
  state_change_timeout?: number;
  /** Name of a template, an existing VM (must be shut down) or a snapshot that should be used to create VM. */
  template?: string;
  /** UUID of a template, an existing VM or a snapshot that should be used to create VM. */
  template_uuid?: string;
  /** The username to use for connecting to XenServer. */
  username?: string;
  /** UUID of the VM to manage if known. This is XenServer's unique identifier. */
  uuid?: string;
  /** Allows connection when SSL certificates are not valid. Set to V(false) when certificates are not trusted. */
  validate_certs?: boolean;
  /** Wait until XenServer detects an IP address for the VM. If O(state) is set to V(absent), this parameter is ignored. */
  wait_for_ip_address?: boolean;
}

export interface XenserverGuestReturn {
  /** Detected or made changes to VM. */
  changes?: string | string[];
  /** Metadata about the VM. */
  instance?: Record<string, unknown>;
}
export const xenserver_guest = defineRemoteModule<XenserverGuestArgs, XenserverGuestReturn>(spec, meta);
