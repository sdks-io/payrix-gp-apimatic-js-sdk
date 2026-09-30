import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to include the current period in the collection calculation.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Exclude Current Period.** Do not include the current period in the calculation.
 * - `1` - **Include Current Period.** Include the current period in the calculation.
 *
 * </details>
 */
export const BillingsCollectionIncludeCurrent1 = {
  _0: 0,
  _1: 1,
} as const;
export type BillingsCollectionIncludeCurrent1 =
  | (typeof BillingsCollectionIncludeCurrent1)[keyof typeof BillingsCollectionIncludeCurrent1]
  | (number & {});

export const billingsCollectionIncludeCurrent1Schema: EnumSchema<BillingsCollectionIncludeCurrent1> =
  s.enumOf<BillingsCollectionIncludeCurrent1>(BillingsCollectionIncludeCurrent1);
