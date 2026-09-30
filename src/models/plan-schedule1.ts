import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The schedule that determines when the subscription related to this Plan is triggered.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Daily**
 * - `2` - **Weekly**
 * - `3` - **Monthly**
 * - `4` - **Annually**
 *
 * </details>
 */
export const PlanSchedule1 = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type PlanSchedule1 = (typeof PlanSchedule1)[keyof typeof PlanSchedule1] | (number & {});

export const planSchedule1Schema: EnumSchema<PlanSchedule1> = s.enumOf<PlanSchedule1>(PlanSchedule1);
