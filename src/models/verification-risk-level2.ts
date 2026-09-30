import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * <details> <summary>Valid Values</summary>
 *
 * - `Low` - **Risk level for Low.**
 * - `High` - **Risk level for High.**
 * - `Medium` - **Risk level for Medium.**
 *
 * </details>
 */
export const VerificationRiskLevel2 = {
  Low: "Low",
  High: "High",
  Medium: "Medium",
} as const;
export type VerificationRiskLevel2 =
  | (typeof VerificationRiskLevel2)[keyof typeof VerificationRiskLevel2]
  | (string & {});

export const verificationRiskLevel2Schema: EnumSchema<VerificationRiskLevel2> =
  s.enumOf<VerificationRiskLevel2>(VerificationRiskLevel2);
