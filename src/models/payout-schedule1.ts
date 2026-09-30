import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The schedule that determines when the Payout resource that is created should be triggered to be
 * paid.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Daily.** The Payout is paid every day.
 * - `2` - **Weekly.** The Payout is paid every week.
 * - `3` - **Monthly.** The Payout is paid every month.
 * - `4` - **Annually.** The Payout is paid every year.
 * - `5` - **Single.** The Payout is a one-off payment.
 *
 * </details>
 */
export const PayoutSchedule1 = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type PayoutSchedule1 = (typeof PayoutSchedule1)[keyof typeof PayoutSchedule1] | (number & {});

export const payoutSchedule1Schema: EnumSchema<PayoutSchedule1> = s.enumOf<PayoutSchedule1>(PayoutSchedule1);
