import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates what industry the merchant belongs to. */
export const MerchantCategoryTransactionsMerchantCategory = {
  Hotel: "HOTEL",
  Airline: "AIRLINE",
  Retail: "RETAIL",
  TopUp: "TOP_UP",
  Player: "PLAYER",
  CdKey: "CD_KEY",
  DebtRepayment: "DEBT_REPAYMENT",
  Healthcare: "HEALTHCARE",
  AccountFundingTransactions: "ACCOUNT_FUNDING_TRANSACTIONS",
  BillPay: "BILL_PAY",
  Other: "OTHER",
  Gaming: "GAMING",
} as const;
export type MerchantCategoryTransactionsMerchantCategory =
  | (typeof MerchantCategoryTransactionsMerchantCategory)[keyof typeof MerchantCategoryTransactionsMerchantCategory]
  | (string & {});

export const merchantCategoryTransactionsMerchantCategorySchema: EnumSchema<MerchantCategoryTransactionsMerchantCategory> =
  s.enumOf<MerchantCategoryTransactionsMerchantCategory>(MerchantCategoryTransactionsMerchantCategory);
