import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modeTransactionsRiskAssessmentRulesModeSchema,
  type ModeTransactionsRiskAssessmentRulesMode,
} from "./mode-transactions-risk-assessment-rules-mode.js";
import {
  resultTransactionsRiskAssessmentRulesResultSchema,
  type ResultTransactionsRiskAssessmentRulesResult,
} from "./result-transactions-risk-assessment-rules-result.js";

export type Rule1 = {
  /** This is a system generated fraud rule reference (GUID) that is unique for the fraud rule. */
  reference?: string;
  /**
   * This describes the fraud rule and indicates what rule was specifically executed so it is
   * understandable,
   */
  description?: string;
  /**
   * The individual fraud rule mode, indicating whether the impact of running a fraud rule.
   * * `ACTIVE` - The fraud rule was executed and the result can HOLD or BLOCK a transaction
   * * `PASSIVE` - The fraud rules was executed but the result cannot affect the status of the
   *   transaction.
   * * `OFF` - The fraud rule was not executed.
   */
  mode?: ModeTransactionsRiskAssessmentRulesMode;
  /** The result of the individual fraud rule. */
  result?: ResultTransactionsRiskAssessmentRulesResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rule1Properties: s.Shape<Rule1> = {
  reference: s.optional(s.string()),
  description: s.optional(s.string()),
  mode: s.optional(s.lazy(() => modeTransactionsRiskAssessmentRulesModeSchema)),
  result: s.optional(s.lazy(() => resultTransactionsRiskAssessmentRulesResultSchema)),
};

export const rule1InternalSchema: Schema<Rule1> = s.object<Rule1>(rule1Properties, {
  additionalProperties: s.json(),
});

export const rule1Schema: Schema<Rule1> = s.lazySchema(() =>
  s.object<Rule1>(
    {
      ...rule1Properties,
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
