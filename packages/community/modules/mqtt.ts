// Auto-generated from: community.general.mqtt
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

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

export const mqtt = defineModule<MqttArgs, MqttReturn>("community.general.mqtt");
