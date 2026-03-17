// Auto-generated from: community.general.oneandone_load_balancer
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface OneandoneLoadBalancerArgs {
  /** A list of rules that are added to an existing load balancer. It is syntax is the same as the one used for rules parameter. Used in combination with O(state=update). */
  add_rules?: Record<string, unknown> | Record<string, unknown>[];
  /** A list of server identifiers (id or name) to be assigned to a load balancer. Used in combination with O(state=update). */
  add_server_ips?: string | string[];
  /** Custom API URL. Overrides the E(ONEANDONE_API_URL) environment variable. */
  api_url?: string;
  /** Authenticating API token provided by 1&1. */
  auth_token?: string;
  /** ID or country code of the datacenter where the load balancer is created. */
  datacenter?: "US" | "ES" | "DE" | "GB";
  /** Description of the load balancer. maxLength=256. */
  description?: string;
  /** Health check period in seconds. minimum=5, maximum=300, multipleOf=1. */
  health_check_interval?: string;
  /** Regular expression to check. Required for HTTP health check. maxLength=64. */
  health_check_parse?: string;
  /** URL to call for checking. Required for HTTP health check. maxLength=1000. */
  health_check_path?: string;
  /** Type of the health check. At the moment, HTTP is not allowed. */
  health_check_test?: "NONE" | "TCP" | "HTTP" | "ICMP";
  /** The identifier (id or name) of the load balancer used with update state. */
  load_balancer?: string;
  /** Balancing procedure. */
  method?: "ROUND_ROBIN" | "LEAST_CONNECTIONS";
  /** Load balancer name used with present state. Used as identifier (ID or name) when used with absent state. maxLength=128. */
  name?: string;
  /** Persistence. */
  persistence?: boolean;
  /** Persistence time in seconds. Required if persistence is enabled. minimum=30, maximum=1200, multipleOf=1. */
  persistence_time?: string;
  /** A list of rule IDs that are removed from an existing load balancer. Used in combination with O(state=update). */
  remove_rules?: string | string[];
  /** A list of server IP IDs to be unassigned from a load balancer. Used in combination with O(state=update). */
  remove_server_ips?: string | string[];
  /** A list of rule objects that are set for the load balancer. Each rule must contain protocol, port_balancer, and port_server parameters, in addition to source parameter, which is optional. */
  rules?: Record<string, unknown> | Record<string, unknown>[];
  /** Define a load balancer state to create, remove, or update. */
  state?: "present" | "absent" | "update";
  /** Wait for the instance to be in state 'running' before returning. */
  wait?: boolean;
  /** Defines the number of seconds to wait when using the _wait_for methods. */
  wait_interval?: number;
  /** How long before wait gives up, in seconds. */
  wait_timeout?: number;
}

export interface OneandoneLoadBalancerReturn {
  /** Information about the load balancer that was processed. */
  load_balancer?: Record<string, unknown>;
}

export const oneandone_load_balancer = defineModule<OneandoneLoadBalancerArgs, OneandoneLoadBalancerReturn>("community.general.oneandone_load_balancer");
