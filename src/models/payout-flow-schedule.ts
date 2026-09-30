import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutFlowSchedule = {
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
  Single: "single",
} as const;
export type PayoutFlowSchedule = (typeof PayoutFlowSchedule)[keyof typeof PayoutFlowSchedule] | (string & {});

export const payoutFlowScheduleSchema: EnumSchema<PayoutFlowSchedule> =
  s.enumOf<PayoutFlowSchedule>(PayoutFlowSchedule);
