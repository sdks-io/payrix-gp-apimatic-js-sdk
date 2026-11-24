import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modeTransactionsRiskAssessmentRulesModeSchema,
  type ModeTransactionsRiskAssessmentRulesMode,
} from "./mode-transactions-risk-assessment-rules-mode.js";
import { ruleInternalSchema, ruleSchema, type Rule } from "./rule.js";

export type RiskAssessment = {
  /**
   * The individual fraud rule mode, indicating whether the impact of running a fraud rule.
   * * `ACTIVE` - The fraud rule was executed and the result can HOLD or BLOCK a transaction
   * * `PASSIVE` - The fraud rules was executed but the result cannot affect the status of the
   *   transaction.
   * * `OFF` - The fraud rule was not executed.
   */
  mode?: ModeTransactionsRiskAssessmentRulesMode;
  rules?: Rule[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const riskAssessmentProperties: s.Shape<RiskAssessment> = {
  mode: s.optional(s.lazy(() => modeTransactionsRiskAssessmentRulesModeSchema)),
  rules: s.optional(s.array(s.lazy(() => ruleInternalSchema))),
};

export const riskAssessmentInternalSchema: Schema<RiskAssessment> = s.object<RiskAssessment>(
  riskAssessmentProperties,
  { additionalProperties: s.json() },
);

export const riskAssessmentSchema: Schema<RiskAssessment> = s.lazySchema(() =>
  s.object<RiskAssessment>(
    {
      ...riskAssessmentProperties,
      rules: s.optional(s.array(s.lazy(() => ruleSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
