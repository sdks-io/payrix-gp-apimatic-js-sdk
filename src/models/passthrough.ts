import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Passthrough = {
  /** The total amount across one or more items. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const passthroughSchema: Schema<Passthrough> = s.object<Passthrough>(
  {
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
