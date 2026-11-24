import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where the merchant is in its lifecycle.
 * * `ACTIVE` - The entity is active on the Global Payments platform and can use the capabilities
 *   that are configured and active to payment process. *` INACTIVE` - The entity is disabled on the
 *   Global Payments platform and cannot use any payment processing capabilities. *`UNDER_REVIEW` -
 *   The entity is under review and cannot use any of the payment processing capabilities until the
 *   review is complete and the merchant is switched to active. *` DECLINED` - The entity did not
 *   complete the risk review process and cannot use any payment processing capabilities.
 *
 *  * `WITH_MERCHAN`T - The entity must submit additional information or documentation before
 *    activation.
 */
export const StatusMerchantsStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  UnderReview: "UNDER_REVIEW",
  Declined: "DECLINED",
  WithMerchant: "WITH_MERCHANT",
} as const;
export type StatusMerchantsStatus =
  | (typeof StatusMerchantsStatus)[keyof typeof StatusMerchantsStatus]
  | (string & {});

export const statusMerchantsStatusSchema: EnumSchema<StatusMerchantsStatus> =
  s.enumOf<StatusMerchantsStatus>(StatusMerchantsStatus);
