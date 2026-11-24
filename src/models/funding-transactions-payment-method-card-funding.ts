import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates how the card is funded:
 * * `DEBIT` - indicates the card is a debit card where the funds may be present in an account to
 *   fulfill the transaction amount.
 * * `CREDIT` - indicates the card is a credit card where the funds may be available on credit to
 *   the payer to fulfill the transaction amount.
 * * `FOOD_STAMP` - indicates the card is an, Electronic Benefits Transfer, for food stamps.
 * * `CASH_BENEFITS` - indicates the card is an, Electronic Benefits Transfer, for cash benefits.
 * * `PREPAID` - indicates the card is a prepaid card where the funds are loaded to the card account
 *   to fulfill the transaction amount. Unlike a debit card, a prepaid is not linked to a bank
 *   account.
 * * `ELECTRONIC_VOUCHER` - Indicates that card is an electronic voucher which requires a voucher
 *   code and number to fulfil the transaction
 */
export const FundingTransactionsPaymentMethodCardFunding = {
  Debit: "DEBIT",
  Credit: "CREDIT",
  CashBenefits: "CASH_BENEFITS",
  FoodStamp: "FOOD_STAMP",
  Prepaid: "PREPAID",
  ElectronicVoucher: "ELECTRONIC_VOUCHER",
} as const;
export type FundingTransactionsPaymentMethodCardFunding =
  | (typeof FundingTransactionsPaymentMethodCardFunding)[keyof typeof FundingTransactionsPaymentMethodCardFunding]
  | (string & {});

export const fundingTransactionsPaymentMethodCardFundingSchema: EnumSchema<FundingTransactionsPaymentMethodCardFunding> =
  s.enumOf<FundingTransactionsPaymentMethodCardFunding>(FundingTransactionsPaymentMethodCardFunding);
