import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceResultsResponseItemSchema,
  type InvoiceResultsResponseItem,
} from "./invoice-results-response-item.js";

export type InvoiceResultsResponseResult = {
  response?: InvoiceResultsResponseItem;
};

export const invoiceResultsResponseResultSchema: Schema<InvoiceResultsResponseResult> =
  s.object<InvoiceResultsResponseResult>({
    response: s.optional(s.lazy(() => invoiceResultsResponseItemSchema)),
  });
