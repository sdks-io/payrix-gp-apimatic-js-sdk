import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CredentialType = {
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
export type CredentialType = (typeof CredentialType)[keyof typeof CredentialType] | (string & {});

export const credentialTypeSchema: EnumSchema<CredentialType> = s.enumOf<CredentialType>(CredentialType);
