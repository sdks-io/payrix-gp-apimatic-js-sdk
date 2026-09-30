import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether MasterCard 3DSecure processing should be enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersMc3DsEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersMc3DsEnabled2 =
  | (typeof ParametersMc3DsEnabled2)[keyof typeof ParametersMc3DsEnabled2]
  | (number & {});

export const parametersMc3DsEnabled2Schema: EnumSchema<ParametersMc3DsEnabled2> =
  s.enumOf<ParametersMc3DsEnabled2>(ParametersMc3DsEnabled2);
