import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modeTransactionsRiskAssessmentRulesModeSchema,
  type ModeTransactionsRiskAssessmentRulesMode,
} from "./mode-transactions-risk-assessment-rules-mode.js";

export type Rule = {
  /** This is a system generated fraud rule reference (GUID) that is unique for the fraud rule. */
  reference?: string;
  /**
   * The individual fraud rule mode, indicating whether the impact of running a fraud rule.
   * * `ACTIVE` - The fraud rule was executed and the result can HOLD or BLOCK a transaction
   * * `PASSIVE` - The fraud rules was executed but the result cannot affect the status of the
   *   transaction.
   * * `OFF` - The fraud rule was not executed.
   */
  mode?: ModeTransactionsRiskAssessmentRulesMode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ruleProperties: s.Shape<Rule> = {
  reference: s.optional(s.string()),
  mode: s.optional(s.lazy(() => modeTransactionsRiskAssessmentRulesModeSchema)),
};

export const ruleInternalSchema: Schema<Rule> = s.object<Rule>(ruleProperties, {
  additionalProperties: s.json(),
});

export const ruleSchema: Schema<Rule> = s.lazySchema(() =>
  s.object<Rule>(
    {
      ...ruleProperties,
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
