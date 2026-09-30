import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether eCheck processing should be enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersECheckEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersECheckEnabled2 =
  | (typeof ParametersECheckEnabled2)[keyof typeof ParametersECheckEnabled2]
  | (number & {});

export const parametersECheckEnabled2Schema: EnumSchema<ParametersECheckEnabled2> =
  s.enumOf<ParametersECheckEnabled2>(ParametersECheckEnabled2);
