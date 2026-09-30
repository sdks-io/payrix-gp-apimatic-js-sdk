import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether Amex 3DSecure processing should be enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersAmex3DsEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersAmex3DsEnabled2 =
  | (typeof ParametersAmex3DsEnabled2)[keyof typeof ParametersAmex3DsEnabled2]
  | (number & {});

export const parametersAmex3DsEnabled2Schema: EnumSchema<ParametersAmex3DsEnabled2> =
  s.enumOf<ParametersAmex3DsEnabled2>(ParametersAmex3DsEnabled2);
