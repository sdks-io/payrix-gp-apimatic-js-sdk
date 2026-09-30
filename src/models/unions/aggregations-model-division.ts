import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division that this Aggregation applies to. */
export type AggregationsModelDivision = string | DivisionsResponse;

export const aggregationsModelDivisionSchema: Schema<AggregationsModelDivision> =
  s.of<AggregationsModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));
