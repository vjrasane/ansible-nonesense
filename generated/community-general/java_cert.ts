// Auto-generated from: community.general.java_cert
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface JavaCertArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** Imported certificate alias. */
  cert_alias?: string;
  /** Content of the certificate used to create the keystore. */
  cert_content?: string;
  /** Local path to load certificate from. */
  cert_path?: string;
  /** Port to connect to URL. */
  cert_port?: number;
  /** Basic URL to fetch SSL certificate from. */
  cert_url?: string;
  /** Path to keytool binary if not used we search in PATH for it. */
  executable?: string;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** Create keystore if it does not exist. */
  keystore_create?: boolean;
  /** Keystore password. */
  keystore_pass: string;
  /** Path to keystore. */
  keystore_path?: string;
  /** Keystore type (JCEKS, JKS). */
  keystore_type?: string;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** Alias in the PKCS12 keystore. */
  pkcs12_alias?: string;
  /** Password for importing from PKCS12 keystore. */
  pkcs12_password?: string;
  /** Local path to load PKCS12 keystore from. */
  pkcs12_path?: string;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** Defines action which can be either certificate import or removal. */
  state?: "absent" | "present";
  /** Trust imported cert as CAcert. */
  trust_cacert?: boolean;
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
}

export interface JavaCertReturn {
  /** Executed command to get action done. */
  cmd?: string;
}

export const java_cert = defineModule<JavaCertArgs, JavaCertReturn>("community.general.java_cert");
