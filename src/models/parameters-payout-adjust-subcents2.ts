import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether a payout will process sub-cents as an adjustment (defaults to no).
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **No**
 * - `1` - **Yes**
 *
 * </details>
 */
export const ParametersPayoutAdjustSubcents2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPayoutAdjustSubcents2 =
  | (typeof ParametersPayoutAdjustSubcents2)[keyof typeof ParametersPayoutAdjustSubcents2]
  | (number & {});

export const parametersPayoutAdjustSubcents2Schema: EnumSchema<ParametersPayoutAdjustSubcents2> =
  s.enumOf<ParametersPayoutAdjustSubcents2>(ParametersPayoutAdjustSubcents2);
