// Auto-generated from: community.general.alerta_customer
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface AlertaCustomerArgs {
  /** The Alerta API endpoint. */
  alerta_url: string;
  /** The access token for the API. */
  api_key?: string;
  /** The password for the API using basic auth. */
  api_password?: string;
  /** The username for the API using basic auth. */
  api_username?: string;
  /** Name of the customer. */
  customer: string;
  /** The matching logged in user for the customer. */
  match: string;
  /** Whether the customer should exist or not. */
  state?: "absent" | "present";
}

export interface AlertaCustomerReturn {
  /** Success or failure message. */
  msg?: string;
  /** The response from the API. */
  response?: Record<string, unknown>;
}

export const alerta_customer = defineModule<AlertaCustomerArgs, AlertaCustomerReturn>("community.general.alerta_customer");
