import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether boarding for an entity is enabled or disabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersBoardingDisabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersBoardingDisabled2 =
  | (typeof ParametersBoardingDisabled2)[keyof typeof ParametersBoardingDisabled2]
  | (number & {});

export const parametersBoardingDisabled2Schema: EnumSchema<ParametersBoardingDisabled2> =
  s.enumOf<ParametersBoardingDisabled2>(ParametersBoardingDisabled2);
