import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlanSchedule = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type PlanSchedule = (typeof PlanSchedule)[keyof typeof PlanSchedule] | (number & {});

export const planScheduleSchema: EnumSchema<PlanSchedule> = s.enumOf<PlanSchedule>(PlanSchedule);
