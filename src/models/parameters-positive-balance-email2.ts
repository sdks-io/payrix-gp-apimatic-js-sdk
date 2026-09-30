import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Will dictate whether an email is sent when an entity recovers from a negative balance. The
 * default setting is 0.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersPositiveBalanceEmail2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPositiveBalanceEmail2 =
  | (typeof ParametersPositiveBalanceEmail2)[keyof typeof ParametersPositiveBalanceEmail2]
  | (number & {});

export const parametersPositiveBalanceEmail2Schema: EnumSchema<ParametersPositiveBalanceEmail2> =
  s.enumOf<ParametersPositiveBalanceEmail2>(ParametersPositiveBalanceEmail2);
