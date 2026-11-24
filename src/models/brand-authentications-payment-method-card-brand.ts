import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card brand that issued the card. */
export const BrandAuthenticationsPaymentMethodCardBrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Diners: "DINERS",
  Discover: "DISCOVER",
  Jcb: "JCB",
  Cup: "CUP",
} as const;
export type BrandAuthenticationsPaymentMethodCardBrand =
  | (typeof BrandAuthenticationsPaymentMethodCardBrand)[keyof typeof BrandAuthenticationsPaymentMethodCardBrand]
  | (string & {});

export const brandAuthenticationsPaymentMethodCardBrandSchema: EnumSchema<BrandAuthenticationsPaymentMethodCardBrand> =
  s.enumOf<BrandAuthenticationsPaymentMethodCardBrand>(BrandAuthenticationsPaymentMethodCardBrand);
