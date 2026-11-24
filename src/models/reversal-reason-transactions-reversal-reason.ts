import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Used to record the reason for a reversal. */
export const ReversalReasonTransactionsReversalReason = {
  CustomerCancellation: "CUSTOMER_CANCELLATION",
  TerminalError: "TERMINAL_ERROR",
  Timeout: "TIMEOUT",
  ChipCardDecline: "CHIP_CARD_DECLINE",
  Macfailure: "MACFAILURE",
  ResponseReceivedLate: "RESPONSE_RECEIVED_LATE",
  SuspectedFraud: "SUSPECTED_FRAUD",
  ArpcCryptogramFailure: "ARPC_CRYPTOGRAM_FAILURE",
  InStock: "IN_STOCK",
  FalsePositive: "FALSE_POSITIVE",
  Other: "OTHER",
  NotGiven: "NOT_GIVEN",
  SystemError: "SYSTEM_ERROR",
  OutOfStock: "OUT_OF_STOCK",
  Fraud: "FRAUD",
  Duplicate: "DUPLICATE",
  Mistake: "MISTAKE",
} as const;
export type ReversalReasonTransactionsReversalReason =
  | (typeof ReversalReasonTransactionsReversalReason)[keyof typeof ReversalReasonTransactionsReversalReason]
  | (string & {});

export const reversalReasonTransactionsReversalReasonSchema: EnumSchema<ReversalReasonTransactionsReversalReason> =
  s.enumOf<ReversalReasonTransactionsReversalReason>(ReversalReasonTransactionsReversalReason);
