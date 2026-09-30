import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "../disbursements-response.js";

/** The identifier of the Disbursement associated with this Adjustment. */
export type AdjustmentsModelDisbursement = string | DisbursementsResponse;

export const adjustmentsModelDisbursementSchema: Schema<AdjustmentsModelDisbursement> =
  s.of<AdjustmentsModelDisbursement>(s.union([s.string(), s.lazy(() => disbursementsResponseSchema)]));
