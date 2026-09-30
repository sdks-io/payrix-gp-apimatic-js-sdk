import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "../disbursements-response.js";

/** The identifier of the Disbursement that this disbursementResult resource refers to. */
export type DisbursementResultsModelDisbursement = string | DisbursementsResponse;

export const disbursementResultsModelDisbursementSchema: Schema<DisbursementResultsModelDisbursement> =
  s.of<DisbursementResultsModelDisbursement>(
    s.union([s.string(), s.lazy(() => disbursementsResponseSchema)]),
  );
