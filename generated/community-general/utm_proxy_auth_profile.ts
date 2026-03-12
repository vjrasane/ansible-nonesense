// Auto-generated from: community.general.utm_proxy_auth_profile
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface UtmProxyAuthProfileArgs {
  /** List of references to utm_aaa objects (allowed users or groups). */
  aaa: string | string[];
  /** Specifies if the backend server needs authentication ([Basic|None]). */
  backend_mode?: "Basic" | "None";
  /** Should the login data be stripped when proxying the request to the backend host. */
  backend_strip_basic_auth?: boolean;
  /** Prefix string to prepend to the username for backend authentication. */
  backend_user_prefix?: string;
  /** Suffix string to append to the username for backend authentication. */
  backend_user_suffix?: string;
  /** The message in the basic authentication prompt. */
  basic_prompt: string;
  /** Optional comment string. */
  comment?: string;
  /** Frontend cookie name. */
  frontend_cookie?: string;
  /** Frontend cookie secret. */
  frontend_cookie_secret?: string;
  /** Frontend authentication form name. */
  frontend_form?: string;
  /** Frontend authentication form template. */
  frontend_form_template?: string;
  /** Frontend login name. */
  frontend_login?: string;
  /** Frontend logout name. */
  frontend_logout?: string;
  /** Frontend authentication mode (Form|Basic). */
  frontend_mode?: "Basic" | "Form";
  /** Frontend authentication realm. */
  frontend_realm?: string;
  /** Allow session persistency. */
  frontend_session_allow_persistency?: boolean;
  /** Session lifetime. */
  frontend_session_lifetime: number;
  /** Specifies if limitation of session lifetime is active. */
  frontend_session_lifetime_limited?: boolean;
  /** Scope for frontend_session_lifetime (days|hours|minutes). */
  frontend_session_lifetime_scope?: "days" | "hours" | "minutes";
  /** Session timeout. */
  frontend_session_timeout: number;
  /** Specifies if session timeout is active. */
  frontend_session_timeout_enabled?: boolean;
  /** Scope for frontend_session_timeout (days|hours|minutes). */
  frontend_session_timeout_scope?: "days" | "hours" | "minutes";
  /** A dictionary of additional headers to be sent to POST and PUT requests. */
  headers?: Record<string, unknown>;
  /** List of logout URLs that logouts are delegated to. */
  logout_delegation_urls?: string | string[];
  /** Mode of logout (None|Delegation). */
  logout_mode?: "None" | "Delegation";
  /** The name of the object that identifies the entry. */
  name: string;
  /** Should a redirect to the requested URL be made. */
  redirect_to_requested_url?: boolean;
  /** The desired state of the object. */
  state?: "absent" | "present";
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

export interface UtmProxyAuthProfileReturn {
  /** The utm object that was created. */
  result?: unknown;
}

export const utm_proxy_auth_profile = defineModule<UtmProxyAuthProfileArgs, UtmProxyAuthProfileReturn>("community.general.utm_proxy_auth_profile");
