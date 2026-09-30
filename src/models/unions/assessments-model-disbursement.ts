import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "../disbursements-response.js";

/** The identifier of the Disbursement that this assessment resource refers to. */
export type AssessmentsModelDisbursement = string | DisbursementsResponse;

export const assessmentsModelDisbursementSchema: Schema<AssessmentsModelDisbursement> =
  s.of<AssessmentsModelDisbursement>(s.union([s.string(), s.lazy(() => disbursementsResponseSchema)]));
