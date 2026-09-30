import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import {
  disbursementEntriesResponseSchema,
  type DisbursementEntriesResponse,
} from "./disbursement-entries-response.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type DisbursementEntriesResponseItem = {
  /** The data object that the API returns for this request. */
  data?: DisbursementEntriesResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const disbursementEntriesResponseItemSchema: Schema<DisbursementEntriesResponseItem> =
  s.object<DisbursementEntriesResponseItem>({
    data: s.optional(s.array(s.lazy(() => disbursementEntriesResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });
