import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.nmcli
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.nmcli",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.nmcli",
  moduleFqn: "ansible_collections.community.general.plugins.modules.nmcli",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/nmcli.py"] }],
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
export interface NmcliArgs {
  /** Configure method for creating the address for use with IPv6 Stateless Address Autoconfiguration. */
  addr_gen_mode6?: "default" | "default-or-eui64" | "eui64" | "stable-privacy";
  /** This is only used with bridge - [ageing-time <0-1000000>] the Ethernet MAC address aging time, in seconds. */
  ageingtime?: number;
  /** This is only used with bond - ARP interval. */
  arp_interval?: number;
  /** This is only used with bond - ARP IP target. */
  arp_ip_target?: string;
  /** Whether the connection should start on boot. */
  autoconnect?: boolean;
  /** The priority of the connection profile for autoconnect. If set, connection profiles with higher priority are preferred. */
  autoconnect_priority?: number;
  /** The number of times to retry autoconnecting. */
  autoconnect_retries?: number;
  /** Controls how the module behaves when O(mode) is omitted on an existing bond connection. */
  bond_mode_behavior?: "preserve" | "reset";
  /** The name used to call the connection. Pattern is V(<type>[-<ifname>][-<num>]). */
  conn_name: string;
  /** Whether the connection should be reloaded if it was modified. */
  conn_reload?: boolean;
  /** DHCP Client Identifier sent to the DHCP server. */
  dhcp_client_id?: string;
  /** A list of up to 3 DNS servers. */
  dns4?: string | string[];
  /** Ignore automatically configured IPv4 name servers. */
  dns4_ignore_auto?: boolean;
  /** A list of DNS options. */
  dns4_options?: string | string[];
  /** A list of DNS search domains. */
  dns4_search?: string | string[];
  /** A list of up to 3 DNS servers. */
  dns6?: string | string[];
  /** Ignore automatically configured IPv6 name servers. */
  dns6_ignore_auto?: boolean;
  /** A list of DNS options. */
  dns6_options?: string | string[];
  /** A list of DNS search domains. */
  dns6_search?: string | string[];
  /** This is only used with bond - downdelay. */
  downdelay?: number;
  /** This is only used with VLAN - VLAN egress priority mapping. */
  egress?: string;
  /** This is only used with bond - fail_over_mac. */
  fail_over_mac?: "none" | "active" | "follow";
  /** This is only used with VLAN - flags. */
  flags?: string;
  /** This is only used with bridge - [forward-delay <2-30>] STP forwarding delay, in seconds. */
  forwarddelay?: number;
  /** The configuration of the GSM connection. */
  gsm?: {
    apn?: string;
    "auto-config"?: boolean;
    "device-id"?: string;
    "home-only"?: boolean;
    mtu?: number;
    "network-id"?: string;
    number?: string;
    password?: string;
    "password-flags"?: number;
    pin?: string;
    "pin-flags"?: number;
    "sim-id"?: string;
    "sim-operator-id"?: string;
    username?: string;
  };
  /** The IPv4 gateway for this interface. */
  gw4?: string;
  /** Ignore automatically configured IPv4 routes. */
  gw4_ignore_auto?: boolean;
  /** The IPv6 gateway for this interface. */
  gw6?: string;
  /** Ignore automatically configured IPv6 routes. */
  gw6_ignore_auto?: boolean;
  /** This is only used with 'bridge-slave' - 'hairpin mode' for the slave, which allows frames to be sent back out through the slave the frame was received on. */
  hairpin?: boolean;
  /** This is only used with bridge - [hello-time <1-10>] STP hello time, in seconds. */
  hellotime?: number;
  /** The interface to bind the connection to. */
  ifname?: string;
  /** Ignore suboptions which are invalid or unsupported by the version of NetworkManager/nmcli installed on the host. */
  ignore_unsupported_suboptions?: boolean;
  /** MAC address of the Infiniband IPoIB devices. */
  infiniband_mac?: string;
  /** This is only used with VLAN - VLAN ingress priority mapping. */
  ingress?: string;
  /** If enabled, it makes the kernel generate a temporary IPv6 address in addition to the public one. */
  ip_privacy6?: "disabled" | "prefer-public-addr" | "prefer-temp-addr" | "unknown";
  /** This is used with GRE/IPIP/SIT - parent device this GRE/IPIP/SIT tunnel, can use ifname. */
  ip_tunnel_dev?: string;
  /** The key used for tunnel input packets. */
  ip_tunnel_input_key?: string;
  /** This is used with GRE/IPIP/SIT - GRE/IPIP/SIT local IP address. */
  ip_tunnel_local?: string;
  /** The key used for tunnel output packets. */
  ip_tunnel_output_key?: string;
  /** This is used with GRE/IPIP/SIT - GRE/IPIP/SIT destination IP address. */
  ip_tunnel_remote?: string;
  /** List of IPv4 addresses to this interface. */
  ip4?: string | string[];
  /** List of IPv6 addresses to this interface. */
  ip6?: string | string[];
  /** MAC address of the connection. */
  mac?: string;
  /** The configuration of the MAC VLAN connection. */
  macvlan?: { mode: number; parent: string; promiscuous?: boolean; tap?: boolean };
  /** Master <master (ifname, or connection UUID or conn_name) of bridge, team, bond, ovs-port master connection profile. */
  master?: string;
  /** This is only used with bridge - [max-age <6-42>] STP maximum message age, in seconds. */
  maxage?: number;
  /** If you need O(ip4) configured before C(network-online.target) is reached, set this option to V(false). */
  may_fail4?: boolean;
  /** Configuration method to be used for IPv4. */
  method4?: "auto" | "link-local" | "manual" | "shared" | "disabled";
  /** Configuration method to be used for IPv6. */
  method6?: "ignore" | "auto" | "dhcp" | "link-local" | "manual" | "shared" | "disabled";
  /** This is only used with bond - miimon. */
  miimon?: number;
  /** This is the type of device or network connection that you wish to create for a bond or bridge. */
  mode?: "802.3ad" | "active-backup" | "balance-alb" | "balance-rr" | "balance-tlb" | "balance-xor" | "broadcast";
  /** The connection MTU, for example V(9000). This can not be applied when creating the interface and is done once the interface has been created. */
  mtu?: number;
  /** Set as default route. */
  never_default4?: boolean;
  /** This is only used with 'bridge-slave' - [<1-65535>] - STP port cost for destinations using this slave. */
  path_cost?: number;
  /** This is only used with bond and is the primary interface name (for "active-backup" mode), this is the usually the 'ifname'. */
  primary?: string;
  /** This is only used with 'bridge' - sets STP priority. */
  priority?: number;
  /** Set metric level of ipv4 routes configured on interface. */
  route_metric4?: number;
  /** Set metric level of IPv6 routes configured on interface. */
  route_metric6?: number;
  /** The list of IPv4 routes. */
  routes4?: string | string[];
  /** The list of IPv4 routes. */
  routes4_extended?: Record<string, unknown> | Record<string, unknown>[];
  /** The list of IPv6 routes. */
  routes6?: string | string[];
  /** The list of IPv6 routes but with parameters. */
  routes6_extended?: Record<string, unknown> | Record<string, unknown>[];
  /** Is the same as in an C(ip rule add) command, except always requires specifying a priority. */
  routing_rules4?: string | string[];
  /** Is the same as in an C(ip rule add) command, except always requires specifying a priority. */
  routing_rules6?: string | string[];
  /** This is the type of device or network connection that you wish to create for a team. */
  runner?: "broadcast" | "roundrobin" | "activebackup" | "loadbalance" | "lacp";
  /** Option specifies the rate at which our link partner is asked to transmit LACPDU packets. If this is V(true) then packets are sent once per second. Otherwise they are sent every 30 seconds. */
  runner_fast_rate?: boolean;
  /** This defines the policy of how hardware addresses of team device and port devices should be set during the team lifetime. */
  runner_hwaddr_policy?: "same_all" | "by_active" | "only_active";
  /** Type of the device of this slave's master connection (for example V(bond)). */
  slave_type?: "bond" | "bridge" | "team" | "ovs-port" | "vrf";
  /** This is only used with 'bridge-slave' - [<0-63>] - STP priority of this slave. */
  slavepriority?: number;
  /** Allow to configure SR-IOV settings. */
  sriov?: {
    "autoprobe-drivers"?: number;
    "eswitch-encap-mode"?: number;
    "eswitch-inline-mode"?: number;
    "eswitch-mode"?: number;
    "total-vfs"?: number;
    vfs?: string;
  };
  /** Name of the Wireless router or the access point. */
  ssid?: string;
  /** Whether the device should exist or not, taking action if the state is different from what is stated. */
  state: "absent" | "present" | "up" | "down";
  /** This is only used with bridge and controls whether Spanning Tree Protocol (STP) is enabled for this bridge. */
  stp?: boolean;
  /** This is only used with VRF - VRF table number. */
  table?: number;
  /** This option sets the connection type of Infiniband IPoIB devices. */
  transport_mode?: "datagram" | "connected";
  /** This is the type of device or network connection that you wish to create or modify. */
  type?:
    | "bond"
    | "bond-slave"
    | "bridge"
    | "bridge-slave"
    | "dummy"
    | "ethernet"
    | "generic"
    | "gre"
    | "infiniband"
    | "ipip"
    | "macvlan"
    | "sit"
    | "team"
    | "team-slave"
    | "vlan"
    | "vxlan"
    | "wifi"
    | "gsm"
    | "wireguard"
    | "ovs-bridge"
    | "ovs-port"
    | "ovs-interface"
    | "vpn"
    | "vrf"
    | "loopback";
  /** This is only used with bond - updelay. */
  updelay?: number;
  /** This is only used with VLAN - parent device this VLAN is on, can use ifname. */
  vlandev?: string;
  /** This is only used with VLAN - VLAN ID in range <0-4095>. */
  vlanid?: number;
  /** Configuration of a VPN connection (PPTP and L2TP). */
  vpn?: {
    gateway: string;
    "ipsec-enabled"?: boolean;
    "ipsec-psk"?: string;
    "password-flags"?: number;
    permissions: string;
    "service-type": string;
    user: string;
  };
  /** This is only used with VXLAN - VXLAN ID. */
  vxlan_id?: number;
  /** This is only used with VXLAN - VXLAN local IP address. */
  vxlan_local?: string;
  /** This is only used with VXLAN - VXLAN parent device (required when using a multicast remote address). */
  vxlan_parent?: string;
  /** This is only used with VXLAN - VXLAN destination IP address. */
  vxlan_remote?: string;
  /** The configuration of the WiFi connection. */
  wifi?: {
    "ap-isolation"?: number;
    "assigned-mac-address"?: string;
    band?: "a" | "bg";
    bssid?: string;
    channel?: number;
    "cloned-mac-address"?: string;
    "generate-mac-address-mask"?: string;
    hidden?: boolean;
    "mac-address"?: string;
    "mac-address-blacklist"?: string | string[];
    "mac-address-randomization"?: number;
    mode?: "infrastructure" | "mesh" | "adhoc" | "ap";
    mtu?: number;
    powersave?: number;
    rate?: number;
    "tx-power"?: number;
    "wake-on-wlan"?: number;
  };
  /** The security configuration of the WiFi connection. */
  wifi_sec?: {
    "auth-alg"?: "open" | "shared" | "leap";
    fils?: number;
    group?: "wep40" | "wep104" | "tkip" | "ccmp";
    "key-mgmt"?: "none" | "ieee8021x" | "owe" | "wpa-psk" | "sae" | "wpa-eap" | "wpa-eap-suite-b-192";
    "leap-password"?: string;
    "leap-password-flags"?: number | number[];
    "leap-username"?: string;
    pairwise?: "tkip" | "ccmp";
    pmf?: number;
    proto?: "wpa" | "rsn";
    psk?: string;
    "psk-flags"?: number | number[];
    "wep-key-flags"?: number | number[];
    "wep-key-type"?: number;
    "wep-key0"?: string;
    "wep-key1"?: string;
    "wep-key2"?: string;
    "wep-key3"?: string;
    "wep-tx-keyidx"?: number;
    "wps-method"?: number;
  };
  /** The configuration of the Wireguard connection. */
  wireguard?: {
    fwmark?: number;
    "ip4-auto-default-route"?: boolean;
    "ip6-auto-default-route"?: boolean;
    "listen-port"?: number;
    mtu?: number;
    "peer-routes"?: boolean;
    "private-key"?: string;
    "private-key-flags"?: number;
  };
  /** This is only used with bond - xmit_hash_policy type. */
  xmit_hash_policy?: string;
  /** The trust level of the connection. */
  zone?: string;
}

export type NmcliReturn = Record<string, unknown>;
export const nmcli = defineRemoteModule<NmcliArgs, NmcliReturn>(spec, meta);
