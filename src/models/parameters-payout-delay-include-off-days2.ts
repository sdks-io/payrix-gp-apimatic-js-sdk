import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the API should count weekends and holidays towards the number of days in the payout delay
 * (defaults to no).
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **No**
 * - `1` - **Yes**
 *
 * </details>
 */
export const ParametersPayoutDelayIncludeOffDays2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPayoutDelayIncludeOffDays2 =
  | (typeof ParametersPayoutDelayIncludeOffDays2)[keyof typeof ParametersPayoutDelayIncludeOffDays2]
  | (number & {});

export const parametersPayoutDelayIncludeOffDays2Schema: EnumSchema<ParametersPayoutDelayIncludeOffDays2> =
  s.enumOf<ParametersPayoutDelayIncludeOffDays2>(ParametersPayoutDelayIncludeOffDays2);
