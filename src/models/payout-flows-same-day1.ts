import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the payout workflow allows for same day payouts.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const PayoutFlowsSameDay1 = {
  _0: 0,
  _1: 1,
} as const;
export type PayoutFlowsSameDay1 =
  | (typeof PayoutFlowsSameDay1)[keyof typeof PayoutFlowsSameDay1]
  | (number & {});

export const payoutFlowsSameDay1Schema: EnumSchema<PayoutFlowsSameDay1> =
  s.enumOf<PayoutFlowsSameDay1>(PayoutFlowsSameDay1);
