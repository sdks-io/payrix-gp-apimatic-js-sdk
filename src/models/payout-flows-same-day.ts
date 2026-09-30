import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutFlowsSameDay = {
  _0: 0,
  _1: 1,
} as const;
export type PayoutFlowsSameDay = (typeof PayoutFlowsSameDay)[keyof typeof PayoutFlowsSameDay] | (number & {});

export const payoutFlowsSameDaySchema: EnumSchema<PayoutFlowsSameDay> =
  s.enumOf<PayoutFlowsSameDay>(PayoutFlowsSameDay);
