import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The credential used for configurationStage resource.
 *
 * <details> <summary>Valid Values</summary>
 *
 *  - `transaction` - **Credential used for transaction processing.**
 *
 *  - `batch` - **Credential used for transaction batches.**
 *
 *  - `boarding` - **Credential used merchant boarding.**
 *
 *  - `paymentUpdates` - **Account updater (the process through which old/expired credit cards are
 *    automatically updated).**
 *
 *  - `payout` - **Credential used for payouts.**
 *
 *  - `payoutCredit` - **Credential used for transaction batches.**
 *
 *  - `payoutDebit` - **Credential used for transaction batches.**
 *
 *  - `chargeback` - **Credential used for chargeback processing and updating.**
 *
 *  - `txnReport` - **Credential used for transaction reports.**
 *
 *  - `account` - **Credential used for account integrations.**
 *
 *  - `entityDecision` - **Credential used for entity decisions.**
 *
 *  - `txnCheck` - **Credential used for transaction verifications.**
 *
 *  - `payoutReport` - **Credential used for payout reports.**
 *
 *  - `feeReport` - **Credential used for fee reports.**
 *
 *  - `chargebackReport` - **Credential used for chargeback reports.**
 *
 *  - `binReport` - **Credential used for binReports.**
 *
 *  - `watchlist` - **Third party watchlist download .**
 *
 *  - `encryption` - **Credential used for encryption.**
 *
 *  - `changeRequest` - **Credential used for changeRequest.**
 *
 * </details>
 */
export const ConfigurationStageCredentials2 = {
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
export type ConfigurationStageCredentials2 =
  | (typeof ConfigurationStageCredentials2)[keyof typeof ConfigurationStageCredentials2]
  | (string & {});

export const configurationStageCredentials2Schema: EnumSchema<ConfigurationStageCredentials2> =
  s.enumOf<ConfigurationStageCredentials2>(ConfigurationStageCredentials2);
