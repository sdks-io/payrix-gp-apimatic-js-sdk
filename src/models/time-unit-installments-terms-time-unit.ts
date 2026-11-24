import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is the frequency of the payments in the installment plan */
export const TimeUnitInstallmentsTermsTimeUnit = {
  Day: "DAY",
  Month: "MONTH",
  Year: "YEAR",
} as const;
export type TimeUnitInstallmentsTermsTimeUnit =
  | (typeof TimeUnitInstallmentsTermsTimeUnit)[keyof typeof TimeUnitInstallmentsTermsTimeUnit]
  | (string & {});

export const timeUnitInstallmentsTermsTimeUnitSchema: EnumSchema<TimeUnitInstallmentsTermsTimeUnit> =
  s.enumOf<TimeUnitInstallmentsTermsTimeUnit>(TimeUnitInstallmentsTermsTimeUnit);
