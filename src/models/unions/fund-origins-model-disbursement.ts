import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "../disbursements-response.js";

/** ID of the disbursement related to this fund. */
export type FundOriginsModelDisbursement = string | DisbursementsResponse;

export const fundOriginsModelDisbursementSchema: Schema<FundOriginsModelDisbursement> =
  s.of<FundOriginsModelDisbursement>(s.union([s.string(), s.lazy(() => disbursementsResponseSchema)]));
