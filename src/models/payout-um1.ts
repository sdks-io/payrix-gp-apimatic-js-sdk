import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit of measure for this Payout is the percentage of funds. If the Entity has a negative
 * balance of $10 and the amount is set to 10000 (100%), then $10 will be drawn from their account
 * to fully replenish the balance to $0.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Percentage unit measurement.** (Percentage of Funds).
 * - `2` - **Actual unit measurement.** (Exact Currency Amount).
 * - `3` - **Negative Percentage unit measurement.** (Replenish account by percent negative back to
 *   $0).
 *
 * </details>
 */
export const PayoutUm1 = {
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type PayoutUm1 = (typeof PayoutUm1)[keyof typeof PayoutUm1] | (number & {});

export const payoutUm1Schema: EnumSchema<PayoutUm1> = s.enumOf<PayoutUm1>(PayoutUm1);
