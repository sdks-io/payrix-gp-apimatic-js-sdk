import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReservesRelease = {
  Never: "never",
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
} as const;
export type ReservesRelease = (typeof ReservesRelease)[keyof typeof ReservesRelease] | (string & {});

export const reservesReleaseSchema: EnumSchema<ReservesRelease> = s.enumOf<ReservesRelease>(ReservesRelease);
