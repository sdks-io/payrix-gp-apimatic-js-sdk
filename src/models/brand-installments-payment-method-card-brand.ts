import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card brand that issued the card. */
export const BrandInstallmentsPaymentMethodCardBrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Diners: "DINERS",
  Discover: "DISCOVER",
  Jcb: "JCB",
  Cup: "CUP",
} as const;
export type BrandInstallmentsPaymentMethodCardBrand =
  | (typeof BrandInstallmentsPaymentMethodCardBrand)[keyof typeof BrandInstallmentsPaymentMethodCardBrand]
  | (string & {});

export const brandInstallmentsPaymentMethodCardBrandSchema: EnumSchema<BrandInstallmentsPaymentMethodCardBrand> =
  s.enumOf<BrandInstallmentsPaymentMethodCardBrand>(BrandInstallmentsPaymentMethodCardBrand);
