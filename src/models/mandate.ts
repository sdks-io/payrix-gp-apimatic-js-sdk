import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Mandate = {
  /** The reference to identify the mandate. */
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mandateSchema: Schema<Mandate> = s.object<Mandate>(
  {
    code: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
