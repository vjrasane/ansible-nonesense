// Auto-generated from: community.general.xml
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface XmlArgs {
  /** Add additional child-element(s) to a selected element for a given O(xpath). */
  add_children?: unknown | unknown[];
  /** The attribute to select when using parameter O(value). */
  attribute?: unknown;
  /** Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. */
  backup?: boolean;
  /** Search for a given O(xpath) and get content. */
  content?: "attribute" | "text";
  /** Search for a given O(xpath) and provide the count of any matches. */
  count?: boolean;
  /** Type of input for O(add_children) and O(set_children). */
  input_type?: "xml" | "yaml";
  /** Add additional child-element(s) after the last selected element for a given O(xpath). */
  insertafter?: boolean;
  /** Add additional child-element(s) before the first selected element for a given O(xpath). */
  insertbefore?: boolean;
  /** The namespace C(prefix:uri) mapping for the XPath expression. */
  namespaces?: Record<string, unknown>;
  /** Path to the file to operate on. */
  path?: string;
  /** Pretty print XML output. */
  pretty_print?: boolean;
  /** Search for a given O(xpath) and print out any matches. */
  print_match?: boolean;
  /** Set the child-element(s) of a selected element for a given O(xpath). */
  set_children?: unknown | unknown[];
  /** Set or remove an xpath selection (node(s), attribute(s)). */
  state?: "absent" | "present";
  /** Remove CDATA tags surrounding text values. */
  strip_cdata_tags?: boolean;
  /** Desired state of the selected attribute. */
  value?: unknown;
  /** A string containing XML on which to operate. */
  xmlstring?: string;
  /** A valid XPath expression describing the item(s) you want to manipulate. */
  xpath?: string;
}

export interface XmlReturn {
  /** A dictionary with the original xpath, namespaces and state. */
  actions?: Record<string, unknown>;
  /** The count of xpath matches. */
  count?: number;
  /** The xpath matches found. */
  matches?: string | string[];
  /** An XML string of the resulting output. */
  xmlstring?: string;
}

export const xml = defineModule<XmlArgs, XmlReturn>("community.general.xml");
