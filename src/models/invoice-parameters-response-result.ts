import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoiceParametersResponseItemSchema,
  type InvoiceParametersResponseItem,
} from "./invoice-parameters-response-item.js";

export type InvoiceParametersResponseResult = {
  response?: InvoiceParametersResponseItem;
};

export const invoiceParametersResponseResultSchema: Schema<InvoiceParametersResponseResult> =
  s.object<InvoiceParametersResponseResult>({
    response: s.optional(s.lazy(() => invoiceParametersResponseItemSchema)),
  });
