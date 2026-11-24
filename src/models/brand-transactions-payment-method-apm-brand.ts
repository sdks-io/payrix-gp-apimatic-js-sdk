import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A string used to identify the payment method brand being used to execute this transaction. */
export const BrandTransactionsPaymentMethodApmBrand = {
  Alipay: "ALIPAY",
  Alipayhk: "ALIPAYHK",
  Wechat: "WECHAT",
} as const;
export type BrandTransactionsPaymentMethodApmBrand =
  | (typeof BrandTransactionsPaymentMethodApmBrand)[keyof typeof BrandTransactionsPaymentMethodApmBrand]
  | (string & {});

export const brandTransactionsPaymentMethodApmBrandSchema: EnumSchema<BrandTransactionsPaymentMethodApmBrand> =
  s.enumOf<BrandTransactionsPaymentMethodApmBrand>(BrandTransactionsPaymentMethodApmBrand);
