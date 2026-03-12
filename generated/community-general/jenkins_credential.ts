// Auto-generated from: community.general.jenkins_credential
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface JenkinsCredentialArgs {
  /** Link to Github API. */
  api_uri?: string;
  /** GitHub App ID. */
  appID?: string;
  /** Description of the credential or domain. */
  description?: string;
  /** List of hostnames to exclude from scope. */
  exc_hostname?: string | string[];
  /** List of host:port to exclude from scope. */
  exc_hostname_port?: string | string[];
  /** List of URL paths to exclude. */
  exc_path?: string | string[];
  /** File path to secret file (for example O(type=file) or O(type=certificate)). */
  file_path?: string;
  /** Force update if the credential already exists, used with O(state=present). */
  force?: boolean;
  /** The ID of the Jenkins credential or domain. */
  id?: string;
  /** List of hostnames to include in scope. */
  inc_hostname?: string | string[];
  /** List of V(host:port) to include in scope. */
  inc_hostname_port?: string | string[];
  /** List of URL paths to include when matching credentials to domains. */
  inc_path?: string | string[];
  /** Jenkins password for token creation. Required if O(type=token). */
  jenkins_password?: string;
  /** Jenkins user for authentication. */
  jenkins_user: string;
  /** Location of the credential. Either V(system) or V(folder). */
  location?: "system" | "folder";
  /** Name of the token to generate. Required if O(type=token). */
  name?: string;
  /** GitHub App owner. */
  owner?: string;
  /** SSH passphrase if needed. */
  passphrase?: string;
  /** Password for credentials types that require it (for example O(type=user_and_passs) or O(type=certificate)). */
  password?: string;
  /** Path to private key file for PEM certificates or GitHub Apps. */
  private_key_path?: string;
  /** List of schemes (for example V(http) or V(https)) to match. */
  schemes?: string | string[];
  /** Jenkins credential domain scope. */
  scope?: string;
  /** Secret text (used when O(type=text)). */
  secret?: string;
  /** The state of the credential. */
  state?: "present" | "absent";
  /** Jenkins API token. Required unless O(type=token). */
  token?: string;
  /** Type of the credential or action. */
  type?: "user_and_pass" | "file" | "text" | "github_app" | "ssh_key" | "certificate" | "scope" | "token";
  /** Jenkins server URL. */
  url?: string;
  /** Username for credentials types that require it (for example O(type=ssh_key) or O(type=user_and_pass)). */
  username?: string;
}

export interface JenkinsCredentialReturn {
  /** Return more details in case of errors. */
  details?: string;
  /** The generated API token if O(type=token). */
  token?: string;
  /** The generated ID of the token. */
  token_uuid?: string;
}

export const jenkins_credential = defineModule<JenkinsCredentialArgs, JenkinsCredentialReturn>("community.general.jenkins_credential");
