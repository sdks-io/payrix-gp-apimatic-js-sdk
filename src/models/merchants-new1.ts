import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An indicator that specifies whether the Merchant is new to credit card processing, where
 * merchants are considered to be new by default and can have a valid value of either '0' (Not new)
 * or '1' (New).
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not new**
 * - `1` - **New**
 *
 * </details>
 */
export const MerchantsNew1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsNew1 = (typeof MerchantsNew1)[keyof typeof MerchantsNew1] | (number & {});

export const merchantsNew1Schema: EnumSchema<MerchantsNew1> = s.enumOf<MerchantsNew1>(MerchantsNew1);
