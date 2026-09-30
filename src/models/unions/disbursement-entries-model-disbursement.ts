import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "../disbursements-response.js";

/** The identifier of the Disbursement that this DisbursementEntry resource refers to. */
export type DisbursementEntriesModelDisbursement = string | DisbursementsResponse;

export const disbursementEntriesModelDisbursementSchema: Schema<DisbursementEntriesModelDisbursement> =
  s.of<DisbursementEntriesModelDisbursement>(
    s.union([s.string(), s.lazy(() => disbursementsResponseSchema)]),
  );
