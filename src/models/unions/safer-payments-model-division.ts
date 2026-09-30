import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division that saferPayments is associated to. */
export type SaferPaymentsModelDivision = string | DivisionsResponse;

export const saferPaymentsModelDivisionSchema: Schema<SaferPaymentsModelDivision> =
  s.of<SaferPaymentsModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));
