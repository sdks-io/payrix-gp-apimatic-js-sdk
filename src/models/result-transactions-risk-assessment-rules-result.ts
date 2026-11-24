import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the individual fraud rule. */
export const ResultTransactionsRiskAssessmentRulesResult = {
  Accepted: "ACCEPTED",
  Rejected: "REJECTED",
  NotExecuted: "NOT_EXECUTED",
  PendingReview: "PENDING_REVIEW",
} as const;
export type ResultTransactionsRiskAssessmentRulesResult =
  | (typeof ResultTransactionsRiskAssessmentRulesResult)[keyof typeof ResultTransactionsRiskAssessmentRulesResult]
  | (string & {});

export const resultTransactionsRiskAssessmentRulesResultSchema: EnumSchema<ResultTransactionsRiskAssessmentRulesResult> =
  s.enumOf<ResultTransactionsRiskAssessmentRulesResult>(ResultTransactionsRiskAssessmentRulesResult);
