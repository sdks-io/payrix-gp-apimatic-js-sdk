import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "../disbursements-response.js";

/**
 * If the activity that this PendingEntry refers to is the charging of a Disbursement, then this
 * field stores the identifier of the corresponding Disbursement resource.
 */
export type PendingEntriesModelDisbursement = string | DisbursementsResponse;

export const pendingEntriesModelDisbursementSchema: Schema<PendingEntriesModelDisbursement> =
  s.of<PendingEntriesModelDisbursement>(s.union([s.string(), s.lazy(() => disbursementsResponseSchema)]));
