import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";

export type Card27 = {
  /** Masked number but last 4 digits of card number are visible */
  maskedNumberLast4?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** Indicates the card brand that issued the card. */
  brand?: BrandAuthenticationsPaymentMethodCardBrand;
  /** The unique reference created by the brands/schemes to uniquely identify the transaction. */
  brandReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card27Properties: s.Shape<Card27> = {
  maskedNumberLast4: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
  brandReference: s.optional(s.string()),
  _keysMap: {
    maskedNumberLast4: "masked_number_last4",
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
    brandReference: "brand_reference",
  },
};

export const card27InternalSchema: Schema<Card27> = s.object<Card27>(card27Properties, {
  additionalProperties: s.json(),
});

export const card27Schema: Schema<Card27> = s.lazySchema(() =>
  s.object<Card27>(
    {
      ...card27Properties,
      maskedNumberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      brandReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
