import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether it is allowed to use a surcharge on transactions. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersSurchargeEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersSurchargeEnabled2 =
  | (typeof ParametersSurchargeEnabled2)[keyof typeof ParametersSurchargeEnabled2]
  | (number & {});

export const parametersSurchargeEnabled2Schema: EnumSchema<ParametersSurchargeEnabled2> =
  s.enumOf<ParametersSurchargeEnabled2>(ParametersSurchargeEnabled2);
