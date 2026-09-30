import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConfigurationsName = {
  Account: "account",
  BatchTxn: "batchTxn",
  BinReport: "binReport",
  Board: "board",
  Chargeback: "chargeback",
  Decision: "decision",
  DecisionBoard: "decisionBoard",
  DecisionTxn: "decisionTxn",
  EcheckTxn: "echeckTxn",
  Encryption: "encryption",
  Omnitoken: "omnitoken",
  OnlineTxn: "onlineTxn",
  OnlineTxnSocket: "onlineTxnSocket",
  PaymentUpdates: "paymentUpdates",
  Payout: "payout",
  PayoutCredit: "payoutCredit",
  PayoutDebit: "payoutDebit",
  Plaid: "plaid",
  Reports: "reports",
  Register: "register",
  SaferPayment: "saferPayment",
  Unregister: "unregister",
  VarsheetRetrieval: "varsheetRetrieval",
  Watchlist: "watchlist",
} as const;
export type ConfigurationsName = (typeof ConfigurationsName)[keyof typeof ConfigurationsName] | (string & {});

export const configurationsNameSchema: EnumSchema<ConfigurationsName> =
  s.enumOf<ConfigurationsName>(ConfigurationsName);
