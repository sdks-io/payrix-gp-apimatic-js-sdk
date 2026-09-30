import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether Visa Instant Payout should be enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersVisaInstantPayoutsEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersVisaInstantPayoutsEnabled2 =
  | (typeof ParametersVisaInstantPayoutsEnabled2)[keyof typeof ParametersVisaInstantPayoutsEnabled2]
  | (number & {});

export const parametersVisaInstantPayoutsEnabled2Schema: EnumSchema<ParametersVisaInstantPayoutsEnabled2> =
  s.enumOf<ParametersVisaInstantPayoutsEnabled2>(ParametersVisaInstantPayoutsEnabled2);
