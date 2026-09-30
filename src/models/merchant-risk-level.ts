import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantRiskLevel = {
  Restricted: "restricted",
  Prohibited: "prohibited",
  High: "high",
  Medium: "medium",
  Low: "low",
} as const;
export type MerchantRiskLevel = (typeof MerchantRiskLevel)[keyof typeof MerchantRiskLevel] | (string & {});

export const merchantRiskLevelSchema: EnumSchema<MerchantRiskLevel> =
  s.enumOf<MerchantRiskLevel>(MerchantRiskLevel);
