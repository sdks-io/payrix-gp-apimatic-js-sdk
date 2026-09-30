import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import { merchantResultsResponseSchema, type MerchantResultsResponse } from "./merchant-results-response.js";

export type MerchantResultsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: MerchantResultsResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const merchantResultsResponseItemSchema: Schema<MerchantResultsResponseItem> =
  s.object<MerchantResultsResponseItem>({
    data: s.optional(s.array(s.lazy(() => merchantResultsResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });
