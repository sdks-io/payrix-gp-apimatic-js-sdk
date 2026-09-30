import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aggregationResultsGroupsResponseItemSchema,
  type AggregationResultsGroupsResponseItem,
} from "./aggregation-results-groups-response-item.js";

export type AggregationResultsGroupsResponseResult = {
  response?: AggregationResultsGroupsResponseItem;
};

export const aggregationResultsGroupsResponseResultSchema: Schema<AggregationResultsGroupsResponseResult> =
  s.object<AggregationResultsGroupsResponseResult>({
    response: s.optional(s.lazy(() => aggregationResultsGroupsResponseItemSchema)),
  });
