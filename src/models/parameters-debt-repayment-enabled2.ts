import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether debt repayment for transactions is enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersDebtRepaymentEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDebtRepaymentEnabled2 =
  | (typeof ParametersDebtRepaymentEnabled2)[keyof typeof ParametersDebtRepaymentEnabled2]
  | (number & {});

export const parametersDebtRepaymentEnabled2Schema: EnumSchema<ParametersDebtRepaymentEnabled2> =
  s.enumOf<ParametersDebtRepaymentEnabled2>(ParametersDebtRepaymentEnabled2);
