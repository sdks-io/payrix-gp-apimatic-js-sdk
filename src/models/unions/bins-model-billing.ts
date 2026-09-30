import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingsResponseSchema, type BillingsResponse } from "../billings-response.js";

/** The identifier of the Billing that this Bin is associated with. */
export type BinsModelBilling = string | BillingsResponse;

export const binsModelBillingSchema: Schema<BinsModelBilling> = s.of<BinsModelBilling>(
  s.union([s.string(), s.lazy(() => billingsResponseSchema)]),
);
