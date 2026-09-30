import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import {
  invoiceLineItemsResponseSchema,
  type InvoiceLineItemsResponse,
} from "./invoice-line-items-response.js";

export type InvoiceLineItemsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: InvoiceLineItemsResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const invoiceLineItemsResponseItemSchema: Schema<InvoiceLineItemsResponseItem> =
  s.object<InvoiceLineItemsResponseItem>({
    data: s.optional(s.array(s.lazy(() => invoiceLineItemsResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });
