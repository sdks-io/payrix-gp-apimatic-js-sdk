import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls whether an email is sent when an entity reaches a negative balance. The default setting
 * is 0. <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled.**
 * - `1` - **Enabled.**
 *
 * </details>
 */
export const ParametersNegativeBalanceEmail2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersNegativeBalanceEmail2 =
  | (typeof ParametersNegativeBalanceEmail2)[keyof typeof ParametersNegativeBalanceEmail2]
  | (number & {});

export const parametersNegativeBalanceEmail2Schema: EnumSchema<ParametersNegativeBalanceEmail2> =
  s.enumOf<ParametersNegativeBalanceEmail2>(ParametersNegativeBalanceEmail2);
