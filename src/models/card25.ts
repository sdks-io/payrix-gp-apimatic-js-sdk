import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";

export type Card25 = {
  /** Last 4 digits of card number */
  numberLast4?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** Indicates the card brand that issued the card. */
  brand?: BrandAuthenticationsPaymentMethodCardBrand;
  /** The unique reference created by the brands/schemes to uniquely identify the transaction. */
  brandReference?: string;
  /** The network token, provided by the brands as a more secure alternative to the card number. */
  networkToken?: string;
  /** The 2 digit expiry date month of the network token. */
  networkTokenExpiryMonth?: string;
  /** The 2 digit expiry date year of the network token. */
  networkTokenExpiryYear?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card25Properties: s.Shape<Card25> = {
  numberLast4: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
  brandReference: s.optional(s.string()),
  networkToken: s.optional(s.string()),
  networkTokenExpiryMonth: s.optional(s.string()),
  networkTokenExpiryYear: s.optional(s.string()),
  _keysMap: {
    numberLast4: "number_last4",
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
    brandReference: "brand_reference",
    networkToken: "network_token",
    networkTokenExpiryMonth: "network_token_expiry_month",
    networkTokenExpiryYear: "network_token_expiry_year",
  },
};

export const card25InternalSchema: Schema<Card25> = s.object<Card25>(card25Properties, {
  additionalProperties: s.json(),
});

export const card25Schema: Schema<Card25> = s.lazySchema(() =>
  s.object<Card25>(
    {
      ...card25Properties,
      numberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      brandReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
