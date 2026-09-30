import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingsResponseSchema, type BillingsResponse } from "../billings-response.js";

/** The identifier of the Billing of this statement resource. */
export type StatementsModelBilling = string | BillingsResponse;

export const statementsModelBillingSchema: Schema<StatementsModelBilling> = s.of<StatementsModelBilling>(
  s.union([s.string(), s.lazy(() => billingsResponseSchema)]),
);
