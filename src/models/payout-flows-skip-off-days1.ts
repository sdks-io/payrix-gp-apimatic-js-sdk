import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the Payout resource will be marked to skip the creation of disbursements on holidays and
 * weekends.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Do not skip Holidays and Weekends.** Disbursement will be generated in a Requested
 *   status and process the next business day.
 * - `1` - **Skip Holidays and Weekends.** IMPORTANT: We do not advise setting this for weekly,
 *   monthly, or yearly Payout schedules as the disbursement will skip and not be generated until
 *   the next scheduled date.
 *
 * </details>
 */
export const PayoutFlowsSkipOffDays1 = {
  _0: 0,
  _1: 1,
} as const;
export type PayoutFlowsSkipOffDays1 =
  | (typeof PayoutFlowsSkipOffDays1)[keyof typeof PayoutFlowsSkipOffDays1]
  | (number & {});

export const payoutFlowsSkipOffDays1Schema: EnumSchema<PayoutFlowsSkipOffDays1> =
  s.enumOf<PayoutFlowsSkipOffDays1>(PayoutFlowsSkipOffDays1);
