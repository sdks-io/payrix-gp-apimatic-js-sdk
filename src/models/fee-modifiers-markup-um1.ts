import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit of measure for the markup amount for the Fee.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Fixed Amount.** Specified in the 'markupAmount' field as an integer in cents.
 * - `2` - **Percentage.** Specified in the 'markupAmount' field in basis points.
 *
 * </details>
 */
export const FeeModifiersMarkupUm1 = {
  _1: 1,
  _2: 2,
} as const;
export type FeeModifiersMarkupUm1 =
  | (typeof FeeModifiersMarkupUm1)[keyof typeof FeeModifiersMarkupUm1]
  | (number & {});

export const feeModifiersMarkupUm1Schema: EnumSchema<FeeModifiersMarkupUm1> =
  s.enumOf<FeeModifiersMarkupUm1>(FeeModifiersMarkupUm1);
