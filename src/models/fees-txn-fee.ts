import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeesTxnFee = {
  _0: 0,
  _1: 1,
} as const;
export type FeesTxnFee = (typeof FeesTxnFee)[keyof typeof FeesTxnFee] | (number & {});

export const feesTxnFeeSchema: EnumSchema<FeesTxnFee> = s.enumOf<FeesTxnFee>(FeesTxnFee);
