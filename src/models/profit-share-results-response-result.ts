import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  profitShareResultsResponseItemSchema,
  type ProfitShareResultsResponseItem,
} from "./profit-share-results-response-item.js";

export type ProfitShareResultsResponseResult = {
  response?: ProfitShareResultsResponseItem;
};

export const profitShareResultsResponseResultSchema: Schema<ProfitShareResultsResponseResult> =
  s.object<ProfitShareResultsResponseResult>({
    response: s.optional(s.lazy(() => profitShareResultsResponseItemSchema)),
  });
