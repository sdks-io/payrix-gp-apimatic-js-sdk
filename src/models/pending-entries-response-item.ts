import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "./pending-entries-response.js";

export type PendingEntriesResponseItem = {
  /** The data object that the API returns for this request. */
  data?: PendingEntriesResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const pendingEntriesResponseItemSchema: Schema<PendingEntriesResponseItem> =
  s.object<PendingEntriesResponseItem>({
    data: s.optional(s.array(s.lazy(() => pendingEntriesResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });
