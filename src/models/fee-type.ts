import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeeType = {
  _1: 1,
  _2: 2,
} as const;
export type FeeType = (typeof FeeType)[keyof typeof FeeType] | (number & {});

export const feeTypeSchema: EnumSchema<FeeType> = s.enumOf<FeeType>(FeeType);
