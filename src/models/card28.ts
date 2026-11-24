import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";

export type Card28 = {
  /** The card account number used to authorize the transaction. Also known as PAN or FPAN. */
  number?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** Indicates the card brand that issued the card. */
  brand?: BrandAuthenticationsPaymentMethodCardBrand;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card28Properties: s.Shape<Card28> = {
  number: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
  _keysMap: {
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
  },
};

export const card28InternalSchema: Schema<Card28> = s.object<Card28>(card28Properties, {
  additionalProperties: s.json(),
});

export const card28Schema: Schema<Card28> = s.lazySchema(() =>
  s.object<Card28>(
    {
      ...card28Properties,
      number: s.optional(s.string().check(s.minLength(12), s.maxLength(19))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
