import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The action taken on the referenced Txn. Block, Hold, or Reserve it.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **NONE**
 * - `1` - **Block.** Block the Transaction from proceeding. This returns an error.
 * - `3` - **Hold.** Hold the Transaction. It will not be captured until it is manually released.
 * - `4` - **Reserve** Reserve the Transaction. The funds for the transaction will not be released
 *   until the Transaction is manually reviewed.
 * - `5` - **LIMIT** Block current activity.
 * - `6` - **PASS** Passed decision(s).
 * - `8` - **POSTREVIEWONLY** Passed decision(s).
 *
 * </details>
 */
export const HoldAction1 = {
  _0: 0,
  _1: 1,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _8: 8,
} as const;
export type HoldAction1 = (typeof HoldAction1)[keyof typeof HoldAction1] | (number & {});

export const holdAction1Schema: EnumSchema<HoldAction1> = s.enumOf<HoldAction1>(HoldAction1);
