import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disbursementResultsResponseItemSchema,
  type DisbursementResultsResponseItem,
} from "./disbursement-results-response-item.js";

export type DisbursementResultsResponseResult = {
  response?: DisbursementResultsResponseItem;
};

export const disbursementResultsResponseResultSchema: Schema<DisbursementResultsResponseResult> =
  s.object<DisbursementResultsResponseResult>({
    response: s.optional(s.lazy(() => disbursementResultsResponseItemSchema)),
  });
