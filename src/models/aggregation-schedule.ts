import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AggregationSchedule = {
  Hours: "hours",
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
} as const;
export type AggregationSchedule =
  | (typeof AggregationSchedule)[keyof typeof AggregationSchedule]
  | (string & {});

export const aggregationScheduleSchema: EnumSchema<AggregationSchedule> =
  s.enumOf<AggregationSchedule>(AggregationSchedule);
