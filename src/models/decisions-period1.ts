import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A date indicator that determines how far back in time time-based checks should be checked. This
 * field works in conjunction with the 'periodFactor' field, which multiplies this basic period.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `days` - **Days. The basic value for the date range is set in days.**
 * - `weeks` - **Weeks. The basic value for the date range is set in weeks.**
 * - `months` - **Months. The basic value for the date range is set in months.**
 * - `years` - **Years. The basic value for the date range is set in years.**
 * - `seconds` - **Seconds. The basic value for the date range is set in seconds.**
 * - `minutes` - **Minutes. The basic value for the date range is set in minutes.**
 * - `hours` - **Hours. The basic value for the date range is set in hours.**
 *
 * </details>
 */
export const DecisionsPeriod1 = {
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
  Seconds: "seconds",
  Minutes: "minutes",
  Hours: "hours",
} as const;
export type DecisionsPeriod1 = (typeof DecisionsPeriod1)[keyof typeof DecisionsPeriod1] | (string & {});

export const decisionsPeriod1Schema: EnumSchema<DecisionsPeriod1> =
  s.enumOf<DecisionsPeriod1>(DecisionsPeriod1);
