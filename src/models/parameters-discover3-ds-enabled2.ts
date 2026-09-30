import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether Discover 3DSecure processing should be enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersDiscover3DsEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDiscover3DsEnabled2 =
  | (typeof ParametersDiscover3DsEnabled2)[keyof typeof ParametersDiscover3DsEnabled2]
  | (number & {});

export const parametersDiscover3DsEnabled2Schema: EnumSchema<ParametersDiscover3DsEnabled2> =
  s.enumOf<ParametersDiscover3DsEnabled2>(ParametersDiscover3DsEnabled2);
