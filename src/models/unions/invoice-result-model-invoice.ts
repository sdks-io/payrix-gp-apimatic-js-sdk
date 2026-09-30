import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { invoicesResponseSchema, type InvoicesResponse } from "../invoices-response.js";

/** The identifier of the Invoice that owns this invoiceResult resource. */
export type InvoiceResultModelInvoice = string | InvoicesResponse;

export const invoiceResultModelInvoiceSchema: Schema<InvoiceResultModelInvoice> =
  s.of<InvoiceResultModelInvoice>(s.union([s.string(), s.lazy(() => invoicesResponseSchema)]));
