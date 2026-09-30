import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether all tokenized payments will be checked for updates. Tokenized payments will be checked
 * and updated if enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersUpdateAllTokensEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersUpdateAllTokensEnabled2 =
  | (typeof ParametersUpdateAllTokensEnabled2)[keyof typeof ParametersUpdateAllTokensEnabled2]
  | (number & {});

export const parametersUpdateAllTokensEnabled2Schema: EnumSchema<ParametersUpdateAllTokensEnabled2> =
  s.enumOf<ParametersUpdateAllTokensEnabled2>(ParametersUpdateAllTokensEnabled2);
