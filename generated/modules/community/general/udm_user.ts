import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.udm_user
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.udm_user",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.udm_user",
  moduleFqn: "ansible_collections.community.general.plugins.modules.udm_user",
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
      "plugins/module_utils/_crypt.py",
      "plugins/module_utils/_deps.py",
      "plugins/module_utils/_univention_umc.py",
      "plugins/modules/udm_user.py",
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
export interface UdmUserArgs {
  /** Birthday. */
  birthday?: string;
  /** City of users business address. */
  city?: string;
  /** Country of users business address. */
  country?: string;
  /** Department number of users business address. */
  department_number?: string;
  /** Description (not gecos). */
  description?: string;
  /** Display name (not gecos). */
  display_name?: string;
  /** A list of e-mail addresses. */
  email?: string | string[];
  /** Employee number. */
  employee_number?: string;
  /** Employee type. */
  employee_type?: string;
  /** First name. Required if O(state=present). */
  firstname?: string;
  /** GECOS. */
  gecos?: string;
  /** POSIX groups, the LDAP DNs of the groups is found with the LDAP filter for each group as $GROUP: V((&(objectClass=posixGroup\)(cn=$GROUP\)\)). */
  groups?: string | string[];
  /** Home NFS share. Must be a LDAP DN, for example V(cn=home,cn=shares,ou=school,dc=example,dc=com). */
  home_share?: string;
  /** Path to home NFS share, inside the homeShare. */
  home_share_path?: string;
  /** List of private telephone numbers. */
  home_telephone_number?: string | string[];
  /** Windows home drive, for example V("H:"). */
  homedrive?: string;
  /** Last name. Required if O(state=present). */
  lastname?: string;
  /** List of alternative e-mail addresses. */
  mail_alternative_address?: string | string[];
  /** FQDN of mail server. */
  mail_home_server?: string;
  /** Primary e-mail address. */
  mail_primary_address?: string;
  /** Mobile phone number. */
  mobile_telephone_number?: string | string[];
  /** Organisation. */
  organisation?: string;
  /** Organizational Unit inside the LDAP Base DN, for example V(school) for LDAP OU C(ou=school,dc=example,dc=com). */
  ou?: string;
  /** Override password history. */
  overridePWHistory?: boolean;
  /** Override password check. */
  overridePWLength?: boolean;
  /** List of pager telephone numbers. */
  pager_telephonenumber?: string | string[];
  /** Password. Required if O(state=present). */
  password?: string;
  /** List of telephone numbers. */
  phone?: string | string[];
  /** Define the whole position of users object inside the LDAP tree, for example V(cn=employee,cn=users,ou=school,dc=example,dc=com). */
  position?: string;
  /** Postal code of users business address. */
  postcode?: string;
  /** Primary group. This must be the group LDAP DN. */
  primary_group?: string;
  /** Windows profile directory. */
  profilepath?: string;
  /** Change password on next login. */
  pwd_change_next_login?: "0" | "1";
  /** Room number of users business address. */
  room_number?: string;
  /** Samba privilege, like allow printer administration, do domain join. */
  samba_privileges?: string | string[];
  /** Allow the authentication only on this Microsoft Windows host. */
  samba_user_workstations?: string | string[];
  /** Windows home path, for example V('\\\\$FQDN\\$USERNAME'). */
  sambahome?: string;
  /** Windows logon script. */
  scriptpath?: string;
  /** A list of superiors as LDAP DNs. */
  secretary?: string | string[];
  /** Enable user for the following service providers. */
  serviceprovider?: string | string[];
  /** Login shell. */
  shell?: string;
  /** Whether the user is present or not. */
  state?: "present" | "absent";
  /** Street of users business address. */
  street?: string;
  /** LDAP subpath inside the organizational unit, for example V(cn=teachers,cn=users) for LDAP container C(cn=teachers,cn=users,dc=example,dc=com). */
  subpath?: string;
  /** Title, for example V(Prof.). */
  title?: string;
  /** Unix home directory. */
  unixhome?: string;
  /** V(always) updates passwords if they differ. */
  update_password?: "always" | "on_create";
  /** Account expiry date, for example V(1999-12-31). */
  userexpiry?: string;
  /** User name. */
  username: string;
}

export type UdmUserReturn = Record<string, unknown>;
export const udm_user = defineRemoteModule<UdmUserArgs, UdmUserReturn>(spec, meta);
