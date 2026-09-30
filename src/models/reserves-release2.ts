import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The schedule that determines when the funds in this Reserve should be released, which can have
 * valid values such as never, days, weeks, months, or years.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `never` - **Never.**
 * - `days` - **Daily. The funds are released every day.**
 * - `weeks` - **Weekly. The funds are released every week.**
 * - `months` - **Monthly. The funds are released every month.**
 * - `years` - **Annually. The funds are released every year.**
 *
 * </details>
 */
export const ReservesRelease2 = {
  Never: "never",
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
} as const;
export type ReservesRelease2 = (typeof ReservesRelease2)[keyof typeof ReservesRelease2] | (string & {});

export const reservesRelease2Schema: EnumSchema<ReservesRelease2> =
  s.enumOf<ReservesRelease2>(ReservesRelease2);
