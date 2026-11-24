import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";

export type Card20 = {
  /** Masked number but last 4 digits of card number are visible */
  maskedNumberLast4?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** Indicates the card brand that issued the card. */
  brand?: BrandAuthenticationsPaymentMethodCardBrand;
  /** The network token, provided by the brands as a more secure alternative to the card number. */
  networkToken?: string;
  /** Masked network token but last 4 digits of the network token are visible. */
  maskedNetworkTokenLast4?: string;
  /** The 2 digit expiry date month of the network token. */
  networkTokenExpiryMonth?: string;
  /** The 2 digit expiry date year of the network token. */
  networkTokenExpiryYear?: string;
  /** The unique reference created by the brands/schemes to uniquely identify the transaction. */
  brandReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card20Properties: s.Shape<Card20> = {
  maskedNumberLast4: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
  networkToken: s.optional(s.string()),
  maskedNetworkTokenLast4: s.optional(s.string()),
  networkTokenExpiryMonth: s.optional(s.string()),
  networkTokenExpiryYear: s.optional(s.string()),
  brandReference: s.optional(s.string()),
  _keysMap: {
    maskedNumberLast4: "masked_number_last4",
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
    networkToken: "network_token",
    maskedNetworkTokenLast4: "masked_network_token_last4",
    networkTokenExpiryMonth: "network_token_expiry_month",
    networkTokenExpiryYear: "network_token_expiry_year",
    brandReference: "brand_reference",
  },
};

export const card20InternalSchema: Schema<Card20> = s.object<Card20>(card20Properties, {
  additionalProperties: s.json(),
});

export const card20Schema: Schema<Card20> = s.lazySchema(() =>
  s.object<Card20>(
    {
      ...card20Properties,
      maskedNumberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      maskedNetworkTokenLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      brandReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
