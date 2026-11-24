import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card brand that issued the card. */
export const BrandPaymentMethodsCardBrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Diners: "DINERS",
  Discover: "DISCOVER",
  Jcb: "JCB",
  Cup: "CUP",
} as const;
export type BrandPaymentMethodsCardBrand =
  | (typeof BrandPaymentMethodsCardBrand)[keyof typeof BrandPaymentMethodsCardBrand]
  | (string & {});

export const brandPaymentMethodsCardBrandSchema: EnumSchema<BrandPaymentMethodsCardBrand> =
  s.enumOf<BrandPaymentMethodsCardBrand>(BrandPaymentMethodsCardBrand);
