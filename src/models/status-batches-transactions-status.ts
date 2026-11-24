import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where a transaction is in its lifecycle.
 * * `BATCHED `- A Transaction has been successfully Batched
 * * `CAPTURED` - A Transaction has been successfully authorized and captured. The funding process
 *   will commence once the transaction remains in this status.
 */
export const StatusBatchesTransactionsStatus = {
  Batched: "BATCHED",
  Captured: "CAPTURED",
} as const;
export type StatusBatchesTransactionsStatus =
  | (typeof StatusBatchesTransactionsStatus)[keyof typeof StatusBatchesTransactionsStatus]
  | (string & {});

export const statusBatchesTransactionsStatusSchema: EnumSchema<StatusBatchesTransactionsStatus> =
  s.enumOf<StatusBatchesTransactionsStatus>(StatusBatchesTransactionsStatus);
