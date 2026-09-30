import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  fraudSightResultsResponseItemSchema,
  type FraudSightResultsResponseItem,
} from "./fraud-sight-results-response-item.js";

export type FraudSightResultsResponseResult = {
  response?: FraudSightResultsResponseItem;
};

export const fraudSightResultsResponseResultSchema: Schema<FraudSightResultsResponseResult> =
  s.object<FraudSightResultsResponseResult>({
    response: s.optional(s.lazy(() => fraudSightResultsResponseItemSchema)),
  });
