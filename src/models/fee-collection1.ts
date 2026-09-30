import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Applies the fee based on the volume of a resource.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Txn.** The total amount of all transactions.
 * - `2` - **Txn-TaxID.** The total amount of all transactions per entity EIN/tax ID.
 * - `3` - **Txn-Merchant.** The total amount of all transactions per entity.
 *
 * </details>
 */
export const FeeCollection1 = {
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type FeeCollection1 = (typeof FeeCollection1)[keyof typeof FeeCollection1] | (number & {});

export const feeCollection1Schema: EnumSchema<FeeCollection1> = s.enumOf<FeeCollection1>(FeeCollection1);
