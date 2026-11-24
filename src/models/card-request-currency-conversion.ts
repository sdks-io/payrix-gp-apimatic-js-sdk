import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CardRequestCurrencyConversion = {
  /** The the card account number used to authorize the transaction. Also known as PAN. */
  number?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cardRequestCurrencyConversionProperties: s.Shape<CardRequestCurrencyConversion> = {
  number: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  _keysMap: {
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
  },
};

export const cardRequestCurrencyConversionInternalSchema: Schema<CardRequestCurrencyConversion> =
  s.object<CardRequestCurrencyConversion>(cardRequestCurrencyConversionProperties, {
    additionalProperties: s.json(),
  });

export const cardRequestCurrencyConversionSchema: Schema<CardRequestCurrencyConversion> = s.lazySchema(() =>
  s.object<CardRequestCurrencyConversion>(
    {
      ...cardRequestCurrencyConversionProperties,
      number: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
