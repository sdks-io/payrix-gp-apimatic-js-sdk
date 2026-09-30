import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit of measure for this Fee.
 *
 * Notes:
 *   * Percentage and Surcharge units will only apply to Fee schedules set to trigger from monetary
 *     events, such as an authorization, capture, or refund.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Percentage.** The Fee is a percentage of the related event amount, specified in the
 *   'amount' field in basis points.
 *
 * - `2` - **Fixed Amount.** The Fee is a fixed amount, specified in the 'amount' field as an
 *   integer in cents.
 *
 * - `3` - **Surcharge.** The Fee is a percentage of the related event amount as a surcharge (the
 *   calculated amount will be based on the assumption that the related event amount already
 *   contains the fee amount in it), specified in the 'amount' field in basis points.
 *
 * </details>
 */
export const FeeUm1 = {
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type FeeUm1 = (typeof FeeUm1)[keyof typeof FeeUm1] | (number & {});

export const feeUm1Schema: EnumSchema<FeeUm1> = s.enumOf<FeeUm1>(FeeUm1);
