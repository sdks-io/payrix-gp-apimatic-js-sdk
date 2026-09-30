import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConfigurationStageCredentials = {
  Transaction: "transaction",
  Batch: "batch",
  Boarding: "boarding",
  PaymentUpdates: "paymentUpdates",
  Payout: "payout",
  PayoutCredit: "payoutCredit",
  PayoutDebit: "payoutDebit",
  Chargeback: "chargeback",
  TxnReport: "txnReport",
  Account: "account",
  EntityDecision: "entityDecision",
  TxnCheck: "txnCheck",
  PayoutReport: "payoutReport",
  FeeReport: "feeReport",
  ChargebackReport: "chargebackReport",
  BinReport: "binReport",
  Watchlist: "watchlist",
  Encryption: "encryption",
  ChangeRequest: "changeRequest",
} as const;
export type ConfigurationStageCredentials =
  | (typeof ConfigurationStageCredentials)[keyof typeof ConfigurationStageCredentials]
  | (string & {});

export const configurationStageCredentialsSchema: EnumSchema<ConfigurationStageCredentials> =
  s.enumOf<ConfigurationStageCredentials>(ConfigurationStageCredentials);
