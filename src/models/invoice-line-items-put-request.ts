import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvoiceLineItemsPutRequest = {
  /** The identifier of the Invoice that owns this InvoiceLineItem. */
  invoice?: string;
  /** The identifier of the InvoiceItem associated with this InvoiceLineItem. */
  invoiceItem?: string;
  /** The quantity purchased for this line item, specified as an integer. */
  quantity?: number;
  /** The price for each item, this field is specified as an integer in cents. */
  price?: number;
  /** The discount for the line item, this field is specified as an integer in cents. */
  discount?: number;
};

export const invoiceLineItemsPutRequestSchema: Schema<InvoiceLineItemsPutRequest> =
  s.object<InvoiceLineItemsPutRequest>({
    invoice: s.optional(s.string()),
    invoiceItem: s.optional(s.string()),
    quantity: s.optional(s.number()),
    price: s.optional(s.number()),
    discount: s.optional(s.number()),
  });
