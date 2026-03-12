// Auto-generated from: community.general.utm_proxy_exception
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface UtmProxyExceptionArgs {
  /** A dictionary of additional headers to be sent to POST and PUT requests. */
  headers?: Record<string, unknown>;
  /** The name of the object that identifies the entry. */
  name: string;
  /** The operand to be used with the entries of the path parameter. */
  op?: "AND" | "OR";
  /** The paths the exception in the reverse proxy is defined for. */
  path?: string | string[];
  /** A list of threats to be skipped. */
  skip_custom_threats_filters?: string | string[];
  /** Define which categories of threats are skipped. */
  skip_threats_filter_categories?: string | string[];
  /** Skip the Antivirus Scanning. */
  skipav?: boolean;
  /** Block clients with bad reputation. */
  skipbadclients?: boolean;
  /** Skip the Cookie Signing check. */
  skipcookie?: boolean;
  /** Enable form hardening. */
  skipform?: boolean;
  /** Enable form hardening with missing tokens. */
  skipform_missingtoken?: boolean;
  /** Protection against SQL. */
  skiphtmlrewrite?: boolean;
  /** Enable true file type control. */
  skiptft?: boolean;
  /** Enable static URL hardening. */
  skipurl?: boolean;
  /** Define which categories of threats are skipped. */
  source?: string | string[];
  /** The desired state of the object. */
  state?: "absent" | "present";
  /** Status of the exception rule set. */
  status?: boolean;
  /** The REST Endpoint of the Sophos UTM. */
  utm_host: string;
  /** The port of the REST interface. */
  utm_port?: number;
  /** The protocol of the REST Endpoint. */
  utm_protocol?: "http" | "https";
  /** The token used to identify at the REST-API. */
  utm_token: string;
  /** Whether the REST interface's SSL certificate should be verified or not. */
  validate_certs?: boolean;
}

export interface UtmProxyExceptionReturn {
  /** The utm object that was created. */
  result?: unknown;
}

export const utm_proxy_exception = defineModule<UtmProxyExceptionArgs, UtmProxyExceptionReturn>("community.general.utm_proxy_exception");
