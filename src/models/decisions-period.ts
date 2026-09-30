import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DecisionsPeriod = {
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
  Seconds: "seconds",
  Minutes: "minutes",
  Hours: "hours",
} as const;
export type DecisionsPeriod = (typeof DecisionsPeriod)[keyof typeof DecisionsPeriod] | (string & {});

export const decisionsPeriodSchema: EnumSchema<DecisionsPeriod> = s.enumOf<DecisionsPeriod>(DecisionsPeriod);
