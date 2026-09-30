import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether it is allowed to use Omni Token. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersOmniTokenEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersOmniTokenEnabled2 =
  | (typeof ParametersOmniTokenEnabled2)[keyof typeof ParametersOmniTokenEnabled2]
  | (number & {});

export const parametersOmniTokenEnabled2Schema: EnumSchema<ParametersOmniTokenEnabled2> =
  s.enumOf<ParametersOmniTokenEnabled2>(ParametersOmniTokenEnabled2);
