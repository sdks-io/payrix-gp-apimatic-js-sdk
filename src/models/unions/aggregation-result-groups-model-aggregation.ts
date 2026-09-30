import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { aggregationsResponseSchema, type AggregationsResponse } from "../aggregations-response.js";

/** The identifier of the Aggregation that this AggregationResult refers to. */
export type AggregationResultGroupsModelAggregation = string | AggregationsResponse;

export const aggregationResultGroupsModelAggregationSchema: Schema<AggregationResultGroupsModelAggregation> =
  s.of<AggregationResultGroupsModelAggregation>(
    s.union([s.string(), s.lazy(() => aggregationsResponseSchema)]),
  );
