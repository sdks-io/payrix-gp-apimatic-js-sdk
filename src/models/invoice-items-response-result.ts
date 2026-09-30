import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceItemsResponseItemSchema,
  type InvoiceItemsResponseItem,
} from "./invoice-items-response-item.js";

export type InvoiceItemsResponseResult = {
  response?: InvoiceItemsResponseItem;
};

export const invoiceItemsResponseResultSchema: Schema<InvoiceItemsResponseResult> =
  s.object<InvoiceItemsResponseResult>({
    response: s.optional(s.lazy(() => invoiceItemsResponseItemSchema)),
  });
