import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether Visa 3DSecure processing should be enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersVisa3DsEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersVisa3DsEnabled2 =
  | (typeof ParametersVisa3DsEnabled2)[keyof typeof ParametersVisa3DsEnabled2]
  | (number & {});

export const parametersVisa3DsEnabled2Schema: EnumSchema<ParametersVisa3DsEnabled2> =
  s.enumOf<ParametersVisa3DsEnabled2>(ParametersVisa3DsEnabled2);
