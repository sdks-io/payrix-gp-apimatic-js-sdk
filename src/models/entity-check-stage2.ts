import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The last stage completed for risk underwriting review.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `createEntity` - **Merchant created.** No Signup Form submitted.
 * - `underwriting` - **Risk/Underwriting Review.** Merchant Signup Form submitted.
 * - `preboard` - **Preboard.** Check the Merchant before they are boarded.
 * - `postboard` - **Check the Merchant after they are boarded.**
 * - `txn` - **Check the Merchant when they process a Transaction.**
 * - `txnVolume` - **Check the Merchant when their transaction volume hits a certain amount.**
 * - `payout` - **Check the Merchant when a Payout occurs.**
 * - `payoutVolume` - **Check the Merchant when the volume of Payouts to the Merchant hits a certain
 *   amount.**
 *
 * </details>
 */
export const EntityCheckStage2 = {
  CreateEntity: "createEntity",
  Underwriting: "underwriting",
  Preboard: "preboard",
  Postboard: "postboard",
  Txn: "txn",
  TxnVolume: "txnVolume",
  Payout: "payout",
  PayoutVolume: "payoutVolume",
} as const;
export type EntityCheckStage2 = (typeof EntityCheckStage2)[keyof typeof EntityCheckStage2] | (string & {});

export const entityCheckStage2Schema: EnumSchema<EntityCheckStage2> =
  s.enumOf<EntityCheckStage2>(EntityCheckStage2);
