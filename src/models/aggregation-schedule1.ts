import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The schedule that determines when the aggregation function will be processed.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `hours` - **Hourly schedule.**
 * - `days` - **Daily schedule.**
 * - `weeks` - **Weekly schedule.**
 * - `months` - **Monthly schedule.**
 * - `years` - **Annual schedule.**
 *
 * </details>
 */
export const AggregationSchedule1 = {
  Hours: "hours",
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
} as const;
export type AggregationSchedule1 =
  | (typeof AggregationSchedule1)[keyof typeof AggregationSchedule1]
  | (string & {});

export const aggregationSchedule1Schema: EnumSchema<AggregationSchedule1> =
  s.enumOf<AggregationSchedule1>(AggregationSchedule1);
