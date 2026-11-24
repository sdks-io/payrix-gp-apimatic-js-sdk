import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Bank9 = {
  /** The name of the bank. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bank9Schema: Schema<Bank9> = s.object<Bank9>(
  {
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
