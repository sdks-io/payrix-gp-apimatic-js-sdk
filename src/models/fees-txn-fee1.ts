import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicator to extract fee from txn supplied fee. When set, amount will correspond to the fee
 * amount in the txn and only that amount will be extractable, anything over that amount will not be
 * extracted. <details><summary>Valid Values</summary>
 *
 * - `0` - **Disabled.** Fee will be calculated normally.
 *
 * - `1` - **Enabled.** Fee will be calculated based on transaction fee.
 *
 *
 * </details>
 */
export const FeesTxnFee1 = {
  _0: 0,
  _1: 1,
} as const;
export type FeesTxnFee1 = (typeof FeesTxnFee1)[keyof typeof FeesTxnFee1] | (number & {});

export const feesTxnFee1Schema: EnumSchema<FeesTxnFee1> = s.enumOf<FeesTxnFee1>(FeesTxnFee1);
