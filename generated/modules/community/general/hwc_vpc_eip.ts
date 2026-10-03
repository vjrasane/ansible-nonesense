import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.hwc_vpc_eip
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.hwc_vpc_eip",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.hwc_vpc_eip",
  moduleFqn: "ansible_collections.community.general.plugins.modules.hwc_vpc_eip",
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
  }, { artifact: communityGeneral, files: ["plugins/module_utils/_hwc_utils.py", "plugins/modules/hwc_vpc_eip.py"] }],
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
export interface HwcVpcEipArgs {
  /** Specifies the dedicated bandwidth object. */
  dedicated_bandwidth?: { charge_mode: string; name: string; size: number };
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** Specifies the enterprise project ID. */
  enterprise_project_id?: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** The value can be 4 (IPv4 address) or 6 (IPv6 address). If this parameter is left blank, an IPv4 address is assigned. */
  ip_version?: number;
  /** Specifies the obtained IPv4 EIP. The system automatically assigns an EIP if you do not specify it. */
  ipv4_address?: string;
  /** The password to login with. */
  password: string;
  /** Specifies the port ID. This parameter is returned only when a private IP address is bound with the EIP. */
  port_id?: string;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Specifies the ID of shared bandwidth. */
  shared_bandwidth_id?: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** The timeouts for each operations. */
  timeouts?: { create?: string; update?: string };
  /** Specifies the EIP type. */
  type: string;
  /** The user name to login with. */
  user: string;
}

export interface HwcVpcEipReturn {
  /** Specifies the time (UTC time) when the EIP was assigned. */
  create_time?: string;
  /** Specifies the dedicated bandwidth object. */
  dedicated_bandwidth?: Record<string, unknown>;
  /** Specifies the enterprise project ID. */
  enterprise_project_id?: string;
  /** The value can be 4 (IPv4 address) or 6 (IPv6 address). If this parameter is left blank, an IPv4 address is assigned. */
  ip_version?: number;
  /** Specifies the obtained IPv4 EIP. The system automatically assigns an EIP if you do not specify it. */
  ipv4_address?: string;
  /** Specifies the obtained IPv6 EIP. */
  ipv6_address?: string;
  /** Specifies the port ID. This parameter is returned only when a private IP address is bound with the EIP. */
  port_id?: string;
  /** Specifies the private IP address bound with the EIP. This parameter is returned only when a private IP address is bound with the EIP. */
  private_ip_address?: string;
  /** Specifies the ID of shared bandwidth. */
  shared_bandwidth_id?: string;
  /** Specifies the EIP type. */
  type?: string;
}
export const hwc_vpc_eip = defineRemoteModule<HwcVpcEipArgs, HwcVpcEipReturn>(spec, meta);
