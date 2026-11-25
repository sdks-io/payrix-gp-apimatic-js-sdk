import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Filter27 = {
  /**
   * The start time to search for in a range, using the resource time_created value. A date-time in
   * UTC is expected.
   */
  fromTimeCreated?: Date;
  /**
   * The end time to search for in a range, using the resource time_created value. A date-time in
   * UTC is expected.
   */
  toTimeCreated?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filter27Schema: Schema<Filter27> = s.object<Filter27>(
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
