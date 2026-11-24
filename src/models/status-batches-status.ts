import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where a batch is in its life cycle. *`OPEN` - Batch is open and can accept more
 * transactions. *`CLOSED` - Batch is closed and cannot accept more transactions.
 */
export const StatusBatchesStatus = {
  Open: "OPEN",
  Closed: "CLOSED",
} as const;
export type StatusBatchesStatus =
  | (typeof StatusBatchesStatus)[keyof typeof StatusBatchesStatus]
  | (string & {});

export const statusBatchesStatusSchema: EnumSchema<StatusBatchesStatus> =
  s.enumOf<StatusBatchesStatus>(StatusBatchesStatus);
