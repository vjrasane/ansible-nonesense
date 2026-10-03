import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.hwc_vpc_security_group_rule
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.hwc_vpc_security_group_rule",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.hwc_vpc_security_group_rule",
  moduleFqn: "ansible_collections.community.general.plugins.modules.hwc_vpc_security_group_rule",
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
    files: ["plugins/module_utils/_hwc_utils.py", "plugins/modules/hwc_vpc_security_group_rule.py"],
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
export interface HwcVpcSecurityGroupRuleArgs {
  /** Provides supplementary information about the security group rule. The value is a string of no more than 255 characters that can contain letters and digits. */
  description?: string;
  /** Specifies the direction of access control. The value can be egress or ingress. */
  direction: string;
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** Specifies the IP protocol version. The value can be IPv4 or IPv6. If you do not set this parameter, IPv4 is used by default. */
  ethertype?: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** The password to login with. */
  password: string;
  /** Specifies the end port number. The value ranges from 1 to 65535. If the protocol is not icmp, the value cannot be smaller than the port_range_min value. An empty value indicates all ports. */
  port_range_max?: number;
  /** Specifies the start port number. The value ranges from 1 to 65535. The value cannot be greater than the port_range_max value. An empty value indicates all ports. */
  port_range_min?: number;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** Specifies the protocol type. The value can be icmp, tcp, or udp. If the parameter is left blank, the security group supports all protocols. */
  protocol?: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Specifies the ID of the peer security group. The value is exclusive with parameter remote_ip_prefix. */
  remote_group_id?: string;
  /** Specifies the remote IP address. If the access control direction is set to egress, the parameter specifies the source IP address. If the access control direction is set to ingress, the parameter specifies the destination IP address. The value can be in the CIDR format or IP addresses. The parameter is exclusive with parameter remote_group_id. */
  remote_ip_prefix?: string;
  /** Specifies the security group rule ID, which uniquely identifies the security group rule. */
  security_group_id: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** The user name to login with. */
  user: string;
}

export interface HwcVpcSecurityGroupRuleReturn {
  /** Provides supplementary information about the security group rule. The value is a string of no more than 255 characters that can contain letters and digits. */
  description?: string;
  /** Specifies the direction of access control. The value can be egress or ingress. */
  direction?: string;
  /** Specifies the IP protocol version. The value can be IPv4 or IPv6. If you do not set this parameter, IPv4 is used by default. */
  ethertype?: string;
  /** Specifies the end port number. The value ranges from 1 to 65535. If the protocol is not icmp, the value cannot be smaller than the port_range_min value. An empty value indicates all ports. */
  port_range_max?: number;
  /** Specifies the start port number. The value ranges from 1 to 65535. The value cannot be greater than the port_range_max value. An empty value indicates all ports. */
  port_range_min?: number;
  /** Specifies the protocol type. The value can be icmp, tcp, or udp. If the parameter is left blank, the security group supports all protocols. */
  protocol?: string;
  /** Specifies the ID of the peer security group. The value is exclusive with parameter remote_ip_prefix. */
  remote_group_id?: string;
  /** Specifies the remote IP address. If the access control direction is set to egress, the parameter specifies the source IP address. If the access control direction is set to ingress, the parameter specifies the destination IP address. The value can be in the CIDR format or IP addresses. The parameter is exclusive with parameter remote_group_id. */
  remote_ip_prefix?: string;
  /** Specifies the security group rule ID, which uniquely identifies the security group rule. */
  security_group_id?: string;
}
export const hwc_vpc_security_group_rule = defineRemoteModule<
  HwcVpcSecurityGroupRuleArgs,
  HwcVpcSecurityGroupRuleReturn
>(spec, meta);
