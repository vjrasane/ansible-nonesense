// Auto-generated from: community.general.udm_user
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

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

export const udm_user = defineModule<UdmUserArgs, UdmUserReturn>("community.general.udm_user");
