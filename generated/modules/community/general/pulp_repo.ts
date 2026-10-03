import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.pulp_repo
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.pulp_repo",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.pulp_repo",
  moduleFqn: "ansible_collections.community.general.plugins.modules.pulp_repo",
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
      "ansible/module_utils/urls.py",
    ],
  }, { artifact: communityGeneral, files: ["plugins/modules/pulp_repo.py"] }],
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
export interface PulpRepoArgs {
  /** Whether or not to add the export distributor to new C(rpm) repositories. */
  add_export_distributor?: boolean;
  /** PEM formatted certificate chain file to be used for SSL client authentication. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. */
  client_key?: string;
  /** Upstream feed URL to receive updates from. */
  feed?: string;
  /** CA certificate string used to validate the feed source SSL certificate. This can be the file content or the path to the file. */
  feed_ca_cert?: string;
  /** Certificate used as the client certificate when synchronizing the repository. This is used to communicate authentication information to the feed source. The value to this option must be the full path to the certificate. The specified file may be the certificate itself or a single file containing both the certificate and private key. This can be the file content or the path to the file. */
  feed_client_cert?: string;
  /** Private key to the certificate specified in O(feed_client_cert), assuming it is not included in the certificate file itself. This can be the file content or the path to the file. */
  feed_client_key?: string;
  /** If V(yes) do not get a cached copy. */
  force?: boolean;
  /** C(httplib2), the library used by the M(ansible.builtin.uri) module only sends authentication information when a webservice responds to an initial request with a 401 status. Since some basic auth services do not properly send a 401, logins fail. This option forces the sending of the Basic authentication header upon initial request. */
  force_basic_auth?: boolean;
  /** Boolean flag to indicate whether sqlite files should be generated during a repository publish. */
  generate_sqlite?: boolean;
  /** Header to identify as, generally appears in web server logs. */
  http_agent?: string;
  /** Name of the repo to add or remove. This correlates to repo-id in Pulp. */
  name: string;
  /** Proxy URL setting for the pulp repository importer. This is in the format V(scheme://host). */
  proxy_host?: string;
  /** Proxy password for the pulp repository importer. */
  proxy_password?: string;
  /** Proxy port setting for the pulp repository importer. */
  proxy_port?: string;
  /** Proxy username for the pulp repository importer. */
  proxy_username?: string;
  /** Distributor to use when O(state=publish). The default is to publish all distributors. */
  publish_distributor?: string;
  /** URL of the pulp server to connect to. */
  pulp_host?: string;
  /** Relative URL for the local repository. It's required when state=present. */
  relative_url?: string;
  /** Repo plugin type to use (that is, V(rpm), V(docker)). */
  repo_type?: string;
  /** Whether to generate repoview files for a published repository. Setting this to V(true) automatically activates O(generate_sqlite). */
  repoview?: boolean;
  /** Make the repo available over HTTP. */
  serve_http?: boolean;
  /** Make the repo available over HTTPS. */
  serve_https?: boolean;
  /** The repo state. A state of V(sync) queues a sync of the repo. This is asynchronous but not delayed like a scheduled sync. A state of V(publish) uses the repository's distributor to publish the content. */
  state?: "present" | "absent" | "sync" | "publish";
  /** HTTP, HTTPS, or FTP URL in the form (http|https|ftp)://[user[:pass]]@host.domain[:port]/path */
  url?: string;
  /** The password for use in HTTP basic authentication to the pulp API. If the O(url_username) parameter is not specified, the O(url_password) parameter is not used. */
  url_password?: string;
  /** The username for use in HTTP basic authentication to the pulp API. */
  url_username?: string;
  /** Use GSSAPI to perform the authentication, typically this is for Kerberos or Kerberos through Negotiate authentication. */
  use_gssapi?: boolean;
  /** If V(no), it will not use a proxy, even if one is defined in an environment variable on the target hosts. */
  use_proxy?: boolean;
  /** If V(false), SSL certificates are not validated. This should only be used on personally controlled sites using self-signed certificates. */
  validate_certs?: boolean;
  /** Wait for asynchronous tasks to complete before returning. */
  wait_for_completion?: boolean;
}

export interface PulpRepoReturn {
  /** Name of the repo that the action was performed on. */
  repo?: string;
}
export const pulp_repo = defineRemoteModule<PulpRepoArgs, PulpRepoReturn>(spec, meta);
