// Auto-generated from: community.general.udm_group
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface UdmGroupArgs {
  /** Group description. */
  description?: string;
  /** Name of the POSIX group. */
  name: string;
  /** LDAP OU, for example V(school) for LDAP OU V(ou=school,dc=example,dc=com). */
  ou?: string;
  /** Define the whole LDAP position of the group, for example V(cn=g123m-1A,cn=classes,cn=schueler,cn=groups,ou=schule,dc=example,dc=com). */
  position?: string;
  /** Whether the group is present or not. */
  state?: "present" | "absent";
  /** Subpath inside the OU, for example V(cn=classes,cn=students,cn=groups). */
  subpath?: string;
}

export type UdmGroupReturn = Record<string, unknown>;

export const udm_group = defineModule<UdmGroupArgs, UdmGroupReturn>("community.general.udm_group");
