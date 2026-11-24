import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card brand that issued the card. */
export const BrandVerificationsPaymentMethodCardBrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Diners: "DINERS",
  Discover: "DISCOVER",
  Jcb: "JCB",
  Cup: "CUP",
} as const;
export type BrandVerificationsPaymentMethodCardBrand =
  | (typeof BrandVerificationsPaymentMethodCardBrand)[keyof typeof BrandVerificationsPaymentMethodCardBrand]
  | (string & {});

export const brandVerificationsPaymentMethodCardBrandSchema: EnumSchema<BrandVerificationsPaymentMethodCardBrand> =
  s.enumOf<BrandVerificationsPaymentMethodCardBrand>(BrandVerificationsPaymentMethodCardBrand);
