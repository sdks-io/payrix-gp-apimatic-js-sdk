import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An indicator showing what this terminalTxnRef refers to.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `activation` - **Terminal Activation**
 * - `auth` - **Transaction Authorization**
 * - `draft` - **Transaction Draft Number**
 * - `file` - **Import File Ref**
 * - `retrieval` - **Transaction Retrieval Number**
 * - `acquirerTxnId` - **A unique identifier created by the acquirer to track and reconcile a
 *   specific transaction throughout its lifecycle.**
 * - `origTxnId` - **The identifier of the original transaction, used to link related actions such
 *   as refunds, reversals, or adjustments back to the initial payment.**
 *
 * </details>
 */
export const TerminalTxnRefStage1 = {
  Activation: "activation",
  Auth: "auth",
  Draft: "draft",
  File: "file",
  Retrieval: "retrieval",
  AcquirerTxnId: "acquirerTxnId",
  OrigTxnId: "origTxnId",
} as const;
export type TerminalTxnRefStage1 =
  | (typeof TerminalTxnRefStage1)[keyof typeof TerminalTxnRefStage1]
  | (string & {});

export const terminalTxnRefStage1Schema: EnumSchema<TerminalTxnRefStage1> =
  s.enumOf<TerminalTxnRefStage1>(TerminalTxnRefStage1);
