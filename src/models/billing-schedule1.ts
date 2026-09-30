import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The schedule that determines when this Billing is triggered to start collecting data.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `days` - **Daily schedule.**
 * - `weeks` - **Weekly schedule.**
 * - `months` - **Monthly schedule.**
 * - `years` - **Annual schedule.**
 *
 * </details>
 */
export const BillingSchedule1 = {
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
} as const;
export type BillingSchedule1 = (typeof BillingSchedule1)[keyof typeof BillingSchedule1] | (string & {});

export const billingSchedule1Schema: EnumSchema<BillingSchedule1> =
  s.enumOf<BillingSchedule1>(BillingSchedule1);
