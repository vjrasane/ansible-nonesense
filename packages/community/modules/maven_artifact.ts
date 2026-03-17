// Auto-generated from: community.general.maven_artifact
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface MavenArtifactArgs {
  /** The maven artifactId coordinate. */
  artifact_id: string;
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** If V(md5), checksums use the MD5 algorithm. This is the default. */
  checksum_alg?: "md5" | "sha1";
  /** The maven classifier coordinate. */
  classifier?: string;
  /** PEM formatted certificate chain file to be used for SSL client authentication. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. */
  client_key?: string;
  /** The path where the artifact should be written to. */
  dest: string;
  /** Filesystem permission mode applied recursively to O(dest) when it is a directory. */
  directory_mode?: string;
  /** The maven type/extension coordinate. */
  extension?: string;
  /** C(httplib2), the library used by the URI module only sends authentication information when a webservice responds to an initial request with a 401 status. Since some basic auth services do not properly send a 401, logins fail. This option forces the sending of the Basic authentication header upon initial request. */
  force_basic_auth?: boolean;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** The Maven groupId coordinate. */
  group_id: string;
  /** Add custom HTTP headers to a request in hash/dict format. */
  headers?: Record<string, unknown>;
  /** If V(true), the downloaded artifact's name is preserved, in other words the version number remains part of it. */
  keep_name?: boolean;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** The password to authenticate with to the Maven Repository. Use AWS secret access key of the repository is hosted on S3. */
  password?: string;
  /** The URL of the Maven Repository to download from. */
  repository_url?: string;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** The desired state of the artifact. */
  state?: "present" | "absent";
  /** Specifies a timeout in seconds for the connection attempt. */
  timeout?: number;
  /** A list of headers that should not be included in the redirection. This headers are sent to the C(fetch_url) function. */
  unredirected_headers?: string | string[];
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
  /** The username to authenticate as to the Maven Repository. Use AWS secret key of the repository is hosted on S3. */
  username?: string;
  /** If V(false), SSL certificates are not validated. This should only be set to V(false) when no other option exists. */
  validate_certs?: boolean;
  /** If V(never), the MD5/SHA1 checksum is never downloaded and verified. */
  verify_checksum?: "never" | "download" | "change" | "always";
  /** The maven version coordinate. */
  version?: string;
  /** The maven dependency version ranges. */
  version_by_spec?: string;
}

export type MavenArtifactReturn = Record<string, unknown>;

export const maven_artifact = defineModule<MavenArtifactArgs, MavenArtifactReturn>("community.general.maven_artifact");
