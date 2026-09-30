import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeeCollection = {
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type FeeCollection = (typeof FeeCollection)[keyof typeof FeeCollection] | (number & {});

export const feeCollectionSchema: EnumSchema<FeeCollection> = s.enumOf<FeeCollection>(FeeCollection);
