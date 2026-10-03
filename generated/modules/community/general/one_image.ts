import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.one_image
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.one_image",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.one_image",
  moduleFqn: "ansible_collections.community.general.plugins.modules.one_image",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_opennebula.py", "plugins/modules/one_image.py"] }],
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
export interface OneImageArgs {
  /** The password or token for XMLRPC authentication. */
  api_password?: string;
  /** The ENDPOINT URL of the XMLRPC server. */
  api_url?: string;
  /** The name of the user for XMLRPC authentication. */
  api_username?: string;
  /** Whether the image should be created if not present. */
  create?: boolean;
  /** Use with O(create=true) to specify datastore for image. */
  datastore_id?: number;
  /** Whether the image should be enabled or disabled. */
  enabled?: boolean;
  /** A O(id) of the image you would like to manage. */
  id?: number;
  /** A O(name) of the image you would like to manage. */
  name?: string;
  /** A name that is assigned to the existing or new image. */
  new_name?: string;
  /** Whether the image should be persistent or non-persistent. */
  persistent?: boolean;
  /** V(present) - state that is used to manage the image. */
  state?: "present" | "absent" | "cloned" | "renamed";
  /** Use with O(create=true) to specify image template. */
  template?: string;
  /** Whether to validate the TLS/SSL certificates or not. */
  validate_certs?: boolean;
  /** Seconds to wait until image is ready, deleted or cloned. */
  wait_timeout?: number;
}

export interface OneImageReturn {
  /** The image's list of app_clones ID's. */
  app_clones?: number | number[];
  /** The image's list of clones ID's. */
  clones?: number | number[];
  /** The image's cloning ID. */
  cloning_id?: number;
  /** The image's cloning operations per second. */
  cloning_ops?: number;
  /** The image's datastore name. */
  datastore?: number;
  /** The image's datastore ID. */
  datastore_id?: number;
  /** The image's format type. */
  disk_type?: string;
  /** The image's filesystem type. */
  fstype?: string;
  /** Image's group ID. */
  group_id?: number;
  /** Image's group name. */
  group_name?: string;
  /** Image ID. */
  id?: number;
  /** Image name. */
  name?: string;
  /** Image's owner ID. */
  owner_id?: number;
  /** Image's owner name. */
  owner_name?: string;
  /** The image's filesystem path. */
  path?: string;
  /** The image's permissions. */
  permissions?: Record<string, unknown>;
  /** The image's persistence status (1 means true, 0 means false). */
  persistent?: number;
  /** Count of running vms that use this image. */
  running_vms?: number;
  /** The image's size in MegaBytes. */
  size?: number;
  /** The image's list of snapshots. */
  snapshots?: string | string[];
  /** The image's source. */
  source?: string;
  /** State of image instance. */
  state?: string;
  /** The image's target snapshot. */
  target_snapshot?: number;
  /** The image's type. */
  type?: string;
  /** Is image in use. */
  used?: boolean;
  /** The image's list of VM ID's. */
  vms?: number | number[];
}
export const one_image = defineRemoteModule<OneImageArgs, OneImageReturn>(spec, meta);
