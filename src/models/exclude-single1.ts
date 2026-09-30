import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines whether one-off Payouts are considered when the next Payout is selected. Set this
 * field to '1' to exclude Payouts with a 'schedule' of '5' (Single). Set this field to '0', or omit
 * it, to include them.
 */
export const ExcludeSingle1 = {
  _0: 0,
  _1: 1,
} as const;
export type ExcludeSingle1 = (typeof ExcludeSingle1)[keyof typeof ExcludeSingle1] | (number & {});

export const excludeSingle1Schema: EnumSchema<ExcludeSingle1> = s.enumOf<ExcludeSingle1>(ExcludeSingle1);
