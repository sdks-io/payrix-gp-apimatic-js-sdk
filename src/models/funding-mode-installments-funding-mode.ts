import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicated the funding mode of the Installment plan. Availablity of each funding mode is based on
 * your live configuration
 *   * MERCHANT_FUNDED - This will return merchant funded plans only
 *   * CONSUMER_FUNDED - This will return consumer funded plans only
 *   * HYBRID_FUNDED - This will return both merchant and consumer funded plans
 *   * BILATERAL - This will return BILATERAL plans only
 *   * ANY - This will return all available plans
 */
export const FundingModeInstallmentsFundingMode = {
  MerchantFunded: "MERCHANT_FUNDED",
  ConsumerFunded: "CONSUMER_FUNDED",
  HybridFunded: "HYBRID_FUNDED",
  Bilateral: "BILATERAL",
  Any: "ANY",
} as const;
export type FundingModeInstallmentsFundingMode =
  | (typeof FundingModeInstallmentsFundingMode)[keyof typeof FundingModeInstallmentsFundingMode]
  | (string & {});

export const fundingModeInstallmentsFundingModeSchema: EnumSchema<FundingModeInstallmentsFundingMode> =
  s.enumOf<FundingModeInstallmentsFundingMode>(FundingModeInstallmentsFundingMode);
