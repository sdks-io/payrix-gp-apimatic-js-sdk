import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the merchant is in its lifecycle.
 *   * ACTIVE - The entity is active on the Global Payments platform and can use the capabilities
 *     that are configured and active to payment process.
 *   * INACTIVE - The entity is disabled on the Global Payments platform and cannot use any payment
 *     processing capabilities.
 *   * UNDER_REVIEW - The entity is under review and can cannot used any of the payment processing
 *     capabilities until the review is complete and the merchant is switched to active.
 *   * DECLINED - The entity did not complete the risk review process and cannot use any payment
 *     processing capabilities.
 *   * WITH_MERCHANT - The entity must submit additional information or documentation before
 *     activation.
 */
export const DataDictionaryV1MerchantStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  UnderReview: "UNDER_REVIEW",
  Declined: "DECLINED",
  WithMerchant: "WITH_MERCHANT",
} as const;
export type DataDictionaryV1MerchantStatus =
  | (typeof DataDictionaryV1MerchantStatus)[keyof typeof DataDictionaryV1MerchantStatus]
  | (string & {});

export const dataDictionaryV1MerchantStatusSchema: EnumSchema<DataDictionaryV1MerchantStatus> =
  s.enumOf<DataDictionaryV1MerchantStatus>(DataDictionaryV1MerchantStatus);
