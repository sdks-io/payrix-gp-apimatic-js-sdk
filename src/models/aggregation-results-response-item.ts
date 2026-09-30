import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aggregationResultsResponseSchema,
  type AggregationResultsResponse,
} from "./aggregation-results-response.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type AggregationResultsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: AggregationResultsResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const aggregationResultsResponseItemSchema: Schema<AggregationResultsResponseItem> =
  s.object<AggregationResultsResponseItem>({
    data: s.optional(s.array(s.lazy(() => aggregationResultsResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });
