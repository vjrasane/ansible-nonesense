// Auto-generated from: community.general.one_service
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface OneServiceArgs {
  /** Password of the user to login into OpenNebula OneFlow API server. If not set then the value of the E(ONEFLOW_PASSWORD) environment variable is used. */
  api_password?: string;
  /** URL of the OpenNebula OneFlow API server. */
  api_url?: string;
  /** Name of the user to login into the OpenNebula OneFlow API server. If not set then the value of the E(ONEFLOW_USERNAME) environment variable is used. */
  api_username?: string;
  /** Number of VMs for the specified role. */
  cardinality?: number;
  /** Dictionary of key/value custom attributes which is used when instantiating a new service. */
  custom_attrs?: Record<string, unknown>;
  /** Force the new cardinality even if it is outside the limits. */
  force?: boolean;
  /** ID of the group which is set as the group of the service. */
  group_id?: number;
  /** Set permission mode of a service instance in octet format, for example V(0600) to give owner C(use) and C(manage) and nothing to group and others. */
  mode?: string;
  /** ID of the user which is set as the owner of the service. */
  owner_id?: number;
  /** Name of the role whose cardinality should be changed. */
  role?: string;
  /** ID of a service instance that you would like to manage. */
  service_id?: number;
  /** Name of a service instance that you would like to manage. */
  service_name?: string;
  /** V(present) - instantiate a service from a template specified with O(template_id) or O(template_name). */
  state?: "present" | "absent";
  /** ID of a service template to use to create a new instance of a service. */
  template_id?: number;
  /** Name of service template to use to create a new instance of a service. */
  template_name?: string;
  /** Setting O(unique=true) ensures that there is only one service instance running with a name set with O(service_name) when instantiating a service from a template specified with O(template_id) or O(template_name). Check examples below. */
  unique?: boolean;
  /** Wait for the instance to reach RUNNING state after DEPLOYING or COOLDOWN state after SCALING. */
  wait?: boolean;
  /** How long before wait gives up, in seconds. */
  wait_timeout?: number;
}

export interface OneServiceReturn {
  /** Service's group ID. */
  group_id?: number;
  /** Service's group name. */
  group_name?: string;
  /** Service's mode. */
  mode?: number;
  /** Service's owner ID. */
  owner_id?: number;
  /** Service's owner name. */
  owner_name?: string;
  /** List of dictionaries of roles, each role is described by name, cardinality, state and nodes IDs. */
  roles?: string | string[];
  /** Service ID. */
  service_id?: number;
  /** Service name. */
  service_name?: string;
  /** State of service instance. */
  state?: string;
}

export const one_service = defineModule<OneServiceArgs, OneServiceReturn>("community.general.one_service");
