import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeesCollectionFactor = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type FeesCollectionFactor =
  | (typeof FeesCollectionFactor)[keyof typeof FeesCollectionFactor]
  | (number & {});

export const feesCollectionFactorSchema: EnumSchema<FeesCollectionFactor> =
  s.enumOf<FeesCollectionFactor>(FeesCollectionFactor);
