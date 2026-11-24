import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modeTransactionsRiskAssessmentModeSchema,
  type ModeTransactionsRiskAssessmentMode,
} from "./mode-transactions-risk-assessment-mode.js";
import {
  resultTransactionsRiskAssessmentResultSchema,
  type ResultTransactionsRiskAssessmentResult,
} from "./result-transactions-risk-assessment-result.js";
import { rule1InternalSchema, rule1Schema, type Rule1 } from "./rule1.js";

export type RiskAssessment1 = {
  /**
   * The overall fraud mode, indicating whether the impact of running the fraud rules for this
   * transaction.
   * * `ACTIVE` - The fraud rules were executed and the result can HOLD or BLOCK a transaction
   * * `PASSIVE` - The fraud rules were executed but the result cannot affect the status of the
   *   transaction.
   * * `OFF` - The fraud rules were not executed.
   */
  mode?: ModeTransactionsRiskAssessmentMode;
  /** The overall result of the fraud rules executed for this transaction. */
  result?: ResultTransactionsRiskAssessmentResult;
  rules?: Rule1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const riskAssessment1Properties: s.Shape<RiskAssessment1> = {
  mode: s.optional(s.lazy(() => modeTransactionsRiskAssessmentModeSchema)),
  result: s.optional(s.lazy(() => resultTransactionsRiskAssessmentResultSchema)),
  rules: s.optional(s.array(s.lazy(() => rule1InternalSchema))),
};

export const riskAssessment1InternalSchema: Schema<RiskAssessment1> = s.object<RiskAssessment1>(
  riskAssessment1Properties,
  { additionalProperties: s.json() },
);

export const riskAssessment1Schema: Schema<RiskAssessment1> = s.lazySchema(() =>
  s.object<RiskAssessment1>(
    {
      ...riskAssessment1Properties,
      rules: s.optional(s.array(s.lazy(() => rule1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
