import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";

export type Card12 = {
  /** The masked card account number, showing the first 6 and the last 4 digits */
  number?: string;
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
  /** This is the Issuer BIN. It is identified by the first 6 digits of the card number */
  issuerBin?: string;
  /** This is the BIN of the Acquirer. This is identifed by the 2nd to 7th digits of the ARN. */
  acquirerBin?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card12Properties: s.Shape<Card12> = {
  number: s.optional(s.string()),
  arn: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
  authcode: s.optional(s.string()),
  brandReference: s.optional(s.string()),
  issuerBin: s.optional(s.string()),
  acquirerBin: s.optional(s.string()),
  _keysMap: {
    brandReference: "brand_reference",
    issuerBin: "issuer_bin",
    acquirerBin: "acquirer_bin",
  },
};

export const card12InternalSchema: Schema<Card12> = s.object<Card12>(card12Properties, {
  additionalProperties: s.json(),
});

export const card12Schema: Schema<Card12> = s.lazySchema(() =>
  s.object<Card12>(
    {
      ...card12Properties,
      arn: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      authcode: s.optional(s.string().check(s.maxLength(50))),
      brandReference: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
