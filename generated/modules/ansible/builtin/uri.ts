import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, coreScaffold } from "./artifacts.ts";

// Auto-generated from: ansible.builtin.uri
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "ansible.builtin.uri",
  "actionPlugin": true,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "ansible.builtin.uri",
  moduleFqn: "ansible.modules.uri",
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
      "ansible/modules/uri.py",
    ],
  }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible/modules/__init__.py",
  ],
} as const;
export interface UriArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** The body of the http request/response to the web service. If O(body_format) is set to V(json) it will take an already formatted JSON string or convert a data structure into JSON. */
  body?: unknown;
  /** The serialization format of the body. When set to V(json), V(form-multipart), or V(form-urlencoded), encodes the body argument, if needed, and automatically sets the C(Content-Type) header accordingly. */
  body_format?: "form-urlencoded" | "json" | "raw" | "form-multipart";
  /** PEM formatted file that contains a CA certificate to be used for validation. */
  ca_path?: string;
  /** SSL/TLS Ciphers to use for the request. */
  ciphers?: string | string[];
  /** PEM formatted certificate chain file to be used for SSL client authentication. */
  client_cert?: string;
  /** PEM formatted file that contains your private key to be used for SSL client authentication. */
  client_key?: string;
  /** A filename, when it already exists, this step will not be run. */
  creates?: string;
  /** Whether to attempt to decompress gzip content-encoded responses. */
  decompress?: boolean;
  /** A path of where to download the file to (if desired). If O(dest) is a directory, the basename of the file on the remote server will be used. */
  dest?: string;
  /** Whether or not the URI module should follow redirects. */
  follow_redirects?: string;
  /** If V(true) do not get a cached copy. */
  force?: boolean;
  /** Force the sending of the Basic authentication header upon initial request. */
  force_basic_auth?: boolean;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** Add custom HTTP headers to a request in the format of a YAML hash. As of Ansible 2.3 supplying C(Content-Type) here will override the header generated by supplying V(json) or V(form-urlencoded) for O(body_format). */
  headers?: Record<string, unknown>;
  /** Header to identify as, generally appears in web server logs. */
  http_agent?: string;
  /** The HTTP method of the request or response. */
  method?: string;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** If V(false), the module will search for the O(src) on the controller node. */
  remote_src?: boolean;
  /** A filename, when it does not exist, this step will not be run. */
  removes?: string;
  /** Whether or not to return the body of the response as a "content" key in the dictionary result no matter it succeeded or failed. */
  return_content?: boolean;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** Path to file to be submitted to the remote server. */
  src?: string;
  /** A list of valid, numeric, HTTP status codes that signifies success of the request. */
  status_code?: number | number[];
  /** The socket level timeout in seconds */
  timeout?: number;
  /** Path to Unix domain socket to use for connection. */
  unix_socket?: string;
  /** A list of header names that will not be sent on subsequent redirected requests. This list is case insensitive. By default all headers will be redirected. In some cases it may be beneficial to list headers such as C(Authorization) here to avoid potential credential exposure. */
  unredirected_headers?: string | string[];
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
  /** HTTP or HTTPS URL in the form (http|https)://host.domain[:port]/path. */
  url: string;
  /** A password for the module to use for Digest, Basic or WSSE authentication. */
  url_password?: string;
  /** A username for the module to use for Digest, Basic or WSSE authentication. */
  url_username?: string;
  /** Use GSSAPI to perform the authentication, typically this is for Kerberos or Kerberos through Negotiate authentication. */
  use_gssapi?: boolean;
  /** Determining whether to use credentials from C(~/.netrc) file. */
  use_netrc?: boolean;
  /** If V(false), it will not use a proxy, even if one is defined in an environment variable on the target hosts. */
  use_proxy?: boolean;
  /** If V(false), SSL certificates will not be validated. */
  validate_certs?: boolean;
}

export interface UriReturn {
  /** The response body content. */
  content?: string;
  /** The cookie values placed in cookie jar. */
  cookies?: Record<string, unknown>;
  /** The value for future request Cookie headers. */
  cookies_string?: string;
  /** The number of seconds that elapsed while performing the download. */
  elapsed?: number;
  /** The HTTP message from the request. */
  msg?: string;
  /** destination file/path */
  path?: string;
  /** Whether the request was redirected. */
  redirected?: boolean;
  /** The HTTP status code from the request. */
  status?: number;
  /** The actual URL used for the request. */
  url?: string;
}
export const uri = defineRemoteModule<UriArgs, UriReturn>(spec, meta);
