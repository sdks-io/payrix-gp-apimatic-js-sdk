import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of disbursementEntries creation.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `pending` - **Pending entry creation and processing.**
 *
 * - `processing` - **Entry is still processing.**
 *
 * - `processed` - **Entry created and processed.**
 *
 * </details>
 */
export const DisbursementsDisbursementEntriesStatus1 = {
  Pending: "pending",
  Processing: "processing",
  Processed: "processed",
} as const;
export type DisbursementsDisbursementEntriesStatus1 =
  | (typeof DisbursementsDisbursementEntriesStatus1)[keyof typeof DisbursementsDisbursementEntriesStatus1]
  | (string & {});

export const disbursementsDisbursementEntriesStatus1Schema: EnumSchema<DisbursementsDisbursementEntriesStatus1> =
  s.enumOf<DisbursementsDisbursementEntriesStatus1>(DisbursementsDisbursementEntriesStatus1);
