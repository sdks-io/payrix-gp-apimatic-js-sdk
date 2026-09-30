import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutFlowUm = {
  Percent: "percent",
  Actual: "actual",
  Percentneg: "percentneg",
} as const;
export type PayoutFlowUm = (typeof PayoutFlowUm)[keyof typeof PayoutFlowUm] | (string & {});

export const payoutFlowUmSchema: EnumSchema<PayoutFlowUm> = s.enumOf<PayoutFlowUm>(PayoutFlowUm);
