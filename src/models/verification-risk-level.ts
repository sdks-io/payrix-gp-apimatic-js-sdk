import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationRiskLevel = {
  Low: "Low",
  High: "High",
  Medium: "Medium",
} as const;
export type VerificationRiskLevel =
  | (typeof VerificationRiskLevel)[keyof typeof VerificationRiskLevel]
  | (string & {});

export const verificationRiskLevelSchema: EnumSchema<VerificationRiskLevel> =
  s.enumOf<VerificationRiskLevel>(VerificationRiskLevel);
