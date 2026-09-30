import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division that networkPaymentManager is associated with. */
export type RevenueBoostsModelDivision = string | DivisionsResponse;

export const revenueBoostsModelDivisionSchema: Schema<RevenueBoostsModelDivision> =
  s.of<RevenueBoostsModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));
