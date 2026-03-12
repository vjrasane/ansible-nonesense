// Auto-generated from: community.general.udm_share
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface UdmShareArgs {
  /** Permissions for the share's root directory. */
  directorymode?: string;
  /** Directory owner group of the share's root directory. */
  group?: string;
  /** Host FQDN (server which provides the share), for example V({{ ansible_fqdn }}). Required if O(state=present). */
  host?: string;
  /** Name. */
  name: string;
  /** Option name in exports file. */
  nfsCustomSettings?: string | string[];
  /** Only allow access for this host, IP address or network. */
  nfs_hosts?: string | string[];
  /** Organisational unit, inside the LDAP Base DN. */
  ou: string;
  /** Directory owner of the share's root directory. */
  owner?: string;
  /** Directory on the providing server, for example V(/home). Required if O(state=present). */
  path?: string;
  /** Modify user ID for root user (root squashing). */
  root_squash?: boolean;
  /** Blocking size. */
  sambaBlockSize?: string;
  /** Blocking locks. */
  sambaBlockingLocks?: boolean;
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
  /** VFS objects. */
  sambaVFSObjects?: string;
  /** Valid users or groups. */
  sambaValidUsers?: string;
  /** Restrict write access to these users/groups. */
  sambaWriteList?: string;
  /** Samba write access. */
  sambaWriteable?: boolean;
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

export const udm_share = defineModule<UdmShareArgs, UdmShareReturn>("community.general.udm_share");
