import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "../disbursements-response.js";

/** The identifier of the Disbursement that this entry origin relates to. */
export type EntryOriginsModelDisbursement = string | DisbursementsResponse;

export const entryOriginsModelDisbursementSchema: Schema<EntryOriginsModelDisbursement> =
  s.of<EntryOriginsModelDisbursement>(s.union([s.string(), s.lazy(() => disbursementsResponseSchema)]));
