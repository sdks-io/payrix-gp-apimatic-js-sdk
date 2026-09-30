import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether Discover processing should be enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersDiscoverEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDiscoverEnabled2 =
  | (typeof ParametersDiscoverEnabled2)[keyof typeof ParametersDiscoverEnabled2]
  | (number & {});

export const parametersDiscoverEnabled2Schema: EnumSchema<ParametersDiscoverEnabled2> =
  s.enumOf<ParametersDiscoverEnabled2>(ParametersDiscoverEnabled2);
