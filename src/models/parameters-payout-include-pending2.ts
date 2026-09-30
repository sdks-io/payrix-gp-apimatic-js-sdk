import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether a payout will be processed if there's enough pending funds to cover the negative
 * available.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **OFF**
 * - `1` - **ON**
 *
 * </details>
 */
export const ParametersPayoutIncludePending2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPayoutIncludePending2 =
  | (typeof ParametersPayoutIncludePending2)[keyof typeof ParametersPayoutIncludePending2]
  | (number & {});

export const parametersPayoutIncludePending2Schema: EnumSchema<ParametersPayoutIncludePending2> =
  s.enumOf<ParametersPayoutIncludePending2>(ParametersPayoutIncludePending2);
