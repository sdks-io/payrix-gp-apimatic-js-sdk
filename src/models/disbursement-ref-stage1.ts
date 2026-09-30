import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The stage of the Disbursement reference.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `create` - Funding is sent to the processor (based on prior split setup).
 *
 * - `approve` - Funding approved by the processor.
 *
 * - `split` - Disbursement amount is split for processing.
 *
 * - `failed` - Funding failed.
 *
 * </details>
 */
export const DisbursementRefStage1 = {
  Create: "create",
  Approve: "approve",
  Split: "split",
  Failed: "failed",
} as const;
export type DisbursementRefStage1 =
  | (typeof DisbursementRefStage1)[keyof typeof DisbursementRefStage1]
  | (string & {});

export const disbursementRefStage1Schema: EnumSchema<DisbursementRefStage1> =
  s.enumOf<DisbursementRefStage1>(DisbursementRefStage1);
