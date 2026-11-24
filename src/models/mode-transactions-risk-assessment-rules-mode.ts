import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The individual fraud rule mode, indicating whether the impact of running a fraud rule.
 * * `ACTIVE` - The fraud rule was executed and the result can HOLD or BLOCK a transaction
 * * `PASSIVE` - The fraud rules was executed but the result cannot affect the status of the
 *   transaction.
 * * `OFF` - The fraud rule was not executed.
 */
export const ModeTransactionsRiskAssessmentRulesMode = {
  Active: "ACTIVE",
  Passive: "PASSIVE",
  Off: "OFF",
} as const;
export type ModeTransactionsRiskAssessmentRulesMode =
  | (typeof ModeTransactionsRiskAssessmentRulesMode)[keyof typeof ModeTransactionsRiskAssessmentRulesMode]
  | (string & {});

export const modeTransactionsRiskAssessmentRulesModeSchema: EnumSchema<ModeTransactionsRiskAssessmentRulesMode> =
  s.enumOf<ModeTransactionsRiskAssessmentRulesMode>(ModeTransactionsRiskAssessmentRulesMode);
