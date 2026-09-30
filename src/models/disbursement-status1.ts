import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of this Disbursement <details><summary>Valid Values</summary>
 *
 *   - `1` - **Requested.** The request for this Disbursement has been received.
 *
 *   - `2` - **Processing.** This Disbursement is being processed to be paid out.
 *
 *   - `3` - **Processed.** This Disbursement has been paid by ACH to the bank account referenced in
 *     the Disbursement data.
 *
 *   - `4` - **Failed.** A problem occurred and the payment processor has failed to process this
 *     Disbursement.
 *
 *   - `6` - **Returned.** This Disbursement has been returned.
 *
 * </details>
 */
export const DisbursementStatus1 = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
} as const;
export type DisbursementStatus1 =
  | (typeof DisbursementStatus1)[keyof typeof DisbursementStatus1]
  | (number & {});

export const disbursementStatus1Schema: EnumSchema<DisbursementStatus1> =
  s.enumOf<DisbursementStatus1>(DisbursementStatus1);
