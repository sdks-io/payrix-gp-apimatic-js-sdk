import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";

export type Card21 = {
  /** Last 4 digits of card number */
  numberLast4?: string;
  /** Indicates the card brand that issued the card. */
  brand?: BrandAuthenticationsPaymentMethodCardBrand;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** Masked network token but last 4 digits of the network token are visible. */
  maskedNetworkTokenLast4?: string;
  /** The 2 digit expiry date month of the network token. */
  networkTokenExpiryMonth?: string;
  /** The 2 digit expiry date year of the network token. */
  networkTokenExpiryYear?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card21Properties: s.Shape<Card21> = {
  numberLast4: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  maskedNetworkTokenLast4: s.optional(s.string()),
  networkTokenExpiryMonth: s.optional(s.string()),
  networkTokenExpiryYear: s.optional(s.string()),
  _keysMap: {
    numberLast4: "number_last4",
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
    maskedNetworkTokenLast4: "masked_network_token_last4",
    networkTokenExpiryMonth: "network_token_expiry_month",
    networkTokenExpiryYear: "network_token_expiry_year",
  },
};

export const card21InternalSchema: Schema<Card21> = s.object<Card21>(card21Properties, {
  additionalProperties: s.json(),
});

export const card21Schema: Schema<Card21> = s.lazySchema(() =>
  s.object<Card21>(
    {
      ...card21Properties,
      numberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      maskedNetworkTokenLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
