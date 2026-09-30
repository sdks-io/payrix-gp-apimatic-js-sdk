import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The name of this configuration resource.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `account` - **Account. The specified configuration will be used for bank accounts
 *   integrations.**
 * - `batchTxn` - **BatchTxn. The specified configuration will be used for processing transaction
 *   batches.**
 * - `binReport` - **BinReport. The specified configuration will be used for bin reports
 *   integrations.**
 * - `board` - **Board. The specified configuration will be used for boarding merchants.**
 * - `chargeback` - **Chargeback. The specified configuration will be used for everything related to
 *   chargebacks.**
 * - `decision` - **Decision. The specified configuration will be used for everything related to
 *   decisions.**
 * - `decisionBoard` - **This holds configuration for running boarding decision policy on entity
 *   through Risk MS.**
 * - `decisionTxn` - **DecisionTxn is used for running transaction decision policy through the Risk
 *   MS.**
 * - `echeckTxn` - **EcheckTxn. The specified configuration will be used to get reports of echeck
 *   transactions as well as getting additional information about those transactions.**
 * - `encryption` - **Holds the configuration for running Google and Apple Pay encryption/decryption
 *   through the Payrix Encryption Service.**
 * - `omnitoken` - **Holds the configuration parameters for omnitoken services.**
 * - `onlineTxn` - **OnlineTxn. The specified configuration will be used to process transactions
 *   online without a batch.**
 * - `onlineTxnSocket` - **OnlineTxnSocket.**
 * - `paymentUpdates` - **PaymentUpdates.**
 * - `payout` - **Payout. The specified configuration will be used for everything related to
 *   payouts.**
 * - `payoutCredit` - **Holds the configuration for processing payout credit through the integration
 *   service.**
 * - `payoutDebit` - **Holds the configuration for processing payouts debit through the integration
 *   service.**
 * - `plaid` - **Holds the configuration parameters for Plaid services (connecting accounts, getting
 *   identity, etc.).**
 * - `reports` - **Reports. The specified configuration will be used to import processed
 *   transactions.**
 * - `register` - **Register.**
 * - `saferPayment` - **Holds the configuration parameters for safer payment VAS.**
 * - `unregister` - **Unregister.**
 * - `varsheetRetrieval` - **Holds the configuration parameters for varsheet retrieval.**
 * - `watchlist` - **Watchlist. The specified configuration will be used to receive a watch list by
 *   the OFAC.**
 *
 * </details>
 */
export const ConfigurationsName1 = {
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
export type ConfigurationsName1 =
  | (typeof ConfigurationsName1)[keyof typeof ConfigurationsName1]
  | (string & {});

export const configurationsName1Schema: EnumSchema<ConfigurationsName1> =
  s.enumOf<ConfigurationsName1>(ConfigurationsName1);
