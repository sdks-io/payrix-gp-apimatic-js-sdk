import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Description of the type of address that the business operates at.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `77` - **Retail Storefront**
 * - `78` - **Warehouse**
 * - `79` - **Private Residence**
 * - `80` - **Others**
 * - `81` - **P. RES-PROF/Construction**
 *
 * </details>
 */
export const MerchantLocationType1 = {
  _77: 77,
  _78: 78,
  _79: 79,
  _80: 80,
  _81: 81,
} as const;
export type MerchantLocationType1 =
  | (typeof MerchantLocationType1)[keyof typeof MerchantLocationType1]
  | (number & {});

export const merchantLocationType1Schema: EnumSchema<MerchantLocationType1> =
  s.enumOf<MerchantLocationType1>(MerchantLocationType1);
