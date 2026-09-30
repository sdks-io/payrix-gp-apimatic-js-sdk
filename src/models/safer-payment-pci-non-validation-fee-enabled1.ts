import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates if the entity should be charged penalty fees for non-compliance.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Penalty Disabled.**
 * - `1` - **Penalty Enabled.**
 *
 * </details>
 */
export const SaferPaymentPciNonValidationFeeEnabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type SaferPaymentPciNonValidationFeeEnabled1 =
  | (typeof SaferPaymentPciNonValidationFeeEnabled1)[keyof typeof SaferPaymentPciNonValidationFeeEnabled1]
  | (number & {});

export const saferPaymentPciNonValidationFeeEnabled1Schema: EnumSchema<SaferPaymentPciNonValidationFeeEnabled1> =
  s.enumOf<SaferPaymentPciNonValidationFeeEnabled1>(SaferPaymentPciNonValidationFeeEnabled1);
