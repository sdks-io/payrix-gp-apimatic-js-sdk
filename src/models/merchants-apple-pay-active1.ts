import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates if Apple Pay is active for this merchant.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Inactive**
 * - `1` - **Active**
 *
 * </details>
 */
export const MerchantsApplePayActive1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsApplePayActive1 =
  | (typeof MerchantsApplePayActive1)[keyof typeof MerchantsApplePayActive1]
  | (number & {});

export const merchantsApplePayActive1Schema: EnumSchema<MerchantsApplePayActive1> =
  s.enumOf<MerchantsApplePayActive1>(MerchantsApplePayActive1);
