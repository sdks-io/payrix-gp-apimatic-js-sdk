import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payoutsResponseSchema, type PayoutsResponse } from "../payouts-response.js";

/** The identifier of the Payout that represents the schedule for this Disbursement. */
export type DisbursementsModelPayout = string | PayoutsResponse;

export const disbursementsModelPayoutSchema: Schema<DisbursementsModelPayout> =
  s.of<DisbursementsModelPayout>(s.union([s.string(), s.lazy(() => payoutsResponseSchema)]));
