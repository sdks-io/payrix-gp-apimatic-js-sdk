import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Provider1 = {
  /** Result code from the payment method provider. */
  result?: string;
  /** Result message from the payment method provider corresponding to the result code. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const provider1Properties: s.Shape<Provider1> = {
  result: s.optional(s.string()),
  message: s.optional(s.string()),
};

export const provider1InternalSchema: Schema<Provider1> = s.object<Provider1>(provider1Properties, {
  additionalProperties: s.json(),
});

export const provider1Schema: Schema<Provider1> = s.lazySchema(() =>
  s.object<Provider1>(
    {
      ...provider1Properties,
      result: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      message: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
