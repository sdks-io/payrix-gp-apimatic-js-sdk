import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether Payouts should be enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersFundingEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersFundingEnabled2 =
  | (typeof ParametersFundingEnabled2)[keyof typeof ParametersFundingEnabled2]
  | (number & {});

export const parametersFundingEnabled2Schema: EnumSchema<ParametersFundingEnabled2> =
  s.enumOf<ParametersFundingEnabled2>(ParametersFundingEnabled2);
