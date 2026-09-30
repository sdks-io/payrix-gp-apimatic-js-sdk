import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { assessmentsResponseSchema, type AssessmentsResponse } from "../assessments-response.js";

/** The identifier of the Assessment of the `forentity` assessment. */
export type AssessmentsModelOpposingAssessment = string | AssessmentsResponse;

export const assessmentsModelOpposingAssessmentSchema: Schema<AssessmentsModelOpposingAssessment> =
  s.of<AssessmentsModelOpposingAssessment>(s.union([s.string(), s.lazy(() => assessmentsResponseSchema)]));
