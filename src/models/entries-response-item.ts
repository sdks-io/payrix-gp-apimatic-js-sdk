import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { entriesResponseSchema, type EntriesResponse } from "./entries-response.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type EntriesResponseItem = {
  /** The data object that the API returns for this request. */
  data?: EntriesResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const entriesResponseItemSchema: Schema<EntriesResponseItem> = s.object<EntriesResponseItem>({
  data: s.optional(s.array(s.lazy(() => entriesResponseSchema))),
  details: s.optional(s.lazy(() => details2Schema)),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});
