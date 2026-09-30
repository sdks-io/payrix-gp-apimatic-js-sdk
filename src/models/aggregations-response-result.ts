import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aggregationsResponseItemSchema,
  type AggregationsResponseItem,
} from "./aggregations-response-item.js";

export type AggregationsResponseResult = {
  response?: AggregationsResponseItem;
};

export const aggregationsResponseResultSchema: Schema<AggregationsResponseResult> =
  s.object<AggregationsResponseResult>({
    response: s.optional(s.lazy(() => aggregationsResponseItemSchema)),
  });
