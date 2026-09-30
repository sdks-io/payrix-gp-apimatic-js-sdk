import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of Transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Credit Card Only:** Sale Transaction. Processes a sale and charges the customer.
 * - `2` - **Credit Card Only:** Auth Transaction. Authorizes and holds the requested total on the
 *   credit card.
 * - `3` - **Credit Card Only:** Capture Transaction. Finalizes a prior Auth Transaction and charges
 *   the customer.
 * - `4` - **Credit Card Only:** Reverse Authorization. Reverses a prior Auth or Sale Transaction
 *   and releases the credit hold.
 * - `5` - **Credit Card Only:** Refund Transaction. Refunds a prior Capture or Sale Transaction
 *   (total may be specified for a partial refund).
 * - `7` - **Echeck Only:** Echeck Sale Transaction. Sale Transaction for ECheck payment.
 * - `8` - **ECheck Only:** ECheck Refund Transaction. Refund Transaction for prior ECheck Sale
 *   Transaction.
 * - `11` - **Echeck Only:** Echeck Redeposit Transaction. Attempt to redeposit a prior failed
 *   eCheck Sale Transaction.
 * - `12` - **Echeck Only:** Echeck Account Verification Transaction. Attempt to verify eCheck
 *   payment details.
 *
 * </details>
 */
export const CredentialType1 = {
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
export type CredentialType1 = (typeof CredentialType1)[keyof typeof CredentialType1] | (string & {});

export const credentialType1Schema: EnumSchema<CredentialType1> = s.enumOf<CredentialType1>(CredentialType1);
