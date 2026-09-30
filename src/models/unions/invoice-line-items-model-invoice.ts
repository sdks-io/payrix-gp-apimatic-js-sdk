import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { invoicesResponseSchema, type InvoicesResponse } from "../invoices-response.js";

/** The identifier of the Invoice that owns this InvoiceLineItem. */
export type InvoiceLineItemsModelInvoice = string | InvoicesResponse;

export const invoiceLineItemsModelInvoiceSchema: Schema<InvoiceLineItemsModelInvoice> =
  s.of<InvoiceLineItemsModelInvoice>(s.union([s.string(), s.lazy(() => invoicesResponseSchema)]));
