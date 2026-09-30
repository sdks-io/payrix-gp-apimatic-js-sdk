import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the Transaction is reserved and the action that will be taken as a result.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **No reserve.**
 * - `1` - **Block transaction, will never be processed. The Entity is sent to the manual review
 *   queue..**
 * - `3` - **Hold transaction, will not be captured.**
 * - `4` - **Reserve transaction, funds should be reserved.**
 * - `5` - **Block current activity, no change for merchant.**
 * - `8` - **We onboard the merchant and wait for manual check later.**
 *
 * </details>
 */
export const TxnsReserved1 = {
  _0: 0,
  _1: 1,
  _3: 3,
  _4: 4,
  _5: 5,
  _8: 8,
} as const;
export type TxnsReserved1 = (typeof TxnsReserved1)[keyof typeof TxnsReserved1] | (number & {});

export const txnsReserved1Schema: EnumSchema<TxnsReserved1> = s.enumOf<TxnsReserved1>(TxnsReserved1);
