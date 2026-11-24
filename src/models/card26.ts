import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Card26 = {
  /** The card account number used to authorize the transaction. Also known as PAN or FPAN. */
  number?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /**
   * The numeric value printed on the physical card. This field is required when the usage_mode is
   * SINGLE
   */
  cvv?: string;
  /** The unique reference created by the brands/schemes to uniquely identify the transaction. */
  brandReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card26Properties: s.Shape<Card26> = {
  number: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  cvv: s.optional(s.string()),
  brandReference: s.optional(s.string()),
  _keysMap: {
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
    brandReference: "brand_reference",
  },
};

export const card26InternalSchema: Schema<Card26> = s.object<Card26>(card26Properties, {
  additionalProperties: s.json(),
});

export const card26Schema: Schema<Card26> = s.lazySchema(() =>
  s.object<Card26>(
    {
      ...card26Properties,
      number: s.optional(s.string().check(s.minLength(12), s.maxLength(19))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      cvv: s.optional(s.string().check(s.minLength(3), s.maxLength(4))),
      brandReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
