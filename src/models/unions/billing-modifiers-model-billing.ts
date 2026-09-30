import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingsResponseSchema, type BillingsResponse } from "../billings-response.js";

/** The identifier of the Billing that this Billing Modifier applies to. */
export type BillingModifiersModelBilling = string | BillingsResponse;

export const billingModifiersModelBillingSchema: Schema<BillingModifiersModelBilling> =
  s.of<BillingModifiersModelBilling>(s.union([s.string(), s.lazy(() => billingsResponseSchema)]));
