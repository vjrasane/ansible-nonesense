import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.manageiq_provider
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.manageiq_provider",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "none",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.manageiq_provider",
  moduleFqn: "ansible_collections.community.general.plugins.modules.manageiq_provider",
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
    files: ["plugins/module_utils/_manageiq.py", "plugins/modules/manageiq_provider.py"],
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
export interface ManageiqProviderArgs {
  /** Alerts endpoint connection information. */
  alerts?: {
    auth_key?: string;
    certificate_authority?: string;
    hostname: string;
    password?: string;
    path?: string;
    port?: number;
    project?: string;
    role?: string;
    security_protocol?: "ssl-with-validation" | "ssl-with-validation-custom-ca" | "ssl-without-validation" | "non-ssl";
    subscription?: string;
    uid_ems?: string;
    userid?: string;
    validate_certs?: boolean;
  };
  /** The OpenStack Keystone API version. */
  api_version?: "v2" | "v3";
  /** Tenant ID. Defaults to V(null). */
  azure_tenant_id?: string;
  /** The last port in the host VNC range. */
  host_default_vnc_port_end?: string;
  /** The first port in the host VNC range. */
  host_default_vnc_port_start?: string;
  /** ManageIQ connection configuration information. */
  manageiq_connection?: {
    ca_cert?: string;
    password?: string;
    token?: string;
    url?: string;
    username?: string;
    validate_certs?: boolean;
  };
  /** Metrics endpoint connection information. */
  metrics?: {
    auth_key?: string;
    certificate_authority?: string;
    hostname: string;
    password?: string;
    path?: string;
    port?: number;
    project?: string;
    role?: string;
    security_protocol?: "ssl-with-validation" | "ssl-with-validation-custom-ca" | "ssl-without-validation" | "non-ssl";
    subscription?: string;
    uid_ems?: string;
    userid?: string;
    validate_certs?: boolean;
  };
  /** The provider's name. */
  name: string;
  /** Google Compute Engine Project ID. */
  project?: string;
  /** Default endpoint connection information, required if state is true. */
  provider?: {
    auth_key?: string;
    certificate_authority?: string;
    hostname: string;
    password?: string;
    path?: string;
    port?: number;
    project?: string;
    role?: string;
    security_protocol?: "ssl-with-validation" | "ssl-with-validation-custom-ca" | "ssl-without-validation" | "non-ssl";
    subscription?: string;
    uid_ems?: string;
    userid?: string;
    validate_certs?: boolean;
  };
  /** The provider region name to connect to (for example AWS region for Amazon). */
  provider_region?: string;
  /** SSH key pair used for SSH connections to all hosts in this provider. */
  ssh_keypair?: {
    auth_key?: string;
    certificate_authority?: string;
    hostname: string;
    password?: string;
    path?: string;
    port?: number;
    project?: string;
    role?: string;
    security_protocol?: "ssl-with-validation" | "ssl-with-validation-custom-ca" | "ssl-without-validation" | "non-ssl";
    subscription?: string;
    uid_ems?: string;
    userid?: string;
    validate_certs?: boolean;
  };
  /** V(absent) - provider should not exist, */
  state?: "absent" | "present" | "refresh";
  /** Microsoft Azure subscription ID. */
  subscription?: string;
  /** Whether to enable mapping of existing tenants. */
  tenant_mapping_enabled?: boolean;
  /** The provider's type. */
  type?: "Openshift" | "Amazon" | "oVirt" | "VMware" | "Azure" | "Director" | "OpenStack" | "GCE";
  /** The ManageIQ zone name that manages the provider. */
  zone?: string;
}

export type ManageiqProviderReturn = Record<string, unknown>;
export const manageiq_provider = defineRemoteModule<ManageiqProviderArgs, ManageiqProviderReturn>(spec, meta);
