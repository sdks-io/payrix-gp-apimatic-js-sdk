import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit of measure for the amount on the plan.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `actual` - **An actual amount to charge, in cents.**
 * - `percent` - **A percentage of another amount, in basis points.**
 *
 * </details>
 */
export const PlanUm1 = {
  Actual: "actual",
  Percent: "percent",
} as const;
export type PlanUm1 = (typeof PlanUm1)[keyof typeof PlanUm1] | (string & {});

export const planUm1Schema: EnumSchema<PlanUm1> = s.enumOf<PlanUm1>(PlanUm1);
