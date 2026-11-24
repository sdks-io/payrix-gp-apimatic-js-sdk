import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Day of week that the RECURRING payment occurs on. Required if both frequency_type is WEEK
 * frequency_type is MONTH and day_of_month is not specified
 */
export const DayOfWeekConsentsOrderItemsRecurringDayOfWeek = {
  Sun: "SUN",
  Mon: "MON",
  Tue: "TUE",
  Wed: "WED",
  Thu: "THU",
  Fri: "FRI",
  Sat: "SAT",
} as const;
export type DayOfWeekConsentsOrderItemsRecurringDayOfWeek =
  | (typeof DayOfWeekConsentsOrderItemsRecurringDayOfWeek)[keyof typeof DayOfWeekConsentsOrderItemsRecurringDayOfWeek]
  | (string & {});

export const dayOfWeekConsentsOrderItemsRecurringDayOfWeekSchema: EnumSchema<DayOfWeekConsentsOrderItemsRecurringDayOfWeek> =
  s.enumOf<DayOfWeekConsentsOrderItemsRecurringDayOfWeek>(DayOfWeekConsentsOrderItemsRecurringDayOfWeek);
