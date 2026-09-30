import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "../disbursements-response.js";

/** The identifier of the Disbursement that this disbursementRef resource refers to. */
export type DisbursementRefsModelDisbursement = string | DisbursementsResponse;

export const disbursementRefsModelDisbursementSchema: Schema<DisbursementRefsModelDisbursement> =
  s.of<DisbursementRefsModelDisbursement>(s.union([s.string(), s.lazy(() => disbursementsResponseSchema)]));
