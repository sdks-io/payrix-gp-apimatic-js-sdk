import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  merchantResultsResponseItemSchema,
  type MerchantResultsResponseItem,
} from "./merchant-results-response-item.js";

export type MerchantResultsResponseResult = {
  response?: MerchantResultsResponseItem;
};

export const merchantResultsResponseResultSchema: Schema<MerchantResultsResponseResult> =
  s.object<MerchantResultsResponseResult>({
    response: s.optional(s.lazy(() => merchantResultsResponseItemSchema)),
  });
