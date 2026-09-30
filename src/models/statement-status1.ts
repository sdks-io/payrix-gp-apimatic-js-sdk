import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the statement.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `pending` - **Statement amount is owed and is pending payment.**
 * - `processing` - **A payment is processing for this statement, pending completion.**
 * - `partiallyPaid` - **The statement was partially paid, some amount is still outstanding.**
 * - `paid` - **The statement was paid in full.**
 * - `partiallyCancelled` - **The statement was partially cancelled, some amount is still
 *   outstanding.**
 * - `cancelled` - **The statement was completely cancelled and is no longer due for payment.**
 *
 * </details>
 */
export const StatementStatus1 = {
  Pending: "pending",
  Processing: "processing",
  PartiallyPaid: "partiallyPaid",
  Paid: "paid",
  PartiallyCancelled: "partiallyCancelled",
  Cancelled: "cancelled",
} as const;
export type StatementStatus1 = (typeof StatementStatus1)[keyof typeof StatementStatus1] | (string & {});

export const statementStatus1Schema: EnumSchema<StatementStatus1> =
  s.enumOf<StatementStatus1>(StatementStatus1);
