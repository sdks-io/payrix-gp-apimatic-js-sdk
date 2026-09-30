import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingsResponseSchema, type BillingsResponse } from "../billings-response.js";

/** The attached billing for which recurring payments should be made to pay off statements. */
export type PlansModelBilling = string | BillingsResponse;

export const plansModelBillingSchema: Schema<PlansModelBilling> = s.of<PlansModelBilling>(
  s.union([s.string(), s.lazy(() => billingsResponseSchema)]),
);
