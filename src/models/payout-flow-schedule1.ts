import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The schedule that determines when the Payout resource that is created should be triggered to be
 * paid.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `days` - **Daily.** The Payout is paid every day.
 * - `weeks` - **Weekly.** The Payout is paid every week.
 * - `months` - **Monthly.** The Payout is paid every month.
 * - `years` - **Annually.** The Payout is paid every year.
 * - `single` - **Single.** The Payout is a one-off payment.
 *
 * </details>
 */
export const PayoutFlowSchedule1 = {
  Days: "days",
  Weeks: "weeks",
  Months: "months",
  Years: "years",
  Single: "single",
} as const;
export type PayoutFlowSchedule1 =
  | (typeof PayoutFlowSchedule1)[keyof typeof PayoutFlowSchedule1]
  | (string & {});

export const payoutFlowSchedule1Schema: EnumSchema<PayoutFlowSchedule1> =
  s.enumOf<PayoutFlowSchedule1>(PayoutFlowSchedule1);
