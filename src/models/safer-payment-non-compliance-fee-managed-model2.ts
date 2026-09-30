import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether SaferPayment Non-compliance fee management is enabled <details> <summary>Valid
 * Values</summary>
 *
 * - `0` - **Disabled.**
 * - `1` - **Enabled.**
 *
 * </details>
 */
export const SaferPaymentNonComplianceFeeManagedModel2 = {
  _0: 0,
  _1: 1,
} as const;
export type SaferPaymentNonComplianceFeeManagedModel2 =
  | (typeof SaferPaymentNonComplianceFeeManagedModel2)[keyof typeof SaferPaymentNonComplianceFeeManagedModel2]
  | (number & {});

export const saferPaymentNonComplianceFeeManagedModel2Schema: EnumSchema<SaferPaymentNonComplianceFeeManagedModel2> =
  s.enumOf<SaferPaymentNonComplianceFeeManagedModel2>(SaferPaymentNonComplianceFeeManagedModel2);
