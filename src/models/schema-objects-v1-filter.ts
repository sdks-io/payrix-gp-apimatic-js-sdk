import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Indicates what fields and values used to filter the current list of resource objects in the
 * current response.
 */
export type SchemaObjectsV1Filter = {
  /** The start time to search for in a range, using the resource time_created value. */
  fromTimeCreated?: string;
  /** The end time to search for in a range, using the resource time_created value. */
  toTimeCreated?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schemaObjectsV1FilterSchema: Schema<SchemaObjectsV1Filter> = s.object<SchemaObjectsV1Filter>(
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
