import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if entries were processed for this Disbursement. <details><summary>Valid
 * Values</summary>
 *
 *   - `pending` - **Pending entry creation and processing.**
 *
 *   - `processed` - **Entry created and processed.**
 *
 * </details>
 */
export const DisbursementsFundingStatus1 = {
  Pending: "pending",
  Processed: "processed",
} as const;
export type DisbursementsFundingStatus1 =
  | (typeof DisbursementsFundingStatus1)[keyof typeof DisbursementsFundingStatus1]
  | (string & {});

export const disbursementsFundingStatus1Schema: EnumSchema<DisbursementsFundingStatus1> =
  s.enumOf<DisbursementsFundingStatus1>(DisbursementsFundingStatus1);
