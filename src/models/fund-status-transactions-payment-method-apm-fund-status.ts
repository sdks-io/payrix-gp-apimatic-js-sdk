import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the degree the merchant is funded for the transaction. */
export const FundStatusTransactionsPaymentMethodApmFundStatus = {
  NotExpected: "NOT_EXPECTED",
  Received: "RECEIVED",
  Waiting: "WAITING",
  Missing: "MISSING",
} as const;
export type FundStatusTransactionsPaymentMethodApmFundStatus =
  | (typeof FundStatusTransactionsPaymentMethodApmFundStatus)[keyof typeof FundStatusTransactionsPaymentMethodApmFundStatus]
  | (string & {});

export const fundStatusTransactionsPaymentMethodApmFundStatusSchema: EnumSchema<FundStatusTransactionsPaymentMethodApmFundStatus> =
  s.enumOf<FundStatusTransactionsPaymentMethodApmFundStatus>(
    FundStatusTransactionsPaymentMethodApmFundStatus,
  );
