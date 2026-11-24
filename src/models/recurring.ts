import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dayOfWeekConsentsOrderItemsRecurringDayOfWeekSchema,
  type DayOfWeekConsentsOrderItemsRecurringDayOfWeek,
} from "./day-of-week-consents-order-items-recurring-day-of-week.js";
import {
  intervalConsentsOrderItemsRecurringIntervalSchema,
  type IntervalConsentsOrderItemsRecurringInterval,
} from "./interval-consents-order-items-recurring-interval.js";
import {
  typeConsentsOrderItemsRecurringTypeSchema,
  type TypeConsentsOrderItemsRecurringType,
} from "./type-consents-order-items-recurring-type.js";
import {
  weekOfMonthConsentsOrderItemsRecurringWeekOfMonthSchema,
  type WeekOfMonthConsentsOrderItemsRecurringWeekOfMonth,
} from "./week-of-month-consents-order-items-recurring-week-of-month.js";

export type Recurring = {
  /** The nature of the recurring transaction that the customer is initiating. */
  type?: TypeConsentsOrderItemsRecurringType;
  /**
   * Specifies the max amount the customer can be charged per billing cycle for RECURRING. One of
   * amount_capped and amount_variance must be specified. If amount_capped is specified
   * - The value must be greater than amount value
   * - The value in amount_variance is ignored
   */
  amountCapped?: string;
  /**
   * Specifies in % that the accepted variance in the amount per billing cycle for RECURRING. One of
   * amount_capped and amount_variance must be specified. If amount_capped is specified this value
   * is ignored.
   */
  amountVariance?: string;
  /** Interval of the payments in the billing cycle for RECURRING. */
  interval?: IntervalConsentsOrderItemsRecurringInterval;
  /**
   * The waiting interval between payments for the RECURRING transactions.For example,
   * interval=MONTH and interval_count=3 bills every 3 months.
   */
  intervalCount?: number;
  /**
   * Day of month that the RECURRING payment occurs on. Required if bothfrequency_type is
   * MONTHday_of_week or week_of_month is not specified
   */
  dayOfMonth?: number;
  /**
   * Day of week that the RECURRING payment occurs on. Required if both frequency_type is WEEK
   * frequency_type is MONTH and day_of_month is not specified
   */
  dayOfWeek?: DayOfWeekConsentsOrderItemsRecurringDayOfWeek;
  /**
   * Week of month that the RECURRING payment occurs on.Required if both frequency_type is MONTH
   * day_of_week is specified and day_of_month is not specified
   */
  weekOfMonth?: WeekOfMonthConsentsOrderItemsRecurringWeekOfMonth;
  /** Start date of the RECURRING payment.Format ISO-8601 format. */
  startDate?: Date;
  /** End date of the RECURRING payment.Format ISO-8601 format. */
  endDate?: Date;
  /** Total number of payments in the RECURRING setup. */
  maxCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recurringProperties: s.Shape<Recurring> = {
  type: s.optional(s.lazy(() => typeConsentsOrderItemsRecurringTypeSchema)),
  amountCapped: s.optional(s.string()),
  amountVariance: s.optional(s.string()),
  interval: s.optional(s.lazy(() => intervalConsentsOrderItemsRecurringIntervalSchema)),
  intervalCount: s.optional(s.float64()),
  dayOfMonth: s.optional(s.float64()),
  dayOfWeek: s.optional(s.lazy(() => dayOfWeekConsentsOrderItemsRecurringDayOfWeekSchema)),
  weekOfMonth: s.optional(s.lazy(() => weekOfMonthConsentsOrderItemsRecurringWeekOfMonthSchema)),
  startDate: s.optional(s.dateTime()),
  endDate: s.optional(s.dateTime()),
  maxCount: s.optional(s.float64()),
  _keysMap: {
    amountCapped: "amount_capped",
    amountVariance: "amount_variance",
    intervalCount: "interval_count",
    dayOfMonth: "day_of_month",
    dayOfWeek: "day_of_week",
    weekOfMonth: "week_of_month",
    startDate: "start_date",
    endDate: "end_date",
    maxCount: "max_count",
  },
};

export const recurringInternalSchema: Schema<Recurring> = s.object<Recurring>(recurringProperties, {
  additionalProperties: s.json(),
});

export const recurringSchema: Schema<Recurring> = s.lazySchema(() =>
  s.object<Recurring>(
    {
      ...recurringProperties,
      amountCapped: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
