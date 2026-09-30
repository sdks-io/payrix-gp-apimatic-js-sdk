import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates if Google Pay is active for this merchant.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Inactive**
 * - `1` - **Active**
 *
 * </details>
 */
export const MerchantsGooglePayActive1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsGooglePayActive1 =
  | (typeof MerchantsGooglePayActive1)[keyof typeof MerchantsGooglePayActive1]
  | (number & {});

export const merchantsGooglePayActive1Schema: EnumSchema<MerchantsGooglePayActive1> =
  s.enumOf<MerchantsGooglePayActive1>(MerchantsGooglePayActive1);
