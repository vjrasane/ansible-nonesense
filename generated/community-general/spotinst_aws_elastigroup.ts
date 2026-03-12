// Auto-generated from: community.general.spotinst_aws_elastigroup
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface SpotinstAwsElastigroupArgs {
  /** Optional parameter that allows to set an account-id inside the module configuration. */
  account_id?: string;
  /** The strategy orientation. */
  availability_vs_cost: string;
  /** A list of hash/dictionaries of Availability Zones that are configured in the elastigroup; '[{"key":"value", "key":"value"}]'; keys allowed are name (String), subnet_id (String), placement_group_name (String),. */
  availability_zones: Record<string, unknown> | Record<string, unknown>[];
  /** A list of hash/dictionaries of Block Device Mappings for elastigroup instances; You can specify virtual devices and EBS volumes.; '[{"key":"value", "key":"value"}]'; keys allowed are device_name (List of Strings), virtual_name (String), no_device (String), ebs (Object, expects the following keys- delete_on_termination(Boolean), encrypted(Boolean), iops (Integer), snapshot_id(Integer), volume_type(String), volume_size(Integer)). */
  block_device_mappings?: Record<string, unknown> | Record<string, unknown>[];
  /** The Chef integration configuration.; Expects the following keys - chef_server (String), organization (String), user (String), pem_key (String), chef_version (String). */
  chef?: Record<string, unknown>;
  /** Optional parameter that allows to set a non-default credentials path. */
  credentials_path?: string;
  /** TODO document. */
  do_not_update?: string | string[];
  /** A list of hash/dictionaries of scaling policies to configure in the elastigroup; '[{"key":"value", "key":"value"}]'; keys allowed are - policy_name (String, required), namespace (String, required), metric_name (String, required), dimensions ((List of Objects), Keys allowed are name (String, required) and value (String)), statistic (String, required), evaluation_periods (String, required), period (String, required), threshold (String, required), cooldown (String, required), unit (String, required), operator (String, required), action_type (String, required), adjustment (String), max_target_capacity (String), target (String), maximum (String), minimum (String). */
  down_scaling_policies?: Record<string, unknown> | Record<string, unknown>[];
  /** Time for instance to be drained from incoming requests and deregistered from ELB before termination. */
  draining_timeout?: number;
  /** Enable EBS optimization for supported instances which are not enabled by default. Note - additional charges are applied. */
  ebs_optimized?: boolean;
  /** A list of hash/dictionaries of EBS devices to reattach to the elastigroup when available; '[{"key":"value", "key":"value"}]'; keys allowed are - volume_ids (List of Strings), device_name (String). */
  ebs_volume_pool?: Record<string, unknown> | Record<string, unknown>[];
  /** The ECS integration configuration.; Expects the following key - cluster_name (String). */
  ecs?: Record<string, unknown>;
  /** Placeholder parameter for future implementation of Elastic Beanstalk configurations. */
  elastic_beanstalk?: Record<string, unknown>;
  /** List of ElasticIps Allocation IDs (example V(eipalloc-9d4e16f8)) to associate to the group instances. */
  elastic_ips?: string | string[];
  /** In case of no spots available, Elastigroup launches an On-demand instance instead. */
  fallback_to_od?: boolean;
  /** The amount of time, in seconds, after the instance has launched to start and check its health. */
  health_check_grace_period?: number;
  /** The service to use for the health check. */
  health_check_type?: string;
  /** Minimal mount of time instance should be unhealthy for us to consider it unhealthy. */
  health_check_unhealthy_duration_before_replacement?: number;
  /** The instance profile iamRole arn. */
  iam_role_arn?: string;
  /** The instance profile iamRole name. */
  iam_role_name?: string;
  /** The group ID if it already exists and you want to update, or delete it. This does not work unless the O(uniqueness_by) field is set to ID. When this is set, and the O(uniqueness_by) field is set, the group is either updated or deleted, but not created. */
  id?: string;
  /** The image ID used to launch the instance.; In case of conflict between Instance type and image type, an error is be returned. */
  image_id: string;
  /** Specify a Key Pair to attach to the instances. */
  key_pair?: string;
  /** The Kubernetes integration configuration. Expects the following keys - api_server (String), token (String). */
  kubernetes?: Record<string, unknown>;
  /** Lifetime period. */
  lifetime_period?: number;
  /** List of classic ELB names. */
  load_balancers?: string | string[];
  /** The upper limit number of instances that you can scale up to. */
  max_size: number;
  /** The Mesosphere integration configuration. Expects the following key - api_server (String). */
  mesosphere?: Record<string, unknown>;
  /** The lower limit number of instances that you can scale down to. */
  min_size: number;
  /** Describes whether instance Enhanced Monitoring is enabled. */
  monitoring?: string;
  /** Configuration parameters for Multai load balancers. */
  multai_load_balancers?: Record<string, unknown> | Record<string, unknown>[];
  /** Token used for Multai configuration. */
  multai_token?: string;
  /** Unique name for elastigroup to be created, updated or deleted. */
  name: string;
  /** A list of hash/dictionaries of network interfaces to add to the elastigroup; '[{"key":"value", "key":"value"}]'; keys allowed are - description (String), device_index (Integer), secondary_private_ip_address_count (Integer), associate_public_ip_address (Boolean), delete_on_termination (Boolean), groups (List of Strings), network_interface_id (String), private_ip_address (String), subnet_id (String), associate_ipv6_address (Boolean), private_ip_addresses (List of Objects, Keys are privateIpAddress (String, required) and primary (Boolean)). */
  network_interfaces?: Record<string, unknown> | Record<string, unknown>[];
  /** Required if risk is not set. */
  on_demand_count?: number;
  /** On-demand instance type that is provisioned. */
  on_demand_instance_type?: string;
  /** The elastigroup OpsWorks integration configuration.; Expects the following key - layer_id (String). */
  opsworks?: Record<string, unknown>;
  /** The Stateful elastigroup configuration.; Accepts the following keys - should_persist_root_device (Boolean), should_persist_block_devices (Boolean), should_persist_private_ip (Boolean). */
  persistence?: Record<string, unknown>;
  /** Operation system type. */
  product: string;
  /** The Rancher integration configuration.; Expects the following keys - version (String), access_key (String), secret_key (String), master_host (String). */
  rancher?: Record<string, unknown>;
  /** The Rightscale integration configuration.; Expects the following keys - account_id (String), refresh_token (String). */
  right_scale?: Record<string, unknown>;
  /** Required if on demand is not set. The percentage of Spot instances to launch (0 - 100). */
  risk?: number;
  /** Roll configuration. */
  roll_config?: Record<string, unknown>;
  /** A list of hash/dictionaries of scheduled tasks to configure in the elastigroup, as in V([{"key":"value", "key":"value"}]). */
  scheduled_tasks?: Record<string, unknown> | Record<string, unknown>[];
  /** One or more security group IDs. */
  security_group_ids: string | string[];
  /** The Base64-encoded shutdown script that executes prior to instance termination. Encode before setting. */
  shutdown_script?: string;
  /** A list of hash/dictionaries of signals to configure in the elastigroup; keys allowed are - name (String, required), timeout (Integer). */
  signals?: Record<string, unknown> | Record<string, unknown>[];
  /** Spin up time, in seconds, for the instance. */
  spin_up_time?: number;
  /** Spot instance type that is provisioned. */
  spot_instance_types: string | string[];
  /** Create or delete the elastigroup. */
  state?: "present" | "absent";
  /** A list of tags to configure in the elastigroup. Please specify list of keys and values (key colon value). */
  tags?: Record<string, unknown> | Record<string, unknown>[];
  /** The number of instances to launch. */
  target: number;
  /** List of target group arns instances should be registered to. */
  target_group_arns?: string | string[];
  /** A list of hash/dictionaries of target tracking policies to configure in the elastigroup; '[{"key":"value", "key":"value"}]'; keys allowed are - policy_name (String, required), namespace (String, required), source (String, required), metric_name (String, required), statistic (String, required), unit (String, required), cooldown (String, required), target (String, required). */
  target_tracking_policies?: Record<string, unknown> | Record<string, unknown>[];
  /** Dedicated or shared tenancy. */
  tenancy?: string;
  /** Terminate at the end of billing hour. */
  terminate_at_end_of_billing_hour?: boolean;
  /** A Personal API Access Token issued by Spotinst. */
  token?: string;
  /** If your group names are not unique, you may use this feature to update or delete a specific group. Whenever this property is set, you must set a group_id in order to update or delete a group, otherwise a group is created. */
  uniqueness_by?: "id" | "name";
  /** The capacity unit to launch instances by. */
  unit?: string;
  /** A list of hash/dictionaries of scaling policies to configure in the elastigroup; '[{"key":"value", "key":"value"}]'; keys allowed are - policy_name (String, required), namespace (String, required), metric_name (String, required), dimensions (List of Objects, Keys allowed are name (String, required) and value (String)), statistic (String, required) evaluation_periods (String, required), period (String, required), threshold (String, required), cooldown (String, required), unit (String, required), operator (String, required), action_type (String, required), adjustment (String), min_target_capacity (String), target (String), maximum (String), minimum (String). */
  up_scaling_policies?: Record<string, unknown> | Record<string, unknown>[];
  /** Base64-encoded MIME user data. Encode before setting the value. */
  user_data?: string;
  /** In case of any available Reserved Instances, Elastigroup utilizes your reservations before purchasing Spot instances. */
  utilize_reserved_instances?: boolean;
  /** Whether or not the elastigroup creation / update actions should wait for the instances to spin. */
  wait_for_instances?: boolean;
  /** How long the module should wait for instances before failing the action. */
  wait_timeout?: number;
}

export interface SpotinstAwsElastigroupReturn {
  /** Created / Updated group's ID. */
  group_id?: string;
  /** List of active elastigroup instances and their details. */
  instances?: Record<string, unknown>;
}

export const spotinst_aws_elastigroup = defineModule<SpotinstAwsElastigroupArgs, SpotinstAwsElastigroupReturn>("community.general.spotinst_aws_elastigroup");
