import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether bank account verification requirements should be disabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersVerifyDisabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersVerifyDisabled2 =
  | (typeof ParametersVerifyDisabled2)[keyof typeof ParametersVerifyDisabled2]
  | (number & {});

export const parametersVerifyDisabled2Schema: EnumSchema<ParametersVerifyDisabled2> =
  s.enumOf<ParametersVerifyDisabled2>(ParametersVerifyDisabled2);
