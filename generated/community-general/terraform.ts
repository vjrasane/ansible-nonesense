// Auto-generated from: community.general.terraform
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface TerraformArgs {
  /** A group of key-values to provide at init stage to the -backend-config parameter. */
  backend_config?: Record<string, unknown>;
  /** The path to a configuration file to provide at init state to the -backend-config parameter. This can accept a list of paths to multiple configuration files. */
  backend_config_files?: string | string[];
  /** The path of a C(terraform) binary to use, relative to the 'service_path' unless you supply an absolute path. */
  binary_path?: string;
  /** Apply only when no resources are destroyed. Note that this only prevents "destroy" actions, but not "destroy and re-create" actions. This option is ignored when O(state=absent). */
  check_destroy?: boolean;
  /** Enable/disable capability to handle complex variable structures for C(terraform). */
  complex_vars?: boolean;
  /** To avoid duplicating infra, if a state file cannot be found this forces a C(terraform init). Generally, this should be turned off unless you intend to provision an entirely new Terraform deployment. */
  force_init?: boolean;
  /** Forces backend reconfiguration during init. */
  init_reconfigure?: boolean;
  /** Enable statefile locking, if you use a service that accepts locks (such as S3+DynamoDB) to store your statefile. */
  lock?: boolean;
  /** How long to maintain the lock on the statefile, if you use a service that accepts locks (such as S3+DynamoDB). */
  lock_timeout?: number;
  /** If V(true), suppress color codes in output from Terraform commands. */
  no_color?: boolean;
  /** Run init even if C(.terraform/terraform.tfstate) already exists in O(project_path). */
  overwrite_init?: boolean;
  /** Restrict concurrent operations when Terraform applies the plan. */
  parallelism?: number;
  /** The path to an existing Terraform plan file to apply. If this is not specified, Ansible builds a new TF plan and execute it. Note that this option is required if O(state=planned). */
  plan_file?: string;
  /** List of paths containing Terraform plugin executable files. */
  plugin_paths?: string | string[];
  /** The path to the root of the Terraform directory with the C(vars.tf)/C(main.tf)/etc to use. */
  project_path: string;
  /** Allows Terraform init to upgrade providers to versions specified in the project's version constraints. */
  provider_upgrade?: boolean;
  /** Only works with state = absent. */
  purge_workspace?: boolean;
  /** Goal state of given stage/project. */
  state?: "planned" | "present" | "absent";
  /** The path to an existing Terraform state file to use when building plan. If this is not specified, the default C(terraform.tfstate) is used. */
  state_file?: string;
  /** A list of specific resources to target in this plan/application. The resources selected here are also auto-include any dependencies. */
  targets?: string | string[];
  /** A group of key-values pairs to override template variables or those in variables files. By default, only string and number values are allowed, which are passed on unquoted. */
  variables?: Record<string, unknown>;
  /** The path to a variables file for Terraform to fill into the TF configurations. This can accept a list of paths to multiple variables files. */
  variables_files?: string | string[];
  /** The terraform workspace to work with. This sets the E(TF_WORKSPACE) environmental variable that is used to override workspace selection. For more information about workspaces have a look at U(https://developer.hashicorp.com/terraform/language/state/workspaces). */
  workspace?: string;
}

export interface TerraformReturn {
  /** Full C(terraform) command built by this module, in case you want to re-run the command outside the module or debug a problem. */
  command?: string;
  /** A dictionary of all the TF outputs by their assigned name. Use RV(ignore:outputs.MyOutputName.value) to access the value. */
  outputs?: unknown;
}

export const terraform = defineModule<TerraformArgs, TerraformReturn>("community.general.terraform");
