import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether it is allowed to return the parameters of this entity. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersGetParametersEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersGetParametersEnabled2 =
  | (typeof ParametersGetParametersEnabled2)[keyof typeof ParametersGetParametersEnabled2]
  | (number & {});

export const parametersGetParametersEnabled2Schema: EnumSchema<ParametersGetParametersEnabled2> =
  s.enumOf<ParametersGetParametersEnabled2>(ParametersGetParametersEnabled2);
