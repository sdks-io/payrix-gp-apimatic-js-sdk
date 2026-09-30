import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to assume a transaction is tax-exempt if no tax is set for Level II processing. The
 * default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersAutoTaxExemptEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersAutoTaxExemptEnabled2 =
  | (typeof ParametersAutoTaxExemptEnabled2)[keyof typeof ParametersAutoTaxExemptEnabled2]
  | (number & {});

export const parametersAutoTaxExemptEnabled2Schema: EnumSchema<ParametersAutoTaxExemptEnabled2> =
  s.enumOf<ParametersAutoTaxExemptEnabled2>(ParametersAutoTaxExemptEnabled2);
