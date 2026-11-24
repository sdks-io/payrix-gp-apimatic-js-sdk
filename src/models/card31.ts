import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";

/** Data relating to the card payment method. */
export type Card31 = {
  /** The masked card account number, showing the first 6 and the last 4 digits. */
  maskedNumberFirst6Last4?: string;
  /**
   * ARN ot Acquirer Reference Number is a Global Payments created reference sent to the card brands
   * to identify transactions.
   */
  arn?: string;
  /** Indicates the card brand that issued the card. */
  brand?: BrandAuthenticationsPaymentMethodCardBrand;
  /** Code generated when the card is successfully authorized. */
  authcode?: string;
  /** The unique reference created by the brands/schemes to uniquely identify the transaction. */
  brandReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card31Properties: s.Shape<Card31> = {
  maskedNumberFirst6Last4: s.optional(s.string()),
  arn: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
  authcode: s.optional(s.string()),
  brandReference: s.optional(s.string()),
  _keysMap: {
    maskedNumberFirst6Last4: "masked_number_first6last4",
    brandReference: "brand_reference",
  },
};

export const card31InternalSchema: Schema<Card31> = s.object<Card31>(card31Properties, {
  additionalProperties: s.json(),
});

export const card31Schema: Schema<Card31> = s.lazySchema(() =>
  s.object<Card31>(
    {
      ...card31Properties,
      arn: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      authcode: s.optional(s.string().check(s.maxLength(50))),
      brandReference: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
