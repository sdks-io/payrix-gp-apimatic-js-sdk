import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The filter values that were applied to the search. */
export type Filter5 = {
  /** The start time to search for in a range, using the resource time_created value. */
  fromTimeCreated?: string;
  /** The end time to search for in a range, using the resource time_created value. */
  toTimeCreated?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filter5Schema: Schema<Filter5> = s.object<Filter5>(
  {
    fromTimeCreated: s.optional(s.string()),
    toTimeCreated: s.optional(s.string()),
    _keysMap: {
      fromTimeCreated: "from_time_created",
      toTimeCreated: "to_time_created",
    },
  },
  { additionalProperties: s.json() },
);
