import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceLineItemsResponseItemSchema,
  type InvoiceLineItemsResponseItem,
} from "./invoice-line-items-response-item.js";

export type InvoiceLineItemsResponseResult = {
  response?: InvoiceLineItemsResponseItem;
};

export const invoiceLineItemsResponseResultSchema: Schema<InvoiceLineItemsResponseResult> =
  s.object<InvoiceLineItemsResponseResult>({
    response: s.optional(s.lazy(() => invoiceLineItemsResponseItemSchema)),
  });
