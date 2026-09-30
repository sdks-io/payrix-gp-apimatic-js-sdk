import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the Merchant.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not ready**. Occurs when a new Merchant is created. Unable to process payments.
 * - `1` - **Ready**. New Merchant submitted for underwriting approval after submitting a signup
 *   form.
 * - `2` - **Boarded**. Merchant has been approved and boarded to the platform. Payment processing
 *   now available.
 * - `3` - **Manual**. Set internally by platform underwriting. New Merchant is pending manual
 *   verification.
 * - `4` - **Closed**. Set internally by platform underwriting. New Merchant was declined and cannot
 *   access the platform.
 * - `5` - **Incomplete**. Set by user boarding the merchant. Can be manually set to "save" an
 *   incomplete Merchant boarding request for a later time.
 * - `6` - **Pending**. New Merchant was submitted for boarding, platform access pending review.
 *
 * </details>
 */
export const MerchantStatus1 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
} as const;
export type MerchantStatus1 = (typeof MerchantStatus1)[keyof typeof MerchantStatus1] | (number & {});

export const merchantStatus1Schema: EnumSchema<MerchantStatus1> = s.enumOf<MerchantStatus1>(MerchantStatus1);
