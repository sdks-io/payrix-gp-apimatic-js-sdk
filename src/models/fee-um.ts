import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeeUm = {
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type FeeUm = (typeof FeeUm)[keyof typeof FeeUm] | (number & {});

export const feeUmSchema: EnumSchema<FeeUm> = s.enumOf<FeeUm>(FeeUm);
