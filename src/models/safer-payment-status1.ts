import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates the entity's current PCI compliance status for the service.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `compliance` - **Compliance**
 * - `non-compliance` - **Non-Compliance**
 * - `pending` - **Pending**
 *
 * </details>
 */
export const SaferPaymentStatus1 = {
  Compliance: "compliance",
  NonCompliance: "non-compliance",
  Pending: "pending",
} as const;
export type SaferPaymentStatus1 =
  | (typeof SaferPaymentStatus1)[keyof typeof SaferPaymentStatus1]
  | (string & {});

export const saferPaymentStatus1Schema: EnumSchema<SaferPaymentStatus1> =
  s.enumOf<SaferPaymentStatus1>(SaferPaymentStatus1);
