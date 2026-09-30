import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutFlowsSkipOffDays = {
  _0: 0,
  _1: 1,
} as const;
export type PayoutFlowsSkipOffDays =
  | (typeof PayoutFlowsSkipOffDays)[keyof typeof PayoutFlowsSkipOffDays]
  | (number & {});

export const payoutFlowsSkipOffDaysSchema: EnumSchema<PayoutFlowsSkipOffDays> =
  s.enumOf<PayoutFlowsSkipOffDays>(PayoutFlowsSkipOffDays);
