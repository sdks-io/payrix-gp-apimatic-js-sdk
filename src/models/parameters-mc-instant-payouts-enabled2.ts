import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether MasterCard instant payouts should be enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersMcInstantPayoutsEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersMcInstantPayoutsEnabled2 =
  | (typeof ParametersMcInstantPayoutsEnabled2)[keyof typeof ParametersMcInstantPayoutsEnabled2]
  | (number & {});

export const parametersMcInstantPayoutsEnabled2Schema: EnumSchema<ParametersMcInstantPayoutsEnabled2> =
  s.enumOf<ParametersMcInstantPayoutsEnabled2>(ParametersMcInstantPayoutsEnabled2);
