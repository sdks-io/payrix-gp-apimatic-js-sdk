import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card brand that issued the card. */
export const BrandSettlementDisputesTransactionPaymentMethodCardBrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Diners: "DINERS",
  Discover: "DISCOVER",
  Jcb: "JCB",
  Cup: "CUP",
} as const;
export type BrandSettlementDisputesTransactionPaymentMethodCardBrand =
  | (typeof BrandSettlementDisputesTransactionPaymentMethodCardBrand)[keyof typeof BrandSettlementDisputesTransactionPaymentMethodCardBrand]
  | (string & {});

export const brandSettlementDisputesTransactionPaymentMethodCardBrandSchema: EnumSchema<BrandSettlementDisputesTransactionPaymentMethodCardBrand> =
  s.enumOf<BrandSettlementDisputesTransactionPaymentMethodCardBrand>(
    BrandSettlementDisputesTransactionPaymentMethodCardBrand,
  );
