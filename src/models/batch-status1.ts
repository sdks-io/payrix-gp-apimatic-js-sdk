import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of this Batch.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `open` - **This Batch can accept more Transactions.**
 * - `closed` - **This Batch is closed to new Transactions and is ready to be sent to the
 *   processor.**
 *
 * </details>
 */
export const BatchStatus1 = {
  Open: "open",
  Closed: "closed",
} as const;
export type BatchStatus1 = (typeof BatchStatus1)[keyof typeof BatchStatus1] | (string & {});

export const batchStatus1Schema: EnumSchema<BatchStatus1> = s.enumOf<BatchStatus1>(BatchStatus1);
