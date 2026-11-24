import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resultTransactionsRiskAssessmentResultSchema,
  type ResultTransactionsRiskAssessmentResult,
} from "./result-transactions-risk-assessment-result.js";

export type RiskAssessment5 = {
  /** The overall result of the fraud rules executed for this transaction. */
  result?: ResultTransactionsRiskAssessmentResult;
  /** This is a descriptiion of the action that has been executed. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const riskAssessment5Properties: s.Shape<RiskAssessment5> = {
  result: s.optional(s.lazy(() => resultTransactionsRiskAssessmentResultSchema)),
  message: s.optional(s.string()),
};

export const riskAssessment5InternalSchema: Schema<RiskAssessment5> = s.object<RiskAssessment5>(
  riskAssessment5Properties,
  { additionalProperties: s.json() },
);

export const riskAssessment5Schema: Schema<RiskAssessment5> = s.lazySchema(() =>
  s.object<RiskAssessment5>(
    {
      ...riskAssessment5Properties,
      message: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
