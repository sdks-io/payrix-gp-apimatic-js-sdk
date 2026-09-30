import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingsResponseSchema, type BillingsResponse } from "../billings-response.js";

/**
 * The identifier of a Billing that this PayoutFlow is associated with. The Billing identifier will
 * be carried over to Payouts created based on this PayoutFlow.
 */
export type PayoutFlowsModelBilling = string | BillingsResponse;

export const payoutFlowsModelBillingSchema: Schema<PayoutFlowsModelBilling> = s.of<PayoutFlowsModelBilling>(
  s.union([s.string(), s.lazy(() => billingsResponseSchema)]),
);
