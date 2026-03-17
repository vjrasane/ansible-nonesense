// Auto-generated from: community.general.read_csv
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface ReadCsvArgs {
  /** A one-character string used to separate fields. */
  delimiter?: string;
  /** The CSV dialect to use when parsing the CSV file. */
  dialect?: string;
  /** A list of field names for every column. */
  fieldnames?: string | string[];
  /** The column name used as a key for the resulting dictionary. */
  key?: string;
  /** The CSV filename to read data from. */
  path: string;
  /** Whether to ignore any whitespaces immediately following the delimiter. */
  skipinitialspace?: boolean;
  /** Whether to raise an exception on bad CSV input. */
  strict?: boolean;
  /** Whether the O(key) used is expected to be unique. */
  unique?: boolean;
}

export interface ReadCsvReturn {
  /** The CSV content as a dictionary. */
  dict?: Record<string, unknown>;
  /** The CSV content as a list. */
  list?: string | string[];
}

export const read_csv = defineModule<ReadCsvArgs, ReadCsvReturn>("community.general.read_csv");
