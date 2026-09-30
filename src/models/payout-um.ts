import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutUm = {
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type PayoutUm = (typeof PayoutUm)[keyof typeof PayoutUm] | (number & {});

export const payoutUmSchema: EnumSchema<PayoutUm> = s.enumOf<PayoutUm>(PayoutUm);
