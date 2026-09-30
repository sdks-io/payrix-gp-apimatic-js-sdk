import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit of measure for this Payout is the percentage of funds. If the Entity has a negative
 * balance of $10 and the amount is set to 10000 (100%), then $10 will be drawn from their account
 * to fully replenish the balance to $0.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `percent` - **Percentage unit measurement.** (Percentage of Funds).
 * - `actual` - **Actual unit measurement.** (Exact Currency Amount).
 * - `percentneg` - **Negative Percentage unit measurement.** (Replenish account by percent negative
 *   back to $0).
 *
 * </details>
 */
export const PayoutFlowUm1 = {
  Percent: "percent",
  Actual: "actual",
  Percentneg: "percentneg",
} as const;
export type PayoutFlowUm1 = (typeof PayoutFlowUm1)[keyof typeof PayoutFlowUm1] | (string & {});

export const payoutFlowUm1Schema: EnumSchema<PayoutFlowUm1> = s.enumOf<PayoutFlowUm1>(PayoutFlowUm1);
