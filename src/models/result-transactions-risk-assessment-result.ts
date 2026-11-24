import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The overall result of the fraud rules executed for this transaction. */
export const ResultTransactionsRiskAssessmentResult = {
  Accepted: "ACCEPTED",
  Rejected: "REJECTED",
  NotExecuted: "NOT_EXECUTED",
  PendingReview: "PENDING_REVIEW",
  HoldSuccessful: "HOLD_SUCCESSFUL",
  ReleaseSuccessful: "RELEASE_SUCCESSFUL",
} as const;
export type ResultTransactionsRiskAssessmentResult =
  | (typeof ResultTransactionsRiskAssessmentResult)[keyof typeof ResultTransactionsRiskAssessmentResult]
  | (string & {});

export const resultTransactionsRiskAssessmentResultSchema: EnumSchema<ResultTransactionsRiskAssessmentResult> =
  s.enumOf<ResultTransactionsRiskAssessmentResult>(ResultTransactionsRiskAssessmentResult);
