import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The time interval set for when the token will expire.
 *   * `WEEK`
 *   * `DAY`
 *   * `12_HOURS`
 *   * `6_HOURS`
 *   * `3_HOURS`
 *   * `1_HOUR`
 *   * `30_MINUTES`
 *   * `10_MINUTES`
 *   * `5_MINUTES`
 */
export const IntervalToExpire = {
  Week: "WEEK",
  Day: "DAY",
  _12Hours: "12_HOURS",
  _6Hours: "6_HOURS",
  _3Hours: "3_HOURS",
  _1Hour: "1_HOUR",
  _30Minutes: "30_MINUTES",
  _10Minutes: "10_MINUTES",
  _5Minutes: "5_MINUTES",
} as const;
export type IntervalToExpire = (typeof IntervalToExpire)[keyof typeof IntervalToExpire] | (string & {});

export const intervalToExpireSchema: EnumSchema<IntervalToExpire> =
  s.enumOf<IntervalToExpire>(IntervalToExpire);
