import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import { invoicesResponseSchema, type InvoicesResponse } from "./invoices-response.js";

export type InvoicesResponseItem = {
  /** The data object that the API returns for this request. */
  data?: InvoicesResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const invoicesResponseItemSchema: Schema<InvoicesResponseItem> = s.object<InvoicesResponseItem>({
  data: s.optional(s.array(s.lazy(() => invoicesResponseSchema))),
  details: s.optional(s.lazy(() => details2Schema)),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});
