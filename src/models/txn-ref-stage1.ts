import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An indicator showing what this txnRef refers to, such as auth, capture, draft, file, refund, or
 * an unknown value.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `auth` - **Related to transaction authorization stage.**
 * - `capture` - **Related to transaction capture stage.**
 * - `draft` - **Transaction is in draft stage. Draft locator for transaction.**
 * - `file` - **Import Transaction Reference file.**
 * - `refund` - **Related to transaction refund stage.**
 * - `retrieval` - **A reference to the retrieval number (a reference exchanged with the processor
 *   for later cross-reference).**
 * - `threatMetrix` - **Threat Matrix.**
 * - `acquirerTxnId` - **A unique identifier created by the acquirer to track and reconcile a
 *   specific transaction throughout its lifecycle.**
 * - `origTxnId` - **The identifier of the original transaction, used to link related actions such
 *   as refunds, reversals, or adjustments back to the initial payment.**
 *
 * </details>
 */
export const TxnRefStage1 = {
  Auth: "auth",
  Capture: "capture",
  Draft: "draft",
  File: "file",
  Network: "network",
  Refund: "refund",
  Retrieval: "retrieval",
  ThreatMetrix: "threatMetrix",
  TxnHash: "txnHash",
  Arn: "ARN",
  AcquirerTxnId: "acquirerTxnId",
  OrigTxnId: "origTxnId",
} as const;
export type TxnRefStage1 = (typeof TxnRefStage1)[keyof typeof TxnRefStage1] | (string & {});

export const txnRefStage1Schema: EnumSchema<TxnRefStage1> = s.enumOf<TxnRefStage1>(TxnRefStage1);
