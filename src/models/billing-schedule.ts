import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingSchedule = {
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
} as const;
export type BillingSchedule = (typeof BillingSchedule)[keyof typeof BillingSchedule] | (string & {});

export const billingScheduleSchema: EnumSchema<BillingSchedule> = s.enumOf<BillingSchedule>(BillingSchedule);
