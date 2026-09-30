import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the Payout resource will be marked as inactive.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Inactive**
 * - `1` - **Active**
 *
 * </details>
 */
export const PayoutInactive1 = {
  _0: 0,
  _1: 1,
} as const;
export type PayoutInactive1 = (typeof PayoutInactive1)[keyof typeof PayoutInactive1] | (number & {});

export const payoutInactive1Schema: EnumSchema<PayoutInactive1> = s.enumOf<PayoutInactive1>(PayoutInactive1);
