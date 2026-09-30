import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether American Express processing should be enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersAmexEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersAmexEnabled2 =
  | (typeof ParametersAmexEnabled2)[keyof typeof ParametersAmexEnabled2]
  | (number & {});

export const parametersAmexEnabled2Schema: EnumSchema<ParametersAmexEnabled2> =
  s.enumOf<ParametersAmexEnabled2>(ParametersAmexEnabled2);
