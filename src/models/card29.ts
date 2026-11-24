import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Card29 = {
  /** The card account number used to authorize the transaction. Also known as PAN or FPAN. */
  number?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card29Properties: s.Shape<Card29> = {
  number: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  _keysMap: {
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
  },
};

export const card29InternalSchema: Schema<Card29> = s.object<Card29>(card29Properties, {
  additionalProperties: s.json(),
});

export const card29Schema: Schema<Card29> = s.lazySchema(() =>
  s.object<Card29>(
    {
      ...card29Properties,
      number: s.optional(s.string().check(s.minLength(12), s.maxLength(19))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
