import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.mqtt
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.mqtt",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.mqtt",
  moduleFqn: "ansible_collections.community.general.plugins.modules.mqtt",
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
  }, { artifact: communityGeneral, files: ["plugins/modules/mqtt.py"] }],
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
export interface MqttArgs {
  /** The path to the Certificate Authority certificate files that are to be treated as trusted by this client. If this is the only option given then the client operates in a similar manner to a web browser. That is to say it requires the broker to have a certificate signed by the Certificate Authorities in ca_certs and communicates using TLS v1, but does not attempt any form of authentication. This provides basic network encryption but may not be sufficient depending on how the broker is configured. */
  ca_cert?: string;
  /** The path pointing to the PEM encoded client certificate. If this is set it is used as client information for TLS based authentication. Support for this feature is broker dependent. */
  client_cert?: string;
  /** MQTT client identifier. */
  client_id?: string;
  /** The path pointing to the PEM encoded client private key. If this is set it is used as client information for TLS based authentication. Support for this feature is broker dependent. */
  client_key?: string;
  /** Password for O(username) to authenticate against the broker. */
  password?: string;
  /** Payload. The special string V("None") may be used to send a NULL (that is, empty) payload which is useful to simply notify with the O(topic) or to clear previously retained messages. */
  payload: string;
  /** MQTT broker port number. */
  port?: number;
  /** QoS (Quality of Service). */
  qos?: "0" | "1" | "2";
  /** Setting this flag causes the broker to retain (in other words keep) the message so that applications that subsequently subscribe to the topic can received the last retained message immediately. */
  retain?: boolean;
  /** MQTT broker address/name. */
  server?: string;
  /** Specifies the version of the SSL/TLS protocol to be used. */
  tls_version?: "tlsv1.1" | "tlsv1.2";
  /** MQTT topic name. */
  topic: string;
  /** Username to authenticate against the broker. */
  username?: string;
}

export type MqttReturn = Record<string, unknown>;
export const mqtt = defineRemoteModule<MqttArgs, MqttReturn>(spec, meta);
