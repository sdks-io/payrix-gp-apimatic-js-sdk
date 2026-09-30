import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Will dictate whether a login will have login as access or not by default.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersLoginAsEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersLoginAsEnabled2 =
  | (typeof ParametersLoginAsEnabled2)[keyof typeof ParametersLoginAsEnabled2]
  | (number & {});

export const parametersLoginAsEnabled2Schema: EnumSchema<ParametersLoginAsEnabled2> =
  s.enumOf<ParametersLoginAsEnabled2>(ParametersLoginAsEnabled2);
