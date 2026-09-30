import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aggregationResultsResponseItemSchema,
  type AggregationResultsResponseItem,
} from "./aggregation-results-response-item.js";

export type AggregationResultsResponseResult = {
  response?: AggregationResultsResponseItem;
};

export const aggregationResultsResponseResultSchema: Schema<AggregationResultsResponseResult> =
  s.object<AggregationResultsResponseResult>({
    response: s.optional(s.lazy(() => aggregationResultsResponseItemSchema)),
  });
