import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProcessingLimits = {
  /** This is the maximum ticket size permitted for a card transaction. */
  cardTransactionLimitAmount?: string;
  /**
   * This is the total monthly card volume permitted to be processed by this account in the
   * account's currency.
   */
  cardMonthlyLimitAmount?: string;
  /** This is the maximum ticket size permitted for an ach transaction. */
  achTransactionLimitAmount?: string;
  /**
   * This is the total monthly card volume permitted to be processed by this account in the
   * account's currency.
   */
  achMonthlyLimitAmount?: string;
  /**
   * This is the percentage of the monthly card processing volume that will disable pay outs if
   * exceeded.
   */
  disablePayoutCardLimitPercentage?: string;
  /**
   * This is the percentage of the monthly ach processing volume that will disable pay outs if
   * exceeded.
   */
  disablePayoutAchLimitPercentage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processingLimitsSchema: Schema<ProcessingLimits> = s.object<ProcessingLimits>(
  {
    cardTransactionLimitAmount: s.optional(s.string()),
    cardMonthlyLimitAmount: s.optional(s.string()),
    achTransactionLimitAmount: s.optional(s.string()),
    achMonthlyLimitAmount: s.optional(s.string()),
    disablePayoutCardLimitPercentage: s.optional(s.string()),
    disablePayoutAchLimitPercentage: s.optional(s.string()),
    _keysMap: {
      cardTransactionLimitAmount: "card_transaction_limit_amount",
      cardMonthlyLimitAmount: "card_monthly_limit_amount",
      achTransactionLimitAmount: "ach_transaction_limit_amount",
      achMonthlyLimitAmount: "ach_monthly_limit_amount",
      disablePayoutCardLimitPercentage: "disable_payout_card_limit_percentage",
      disablePayoutAchLimitPercentage: "disable_payout_ach_limit_percentage",
    },
  },
  { additionalProperties: s.json() },
);
