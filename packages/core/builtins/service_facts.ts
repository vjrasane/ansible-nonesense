// Auto-generated from: ansible.builtin.service_facts
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export type ServiceFactsArgs = Record<string, unknown>;

export interface ServiceFactsReturn {
  /** Facts to add to ansible_facts about the services on the system */
  ansible_facts?: unknown;
}

export const service_facts = defineModule<ServiceFactsArgs, ServiceFactsReturn>("ansible.builtin.service_facts");
