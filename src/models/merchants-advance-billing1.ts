import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the merchant accepts pre-purchase for products that are shipped at a later date
 * or not currently available, specifying advanced billing as either disabled (0) or enabled (1).
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **AdvancedBilling is disabled.**
 * - `1` - **AdvancedBilling is enabled.**
 *
 * </details>
 */
export const MerchantsAdvanceBilling1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsAdvanceBilling1 =
  | (typeof MerchantsAdvanceBilling1)[keyof typeof MerchantsAdvanceBilling1]
  | (number & {});

export const merchantsAdvanceBilling1Schema: EnumSchema<MerchantsAdvanceBilling1> =
  s.enumOf<MerchantsAdvanceBilling1>(MerchantsAdvanceBilling1);
