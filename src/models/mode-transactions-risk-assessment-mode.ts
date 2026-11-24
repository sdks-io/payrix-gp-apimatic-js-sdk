import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The overall fraud mode, indicating whether the impact of running the fraud rules for this
 * transaction.
 * * `ACTIVE` - The fraud rules were executed and the result can HOLD or BLOCK a transaction
 * * `PASSIVE` - The fraud rules were executed but the result cannot affect the status of the
 *   transaction.
 * * `OFF` - The fraud rules were not executed.
 */
export const ModeTransactionsRiskAssessmentMode = {
  Active: "ACTIVE",
  Passive: "PASSIVE",
  Off: "OFF",
} as const;
export type ModeTransactionsRiskAssessmentMode =
  | (typeof ModeTransactionsRiskAssessmentMode)[keyof typeof ModeTransactionsRiskAssessmentMode]
  | (string & {});

export const modeTransactionsRiskAssessmentModeSchema: EnumSchema<ModeTransactionsRiskAssessmentMode> =
  s.enumOf<ModeTransactionsRiskAssessmentMode>(ModeTransactionsRiskAssessmentMode);
