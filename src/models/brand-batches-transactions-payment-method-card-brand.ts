import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card brand that issued the card. */
export const BrandBatchesTransactionsPaymentMethodCardBrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Diners: "DINERS",
  Discover: "DISCOVER",
  Jcb: "JCB",
  Cup: "CUP",
} as const;
export type BrandBatchesTransactionsPaymentMethodCardBrand =
  | (typeof BrandBatchesTransactionsPaymentMethodCardBrand)[keyof typeof BrandBatchesTransactionsPaymentMethodCardBrand]
  | (string & {});

export const brandBatchesTransactionsPaymentMethodCardBrandSchema: EnumSchema<BrandBatchesTransactionsPaymentMethodCardBrand> =
  s.enumOf<BrandBatchesTransactionsPaymentMethodCardBrand>(BrandBatchesTransactionsPaymentMethodCardBrand);
