import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the merchant is a seasonal merchant or operates year-round.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Year-Round Merchant**
 * - `1` - **Seasonal Merchant**
 *
 * </details>
 */
export const MerchantsSeasonal1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsSeasonal1 = (typeof MerchantsSeasonal1)[keyof typeof MerchantsSeasonal1] | (number & {});

export const merchantsSeasonal1Schema: EnumSchema<MerchantsSeasonal1> =
  s.enumOf<MerchantsSeasonal1>(MerchantsSeasonal1);
