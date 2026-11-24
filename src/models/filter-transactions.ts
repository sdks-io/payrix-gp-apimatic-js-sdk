import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Indicates what fields and values used to filter the current list of resource objects in the
 * current response.
 */
export type FilterTransactions = {
  /** The start time to search for in a range, using time_last_updated value. */
  fromTimeCreated?: Date;
  /** The end time to search for in a range, using time_last_updated value */
  toTimeCreated?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterTransactionsSchema: Schema<FilterTransactions> = s.object<FilterTransactions>(
  {
    fromTimeCreated: s.optional(s.dateTime()),
    toTimeCreated: s.optional(s.dateTime()),
    _keysMap: {
      fromTimeCreated: "from_time_created",
      toTimeCreated: "to_time_created",
    },
  },
  { additionalProperties: s.json() },
);
