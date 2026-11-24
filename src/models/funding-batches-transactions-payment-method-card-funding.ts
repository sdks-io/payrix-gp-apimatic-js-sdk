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
 */
export const FundingBatchesTransactionsPaymentMethodCardFunding = {
  Debit: "DEBIT",
  Credit: "CREDIT",
  CashBenefits: "CASH_BENEFITS",
  FoodStamp: "FOOD_STAMP",
  Prepaid: "PREPAID",
} as const;
export type FundingBatchesTransactionsPaymentMethodCardFunding =
  | (typeof FundingBatchesTransactionsPaymentMethodCardFunding)[keyof typeof FundingBatchesTransactionsPaymentMethodCardFunding]
  | (string & {});

export const fundingBatchesTransactionsPaymentMethodCardFundingSchema: EnumSchema<FundingBatchesTransactionsPaymentMethodCardFunding> =
  s.enumOf<FundingBatchesTransactionsPaymentMethodCardFunding>(
    FundingBatchesTransactionsPaymentMethodCardFunding,
  );
