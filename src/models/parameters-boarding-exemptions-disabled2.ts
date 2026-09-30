import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether FinCen boarding exemptions should be disabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersBoardingExemptionsDisabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersBoardingExemptionsDisabled2 =
  | (typeof ParametersBoardingExemptionsDisabled2)[keyof typeof ParametersBoardingExemptionsDisabled2]
  | (number & {});

export const parametersBoardingExemptionsDisabled2Schema: EnumSchema<ParametersBoardingExemptionsDisabled2> =
  s.enumOf<ParametersBoardingExemptionsDisabled2>(ParametersBoardingExemptionsDisabled2);
