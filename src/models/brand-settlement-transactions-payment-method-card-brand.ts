import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card brand that issued the card. */
export const BrandSettlementTransactionsPaymentMethodCardBrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Diners: "DINERS",
  Discover: "DISCOVER",
  Jcb: "JCB",
  Cup: "CUP",
} as const;
export type BrandSettlementTransactionsPaymentMethodCardBrand =
  | (typeof BrandSettlementTransactionsPaymentMethodCardBrand)[keyof typeof BrandSettlementTransactionsPaymentMethodCardBrand]
  | (string & {});

export const brandSettlementTransactionsPaymentMethodCardBrandSchema: EnumSchema<BrandSettlementTransactionsPaymentMethodCardBrand> =
  s.enumOf<BrandSettlementTransactionsPaymentMethodCardBrand>(
    BrandSettlementTransactionsPaymentMethodCardBrand,
  );
