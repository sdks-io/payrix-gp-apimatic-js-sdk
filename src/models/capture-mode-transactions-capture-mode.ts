import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the transaction is to be captured automatically, later or later using more than
 * 1 partial capture.
 * * `AUTO` - If a transaction is authorized, funds will exchange between the payer and merchant
 *   automatically and as soon as possible.
 * * `LATER` - If a transaction is authorized, funds will not exchange between the payer and
 *   merchant automatically and will require a subsequent separate action to capture that
 *   transaction and start the funding process. Only one successful capture is permitted.
 * * `MULTIPLE` - If a transaction is authorized, funds will not exchange between the payer and
 *   merchant automatically. One or more subsequent separate capture actions are required to capture
 *   that transaction in parts and start the funding process for the part captured. One or many
 *   successful capture are permitted once the total amount captured is within a range of the
 *   original authorized amount.
 * * 'LATER_FINAL' - If a transaction is authorized, funds will not exchange between the payer and
 *   merchant automatically and will require a subsequent separate action to capture that
 *   transaction and start the funding process. In this case, the separate capture amount must be
 *   the same as the initial auth.
 */
export const CaptureModeTransactionsCaptureMode = {
  Auto: "AUTO",
  Later: "LATER",
  Multiple: "MULTIPLE",
  LaterFinal: "LATER_FINAL",
} as const;
export type CaptureModeTransactionsCaptureMode =
  | (typeof CaptureModeTransactionsCaptureMode)[keyof typeof CaptureModeTransactionsCaptureMode]
  | (string & {});

export const captureModeTransactionsCaptureModeSchema: EnumSchema<CaptureModeTransactionsCaptureMode> =
  s.enumOf<CaptureModeTransactionsCaptureMode>(CaptureModeTransactionsCaptureMode);
