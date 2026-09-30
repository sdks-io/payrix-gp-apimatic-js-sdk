import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingsResponseSchema, type BillingsResponse } from "../billings-response.js";

/**
 * The identifier of a Billing that this Payout is associated with. Payout associated with a Billing
 * record will be used to pay for Statements.
 */
export type PayoutsModelBilling = string | BillingsResponse;

export const payoutsModelBillingSchema: Schema<PayoutsModelBilling> = s.of<PayoutsModelBilling>(
  s.union([s.string(), s.lazy(() => billingsResponseSchema)]),
);
