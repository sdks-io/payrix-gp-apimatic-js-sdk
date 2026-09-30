import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingsResponseSchema, type BillingsResponse } from "../billings-response.js";

/** The identifier of the Billing that this billingEvent applies to. */
export type BillingEventsModelBilling = string | BillingsResponse;

export const billingEventsModelBillingSchema: Schema<BillingEventsModelBilling> =
  s.of<BillingEventsModelBilling>(s.union([s.string(), s.lazy(() => billingsResponseSchema)]));
