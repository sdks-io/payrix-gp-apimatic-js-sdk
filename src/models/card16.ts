import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Card16 = {
  /** The the card account number used to authorize the transaction. Also known as PAN. */
  number?: string;
  /** The 2 digit expiry date month of the card */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card */
  expiryYear?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card16Properties: s.Shape<Card16> = {
  number: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  _keysMap: {
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
  },
};

export const card16InternalSchema: Schema<Card16> = s.object<Card16>(card16Properties, {
  additionalProperties: s.json(),
});

export const card16Schema: Schema<Card16> = s.lazySchema(() =>
  s.object<Card16>(
    {
      ...card16Properties,
      number: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
