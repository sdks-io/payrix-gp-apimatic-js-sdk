import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether Google Pay is enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersGooglePayEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersGooglePayEnabled2 =
  | (typeof ParametersGooglePayEnabled2)[keyof typeof ParametersGooglePayEnabled2]
  | (number & {});

export const parametersGooglePayEnabled2Schema: EnumSchema<ParametersGooglePayEnabled2> =
  s.enumOf<ParametersGooglePayEnabled2>(ParametersGooglePayEnabled2);
