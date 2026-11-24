import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";

export type CardResponseCurrencyConversion = {
  /** Masked card number with last 4 digits. */
  maskedNumberLast4?: string;
  /** Indicates the card brand that issued the card. */
  brand?: BrandAuthenticationsPaymentMethodCardBrand;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cardResponseCurrencyConversionProperties: s.Shape<CardResponseCurrencyConversion> = {
  maskedNumberLast4: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
  _keysMap: {
    maskedNumberLast4: "masked_number_last4",
  },
};

export const cardResponseCurrencyConversionInternalSchema: Schema<CardResponseCurrencyConversion> =
  s.object<CardResponseCurrencyConversion>(cardResponseCurrencyConversionProperties, {
    additionalProperties: s.json(),
  });

export const cardResponseCurrencyConversionSchema: Schema<CardResponseCurrencyConversion> = s.lazySchema(() =>
  s.object<CardResponseCurrencyConversion>(
    {
      ...cardResponseCurrencyConversionProperties,
      maskedNumberLast4: s.optional(s.string().check(s.minLength(12), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
