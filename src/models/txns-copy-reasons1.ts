import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reason for copying Transaction referenced in fromtxn field, which can be either resubmission or
 * reauthorization. <details> <summary>Valid Values</summary>
 *
 *   - `resubmission` - **Resubmission.**
 *   - `reauthorization` - **Reauthorization.**
 *
 * </details>
 */
export const TxnsCopyReasons1 = {
  Resubmission: "resubmission",
  Reauthorization: "reauthorization",
} as const;
export type TxnsCopyReasons1 = (typeof TxnsCopyReasons1)[keyof typeof TxnsCopyReasons1] | (string & {});

export const txnsCopyReasons1Schema: EnumSchema<TxnsCopyReasons1> =
  s.enumOf<TxnsCopyReasons1>(TxnsCopyReasons1);
