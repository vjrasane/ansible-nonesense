// Auto-generated from: community.general.office_365_connector_card
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "../../packages/core/src/index.ts";

export interface Office365ConnectorCardArgs {
  /** This array of objects is used to power the action links found at the bottom of the card. */
  actions?: Record<string, unknown> | Record<string, unknown>[];
  /** Accent color used for branding or indicating status in the card. */
  color?: string;
  /** Contains a list of sections to display in the card. */
  sections?: Record<string, unknown> | Record<string, unknown>[];
  /** A string used for summarizing card content. */
  summary?: string;
  /** The main text of the card. */
  text?: string;
  /** A title for the Connector message. Shown at the top of the message. */
  title?: string;
  /** The webhook URL is given to you when you create a new Connector. */
  webhook: string;
}

export type Office365ConnectorCardReturn = Record<string, unknown>;

export const office_365_connector_card = defineModule<Office365ConnectorCardArgs, Office365ConnectorCardReturn>("community.general.office_365_connector_card");
