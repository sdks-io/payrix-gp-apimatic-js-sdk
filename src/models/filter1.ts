import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Filter1 = {
  /** The start time to search for in a range, using the resource time_created value. */
  fromTimeCreated?: string;
  /** The end time to search for in a range, using the resource time_created value. */
  toTimeCreated?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filter1Schema: Schema<Filter1> = s.object<Filter1>(
  {
    fromTimeCreated: s.optional(s.dateOnly()),
    toTimeCreated: s.optional(s.dateOnly()),
    _keysMap: {
      fromTimeCreated: "from_time_created",
      toTimeCreated: "to_time_created",
    },
  },
  { additionalProperties: s.json() },
);
