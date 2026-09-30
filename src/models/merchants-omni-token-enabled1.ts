import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates if Omni Token is enabled for this merchant.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const MerchantsOmniTokenEnabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsOmniTokenEnabled1 =
  | (typeof MerchantsOmniTokenEnabled1)[keyof typeof MerchantsOmniTokenEnabled1]
  | (number & {});

export const merchantsOmniTokenEnabled1Schema: EnumSchema<MerchantsOmniTokenEnabled1> =
  s.enumOf<MerchantsOmniTokenEnabled1>(MerchantsOmniTokenEnabled1);
