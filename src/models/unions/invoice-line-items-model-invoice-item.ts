import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { invoiceItemsResponseSchema, type InvoiceItemsResponse } from "../invoice-items-response.js";

/** The identifier of the InvoiceItem associated with this InvoiceLineItem. */
export type InvoiceLineItemsModelInvoiceItem = string | InvoiceItemsResponse;

export const invoiceLineItemsModelInvoiceItemSchema: Schema<InvoiceLineItemsModelInvoiceItem> =
  s.of<InvoiceLineItemsModelInvoiceItem>(s.union([s.string(), s.lazy(() => invoiceItemsResponseSchema)]));
