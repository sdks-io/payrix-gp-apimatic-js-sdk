import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Interval of the payments in the billing cycle for RECURRING. */
export const IntervalConsentsOrderItemsRecurringInterval = {
  Day: "DAY",
  Week: "WEEK",
  Month: "MONTH",
} as const;
export type IntervalConsentsOrderItemsRecurringInterval =
  | (typeof IntervalConsentsOrderItemsRecurringInterval)[keyof typeof IntervalConsentsOrderItemsRecurringInterval]
  | (string & {});

export const intervalConsentsOrderItemsRecurringIntervalSchema: EnumSchema<IntervalConsentsOrderItemsRecurringInterval> =
  s.enumOf<IntervalConsentsOrderItemsRecurringInterval>(IntervalConsentsOrderItemsRecurringInterval);
