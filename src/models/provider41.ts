import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Provider41 = {
  /** Result code from the payment method provider. */
  result?: string;
  /** Result message from the payment method provider corresponding to the result code. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const provider41Schema: Schema<Provider41> = s.object<Provider41>(
  {
    result: s.optional(s.string()),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
