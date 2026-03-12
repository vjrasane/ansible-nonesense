// Auto-generated from: community.general.imc_rest
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface ImcRestArgs {
  /** When used instead of O(path), sets the content of the API requests directly. */
  content?: string;
  /** IP Address or hostname of Cisco IMC, resolvable by Ansible control host. */
  hostname: string;
  /** The password to use for authentication. */
  password?: string;
  /** Name of the absolute path of the filename that includes the body of the http request being sent to the Cisco IMC REST API. */
  path?: string;
  /** Connection protocol to use. */
  protocol?: "http" | "https";
  /** The socket level timeout in seconds. */
  timeout?: number;
  /** Username used to login to the switch. */
  username?: string;
  /** If V(false), SSL certificates are not validated. */
  validate_certs?: boolean;
}

export interface ImcRestReturn {
  /** Cisco IMC XML output for the login, translated to JSON using Cobra convention. */
  aaLogin?: Record<string, unknown>;
  /** Cisco IMC XML output for any configConfMo XML fragments, translated to JSON using Cobra convention. */
  configConfMo?: Record<string, unknown>;
  /** Elapsed time in seconds. */
  elapsed?: number;
  /** Cisco IMC XML error output for last request, translated to JSON using Cobra convention. */
  error?: Record<string, unknown>;
  /** Cisco IMC error code. */
  error_code?: string;
  /** Cisco IMC error message. */
  error_text?: string;
  /** RAW XML input sent to the Cisco IMC, causing the error. */
  input?: string;
  /** RAW XML output received from the Cisco IMC, with error details. */
  output?: string;
  /** HTTP response message, including content length. */
  response?: string;
  /** The HTTP response status code. */
  status?: Record<string, unknown>;
}

export const imc_rest = defineModule<ImcRestArgs, ImcRestReturn>("community.general.imc_rest");
