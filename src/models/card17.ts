import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Card17 = {
  /** The card number. */
  number?: string;
  /** The CVV security code printed on the card. */
  cvv?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** The billing postal code */
  avsPostalCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card17Properties: s.Shape<Card17> = {
  number: s.optional(s.string()),
  cvv: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  avsPostalCode: s.optional(s.string()),
  _keysMap: {
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
    avsPostalCode: "avs_postal_code",
  },
};

export const card17InternalSchema: Schema<Card17> = s.object<Card17>(card17Properties, {
  additionalProperties: s.json(),
});

export const card17Schema: Schema<Card17> = s.lazySchema(() =>
  s.object<Card17>(
    {
      ...card17Properties,
      number: s.optional(s.string().check(s.maxLength(50))),
      cvv: s.optional(s.string().check(s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.maxLength(2))),
      avsPostalCode: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
