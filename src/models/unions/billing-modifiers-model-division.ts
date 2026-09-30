import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division that this Billing Modifier applies to. */
export type BillingModifiersModelDivision = string | DivisionsResponse;

export const billingModifiersModelDivisionSchema: Schema<BillingModifiersModelDivision> =
  s.of<BillingModifiersModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));
