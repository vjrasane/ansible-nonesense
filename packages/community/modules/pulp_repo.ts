// Auto-generated from: community.general.pulp_repo
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

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

export const pulp_repo = defineModule<PulpRepoArgs, PulpRepoReturn>("community.general.pulp_repo");
