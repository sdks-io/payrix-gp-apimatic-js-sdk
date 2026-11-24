import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Bank14 = {
  /** The local identifier code for the bank. */
  code?: string;
  /** The name of the bank. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bank14Schema: Schema<Bank14> = s.object<Bank14>(
  {
    code: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
