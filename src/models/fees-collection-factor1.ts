import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * "A multiplier that you can use to adjust the set of data to be used in the collection
 * calculation. This field is specified as an integer and its value determines the period of time to
 * be used." <details> <summary>Valid Values</summary>
 *
 * - `1` - **DAYS**
 * - `2` - **WEEKS**
 * - `3` - **MONTHS**
 * - `4` - **YEARS**
 *
 * </details>
 */
export const FeesCollectionFactor1 = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type FeesCollectionFactor1 =
  | (typeof FeesCollectionFactor1)[keyof typeof FeesCollectionFactor1]
  | (number & {});

export const feesCollectionFactor1Schema: EnumSchema<FeesCollectionFactor1> =
  s.enumOf<FeesCollectionFactor1>(FeesCollectionFactor1);
