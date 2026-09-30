import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The risk level which the Merchant is in, if applicable.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `restricted` - **Restricted from processing transactions.**
 * - `prohibited` - **Prohibited business use category.**
 * - `high` - **High merchant risk score.**
 * - `medium` - **Medium merchant risk score.**
 * - `low` - **Low merchant risk score.**
 *
 * </details>
 */
export const MerchantRiskLevel1 = {
  Restricted: "restricted",
  Prohibited: "prohibited",
  High: "high",
  Medium: "medium",
  Low: "low",
} as const;
export type MerchantRiskLevel1 = (typeof MerchantRiskLevel1)[keyof typeof MerchantRiskLevel1] | (string & {});

export const merchantRiskLevel1Schema: EnumSchema<MerchantRiskLevel1> =
  s.enumOf<MerchantRiskLevel1>(MerchantRiskLevel1);
