import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.maven_artifact
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.maven_artifact",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.maven_artifact",
  moduleFqn: "ansible_collections.community.general.plugins.modules.maven_artifact",
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
      "ansible/module_utils/ansible_release.py",
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
      "ansible/module_utils/urls.py",
    ],
  }, { artifact: communityGeneral, files: ["plugins/modules/maven_artifact.py"] }],
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
  /** If V(false) (default), O(keep_name) also controls whether O(version) is part of the destination filename when a fixed O(version) is given (that is, not V(latest) and O(version_by_spec) is not used). This does not match the documented scope of O(keep_name). */
  keep_name_only_when_resolved?: boolean;
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
export const maven_artifact = defineRemoteModule<MavenArtifactArgs, MavenArtifactReturn>(spec, meta);
