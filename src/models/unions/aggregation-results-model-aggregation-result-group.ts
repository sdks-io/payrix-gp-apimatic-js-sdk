import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  aggregationResultGroupsResponseSchema,
  type AggregationResultGroupsResponse,
} from "../aggregation-result-groups-response.js";

/** The identifier of the AggregationResultGroup that this AggregationResult refers to. */
export type AggregationResultsModelAggregationResultGroup = string | AggregationResultGroupsResponse;

export const aggregationResultsModelAggregationResultGroupSchema: Schema<AggregationResultsModelAggregationResultGroup> =
  s.of<AggregationResultsModelAggregationResultGroup>(
    s.union([s.string(), s.lazy(() => aggregationResultGroupsResponseSchema)]),
  );
