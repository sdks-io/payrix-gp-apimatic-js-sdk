import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card brand that issued the card. */
export const BrandDisputesTransactionPaymentMethodCardBrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Diners: "DINERS",
  Discover: "DISCOVER",
  Jcb: "JCB",
  Cup: "CUP",
} as const;
export type BrandDisputesTransactionPaymentMethodCardBrand =
  | (typeof BrandDisputesTransactionPaymentMethodCardBrand)[keyof typeof BrandDisputesTransactionPaymentMethodCardBrand]
  | (string & {});

export const brandDisputesTransactionPaymentMethodCardBrandSchema: EnumSchema<BrandDisputesTransactionPaymentMethodCardBrand> =
  s.enumOf<BrandDisputesTransactionPaymentMethodCardBrand>(BrandDisputesTransactionPaymentMethodCardBrand);
