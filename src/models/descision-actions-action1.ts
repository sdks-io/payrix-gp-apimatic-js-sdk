import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The action to take when this check fails.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Block txn, will never be processed. The Entity is sent to the manual review queue.**
 * - `3` - **Hold txn, will not be captured.**
 * - `4` - **Reserve txn, funds should be reserved.**
 * - `5` - **Block current activity, no change for merchant.**
 * - `8` - **We onboard the merchant and wait for manual check later.**
 *
 * </details>
 */
export const DescisionActionsAction1 = {
  _1: 1,
  _3: 3,
  _4: 4,
  _5: 5,
  _8: 8,
} as const;
export type DescisionActionsAction1 =
  | (typeof DescisionActionsAction1)[keyof typeof DescisionActionsAction1]
  | (number & {});

export const descisionActionsAction1Schema: EnumSchema<DescisionActionsAction1> =
  s.enumOf<DescisionActionsAction1>(DescisionActionsAction1);
