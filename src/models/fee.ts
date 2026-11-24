import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Fee = {
  /** Name of the fee included */
  name?: string;
  /** Any additional fee amount merchant included. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const feeProperties: s.Shape<Fee> = {
  name: s.optional(s.string()),
  amount: s.optional(s.string()),
};

export const feeInternalSchema: Schema<Fee> = s.object<Fee>(feeProperties, {
  additionalProperties: s.json(),
});

export const feeSchema: Schema<Fee> = s.lazySchema(() =>
  s.object<Fee>(
    {
      ...feeProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
