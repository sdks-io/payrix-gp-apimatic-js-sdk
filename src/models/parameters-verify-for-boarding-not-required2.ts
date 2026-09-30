import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the requirement to verify a Merchant's bank account before boarding should be disabled.
 * The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersVerifyForBoardingNotRequired2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersVerifyForBoardingNotRequired2 =
  | (typeof ParametersVerifyForBoardingNotRequired2)[keyof typeof ParametersVerifyForBoardingNotRequired2]
  | (number & {});

export const parametersVerifyForBoardingNotRequired2Schema: EnumSchema<ParametersVerifyForBoardingNotRequired2> =
  s.enumOf<ParametersVerifyForBoardingNotRequired2>(ParametersVerifyForBoardingNotRequired2);
