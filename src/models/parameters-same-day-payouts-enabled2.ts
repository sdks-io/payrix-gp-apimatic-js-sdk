import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether same day account payout is enabled.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersSameDayPayoutsEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersSameDayPayoutsEnabled2 =
  | (typeof ParametersSameDayPayoutsEnabled2)[keyof typeof ParametersSameDayPayoutsEnabled2]
  | (number & {});

export const parametersSameDayPayoutsEnabled2Schema: EnumSchema<ParametersSameDayPayoutsEnabled2> =
  s.enumOf<ParametersSameDayPayoutsEnabled2>(ParametersSameDayPayoutsEnabled2);
