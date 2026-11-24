import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of order being authenticated. */
export const CategoryAuthenticationsOrderCategory = {
  GoodsServicePurchase: "GOODS_SERVICE_PURCHASE",
  CheckAcceptance: "CHECK_ACCEPTANCE",
  AccountFunding: "ACCOUNT_FUNDING",
  QuasiCashTransaction: "QUASI_CASH_TRANSACTION",
  PrepaidActivationAndLoad: "PREPAID_ACTIVATION_AND_LOAD",
} as const;
export type CategoryAuthenticationsOrderCategory =
  | (typeof CategoryAuthenticationsOrderCategory)[keyof typeof CategoryAuthenticationsOrderCategory]
  | (string & {});

export const categoryAuthenticationsOrderCategorySchema: EnumSchema<CategoryAuthenticationsOrderCategory> =
  s.enumOf<CategoryAuthenticationsOrderCategory>(CategoryAuthenticationsOrderCategory);
