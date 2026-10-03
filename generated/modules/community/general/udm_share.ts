import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.udm_share
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.udm_share",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.udm_share",
  moduleFqn: "ansible_collections.community.general.plugins.modules.udm_share",
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
    files: ["plugins/module_utils/_univention_umc.py", "plugins/modules/udm_share.py"],
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
export interface UdmShareArgs {
  /** Permissions for the share's root directory. */
  directorymode?: string;
  /** Directory owner group of the share's root directory. */
  group?: string;
  /** Host FQDN (server which provides the share), for example V({{ ansible_fqdn }}). Required if O(state=present). */
  host?: string;
  /** Name. */
  name: string;
  /** Only allow access for this host, IP address or network. */
  nfs_hosts?: string | string[];
  /** Option name in exports file. */
  nfsCustomSettings?: string | string[];
  /** Organisational unit, inside the LDAP Base DN. */
  ou: string;
  /** Directory owner of the share's root directory. */
  owner?: string;
  /** Directory on the providing server, for example V(/home). Required if O(state=present). */
  path?: string;
  /** Modify user ID for root user (root squashing). */
  root_squash?: boolean;
  /** Blocking locks. */
  sambaBlockingLocks?: boolean;
  /** Blocking size. */
  sambaBlockSize?: string;
  /** Show in Windows network environment. */
  sambaBrowseable?: boolean;
  /** File mode. */
  sambaCreateMode?: string;
  /** Client-side caching policy. */
  sambaCscPolicy?: string;
  /** Option name in C(smb.conf) and its value. */
  sambaCustomSettings?: Record<string, unknown> | Record<string, unknown>[];
  /** Directory mode. */
  sambaDirectoryMode?: string;
  /** Directory security mode. */
  sambaDirectorySecurityMode?: string;
  /** Users with write access may modify permissions. */
  sambaDosFilemode?: boolean;
  /** Fake oplocks. */
  sambaFakeOplocks?: boolean;
  /** Force file mode. */
  sambaForceCreateMode?: boolean;
  /** Force directory mode. */
  sambaForceDirectoryMode?: boolean;
  /** Force directory security mode. */
  sambaForceDirectorySecurityMode?: boolean;
  /** Force group. */
  sambaForceGroup?: string;
  /** Force security mode. */
  sambaForceSecurityMode?: boolean;
  /** Force user. */
  sambaForceUser?: string;
  /** Hide files. */
  sambaHideFiles?: string;
  /** Hide unreadable files/directories. */
  sambaHideUnreadable?: boolean;
  /** Allowed host/network. */
  sambaHostsAllow?: string | string[];
  /** Denied host/network. */
  sambaHostsDeny?: string | string[];
  /** Inherit ACLs. */
  sambaInheritAcls?: boolean;
  /** Create files/directories with the owner of the parent directory. */
  sambaInheritOwner?: boolean;
  /** Create files/directories with permissions of the parent directory. */
  sambaInheritPermissions?: boolean;
  /** Invalid users or groups. */
  sambaInvalidUsers?: string;
  /** Level 2 oplocks. */
  sambaLevel2Oplocks?: boolean;
  /** Locking. */
  sambaLocking?: boolean;
  /** MSDFS root. */
  sambaMSDFSRoot?: boolean;
  /** Windows name. Required if O(state=present). */
  sambaName?: string;
  /** NT ACL support. */
  sambaNtAclSupport?: boolean;
  /** Oplocks. */
  sambaOplocks?: boolean;
  /** Postexec script. */
  sambaPostexec?: string;
  /** Preexec script. */
  sambaPreexec?: string;
  /** Allow anonymous read-only access with a guest user. */
  sambaPublic?: boolean;
  /** Security mode. */
  sambaSecurityMode?: string;
  /** Strict locking. */
  sambaStrictLocking?: string;
  /** Valid users or groups. */
  sambaValidUsers?: string;
  /** VFS objects. */
  sambaVFSObjects?: string;
  /** Samba write access. */
  sambaWriteable?: boolean;
  /** Restrict write access to these users/groups. */
  sambaWriteList?: string;
  /** Whether the share is present or not. */
  state?: "present" | "absent";
  /** Subtree checking. */
  subtree_checking?: boolean;
  /** NFS synchronisation. */
  sync?: string;
  /** NFS write access. */
  writeable?: boolean;
}

export type UdmShareReturn = Record<string, unknown>;
export const udm_share = defineRemoteModule<UdmShareArgs, UdmShareReturn>(spec, meta);
