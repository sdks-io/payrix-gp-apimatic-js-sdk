import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether Apple Pay is enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersApplePayEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersApplePayEnabled2 =
  | (typeof ParametersApplePayEnabled2)[keyof typeof ParametersApplePayEnabled2]
  | (number & {});

export const parametersApplePayEnabled2Schema: EnumSchema<ParametersApplePayEnabled2> =
  s.enumOf<ParametersApplePayEnabled2>(ParametersApplePayEnabled2);
