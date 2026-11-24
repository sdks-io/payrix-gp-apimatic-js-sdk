import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";

export type Card10 = {
  /** The masked card account number, showing the first 6 and the last 4 digits */
  number?: string;
  /**
   * ARN ot Acquirer Reference Number is a Global Payments created reference sent to the card brands
   * to identify transactions.
   */
  arn?: string;
  /** Indicates the card brand that issued the card. */
  brand?: BrandAuthenticationsPaymentMethodCardBrand;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card10Properties: s.Shape<Card10> = {
  number: s.optional(s.string()),
  arn: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
};

export const card10InternalSchema: Schema<Card10> = s.object<Card10>(card10Properties, {
  additionalProperties: s.json(),
});

export const card10Schema: Schema<Card10> = s.lazySchema(() =>
  s.object<Card10>(
    {
      ...card10Properties,
      arn: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
