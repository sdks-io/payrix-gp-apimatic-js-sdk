import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the requirement to verify a Merchant's bank account before making a Payout should be
 * disabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersVerifyForPayoutNotRequired2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersVerifyForPayoutNotRequired2 =
  | (typeof ParametersVerifyForPayoutNotRequired2)[keyof typeof ParametersVerifyForPayoutNotRequired2]
  | (number & {});

export const parametersVerifyForPayoutNotRequired2Schema: EnumSchema<ParametersVerifyForPayoutNotRequired2> =
  s.enumOf<ParametersVerifyForPayoutNotRequired2>(ParametersVerifyForPayoutNotRequired2);
