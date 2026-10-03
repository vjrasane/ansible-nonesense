import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.pubnub_blocks
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.pubnub_blocks",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.pubnub_blocks",
  moduleFqn: "ansible_collections.community.general.plugins.modules.pubnub_blocks",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/pubnub_blocks.py"] }],
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
export interface PubnubBlocksArgs {
  /** Name of PubNub account for from which O(application) is used to manage blocks. */
  account?: string;
  /** Name of target PubNub application for which blocks configuration on specific O(keyset) is done. */
  application: string;
  /** In case if single play use blocks management module few times it is preferred to enabled 'caching' by making previous module to share gathered artifacts and pass them to this parameter. */
  cache?: Record<string, unknown>;
  /** List of fields which should be changed by block itself (does not affect any event handlers). */
  changes?: Record<string, unknown>;
  /** Short block description which is later visible on U(https://admin.pubnub.com). */
  description?: string;
  /** Email from account for which new session should be started. */
  email?: string;
  /** List of event handlers which should be updated for specified block O(name). */
  event_handlers?: Record<string, unknown> | Record<string, unknown>[];
  /** Name of application's keys set which is bound to managed blocks. */
  keyset: string;
  /** Name of managed block which is later visible on admin.pubnub.com. */
  name: string;
  /** Password which match to account to which specified O(email) belong. */
  password?: string;
  /** Intended block state after event handlers creation / update process is completed. */
  state?: "started" | "stopped" | "present" | "absent";
  /** This key allow to try skip certificates check when performing REST API calls. Sometimes host may have issues with certificates on it and this causes problems to call PubNub REST API. */
  validate_certs?: boolean;
}

export interface PubnubBlocksReturn {
  /** Cached account information. In case if with single play module used few times it is better to pass cached data to next module calls to speed up process. */
  module_cache?: Record<string, unknown>;
}
export const pubnub_blocks = defineRemoteModule<PubnubBlocksArgs, PubnubBlocksReturn>(spec, meta);
