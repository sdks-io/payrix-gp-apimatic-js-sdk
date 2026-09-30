import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payoutFlowsResponseSchema, type PayoutFlowsResponse } from "../payout-flows-response.js";

/** The identifier of the PayoutFlow associated with this Payout. */
export type PayoutsModelPayoutFlow = string | PayoutFlowsResponse;

export const payoutsModelPayoutFlowSchema: Schema<PayoutsModelPayoutFlow> = s.of<PayoutsModelPayoutFlow>(
  s.union([s.string(), s.lazy(() => payoutFlowsResponseSchema)]),
);
