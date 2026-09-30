import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether third parties can charge fees. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const VendorFeesEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type VendorFeesEnabled2 = (typeof VendorFeesEnabled2)[keyof typeof VendorFeesEnabled2] | (number & {});

export const vendorFeesEnabled2Schema: EnumSchema<VendorFeesEnabled2> =
  s.enumOf<VendorFeesEnabled2>(VendorFeesEnabled2);
