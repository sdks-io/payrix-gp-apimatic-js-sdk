import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Week of month that the RECURRING payment occurs on.Required if both frequency_type is MONTH
 * day_of_week is specified and day_of_month is not specified
 */
export const WeekOfMonthConsentsOrderItemsRecurringWeekOfMonth = {
  First: "FIRST",
  Second: "SECOND",
  Third: "THIRD",
  Fourth: "FOURTH",
  Last: "LAST",
} as const;
export type WeekOfMonthConsentsOrderItemsRecurringWeekOfMonth =
  | (typeof WeekOfMonthConsentsOrderItemsRecurringWeekOfMonth)[keyof typeof WeekOfMonthConsentsOrderItemsRecurringWeekOfMonth]
  | (string & {});

export const weekOfMonthConsentsOrderItemsRecurringWeekOfMonthSchema: EnumSchema<WeekOfMonthConsentsOrderItemsRecurringWeekOfMonth> =
  s.enumOf<WeekOfMonthConsentsOrderItemsRecurringWeekOfMonth>(
    WeekOfMonthConsentsOrderItemsRecurringWeekOfMonth,
  );
