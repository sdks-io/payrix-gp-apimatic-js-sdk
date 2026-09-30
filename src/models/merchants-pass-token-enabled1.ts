import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates if Pass Token is enabled for this merchant.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const MerchantsPassTokenEnabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsPassTokenEnabled1 =
  | (typeof MerchantsPassTokenEnabled1)[keyof typeof MerchantsPassTokenEnabled1]
  | (number & {});

export const merchantsPassTokenEnabled1Schema: EnumSchema<MerchantsPassTokenEnabled1> =
  s.enumOf<MerchantsPassTokenEnabled1>(MerchantsPassTokenEnabled1);
