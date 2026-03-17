// Auto-generated from: community.general.java_keystore
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface JavaKeystoreArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** Content of the certificate used to create the keystore. */
  certificate?: string;
  /** Location of the certificate used to create the keystore. */
  certificate_path?: string;
  /** Absolute path of the generated keystore. */
  dest: string;
  /** Keystore is created even if it already exists. */
  force?: boolean;
  /** Name of the group that should own jks file. */
  group?: string;
  /** Type of the Java keystore. */
  keystore_type?: "jks" | "pkcs12";
  /** Mode the file should be. */
  mode?: unknown;
  /** Name of the certificate in the keystore. */
  name: string;
  /** Name of the user that should own jks file. */
  owner?: string;
  /** Password that should be used to secure the keystore. */
  password: string;
  /** Content of the private key used to create the keystore. */
  private_key?: string;
  /** Passphrase used to read the private key, if required. */
  private_key_passphrase?: string;
  /** Location of the private key used to create the keystore. */
  private_key_path?: string;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** Backend for loading private keys and certificates. */
  ssl_backend?: "openssl" | "cryptography";
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
}

export interface JavaKeystoreReturn {
  /** Executed command to get action done. */
  cmd?: string;
  /** Output from stderr of keytool/openssl command after error of given command. */
  err?: string;
}

export const java_keystore = defineModule<JavaKeystoreArgs, JavaKeystoreReturn>("community.general.java_keystore");
