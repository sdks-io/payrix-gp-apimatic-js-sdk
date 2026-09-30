import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether it is allowed to use Pass Token. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersPassTokenEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPassTokenEnabled2 =
  | (typeof ParametersPassTokenEnabled2)[keyof typeof ParametersPassTokenEnabled2]
  | (number & {});

export const parametersPassTokenEnabled2Schema: EnumSchema<ParametersPassTokenEnabled2> =
  s.enumOf<ParametersPassTokenEnabled2>(ParametersPassTokenEnabled2);
