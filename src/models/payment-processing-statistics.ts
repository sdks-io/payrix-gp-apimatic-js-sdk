import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentProcessingStatistics = {
  /**
   * The maximum permitted transactional amount for card transactions. Represented as the lowest
   * denomination of the currency (i.e. $1.00= 100).
   */
  cardTransactionLimitAmount?: string;
  /**
   * The processing amount for card transactions permitted in a calendar month. If this amount is
   * exceeded, a merchant will generally be able to continue processing, but may have funding
   * disabled until the account has been reviewed or additional underwriting has been performed.
   * Represented as the lowest denomination of the currency (i.e. $1.00= 100).
   */
  cardMonthlyLimitAmount?: string;
  /**
   * The maximum permitted transactional amount for card transactions. Represented as the lowest
   * denomination of the currency (i.e. $1.00= 100).
   */
  bankTransferPerTransactionLimitAmount?: string;
  /**
   * The processing amount for bank transfer transactions permitted in a calendar month. If this
   * amount is exceeded, a merchant will generally be able to continue processing, but may have
   * funding disabled until the account has been reviewed or additional underwriting has been
   * performed. Represented as the lowest denomination of the currency (i.e. $1.00= 100).
   */
  bankTransferMonthlyLimitAmount?: string;
  /**
   * The total bank transfer transaction amount processed in the current calendar month. Represented
   * as the lowest denomination of the currency (i.e. $1.00= 100).
   */
  bankTransferMonthToDateProcessedAmount?: string;
  /**
   * The total card transaction amount processed in the current calendar month. Represented as the
   * lowest denomination of the currency (i.e. $1.00= 100).
   */
  cardMonthToDateProcessedAmount?: string;
  /**
   * The account balance available for transfer or payout. Represented as the lowest denomination of
   * the currency (i.e. $1.00= 100).
   */
  availableBalanceAmount?: string;
  /**
   * The pending account balance for transactions that have been approved, but have not yet been
   * funded. Represented as the lowest denomination of the currency (i.e. $1.00= 100).
   */
  pendingBalanceAmount?: string;
  /**
   * The account balance that has been set aside as a reserve. The reserve balance may not be
   * transfered or paid out. Represented as the lowest denomination of the currency (i.e. $1.00=
   * 100).
   */
  reserveBalanceAmount?: string;
  /**
   * The permitted negative balance for an account. A permissable negative balance allows a merchant
   * to perform refunds from their account available funds. Represented as the lowest denomination
   * of the currency (i.e. $1.00= 100).
   */
  allowedNegativeBalanceAmount?: string;
  /**
   * The percentage at which funding will be disabled on an acocunt. The percentage is calulated by
   * dividing the card_month_to_date_amount by the card_monthly_limit_amount.
   */
  disablePayoutCardLimitPercentage?: string;
  /**
   * The percentage at which funding will be disabled on an acocunt. The percentage is calulated by
   * dividing the ach_month_to_date_amount by the ach_monthly_limit_amount.
   */
  disablePayoutBankTransferLimitPercentage?: string;
  /**
   * The total card transaction amount processed in the current calendar month. Represented as the
   * lowest denomination of the currency (i.e. $1.00= 100).
   */
  cardMonthToDateProcessedPercentage?: string;
  /** The total bank transfer transaction percentage processed in the current calendar month. */
  bankTransferMonthToDateProcessedPercentage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentProcessingStatisticsSchema: Schema<PaymentProcessingStatistics> =
  s.object<PaymentProcessingStatistics>(
    {
      cardTransactionLimitAmount: s.optional(s.string()),
      cardMonthlyLimitAmount: s.optional(s.string()),
      bankTransferPerTransactionLimitAmount: s.optional(s.string()),
      bankTransferMonthlyLimitAmount: s.optional(s.string()),
      bankTransferMonthToDateProcessedAmount: s.optional(s.string()),
      cardMonthToDateProcessedAmount: s.optional(s.string()),
      availableBalanceAmount: s.optional(s.string()),
      pendingBalanceAmount: s.optional(s.string()),
      reserveBalanceAmount: s.optional(s.string()),
      allowedNegativeBalanceAmount: s.optional(s.string()),
      disablePayoutCardLimitPercentage: s.optional(s.string()),
      disablePayoutBankTransferLimitPercentage: s.optional(s.string()),
      cardMonthToDateProcessedPercentage: s.optional(s.string()),
      bankTransferMonthToDateProcessedPercentage: s.optional(s.string()),
      _keysMap: {
        cardTransactionLimitAmount: "card_transaction_limit_amount",
        cardMonthlyLimitAmount: "card_monthly_limit_amount",
        bankTransferPerTransactionLimitAmount: "bank_transfer_per_transaction_limit_amount",
        bankTransferMonthlyLimitAmount: "bank_transfer_monthly_limit_amount",
        bankTransferMonthToDateProcessedAmount: "bank_transfer_month_to_date_processed_amount",
        cardMonthToDateProcessedAmount: "card_month_to_date_processed_amount",
        availableBalanceAmount: "available_balance_amount",
        pendingBalanceAmount: "pending_balance_amount",
        reserveBalanceAmount: "reserve_balance_amount",
        allowedNegativeBalanceAmount: "allowed_negative_balance_amount",
        disablePayoutCardLimitPercentage: "disable_payout_card_limit_percentage",
        disablePayoutBankTransferLimitPercentage: "disable_payout_bank_transfer_limit_percentage",
        cardMonthToDateProcessedPercentage: "card_month_to_date_processed_percentage",
        bankTransferMonthToDateProcessedPercentage: "bank_transfer_month_to_date_processed_percentage",
      },
    },
    { additionalProperties: s.json() },
  );
