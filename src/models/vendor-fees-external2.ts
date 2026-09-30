import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether any third-party fees that are incurred are settled from an external account. The default
 * setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **False**
 * - `1` - **True**
 *
 * </details>
 */
export const VendorFeesExternal2 = {
  _0: 0,
  _1: 1,
} as const;
export type VendorFeesExternal2 =
  | (typeof VendorFeesExternal2)[keyof typeof VendorFeesExternal2]
  | (number & {});

export const vendorFeesExternal2Schema: EnumSchema<VendorFeesExternal2> =
  s.enumOf<VendorFeesExternal2>(VendorFeesExternal2);
