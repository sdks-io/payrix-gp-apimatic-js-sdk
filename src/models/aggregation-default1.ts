import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether this aggregation was automatically created.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Manually created.**
 * - `1` - **Automatically created.**
 *
 * </details>
 */
export const AggregationDefault1 = {
  _0: 0,
  _1: 1,
} as const;
export type AggregationDefault1 =
  | (typeof AggregationDefault1)[keyof typeof AggregationDefault1]
  | (number & {});

export const aggregationDefault1Schema: EnumSchema<AggregationDefault1> =
  s.enumOf<AggregationDefault1>(AggregationDefault1);
