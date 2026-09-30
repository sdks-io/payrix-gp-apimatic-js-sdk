import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { feesResponseSchema, type FeesResponse } from "../fees-response.js";

/** The identifier of the Fee that this assessment resource refers to. */
export type AssessmentsModelFee = string | FeesResponse;

export const assessmentsModelFeeSchema: Schema<AssessmentsModelFee> = s.of<AssessmentsModelFee>(
  s.union([s.string(), s.lazy(() => feesResponseSchema)]),
);
