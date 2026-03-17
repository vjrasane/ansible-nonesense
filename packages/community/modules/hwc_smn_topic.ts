// Auto-generated from: community.general.hwc_smn_topic
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface HwcSmnTopicArgs {
  /** Topic display name, which is presented as the name of the email sender in an email message. The topic display name contains a maximum of 192 bytes. */
  display_name?: string;
  /** The name of the Domain to scope to (Identity v3). */
  domain: string;
  /** The ID of resource to be managed. */
  id?: string;
  /** The Identity authentication URL. */
  identity_endpoint: string;
  /** Name of the topic to be created. The topic name is a string of 1 to 256 characters. It must contain upper- or lower-case letters, digits, hyphens (V(-)), and underscores (V(_)), and must start with a letter or digit. */
  name: string;
  /** The password to login with. */
  password: string;
  /** The name of the Tenant (Identity v2) or Project (Identity v3). */
  project: string;
  /** The region to which the project belongs. */
  region?: string;
  /** Whether the given object should exist in Huawei Cloud. */
  state?: "present" | "absent";
  /** The user name to login with. */
  user: string;
}

export interface HwcSmnTopicReturn {
  /** Time when the topic was created. */
  create_time?: string;
  /** Topic display name, which is presented as the name of the email sender in an email message. The topic display name contains a maximum of 192 bytes. */
  display_name?: string;
  /** Name of the topic to be created. The topic name is a string of 1 to 256 characters. It must contain upper- or lower-case letters, digits, hyphens (V(-)), and underscores (V(_)), and must start with a letter or digit. */
  name?: string;
  /** Message pushing policy. V(0) indicates that the message sending fails and the message is cached in the queue. V(1) indicates that the failed message is discarded. */
  push_policy?: number;
  /** Resource identifier of a topic, which is unique. */
  topic_urn?: string;
  /** Time when the topic was updated. */
  update_time?: string;
}

export const hwc_smn_topic = defineModule<HwcSmnTopicArgs, HwcSmnTopicReturn>("community.general.hwc_smn_topic");
