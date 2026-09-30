import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutSchedule = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type PayoutSchedule = (typeof PayoutSchedule)[keyof typeof PayoutSchedule] | (number & {});

export const payoutScheduleSchema: EnumSchema<PayoutSchedule> = s.enumOf<PayoutSchedule>(PayoutSchedule);
