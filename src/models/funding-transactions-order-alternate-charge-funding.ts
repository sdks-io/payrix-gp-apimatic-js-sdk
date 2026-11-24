import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * "> Indicates how the card is funded:
 * * `DEBIT` - indicates the card is a debit card where the funds may be present in an account to
 *   fulfill the transaction amount.
 * * `CREDIT` - indicates the card is a credit card where the funds may be available on credit to
 *   the payer to fulfill the transaction amount.
 */
export const FundingTransactionsOrderAlternateChargeFunding = {
  Credit: "CREDIT",
  Debit: "DEBIT",
} as const;
export type FundingTransactionsOrderAlternateChargeFunding =
  | (typeof FundingTransactionsOrderAlternateChargeFunding)[keyof typeof FundingTransactionsOrderAlternateChargeFunding]
  | (string & {});

export const fundingTransactionsOrderAlternateChargeFundingSchema: EnumSchema<FundingTransactionsOrderAlternateChargeFunding> =
  s.enumOf<FundingTransactionsOrderAlternateChargeFunding>(FundingTransactionsOrderAlternateChargeFunding);
