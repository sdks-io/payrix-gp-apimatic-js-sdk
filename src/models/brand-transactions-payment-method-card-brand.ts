import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card brand that issued the card. */
export const BrandTransactionsPaymentMethodCardBrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Diners: "DINERS",
  Discover: "DISCOVER",
  Jcb: "JCB",
  Cup: "CUP",
  Ebt: "EBT",
} as const;
export type BrandTransactionsPaymentMethodCardBrand =
  | (typeof BrandTransactionsPaymentMethodCardBrand)[keyof typeof BrandTransactionsPaymentMethodCardBrand]
  | (string & {});

export const brandTransactionsPaymentMethodCardBrandSchema: EnumSchema<BrandTransactionsPaymentMethodCardBrand> =
  s.enumOf<BrandTransactionsPaymentMethodCardBrand>(BrandTransactionsPaymentMethodCardBrand);
