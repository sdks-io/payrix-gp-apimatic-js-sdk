import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of plan.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `recurring` - **A recurring payment plan (subcription).**
 *
 * - `installment` - **A deferred payment installment plan.**
 *
 * </details>
 */
export const PlanType2 = {
  Recurring: "recurring",
  Installment: "installment",
} as const;
export type PlanType2 = (typeof PlanType2)[keyof typeof PlanType2] | (string & {});

export const planType2Schema: EnumSchema<PlanType2> = s.enumOf<PlanType2>(PlanType2);
