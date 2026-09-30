import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The target that this decision should apply at.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `activation` - **Terminal activation.**
 * - `auth` - **Apply this decision during transaction authorization.**
 * - `postauth` - **Immediately after authorization.**
 * - `capture` - **Apply this decision during transaction capture.**
 * - `refund` - **Apply this decision when processing a refund.**
 * - `createEntity` - **createEntity. Process decisions during entity creation.**
 * - `underwriting` - **Underwriting. Check the members before they are boarded.**
 * - `preboard` - **Preboard. Check the Merchant before they are boarded.**
 * - `postboard` - **Check the Merchant after they are boarded.**
 * - `txn` - **Check the Merchant when they process a Transaction.**
 * - `txnVolume` - **Check the Merchant when their transaction volume hits a certain amount.**
 * - `payout` - **Check the Merchant when a Payout occurs.**
 * - `payoutVolume` - **Check the Merchant when the volume of Payouts to the Merchant hits a certain
 *   amount.**
 *
 * </details>
 */
export const DecisionsTarget1 = {
  Activation: "activation",
  Auth: "auth",
  Postauth: "postauth",
  Capture: "capture",
  Refund: "refund",
  CreateEntity: "createEntity",
  Underwriting: "underwriting",
  Preboard: "preboard",
  Postboard: "postboard",
  Txn: "txn",
  TxnVolume: "txnVolume",
  Payout: "payout",
  PayoutVolume: "payoutVolume",
} as const;
export type DecisionsTarget1 = (typeof DecisionsTarget1)[keyof typeof DecisionsTarget1] | (string & {});

export const decisionsTarget1Schema: EnumSchema<DecisionsTarget1> =
  s.enumOf<DecisionsTarget1>(DecisionsTarget1);
